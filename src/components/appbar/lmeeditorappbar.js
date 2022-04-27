import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BallotIcon from '@mui/icons-material/Ballot';
import ReplayIcon from '@mui/icons-material/Replay';
import SaveIcon from '@mui/icons-material/Save';
import { IconButton, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { ClienteContext } from '../../App';
import { AtendimentoContext, AtendimentoNavigateContext } from '../../pages/atendimento';
import InitialPrescricao from '../../pages/atendimento/component/initialprescricao';

const LmeReiniciarBtnEdito = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { setMedicamentoEdit, setPrescricaoEdit } = useContext(AtendimentoContext)
    const { setStep, setArticlePrescricoesMain } = useContext(AtendimentoNavigateContext)


    const reiniciar = () => {
        let newpresc = InitialPrescricao(clienteContext.id)
        setArticlePrescricoesMain()
        setPrescricaoEdit(newpresc)
        setMedicamentoEdit(null)
        setStep(311)
    }

    return (
        <>
            <Tooltip open={false} title="Reiniciar">
                <IconButton
                    onClick={() => reiniciar()} size="large">
                    <ReplayIcon />
                </IconButton>
            </Tooltip>
        </>
    )
}

const LmeAnteriorBtnEdito = () => {

    const { step, setStep } = useContext(AtendimentoNavigateContext)

    const previousStep = () => {
        setStep(prevState => prevState - 10)
    }

    return (
        <>
            <Tooltip title="Anterior">
                <IconButton
                    component="span"
                    disabled={step === 311}
                    onClick={previousStep} size="large">
                    <ArrowBackIosIcon />
                </IconButton>
            </Tooltip>
        </>
    )
}

const LmeProximoBtnEdito = () => {

    const { step, setStep } = useContext(AtendimentoNavigateContext)

    const nextStep = () => {
        setStep(prevState => prevState + 10)
    }

    return (
        <>
            <Tooltip title="Anterior">
                <IconButton
                    component="span"
                    disabled={step === 381}
                    // disabled={(page === 'lmeinsert' && (step === 311 || step === 321 || step === 381)) || (page === 'lmeupdate' && step === 381)}
                    onClick={nextStep}
                    size="large"
                >
                    <ArrowBackIosIcon />
                </IconButton>
            </Tooltip>
        </>
    )
}

const LmeSalvarBtnEdito = () => {

    const { prescricaoEdit, lmeEdit, setMedicamentoEdit, setLmeEdit, setPrescricaoEdit, setPrescricaoOnDuty, setLmeOnDuty } = useContext(AtendimentoContext)
    const { page, setStep, setArticleAtendimentoMain } = useContext(AtendimentoNavigateContext)

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
        <>
            <Tooltip title="Salvar">
                <IconButton
                    component="span"
                    color='secondary'
                    onClick={handleSubmit}
                    size="large">
                    <SaveIcon />
                </IconButton>
            </Tooltip>
        </>
    )
}

const LmeLinkRelatorioBtn = () => {

    const { setStep } = useContext(AtendimentoNavigateContext)

    const linkRelatorio = () => {
        setStep(331)
    }

    return (
        <>
            <Tooltip
                title='Editar Relatório'
            >
                <IconButton
                    component="span"
                    onClick={linkRelatorio}
                    size="large"
                >
                    <ArrowForwardIcon />
                    <BallotIcon />
                </IconButton>
            </Tooltip>
        </>
    )
}

// PRESCRICAO EDITOR LME
const LmeEditorAppBar = () => {

    return (
        <Box
            sx={{
                display:'flex',
            }}
        >
            <LmeReiniciarBtnEdito />
            <LmeAnteriorBtnEdito />
            <LmeProximoBtnEdito />
            <LmeSalvarBtnEdito />
            <LmeLinkRelatorioBtn />
        </Box>
    )
}

export default LmeEditorAppBar