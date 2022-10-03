import { Box } from '@mui/material';
import React from 'react';
import PageA5 from '../pagea5';
import Data from '../component/data';
import Identificacao from '../component/identificacao';

const AtestadoA4 = () => {

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
                    <Cabecalho tipo={tipo} />
                    <Box
                        sx={{
                            height:'calc(100% - 110px)', // se mudar o Cabecalho tem que ajustar aqui depois
                            display: 'block',
                            p: 5,
                            border: 3,
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
                    <Rodape />
                </Box>
            </PageA5>
        </>
    )
}

export default AtestadoA4