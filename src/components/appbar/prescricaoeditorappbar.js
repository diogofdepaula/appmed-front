import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ReplayIcon from '@mui/icons-material/Replay';
import SaveIcon from '@mui/icons-material/Save';
import { IconButton, Tooltip } from '@mui/material';
import React, { useCallback, useContext } from 'react';
import { ClienteContext } from '../../App';
import { AtendimentoContext, AtendimentoNavigateContext } from '../../pages/atendimento';
import InitialPrescricao from '../../pages/atendimento/component/initialprescricao';

const ReiniciarBtn = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { setPrescricaoEdit, setMedicamentoEdit } = useContext(AtendimentoContext)
    const { setStep } = useContext(AtendimentoNavigateContext)


    const reiniciar = () => {
        let newpresc = InitialPrescricao(clienteContext.id)
        setPrescricaoEdit(newpresc)
        setMedicamentoEdit(null)
        setStep(11)
    }

    return (
        <>
            <Tooltip title="Reiniciar">
                <IconButton
                    component="span"
                    onClick={() => reiniciar()}
                    size="large"
                >
                    <ReplayIcon />
                </IconButton>
            </Tooltip>
        </>
    )
}


const AnteriorBtn = () => {

    const { step, setStep } = useContext(AtendimentoNavigateContext)

    const previousStep = () => {
        setStep(prevState => prevState - 10)
    }

    return (
        <>
            <Tooltip title="Anterior">
                <IconButton
                    component="span"
                    disabled={step === 11 || step === 32}
                    onClick={previousStep}
                    size="large"
                >
                    <ArrowBackIosIcon />
                </IconButton>
            </Tooltip>
        </>
    )
}

const ProximoBtn = () => {

    const { step, setStep } = useContext(AtendimentoNavigateContext)

    const nextStep = () => {
        setStep(prevState => prevState + 10)
    }

    return (
        <>
            <Tooltip title="Próximo">
                <IconButton
                    component="span"
                    disabled={step === 11 || step === 41 || step === 61}
                    onClick={nextStep}
                    size="large"
                >
                    <ArrowForwardIosIcon />
                </IconButton>
            </Tooltip>
        </>
    )
}

const SalvarBtn = () => {

    const { prescricaoEdit, setPrescricaoEdit, setMedicamentoEdit, lmeEdit, setLmeEdit, setPrescricaoOnDuty, setLmeOnDuty } = useContext(AtendimentoContext)
    const { page, setArticleAtendimentoMain, step, setStep } = useContext(AtendimentoNavigateContext)

    const finalizar = () => {
        setStep(0)
        setPrescricaoEdit(null)
        setPrescricaoOnDuty(null)
        setLmeEdit(null)
        setLmeOnDuty(null)
        setMedicamentoEdit(null)
        setArticleAtendimentoMain()
    }

    const PrescricaoInsert = () => {
        fetch(process.env.REACT_APP_API_URL + `/prescricoes`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(prescricaoEdit)
        }).then(data => {
            if (data.ok) {
                finalizar()
            }
        })
    }

    const LmeInsert = () => {
        fetch(process.env.REACT_APP_API_URL + `/lmes`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(lmeEdit)
        }).then(data => {
            if (data.ok) {
                finalizar()
            }
        })
    }

    const PrescricaoUpdate = () => {
        fetch(process.env.REACT_APP_API_URL + `/prescricoes/${prescricaoEdit.id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(prescricaoEdit)
        }).then(data => {
            if (data.ok) {
                finalizar()
            }
        })
    }

    const LmeUpdate = () => {
        fetch(process.env.REACT_APP_API_URL + `/lmes/${lmeEdit.id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(lmeEdit)
        }).then(data => {
            if (data.ok) {
                finalizar()
            }
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (lmeEdit.id > 0) return LmeUpdate()
        if (!lmeEdit.id) return LmeInsert()
        if (prescricaoEdit.id > 0) return PrescricaoUpdate()
        if (!prescricaoEdit.id) return PrescricaoInsert()
    }

    const disable = page === 'prescricaoinsert' ? (step === 41 ? false : true) : false

    return (
        <>
            <Tooltip title="Salvar">
                <IconButton
                    component="span"
                    disabled={disable}
                    onClick={() => handleSubmit()}
                    size="large"
                >
                    <SaveIcon />
                </IconButton>
            </Tooltip>
        </>
    )
}

const ToLmeBtn = () => {

    const { prescricaoEdit, setPrescricaoEdit, medicamentoEdit } = useContext(AtendimentoContext)
    const { page, step, setStep } = useContext(AtendimentoNavigateContext)

    const linkLME = () => {
        setPrescricaoEdit(prescricaoEdit)
        setStep(51)
    }

    return (
        <>
            <Tooltip
                title={!prescricaoEdit?.id ? 'Vincular a uma LME' : 'Editar doses na LME'}
            >
                <IconButton
                    component="span"
                    disabled={page === 'prescricaoinsert' ? (step === 41 ? !medicamentoEdit?.lme : true) : false}
                    onClick={linkLME}
                    size="large"
                >
                    <ArrowForwardIcon />
                    <MenuBookIcon />
                </IconButton>
            </Tooltip>
        </>
    )
}

const SendForkBtn = () => {

    const { prescricaoEdit, setPrescricaoEdit, setLmeEdit } = useContext(AtendimentoContext)
    const { setArticleLMEUpdate, step, setStep } = useContext(AtendimentoNavigateContext)

    const fetchDataLME = useCallback(async () => {

        const res = await fetch(process.env.REACT_APP_API_URL + `/lmes/one/${prescricaoEdit.lmeId}`)
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
            setArticleLMEUpdate()
            setStep(21)
        } else {
            // envia para ForkLME para adicionar a uma LME
            setStep(61)
        }
    }

    return (
        <>
            {step === 51 &&
                <Tooltip title="Continuar editando LME">
                    <IconButton
                        component="span"
                        color='primary'
                        onClick={sendFork}
                        size="large"
                    >
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Tooltip>
            }
        </>
    )
}



const PrecricoesEditorAppBar = () => {


    return (
        <>
            <ReiniciarBtn />
            <AnteriorBtn />
            <ProximoBtn />
            <SalvarBtn />
            <ToLmeBtn />
            <SendForkBtn />
        </>
    )
}

export default PrecricoesEditorAppBar