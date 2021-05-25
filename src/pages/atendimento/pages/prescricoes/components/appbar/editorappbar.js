import { Divider, Grid, IconButton, Tooltip } from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ReplayIcon from '@material-ui/icons/Replay';
import SaveIcon from '@material-ui/icons/Save';
import React, { useCallback, useContext } from 'react';
import { AtendimentoContext } from '../../../..';
import { ClienteContext } from '../../../../../../App';
import InitialPrescricao from '../../../../component/initialprescricao';

// PRESCRICAO EDITOR Prescricao
const EditorAppBar = () => {

  const { clienteContext } = useContext(ClienteContext)
  const { step, setStep, prescricaoEdit, setPrescricaoEdit, page, setPage, medicamentoEdit, setMedicamentoEdit, lmeEdit, setLmeEdit, setPrescricaoOnDuty, setLmeOnDuty } = useContext(AtendimentoContext)

  const reiniciar = () => {
    let newpresc = InitialPrescricao(clienteContext.id)
    setPrescricaoEdit(newpresc)
    setMedicamentoEdit(null)
    setStep(11)
  }

  const previousStep = () => {
    setStep(prevState => prevState - 10)
  }

  const nextStep = () => {
    setStep(prevState => prevState + 10)
  }

  const linkLME = () => {
    setPrescricaoEdit(prescricaoEdit)
    setStep(51)
  }

  const fetchDataLME = useCallback(async () => {

    const res = await fetch(`http://localhost:4001/api.appmed/lmes/one/${prescricaoEdit.lmeId}`)
    const json = await res.json();
    // o findOne do Sequelize não tras os includes, por isso usou-se findAll
    let lmeupdate = json[0]
    let index = lmeupdate.prescricoes.findIndex((p) => p.id === prescricaoEdit.id);
    lmeupdate.prescricoes[index] = prescricaoEdit;
    setLmeEdit(lmeupdate)

  }, [prescricaoEdit, setLmeEdit])

  const sendFork = () => {
    setPrescricaoEdit(prescricaoEdit)
    if (prescricaoEdit.lmeId) {
      // setando a LMEEdit para mandar para o updatelme já setado
      // fiz isso, pois prescricoes a serem inclusas em lme existente
      // já manda para o lmeupdate com lmeEdit com a prescricão nova
      // adicionada (vide LMEForkSet - const handleTableRow)
      fetchDataLME()
      setPage('lmeupdate')
      setStep(21)
    } else {
      // envia para ForkLME para adicionar a uma LME
      setStep(61)
    }
  }

  const handleSubmit = event => {

    // submit do insert e update , da prescricoes e lme juntos

    let prespost = [`http://localhost:4001/api.appmed/prescricoes`, 'post', prescricaoEdit]
    let lmepost = [`http://localhost:4001/api.appmed/lmes`, 'post', lmeEdit]
    let presput = prescricaoEdit ? [`http://localhost:4001/api.appmed/prescricoes/${prescricaoEdit.id}`, 'put', prescricaoEdit] : []
    let lmeput = lmeEdit ? [`http://localhost:4001/api.appmed/lmes/${lmeEdit.id}`, 'put', lmeEdit] : []

    let submitvar

    switch (page) {
      case 'prescricaoinsert':
        submitvar = prespost
        break;
      case 'lmeinsert':
        submitvar = lmepost
        break;
      case 'prescricaoupdate':
        submitvar = presput
        break;
      case 'lmeupdate':
        submitvar = lmeput
        break;
      default:
        break;
    }

    event.preventDefault();
    fetch(submitvar[0], {
      method: submitvar[1],
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submitvar[2])
    }).then(data => {
      if (data.ok) {
        // setPage('prescricoesmain')
        // setStep(0)
        // let newpresc = InitialPrescricao(clienteContext.id)
        // setPrescricaoEdit(newpresc)
        // setMedicamentoEdit(null)

        setStep(0)
        setPrescricaoEdit(null)
        setPrescricaoOnDuty(null)
        setLmeEdit(null)
        setLmeOnDuty(null)
        setMedicamentoEdit(null)
        setPage('prescricoesmain')
      }
    })
  }

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   fetch(`http://localhost:4001/api.appmed/prescricoes`, {
  //     method: 'post',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(prescricaoEdit)
  //   }).then(data => {
  //     if (data.ok) {
  //       setPage('prescricoesmain')
  //       setStep(0)
  //       let newpresc = InitialPrescricao(clienteContext.id)
  //       setPrescricaoEdit(newpresc)
  //       setMedicamentoEdit(null)
  //     }
  //   })
  // }



  return (
    <Grid container direction="row" justify="flex-start" alignItems="center">
      <Tooltip title="Voltar">
        <IconButton>
          <ArrowUpwardIcon />
        </IconButton>
      </Tooltip>
      <Tooltip open={false} title="Reiniciar">
        <IconButton
          onClick={() => reiniciar()}
        >
          <ReplayIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Anterior">
        <span>
          <IconButton
            disabled={step === 11 || step === 32}
            onClick={previousStep}
          >
            <ArrowBackIosIcon />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip title="Próximo">
        <span>
          <IconButton
            disabled={step === 11 || step === 41 || step === 61}
            onClick={nextStep}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip title="Salvar">
        <span>
          <IconButton
            color='secondary'
            disabled={page === 'prescricaoinsert' ? (step === 41 ? false : true) : false}
            onClick={handleSubmit}
          >
            <SaveIcon />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip
        title={!prescricaoEdit?.id ? 'Vincular a uma LME' : 'Editar doses na LME'}
      >
        <span>
          <IconButton
            disabled={page === 'prescricaoinsert' ? (step === 41 ? !medicamentoEdit?.lme : true) : false}
            onClick={linkLME}
          >
            <ArrowForwardIcon />
            <AccountBalanceIcon />
            Editar doses na LME
          </IconButton>
        </span>
      </Tooltip>
      {step === 51 &&
        <div>
          <Tooltip title="Continuar editando LME">
            <span>
              <IconButton
                color='primary'
                onClick={sendFork}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </span>
          </Tooltip>
        </div>
      }
      <Divider />
    </Grid>
  )
}

export default EditorAppBar