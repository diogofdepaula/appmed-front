import { Box } from '@mui/material';
import React from 'react';
import PageA4 from '../pagea4';
import Cabecalho from '../receita/component/cabecalho';
import Data from '../receita/component/data';
import Rodape from '../receita/component/rodape';
import { Comentario, Consequencia, Diagnostico, Estado, Inicio, Prazo, Prognostico, Titulo, Tratamento } from './textosatestado';

const AtestadoA4 = ({ tipo }) => {

    return (
        <>
            <PageA4>
                <Box
                    sx={{
                        height: 1,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Cabecalho tipo={tipo} />
                    <Box
                        sx={{
                            height: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            border: 3,
                            p: 4,
                        }}
                    >
                        <Box
                            sx={{
                                my: 4,
                            }}
                        >
                            <Titulo />
                            <Box
                                sx={{
                                    height: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    textAlign: 'justify',
                                    typography: 'body1',
                                    fontSize: 22,
                                    p: 2,
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
                    <Rodape />
                </Box>
            </PageA4>
        </>
    )
}

export default AtestadoA4