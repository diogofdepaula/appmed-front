import { Divider, Grid, IconButton, Tooltip } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import BallotIcon from '@material-ui/icons/Ballot';
import ReplayIcon from '@material-ui/icons/Replay';
import SaveIcon from '@material-ui/icons/Save';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../../..';
import { ClienteContext } from '../../../../../../App';
import InitialPrescricao from '../../../../component/initialprescricao';

// PRESCRICAO EDITOR LME
const EditorAppBar = () => {

  const { clienteContext } = useContext(ClienteContext)
  const { step, setStep, prescricaoEdit, lmeEdit, medicamentoEdit, setMedicamentoEdit, setLmeEdit, setPrescricaoEdit, setPrescricaoOnDuty, setLmeOnDuty, page, setPage } = useContext(AtendimentoContext)

  const reiniciar = () => {
    let newpresc = InitialPrescricao(clienteContext.id)
    setPage('prescricaoinsert')
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

  const linkRelatorio = () => {
    setStep(31)
  }

  const handleSubmit = event => {

    // submit do insert e update , da prescricoes e lme juntos

    let prespost = [`http://localhost:4001/api.appmed/prescricoes`, 'post', prescricaoEdit]
    let lmepost = [`http://localhost:4001/api.appmed/lmes`, 'post', lmeEdit]
    let presput = [`http://localhost:4001/api.appmed/prescricoes/${prescricaoEdit.id}`, 'put', prescricaoEdit]
    let lmeput = [`http://localhost:4001/api.appmed/lmes/${lmeEdit.id}`, 'put', lmeEdit]

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

    //event.preventDefault();
    fetch(submitvar[0], {
      method: submitvar[1],
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submitvar[2])
    }).then(data => {
      if (data.ok) {
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
            disabled={step === 11}
            onClick={previousStep}
          >
            <ArrowBackIosIcon />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip title="Próximo">
        <span>
          <IconButton
            disabled={step === 81}
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
            //  disabled={page === 'prescricaoinsert' ? (step === 41 ? false : true) : false}
            onClick={handleSubmit}
          >
            <SaveIcon />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip
        title='Editar Relatório'
      >
        <span>
          <IconButton
            disabled={medicamentoEdit?.classe !== 'MMCDB' || step === 81}
            onClick={linkRelatorio}
          >
            <ArrowForwardIcon />
            <BallotIcon />
          </IconButton>
        </span>
      </Tooltip>
      {step > 21  &&
        <div>
          <Tooltip title="Próximo">
            <span>
              <IconButton
                color='primary'
                disabled={(page === 'lmeinsert' && (step === 11 || step === 21 || step === 81)) || (page === 'lmeupdate' && step === 81)}
                onClick={nextStep}
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