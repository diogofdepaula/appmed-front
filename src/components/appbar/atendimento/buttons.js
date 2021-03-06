import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import DnsIcon from '@mui/icons-material/Dns';
import EditIcon from '@mui/icons-material/Edit';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import KeyboardAltIcon from '@mui/icons-material/KeyboardAlt';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PrintIcon from '@mui/icons-material/Print';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import SaveIcon from '@mui/icons-material/Save';
import StartIcon from '@mui/icons-material/Start';
import WebIcon from '@mui/icons-material/Web';
import { IconButton, Tooltip } from "@mui/material";
import { useContext, useState } from "react";
import { ClienteContext, NavigateContext, PrintContext } from '../../../App';
import { AtendimentoContext, AtendimentoNavigateContext } from "../../../pages/atendimento";
import PrintDialog from '../../../pages/print/component/printdialog';
import { NovoRelatorio } from '../../../providers/atendimento';
import { LmeComRelatorio } from '../../../utils/inquiries';

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
    const { setArticleAtendimentoMain, setStep } = useContext(AtendimentoNavigateContext)
    const { printReset } = useContext(PrintContext)

    const handleClick = () => {
        setPrescricaoEdit(null)
        setMedicamentoEdit(null)
        setPrescricaoOnDuty(null)
        setLmeEdit(null)
        setLmeOnDuty(null)
        setStep(111)
        setArticleAtendimentoMain()
        printReset()
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
    }

    return (
        <>
            <DefaultButton
                title={'Requsi????es'}
                click={handleClick}
                icon={<KeyboardAltIcon />}
            />
        </>
    )
}

export const AtestadosBtn = () => {

    const handleClick = () => {
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

    const { clienteContext } = useContext(ClienteContext)
    const { setArticlePrint } = useContext(AtendimentoNavigateContext)
    const { setLmes, printReset } = useContext(PrintContext)

    const handleClick = () => {
        printReset()
        const lmes = clienteContext.lmes.map(l => {
            let n = l.prescricoes.map(p =>
                clienteContext.prescricoes.find(m => m.id === p.id)
            )
            return { ...l, prescricoes: n }
        })
        // isso adiciona os includes nas lmes que vem o ClienteCOntext, os quais n??o tem incluides
        // n??o quis mudar no BD, pois ele faria uma busca duplicada dos includes
        setLmes(lmes)
        setArticlePrint()
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
    const { setArticlePrescricoesMain, setStep } = useContext(AtendimentoNavigateContext)

    const handleClick = () => {
        setNovaPrescricao(clienteContext.id)
        setMedicamentoEdit(null)
        setPrescricaoOnDuty(null)
        setLmeEdit(null)
        setLmeOnDuty(null)
        setStep(111)
        setArticlePrescricoesMain()
    }

    return (
        <>
            <DefaultButton
                title={'Nova Prescri????o'}
                click={handleClick}
                icon={<PostAddIcon />}
            />
        </>
    )
}

export const PrescricaoEditarBtn = () => {

    // n??o quis unir com o bot??o do LmeEditarBtn para cada bot??o ficar com usa l??gica

    const { prescricaoOnDuty, setPrescricaoEdit, setPrescricaoOnDuty } = useContext(AtendimentoContext)
    const { setArticlePrescricoesMain, setStep } = useContext(AtendimentoNavigateContext)

    if (!prescricaoOnDuty) return <></>

    const handleClick = () => {
        setPrescricaoEdit(prescricaoOnDuty)
        setPrescricaoOnDuty(null)
        setStep(121)
        setArticlePrescricoesMain()
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

    const { prescricaoOnDuty } = useContext(AtendimentoContext)
    const { setArticlePrescricaoDelete } = useContext(AtendimentoNavigateContext)

    if (!prescricaoOnDuty) return <></>

    const handleClick = () => {
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

    const { prescricaoEdit, lmeEdit } = useContext(AtendimentoContext)
    const { step, setStepPrevious } = useContext(AtendimentoNavigateContext)

    if (!prescricaoEdit && !lmeEdit) return <></>

    const handleClick = () => {
        setStepPrevious()
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

    const { prescricaoEdit, lmeEdit } = useContext(AtendimentoContext)
    const { step, setStepNext } = useContext(AtendimentoNavigateContext)

    if (!prescricaoEdit && !lmeEdit) return <></>

    const handleClick = () => {
        setStepNext()
    }

    let disabled = step === 111 || step === 141 || step === 161 || step === 381

    return (
        <>
            <DefaultButton
                title={'Pr??ximo'}
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

    if (!prescricaoEdit && !lmeEdit) return <></>

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

    if (!medicamentoEdit?.lme) return <></>
    if (step !== 141) return <></>

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
    const { step, setStep } = useContext(AtendimentoNavigateContext)

    if (step !== 151) return <></>

    const handleClick = () => {

        if (prescricaoEdit.lmeId) {
            setLmeEdit(
                clienteContext.lmes.filter(l => l.id === prescricaoEdit.lmeId)[0]
            )
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

export const SendToRelatorio = () => {

    const { lmeEdit } = useContext(AtendimentoContext)
    const { step, setStepNext } = useContext(AtendimentoNavigateContext)

    if (!(LmeComRelatorio(lmeEdit) && step === 321)) return <></>

    const handleClick = () => {
        setStepNext()
    }

    return (
        <>
            <DefaultButton
                title={'Editar Relat??rio'}
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


export const LmeEditarBtn = () => {

    const { lmeOnDuty, setLmeEdit, setLmeOnDuty } = useContext(AtendimentoContext)
    const { setArticlePrescricoesMain, setStep } = useContext(AtendimentoNavigateContext)

    if (!lmeOnDuty) return <></>

    const handleClick = () => {
        setLmeEdit(lmeOnDuty)
        setLmeOnDuty(null)
        setStep(321)
        setArticlePrescricoesMain()
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

    if (!lmeOnDuty) return <></>

    const handleClick = () => {
        setArticleLMEDelete()
    }

    return (
        <>
            <DefaultButton
                title={'Parar'}
                click={handleClick}
                icon={<CancelPresentationIcon />}
            />
        </>
    )
}

export const PrintBtn = () => {

    const { print } = useContext(AtendimentoNavigateContext)
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    if (!print) return <></>

    if (open) return <PrintDialog open={open} handleClose={handleClose} />

    return (
        <>
            <DefaultButton
                title={'Enviar impress??o'}
                click={handleClick}
                icon={<FlashOnIcon />}
            />
        </>
    )
}

export const AddRelatorio = () => {

    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    if (!((LmeComRelatorio(lmeEdit)) && !lmeEdit?.relatorio)) return <></>

    const handleClick = () => {
        setLmeEdit({
            ...lmeEdit,
            relatorio: NovoRelatorio(lmeEdit.id)
        })
    }

    return (
        <>
            <DefaultButton
                title={'Adicionar Relatorio'}
                click={handleClick}
                icon={<ReportProblemIcon sx={{ color: 'red' }} />}
            />
        </>
    )
}
