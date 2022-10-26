import { Box } from '@mui/material';
import React from 'react';
import PageA4 from '../pagea4';
import Cabecalho from '../receita/component/cabecalho';
import Data from '../receita/component/data';
import Identificacao from '../receita/component/identificacao';
import Rodape from '../receita/component/rodape';

const AtestadoA4 = ({ tipo }) => {

    return (
        <>
            <PageA4>
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
                            height: 'calc(100% - 110px)', // se mudar o Cabecalho tem que ajustar aqui depois
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
                                Venho por meio deste atesto, para os devidos fins, que
                            </Box>
                        </Box>
                    </Box>
                    <Data tipo={tipo} />
                    <Rodape />
                </Box>
            </PageA4>
        </>
    )
}

export default AtestadoA4