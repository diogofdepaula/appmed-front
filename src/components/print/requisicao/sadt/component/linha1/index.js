import { Box } from '@mui/material'
import React from 'react'
import Operadoras from '../../../../../../utils/operadoras'

const Linha1Sadt = ({ requisicao }) => {

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: 1,
                    justifyContent: 'space-evenly',
                }}
            >
                <Box
                    sx={{
                        typography: 'h2',
                        textTransform: 'capitalize',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        width: '30rem',
                    }}
                >
                    {Operadoras().filter(o => o.razao === requisicao.convenio)[0]?.abreviatura}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        typography: 'h6',
                        fontWeight: 'bold',
                        alignItems: 'center',
                    }}
                >
                    <Box>
                        GUIA DE SERVIÇO PROFISSIONAL / SERVIÇO AUXILIAR DE
                    </Box>
                    <Box>
                        DIAGNÓSTICO E TERAPIA - SP/SADT
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        typography: 'body2',
                        alignItems: 'center',
                        alignContent: 'flex-start',
                        width: '30rem',
                        pl: 3
                    }}
                >
                    2 - Nº Guia no Prestador
                </Box>
            </Box>
        </>
    )
}

export default Linha1Sadt