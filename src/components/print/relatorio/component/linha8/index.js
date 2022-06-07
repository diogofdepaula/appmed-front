import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { LMEPrintContext } from '../..';
import Fence from '../../../fence';

const Linha8Relatorio = () => {

    const lme = useContext(LMEPrintContext)

    return (
        <>
            <Fence titulo={'4 - Justificativa para solicitação inicial ou mudança de tratamento'}>
                <Box
                    sx={{
                        border: 1,
                        height: '100%',
                        flexGrow: 1,
                    }}
                >
                    {lme.relatorio.justificativa}
                </Box>
            </Fence>
        </>
    )
}

export default Linha8Relatorio

