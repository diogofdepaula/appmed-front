import { Box } from '@mui/material';
import React from 'react';
import PageA5 from '../pagea5';
import Data from '../component/data';
import Identificacao from '../component/identificacao';

const AtestadoA5 = () => {

    return (
        <>
            <PageA5>
                <Box
                    sx={{
                        width: 1,
                        height: 1,
                        display: 'block',
                    }}
                >
                    <Box
                        sx={{
                            height: 1,
                            display: 'block',
                        }}
                    >
                        <Box
                            sx={{
                                justifyContent: 'space-around'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'block',
                                }}
                            >
                                <Identificacao tipo={tipo} />
                                Conteúdo
                            </Box>
                        </Box>
                    </Box>
                    <Data
                        mes={mes}
                        tipo={tipo}
                    />
                </Box>
            </PageA5>
        </>
    )
}

export default AtestadoA5