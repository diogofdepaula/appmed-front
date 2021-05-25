import { Box, IconButton, Tooltip } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import EditIcon from '@material-ui/icons/Edit';
import HealingIcon from '@material-ui/icons/Healing';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../../..';

const LmesMainAppBar = () => {

    const { setPage, lmeOnDuty, setStep, setLmeEdit } = useContext(AtendimentoContext)

    const handleEditar = () => {
        setLmeEdit(lmeOnDuty)
        setStep(21)
        setPage('lmeupdate')
    }

    const handleParar = () => {
        setPage('lmedelete')
    }

    return (
        <div>
            <Box>
                <Tooltip title="Voltar">
                    <span>
                        <IconButton
                            disabled={!lmeOnDuty}
                        >
                            <ArrowUpwardIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Editar">
                    <span>
                        <IconButton
                            disabled={!lmeOnDuty}
                            onClick={handleEditar}
                        >
                            <EditIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Parar">
                    <span>
                        <IconButton
                            disabled={!lmeOnDuty}
                            onClick={handleParar}
                        >
                            <HighlightOffIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                {/* <Tooltip title="Excluir">
                    <span>
                        <IconButton
                            disabled={!lmeOnDuty}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </span>
                </Tooltip> */}
                <Tooltip title="Outros">
                    <span>
                        <IconButton
                            disabled={!lmeOnDuty}
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

export default LmesMainAppBar