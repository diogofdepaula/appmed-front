import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import DnsIcon from '@mui/icons-material/Dns';
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import KeyboardAltIcon from '@mui/icons-material/KeyboardAlt';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PrintIcon from '@mui/icons-material/Print';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import SaveIcon from '@mui/icons-material/Save';
import StartIcon from '@mui/icons-material/Start';
import { IconButton, Tooltip } from "@mui/material";
import { useContext } from "react";
import { ClienteContext, NavigateContext, PrintContext } from '../../../App';
import { AtendimentoContext, AtendimentoNavigateContext } from "../../../pages/atendimento";
import { NovoRelatorio } from '../../../providers/atendimento';
import { LmeComRelatorio } from '../../../utils/inquiries';

export const DefaultButton = ({ title, click, icon, disabled, color }) => {

    return (
        <>
            <Tooltip title={title}>
                <IconButton
                    component="span"
                    disabled={disabled}
                    onClick={click}
                    color={color}
                    size="large"
                >
                    {icon}
                </IconButton>
            </Tooltip>
        </>
    )
}

export const PrincipalBtn = () => {

    const { setPrescricaoOnDuty, setPrescricaoEdit, setMedicamentoEdit, setLmeEdit, setAtestadoEdit } = useContext(AtendimentoContext)
    const { setArticleAtendimentoMain, setStep } = useContext(AtendimentoNavigateContext)
    const { printReset } = useContext(PrintContext)

    const handleClick = () => {
        setPrescricaoEdit(null)
        setMedicamentoEdit(null)
        setPrescricaoOnDuty(null) // já anula a LME e AtestadoOnDuty
        setLmeEdit(null)
        setAtestadoEdit(null)
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

    const { setArticleRequisicao } = useContext(AtendimentoNavigateContext)
    const { printReset } = useContext(PrintContext)

    const handleClick = () => {
        printReset('avulso')
        setArticleRequisicao()
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

export const ImprimirNavBtn = () => {

    const { setArticlePrint } = useContext(AtendimentoNavigateContext)
    const { printReset } = useContext(PrintContext)

    const handleClick = () => {
        printReset()
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
    const { setNovaPrescricao, setMedicamentoEdit, setPrescricaoOnDuty, setLmeEdit, setAtestadoEdit, } = useContext(AtendimentoContext)
    const { setArticlePrescricoesMain, setStep } = useContext(AtendimentoNavigateContext)

    const handleClick = () => {
        setNovaPrescricao(clienteContext.id)
        setMedicamentoEdit(null)
        setPrescricaoOnDuty(null)
        setLmeEdit(null)
        setAtestadoEdit(null)
        setStep(111)
        setArticlePrescricoesMain()
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

    let disabled = step === 111 || step === 141 || step === 161 || step === 371

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

    const {  setResetCliente } = useContext(ClienteContext)
    const { prescricaoEdit, lmeEdit, setResetAtendimento } = useContext(AtendimentoContext)
    const { step, setResetAtendimentoNavegate } = useContext(AtendimentoNavigateContext)
    const { setPageAtendimento } = useContext(NavigateContext)

    if (!prescricaoEdit && !lmeEdit) return <></>

    const resetAll = () => {
        setResetCliente()
        setResetAtendimento()
        setResetAtendimentoNavegate()
        setPageAtendimento()
    }

    const PrescricaoInsert = async () => {
        await fetch(process.env.REACT_APP_API_URL + `/prescricoes`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(prescricaoEdit)
        }).then(data => {
            if (data.ok) {
                resetAll()
            }
        })
    }

    const LmeInsert = async () => {
        await fetch(process.env.REACT_APP_API_URL + `/lmes`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(lmeEdit)
        }).then(data => {
            if (data.ok) {
                resetAll()
            }
        })
    }

    const PrescricaoUpdate = async () => {
        await fetch(process.env.REACT_APP_API_URL + `/prescricoes/${prescricaoEdit.id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(prescricaoEdit)
        }).then(data => {
            if (data.ok) {
                resetAll()
            }
        })
    }

    const LmeUpdate = async () => {
        await fetch(process.env.REACT_APP_API_URL + `/lmes/${lmeEdit.id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(lmeEdit)
        }).then(data => {
            if (data.ok) {
                resetAll()
            }
        })
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
                title={'Editar Relatório'}
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

    const { lmeOnDuty, setLmeEdit, setLmeOnDuty, setAtestadoEdit } = useContext(AtendimentoContext)
    const { setArticlePrescricoesMain, setStep } = useContext(AtendimentoNavigateContext)

    if (!lmeOnDuty) return <></>

    const handleClick = () => {
        setLmeEdit(lmeOnDuty)
        setLmeOnDuty(null)
        setAtestadoEdit(null)
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

export const AddNovoAtestado = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { setPrescricaoEdit, setNovoAtestado, setAtestadoOnDuty } = useContext(AtendimentoContext)
    const { setArticlePrescricoesMain, setStep } = useContext(AtendimentoNavigateContext)

    const handleClick = () => {
        setPrescricaoEdit(null)
        setAtestadoOnDuty(null)
        setNovoAtestado(clienteContext.id)
        setArticlePrescricoesMain()
        setStep(711)
    }

    return (
        <>
            <DefaultButton
                title={'Novo Atestado'}
                click={handleClick}
                icon={<NoteAddIcon />}
            />
        </>
    )
}

export const AtestadoSalvarBtn = () => {

    const { setResetCliente} = useContext(ClienteContext)
    const { atestadoEdit, setResetAtendimento } = useContext(AtendimentoContext)
    const { setResetAtendimentoNavegate } = useContext(AtendimentoNavigateContext)
    const { setPageAtendimento } = useContext(NavigateContext)

    if (!atestadoEdit) return <></>

    const resetAll = () => {
        setResetCliente()
        setResetAtendimento()
        setResetAtendimentoNavegate()
        setPageAtendimento()
    }

    const AtestadoInsert = async () => {
        await fetch(process.env.REACT_APP_API_URL + `/atestados`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(atestadoEdit)
        }).then(data => {
            if (data.ok) {
                resetAll()
            }
        })
    }

    const AtestadoUpdate = async () => {
        await fetch(process.env.REACT_APP_API_URL + `/atestados/${atestadoEdit.id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(atestadoEdit)
        }).then(data => {
            if (data.ok) {
                resetAll()
            }
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (atestadoEdit && atestadoEdit?.id === undefined) return AtestadoInsert()
        if (atestadoEdit && atestadoEdit?.id > 0) return AtestadoUpdate()
    }

    return (
        <>
            <DefaultButton
                title={'Salvar Atestado'}
                click={handleSubmit}
                icon={<SaveIcon />}
            />
        </>
    )
}

export const AtestadoEditarBtn = () => {

    const { atestadoOnDuty, setAtestadoEdit, setAtestadoOnDuty } = useContext(AtendimentoContext)
    const { setArticlePrescricoesMain, setStep, } = useContext(AtendimentoNavigateContext)

    if (!atestadoOnDuty) return <></>

    const handleClick = () => {
        setAtestadoEdit(atestadoOnDuty)
        setAtestadoOnDuty(null)
        setArticlePrescricoesMain()
        setStep(711)
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