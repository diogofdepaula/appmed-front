import { Box } from '@mui/material';
import React from 'react';
import Fence from '../../../fence';
import CriteriosAR from './ar';
import CriteriosEA from './ea';

const Linha4Relatorio = () => {

    return (
        <>
            <Fence titulo="2 - Critérios clínicos e laboratoriais">
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        mr: 1,
                        display: 'flex',
                        flexDirection: 'row',
                        alignContent: 'stretch',
                        gap: 1,
                    }}
                >
                  {/* <CriteriosAR /> */}
                  <CriteriosEA />
                </Box>
            </Fence>
        </>
    )
}

export default Linha4Relatorio