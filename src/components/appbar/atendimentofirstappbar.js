import DnsIcon from '@mui/icons-material/Dns';
import HealingIcon from '@mui/icons-material/Healing';
import InputIcon from '@mui/icons-material/Input';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import { IconButton, Tooltip } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoContext, AtendimentoNavigateContext } from '../../pages/atendimento';

const FirstAppBar = () => {

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
            <Tooltip title="Requsições">
                <IconButton
                    size="large">
                    <InputIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Atestados">
                <IconButton size="large">
                    <RemoveRedEyeIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Termos de consentimento">
                <IconButton size="large">
                    <SpellcheckIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Outros">
                <IconButton size="large">
                    <HealingIcon />
                </IconButton>
            </Tooltip>
        </>
    )
}

export default FirstAppBar