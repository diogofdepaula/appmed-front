import { Box, IconButton, Tooltip } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import EditIcon from '@mui/icons-material/Edit';
import HealingIcon from '@mui/icons-material/Healing';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../pages/atendimento';

const PrescricoesMainAppBar = () => {

    const { setPage, prescricaoOnDuty, setStep, setPrescricaoEdit } = useContext(AtendimentoContext)

    const handleEditar = () => {
        setPrescricaoEdit(prescricaoOnDuty)
        setStep(21)
        setPage('prescricaoupdate')
    }

    const handleParar = () => {
        setPrescricaoEdit(prescricaoOnDuty)
        setPage('prescricaodelete')
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
                {/* <Tooltip title="Excluir">
                    <span>
                        <IconButton
                            disabled={!prescricaoOnDuty}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </span>
                </Tooltip> */}
                <Tooltip title="Outros">
                    <span>
                        <IconButton
                            //                        onClick={() => setPage('teste')}
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