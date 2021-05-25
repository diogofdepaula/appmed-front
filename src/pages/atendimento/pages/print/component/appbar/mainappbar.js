import { Box, IconButton, Tooltip } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import TuneIcon from '@material-ui/icons/Tune';
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
                        <IconButton
                        //disabled={!prescricaoOnDuty}
                        >
                            <ArrowUpwardIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <ButtonPrint />
                <Tooltip title="Visualizar">
                    <span>
                        <IconButton
                            onClick={visualizar}
                        >
                            <TuneIcon />
                        </IconButton>
                    </span>
                </Tooltip>
            </Box>
        </div>
    )
}

export default PrintMainAppBar