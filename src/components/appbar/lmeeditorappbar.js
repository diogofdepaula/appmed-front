import { Divider, Grid, IconButton, Tooltip } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import BallotIcon from '@mui/icons-material/Ballot';
import ReplayIcon from '@mui/icons-material/Replay';
import SaveIcon from '@mui/icons-material/Save';
import React, { useContext } from 'react';
import { AtendimentoContext, AtendimentoNavigateContext } from '../../pages/atendimento';
import { ClienteContext } from '../../App';
import InitialPrescricao from '../../pages/atendimento/component/initialprescricao';

// PRESCRICAO EDITOR LME
const LmeEditorAppBar = () => {

  const { clienteContext } = useContext(ClienteContext)
  const { prescricaoEdit, lmeEdit, setMedicamentoEdit, setLmeEdit, setPrescricaoEdit, setPrescricaoOnDuty, setLmeOnDuty } = useContext(AtendimentoContext)
  const { page, step, setStep, setArticlePrescricaoInsert, setArticleAtendimentoMain } = useContext(AtendimentoNavigateContext)


  const reiniciar = () => {
    let newpresc = InitialPrescricao(clienteContext.id)
    setArticlePrescricaoInsert()
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

    let prespost = [process.env.REACT_APP_API_URL + `/prescricoes`, 'post', prescricaoEdit]
    let lmepost = [process.env.REACT_APP_API_URL + `/lmes`, 'post', lmeEdit]
    let presput = [process.env.REACT_APP_API_URL + `/prescricoes/${prescricaoEdit.id}`, 'put', prescricaoEdit]
    let lmeput = [process.env.REACT_APP_API_URL + `/lmes/${lmeEdit.id}`, 'put', lmeEdit]

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
        setArticleAtendimentoMain()
      }
    })
  }

  return (
    <Grid container direction="row" justifyContent="flex-start" alignItems="center">
      <Tooltip title="Voltar">
        <IconButton size="large">
          <ArrowUpwardIcon />
        </IconButton>
      </Tooltip>
      <Tooltip open={false} title="Reiniciar">
        <IconButton onClick={() => reiniciar()} size="large">
          <ReplayIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Anterior">
        <span>
          <IconButton disabled={step === 11} onClick={previousStep} size="large">
            <ArrowBackIosIcon />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip title="Próximo">
        <span>
          <IconButton disabled={step === 81} onClick={nextStep} size="large">
            <ArrowForwardIosIcon />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip title="Salvar">
        <span>
          <IconButton
            color='secondary'
            onClick={handleSubmit}
            size="large">
            <SaveIcon />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip
        title='Editar Relatório'
      >
        <span>
          <IconButton
            onClick={linkRelatorio}
            size="large">
            <ArrowForwardIcon />
            <BallotIcon />
          </IconButton>
        </span>
      </Tooltip>
      {step > 21 &&
        <div>
          <Tooltip title="Próximo">
            <span>
              <IconButton
                color='primary'
                disabled={(page === 'lmeinsert' && (step === 11 || step === 21 || step === 81)) || (page === 'lmeupdate' && step === 81)}
                onClick={nextStep}
                size="large">
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

export default LmeEditorAppBar