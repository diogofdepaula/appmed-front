import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import EditIcon from '@mui/icons-material/Edit';
import HealingIcon from '@mui/icons-material/Healing';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { IconButton, Tooltip } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoContext, AtendimentoNavigateContext } from '../../pages/atendimento';

const LmesMainAppBar = () => {

    const { lmeOnDuty, setLmeEdit } = useContext(AtendimentoContext)
    const { setArticleLMEDelete, setArticleLMEUpdate, setStep } = useContext(AtendimentoNavigateContext)


    const handleEditar = () => {
        setLmeEdit(lmeOnDuty)
        setStep(21)
        setArticleLMEUpdate()
    }

    const handleParar = () => {
        setArticleLMEDelete()
    }

    return (
        <>
            <Tooltip title="Voltar">
                <span>
                    <IconButton disabled={!lmeOnDuty} size="large">
                        <ArrowUpwardIcon />
                    </IconButton>
                </span>
            </Tooltip>
            <Tooltip title="Editar">
                <span>
                    <IconButton disabled={!lmeOnDuty} onClick={handleEditar} size="large">
                        <EditIcon />
                    </IconButton>
                </span>
            </Tooltip>
            <Tooltip title="Parar">
                <span>
                    <IconButton disabled={!lmeOnDuty} onClick={handleParar} size="large">
                        <HighlightOffIcon />
                    </IconButton>
                </span>
            </Tooltip>
            <Tooltip title="Outros">
                <span>
                    <IconButton
                        disabled={!lmeOnDuty}
                        size="large">
                        <HealingIcon />
                    </IconButton>
                </span>
            </Tooltip>
        </>
    )
}

export default LmesMainAppBar