import { Box } from '@mui/material';
import React from 'react';
import Page from '../page';
import Data from '../receita/component/data';
import { Comentario, Consequencia, Diagnostico, Estado, Inicio, Prazo, Prognostico, Titulo, Tratamento } from './textosatestado';

const AtestadoA5 = ({ tipo }) => {

    return (
        <>
            <Page size="a5">
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
                        <Titulo />
                        <Box
                            sx={{
                                justifyContent: 'space-around',
                                display: 'block',
                                textAlign: 'justify',
                                typography: 'body1',
                                fontSize: 15,
                            }}
                        >
                            <Inicio />
                            <Diagnostico />
                            <Tratamento />
                            <Estado />
                            <Prognostico />
                            <Consequencia />
                            <Prazo />
                            <Comentario />
                        </Box>
                    </Box>
                    <Data tipo={tipo} />
                </Box>
            </Page>
        </>
    )
}

export default AtestadoA5