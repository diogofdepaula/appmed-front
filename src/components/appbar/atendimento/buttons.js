import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BallotIcon from '@mui/icons-material/Ballot';
import DnsIcon from '@mui/icons-material/Dns';
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import KeyboardAltIcon from '@mui/icons-material/KeyboardAlt';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PrintIcon from '@mui/icons-material/Print';
import ReplayIcon from '@mui/icons-material/Replay';
import SaveIcon from '@mui/icons-material/Save';
import StartIcon from '@mui/icons-material/Start';
import WebIcon from '@mui/icons-material/Web';
import { IconButton, Tooltip } from "@mui/material";
import { useContext } from "react";
import { ClienteContext, NavigateContext } from '../../../App';
import { AtendimentoContext, AtendimentoNavigateContext } from "../../../pages/atendimento";
import InitialPrescricao from '../../../pages/atendimento/component/initialprescricao';

const DefaultButton = ({ title, click, icon, disabled, color }) => {

    return (
        <>
            <Tooltip title={title}>
                <IconButton
                    component="span"
                    disabled={disabled}
                    onClick={click}
                    color={color}
                >
                    {icon}
                </IconButton>
            </Tooltip>
        </>
    )
}

export const PrincipalBtn = () => {

    const { setPrescricaoOnDuty, setLmeOnDuty, setPrescricaoEdit, setMedicamentoEdit, setLmeEdit } = useContext(AtendimentoContext)
    const { setArticleAtendimentoMain } = useContext(AtendimentoNavigateContext)

    const handleClick = () => {
        setPrescricaoEdit(null)
        setMedicamentoEdit(null)
        setPrescricaoOnDuty(null)
        setLmeEdit(null)
        setLmeOnDuty(null)
        setArticleAtendimentoMain()
    }

    return (
        <>
            <DefaultButton
                title={'Principal'}
                click={handleClick}
                icon={<DnsIcon />}
            />
        </>
    )
}

export const RequisicoesBtn = () => {

    const handleClick = () => {
        console.log('deixei para fazer depois');
    }

    return (
        <>
            <DefaultButton
                title={'Requsições'}
                click={handleClick}
                icon={<KeyboardAltIcon />}
            />
        </>
    )
}

export const AtestadosBtn = () => {

    const handleClick = () => {
        console.log('deixei para fazer depois');
    }

    return (
        <>
            <DefaultButton
                title={'Atestados'}
                click={handleClick}
                icon={<WebIcon />}
            />
        </>
    )
}

export const ImprimirNavBtn = () => {

    const { setPagePrint } = useContext(AtendimentoNavigateContext)

    const handleClick = () => {
        setPagePrint()
    }

    return (
        <>
            <DefaultButton
                title={'Imprimir'}
                click={handleClick}
                icon={<PrintIcon />}
            />
        </>
    )
}

export const NovaPrescricaoBtn = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { setNovaPrescricao, setMedicamentoEdit, setPrescricaoOnDuty, setLmeEdit, setLmeOnDuty } = useContext(AtendimentoContext)
    const { setArticlePrescricaoInsert, setStep } = useContext(AtendimentoNavigateContext)

    const handleClick = () => {
        setNovaPrescricao(clienteContext.id)
        setMedicamentoEdit(null)
        setPrescricaoOnDuty(null)
        setLmeEdit(null)
        setLmeOnDuty(null)
        setStep(111)
        setArticlePrescricaoInsert()
    }

    return (
        <>
            <DefaultButton
                title={'Nova Prescrição'}
                click={handleClick}
                icon={<PostAddIcon />}
            />
        </>
    )
}

export const PrescricaoEditarBtn = () => {

    // não quis unir com o botão do LmeEditarBtn para cada botão ficar com usa lógica

    const { prescricaoOnDuty, setPrescricaoEdit, setPrescricaoOnDuty } = useContext(AtendimentoContext)
    const { setArticlePrescricaoUpdate, setStep } = useContext(AtendimentoNavigateContext)

    if (!prescricaoOnDuty) return <div />

    const handleClick = () => {
        setPrescricaoEdit(prescricaoOnDuty)
        setPrescricaoOnDuty(null)
        setStep(121)
        setArticlePrescricaoUpdate()
    }

    return (
        <>
            <DefaultButton
                title={'Editar'}
                click={handleClick}
                icon={<EditIcon />}
            />
        </>
    )
}

export const PrescricaoPararBtn = () => {

    const { prescricaoOnDuty, setPrescricaoEdit } = useContext(AtendimentoContext)
    const { setArticlePrescricaoDelete } = useContext(AtendimentoNavigateContext)

    if (!prescricaoOnDuty) return <div />

    const handleClick = () => {
        setPrescricaoEdit(prescricaoOnDuty)
        setArticlePrescricaoDelete()
    }

    return (
        <>
            <DefaultButton
                title={'Parar'}
                click={handleClick}
                icon={<HighlightOffIcon />}
            />
        </>
    )
}

export const AnteriorBtn = () => {

    const { prescricaoEdit } = useContext(AtendimentoContext)
    const { step, setStep } = useContext(AtendimentoNavigateContext)

    if (!prescricaoEdit) return <div />

    const handleClick = () => {
        setStep(prevState => prevState - 10)
    }

    let disabled = step === 111 || step === 132 || step === 311

    return (
        <>
            <DefaultButton
                title={'Anterior'}
                disabled={disabled}
                click={handleClick}
                icon={<ArrowBackIosIcon />}
            />
        </>
    )
}

export const ProximoBtn = () => {

    const { prescricaoEdit } = useContext(AtendimentoContext)
    const { step, setStep } = useContext(AtendimentoNavigateContext)

    if (!prescricaoEdit) return <div />

    const handleClick = () => {
        setStep(prevState => prevState + 10)
    }

    let disabled = step === 111 || step === 141 || step === 161 || step === 381

    return (
        <>
            <DefaultButton
                title={'Próximo'}
                disabled={disabled}
                click={handleClick}
                icon={<ArrowForwardIosIcon />}
            />
        </>
    )
}

export const PrescricaoSalvarBtn = () => {

    const { clienteContext, setClienteContext } = useContext(ClienteContext)
    const { prescricaoEdit, setPrescricaoEdit, setMedicamentoEdit, lmeEdit, setLmeEdit, setPrescricaoOnDuty, setLmeOnDuty } = useContext(AtendimentoContext)
    const { step, setStep, setArticleAtendimentoMain } = useContext(AtendimentoNavigateContext)
    const { setPageAtendimento } = useContext(NavigateContext)

    if (!prescricaoEdit) return <div />

    const fetchClienteIncludes = async () => {
        const res = await fetch(process.env.REACT_APP_API_URL + '/clientes/' + clienteContext.id)
        const json = await res.json()
        if (res.ok) {
            setClienteContext(json)
        }
    }

    const finalizar = () => {
        setStep(0)
        setPrescricaoEdit(null)
        setPrescricaoOnDuty(null)
        setLmeEdit(null)
        setLmeOnDuty(null)
        setMedicamentoEdit(null)
        setPageAtendimento()
        setArticleAtendimentoMain()
    }

    const PrescricaoInsert = async () => {
        await fetch(process.env.REACT_APP_API_URL + `/prescricoes`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(prescricaoEdit)
        }).then(data => {
            if (data.ok) {
                fetchClienteIncludes()
            }
        }).then(() => finalizar())
    }

    const LmeInsert = async () => {
        await fetch(process.env.REACT_APP_API_URL + `/lmes`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(lmeEdit)
        }).then(data => {
            if (data.ok) {
                fetchClienteIncludes()
            }
        }).then(() => finalizar())
    }

    const PrescricaoUpdate = async () => {
        await fetch(process.env.REACT_APP_API_URL + `/prescricoes/${prescricaoEdit.id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(prescricaoEdit)
        }).then(data => {
            if (data.ok) {
                fetchClienteIncludes()
            }
        }).then(() => finalizar())
    }

    const LmeUpdate = async () => {
        await fetch(process.env.REACT_APP_API_URL + `/lmes/${lmeEdit.id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(lmeEdit)
        }).then(data => {
            if (data.ok) {
                fetchClienteIncludes()
            }
        }).then(() => finalizar())
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (lmeEdit && lmeEdit?.id === undefined) return LmeInsert()
        if (lmeEdit && lmeEdit?.id > 0) return LmeUpdate()
        if (prescricaoEdit && prescricaoEdit?.id === undefined) return PrescricaoInsert()
        if (prescricaoEdit && prescricaoEdit?.id > 0) return PrescricaoUpdate()
    }

    let disabled = step === 111

    return (
        <>
            <DefaultButton
                title={'Salvar'}
                disabled={disabled}
                click={handleSubmit}
                icon={<SaveIcon />}
            />
        </>
    )
}

export const PrescricaoToLmeBtn = () => {

    const { prescricaoEdit, setPrescricaoEdit, medicamentoEdit } = useContext(AtendimentoContext)
    const { step, setStep } = useContext(AtendimentoNavigateContext)

    if (!medicamentoEdit?.lme) return <div />
    if (step !== 141) return <div />

    const handleClick = () => {
        setPrescricaoEdit(prescricaoEdit)
        setStep(151)
    }

    const title = prescricaoEdit?.id === undefined ? 'Vincular a uma LME' : 'Editar doses na LME'

    return (
        <>
            <DefaultButton
                title={title}
                click={handleClick}
                icon={
                    <>
                        <StartIcon />
                        <MenuBookIcon />
                    </>
                }
            />
        </>
    )
}

export const PrescricaoSendForkBtn = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { prescricaoEdit, setLmeEdit } = useContext(AtendimentoContext)
    const { setArticleLMEUpdate, step, setStep } = useContext(AtendimentoNavigateContext)

    if (step !== 151) return <div />

    const handleClick = () => {

        if (prescricaoEdit.lmeId) {
            setLmeEdit(
                clienteContext.lmes.filter(l => l.id === prescricaoEdit.lmeId)[0]
            )
            setArticleLMEUpdate()
            setStep(321)
        } else {
            setStep(161)
        }
    }

    return (
        <>
            <DefaultButton
                title={'Escolher a LME'}
                click={handleClick}
                icon={
                    <>
                        <StartIcon />
                    </>
                }
            />
        </>
    )
}

export const LmeEditarBtn = () => {


    const { lmeOnDuty, setLmeEdit } = useContext(AtendimentoContext)
    const { setArticleLMEUpdate, setStep } = useContext(AtendimentoNavigateContext)

    if (!lmeOnDuty) return <div />

    const handleClick = () => {
        setLmeEdit(lmeOnDuty)
        setStep(321)
        setArticleLMEUpdate()
    }

    return (
        <>
            <DefaultButton
                title={'Editar'}
                click={handleClick}
                icon={<EditIcon />}
            />
        </>
    )
}

export const LmePararBtn = () => {

    const { lmeOnDuty } = useContext(AtendimentoContext)
    const { setArticleLMEDelete } = useContext(AtendimentoNavigateContext)


    const handleParar = () => {
        setArticleLMEDelete()
    }

    return (
        <>
            <Tooltip title="Parar">
                <IconButton
                    component="span"
                    disabled={!lmeOnDuty}
                    onClick={handleParar}
                    size="large"
                >
                    <HighlightOffIcon />
                </IconButton>
            </Tooltip>
        </>
    )
}



export const LmeReiniciarBtnEdito = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { setMedicamentoEdit, setPrescricaoEdit } = useContext(AtendimentoContext)
    const { setStep, setArticlePrescricaoInsert } = useContext(AtendimentoNavigateContext)


    const reiniciar = () => {
        let newpresc = InitialPrescricao(clienteContext.id)
        setArticlePrescricaoInsert()
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

// export const LmeAnteriorBtnEdito = () => {

//     const { step, setStep } = useContext(AtendimentoNavigateContext)

//     const previousStep = () => {
//         setStep(prevState => prevState - 10)
//     }

//     return (
//         <>
//             <Tooltip title="Anterior">
//                 <IconButton
//                     component="span"
//                     disabled={step === 311}
//                     onClick={previousStep} size="large">
//                     <ArrowBackIosIcon />
//                 </IconButton>
//             </Tooltip>
//         </>
//     )
// }

// export const LmeProximoBtnEdito = () => {

//     const { step, setStep } = useContext(AtendimentoNavigateContext)

//     const nextStep = () => {
//         setStep(prevState => prevState + 10)
//     }

//     return (
//         <>
//             <Tooltip title="Anterior">
//                 <IconButton
//                     component="span"
//                     disabled={step === 381}
//                     // disabled={(page === 'lmeinsert' && (step === 311 || step === 321 || step === 381)) || (page === 'lmeupdate' && step === 381)}
//                     onClick={nextStep}
//                     size="large"
//                 >
//                     <ArrowBackIosIcon />
//                 </IconButton>
//             </Tooltip>
//         </>
//     )
// }

export const LmeSalvarBtnEdito = () => {

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

export const LmeLinkRelatorioBtn = () => {

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