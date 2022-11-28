import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import DnsIcon from '@mui/icons-material/Dns';
import EditIcon from '@mui/icons-material/Edit';
import FlashOnIcon from '@mui/icons-material/FlashOn';
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

    const handleClick = () => {
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
    const { prescricaoEdit, setPrescricaoEdit, setMedicamentoEdit, lmeEdit, setLmeEdit, setPrescricaoOnDuty, setAtestadoEdit } = useContext(AtendimentoContext)
    const { step, setStep, setArticleAtendimentoMain } = useContext(AtendimentoNavigateContext)
    const { setPageAtendimento } = useContext(NavigateContext)

    if (!prescricaoEdit && !lmeEdit) return <></>

    const fetchClienteIncludes = async () => {
        await fetch(process.env.REACT_APP_API_URL + '/clientes/' + clienteContext.id)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            }).then(data => {
                // isso inclui os includes Prescricao nas LMES sem precisar
                // fazer uma pesquisa duplicada no bando de dados
                const lmes = data.lmes.map(l => {
                    let n = data.prescricoes.filter(p => p.lmeId === l.id)
                    return { ...l, prescricoes: n }
                })
                return { ...data, lmes: lmes }
            }).then(cliente => {
                setClienteContext(cliente)
            }).then(() => {
                setStep(0)
                setPrescricaoEdit(null)
                setPrescricaoOnDuty(null)
                setLmeEdit(null)
                setAtestadoEdit(null)
                setMedicamentoEdit(null)
                setPageAtendimento()
                setArticleAtendimentoMain()
            })
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
        })
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
        })
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
        })
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
                title={'Enviar impressão'}
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

    const { clienteContext, setClienteContext } = useContext(ClienteContext)
    const { atestadoEdit, setAtestadoEdit, setPrescricaoEdit, setMedicamentoEdit, setLmeEdit, setAtestadoOnDuty, setPrescricaoOnDuty } = useContext(AtendimentoContext)
    const { setStep, setArticleAtendimentoMain } = useContext(AtendimentoNavigateContext)
    const { setPageAtendimento } = useContext(NavigateContext)

    if (!atestadoEdit) return <></>

    const fetchClienteIncludes = async () => {
        await fetch(process.env.REACT_APP_API_URL + '/clientes/' + clienteContext.id)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            }).then(data => {
                // isso inclui os includes Prescricao nas LMES sem precisar
                // fazer uma pesquisa duplicada no bando de dados
                const lmes = data.lmes.map(l => {
                    let n = data.prescricoes.filter(p => p.lmeId === l.id)
                    return { ...l, prescricoes: n }
                })
                return { ...data, lmes: lmes }
            }).then(cliente => {
                setClienteContext(cliente)
            }).then(() => {
                setStep(0)
                setPrescricaoEdit(null)
                setPrescricaoOnDuty(null)
                setAtestadoOnDuty(null)
                setLmeEdit(null)
                setAtestadoEdit(null)
                setMedicamentoEdit(null)
                setPageAtendimento()
                setArticleAtendimentoMain()
            })
    }

    const AtestadoInsert = async () => {
        await fetch(process.env.REACT_APP_API_URL + `/atestados`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(atestadoEdit)
        }).then(data => {
            if (data.ok) {
                fetchClienteIncludes()
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
                fetchClienteIncludes()
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