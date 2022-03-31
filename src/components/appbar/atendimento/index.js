import DnsIcon from '@mui/icons-material/Dns';
import KeyboardAltIcon from '@mui/icons-material/KeyboardAlt';
import WebIcon from '@mui/icons-material/Web';
import { IconButton, Tooltip } from "@mui/material";
import { useContext } from "react";
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

