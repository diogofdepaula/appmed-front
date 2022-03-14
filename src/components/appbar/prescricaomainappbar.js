import { Box, IconButton, Tooltip } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import EditIcon from '@mui/icons-material/Edit';
import HealingIcon from '@mui/icons-material/Healing';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import React, { useContext } from 'react';
import { AtendimentoContext, AtendimentoNavigateContext } from '../../pages/atendimento';

const PrescricoesMainAppBar = () => {

    const { prescricaoOnDuty, setPrescricaoEdit } = useContext(AtendimentoContext)
    const { setArticlePrescricaoUpdate, setArticlePrescricaoDelete, setStep } = useContext(AtendimentoNavigateContext)

    const handleEditar = () => {
        setPrescricaoEdit(prescricaoOnDuty)
        setStep(21)
        setArticlePrescricaoUpdate()
    }

    const handleParar = () => {
        setPrescricaoEdit(prescricaoOnDuty)
        setArticlePrescricaoDelete()
    }

    return (
        <div>
            <Box>
                <Tooltip title="Voltar">
                    <span>
                        <IconButton disabled={!prescricaoOnDuty} size="large">
                            <ArrowUpwardIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Editar">
                    <span>
                        <IconButton disabled={!prescricaoOnDuty} onClick={handleEditar} size="large">
                            <EditIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Parar">
                    <span>
                        <IconButton disabled={!prescricaoOnDuty} onClick={handleParar} size="large">
                            <HighlightOffIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Outros">
                    <span>
                        <IconButton
                            disabled={!prescricaoOnDuty}
                            size="large">
                            <HealingIcon />
                        </IconButton>
                    </span>
                </Tooltip>
            </Box>
        </div>
    );
}

export default PrescricoesMainAppBar