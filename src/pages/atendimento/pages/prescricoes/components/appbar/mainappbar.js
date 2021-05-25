import { Box, IconButton, Tooltip } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import EditIcon from '@material-ui/icons/Edit';
import HealingIcon from '@material-ui/icons/Healing';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../../..';

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
                        <IconButton
                            disabled={!prescricaoOnDuty}
                        >
                            <ArrowUpwardIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Editar">
                    <span>
                        <IconButton
                            disabled={!prescricaoOnDuty}
                            onClick={handleEditar}
                        >
                            <EditIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Parar">
                    <span>
                        <IconButton
                            disabled={!prescricaoOnDuty}
                            onClick={handleParar}
                        >
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
                            disabled={!prescricaoOnDuty}
                        //                        onClick={() => setPage('teste')}
                        >
                            <HealingIcon />
                        </IconButton>
                    </span>
                </Tooltip>
            </Box>
        </div>
    )
}

export default PrescricoesMainAppBar