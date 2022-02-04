import { Box, IconButton, Tooltip } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import TuneIcon from '@mui/icons-material/Tune';
import React, { useContext } from 'react';
import { ImpressaoContext } from '../../../..';
import ButtonPrint from './buttonprint';

const PrintMainAppBar = () => {

    const { impressao, setImpressao } = useContext(ImpressaoContext)

    const visualizar = () => {
        setImpressao({ ...impressao, visualizacao: true })
    }

    return (
        <div>
            <Box display="flex">
                <Tooltip title="Voltar">
                    <span>
                        <//disabled={!prescricaoOnDuty}
                        IconButton size="large">
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
        </div>
    );
}

export default PrintMainAppBar