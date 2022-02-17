import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import TuneIcon from '@mui/icons-material/Tune';
import { Box, IconButton, Tooltip } from '@mui/material';
import React, { useContext } from 'react';
import { PrintContext } from '../../../atendimento';
import ButtonPrint from './buttonprint';

const PrintMainAppBar = () => {

    const { setVisualizacao } = useContext(PrintContext)

    const visualizar = () => {
        setVisualizacao(true)
    }

    return (
        <>
            <Box display="flex">
                <Tooltip title="Voltar">
                    <span>
                        <IconButton size="large">
                            <ArrowUpwardIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <ButtonPrint />
                <Tooltip title="Visualizar">
                    <span>
                        <IconButton onClick={visualizar} size="large">
                            <TuneIcon />
                        </IconButton>
                    </span>
                </Tooltip>
            </Box>
        </>
    )
}

export default PrintMainAppBar