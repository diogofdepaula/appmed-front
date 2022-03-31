import DnsIcon from '@mui/icons-material/Dns';
import KeyboardAltIcon from '@mui/icons-material/KeyboardAlt';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PrintIcon from '@mui/icons-material/Print';
import WebIcon from '@mui/icons-material/Web';
import { IconButton, Tooltip } from "@mui/material";
import { useContext } from "react";
import { ClienteContext } from '../../../App';
import { AtendimentoContext, AtendimentoNavigateContext } from "../../../pages/atendimento";


export const PrincipalBtn = () => {

    const { setPrescricaoOnDuty, setLmeOnDuty } = useContext(AtendimentoContext)
    const { setArticleAtendimentoMain } = useContext(AtendimentoNavigateContext)

    return (
        <>
            <Tooltip title="Principal">
                <IconButton
                    onClick={() => {
                        setPrescricaoOnDuty(null)
                        setLmeOnDuty(null)
                        setArticleAtendimentoMain()
                    }}
                    size="large">
                    <DnsIcon />
                </IconButton>
            </Tooltip>
        </>
    )
}

export const RequisicoesBtn = () => {

    return (
        <>
            <Tooltip title="Requsições">
                <IconButton
                    size="large">
                    <KeyboardAltIcon />
                </IconButton>
            </Tooltip>
        </>
    )
}

export const AtestadosBtn = () => {

    return (
        <>
            <Tooltip title="Atestados">
                <IconButton size="large">
                    <WebIcon />
                </IconButton>
            </Tooltip>
        </>
    )
}

export const NovaPrescricaoBtn = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { setNovaPrescricao, setMedicamentoEdit } = useContext(AtendimentoContext)
    const { setArticlePrescricaoInsert, setStep } = useContext(AtendimentoNavigateContext)

    const iniciar = () => {
        setNovaPrescricao(clienteContext.id)
        setMedicamentoEdit(null)
        setStep(11)
        setArticlePrescricaoInsert()
    }

    return (
        <>
            <Tooltip title="Nova Prescrição">
                <IconButton onClick={() => iniciar()} size="large">
                    <PostAddIcon />
                </IconButton>
            </Tooltip>
        </>
    )
}

export const ImprimirNavBtn = () => {

    const { setPagePrint } = useContext(AtendimentoNavigateContext)

    return (
        <>
            <Tooltip title="Imprimir">
                <IconButton
                    onClick={() => setPagePrint()}
                    size="large"
                >
                    <PrintIcon />
                </IconButton>
            </Tooltip>
        </>
    )
}
