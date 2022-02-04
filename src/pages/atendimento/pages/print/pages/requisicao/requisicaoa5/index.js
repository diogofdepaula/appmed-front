import { Box, Typography } from '@mui/material';
import React from 'react';
import PageA5 from '../../component/pagea5';
import Identificacao from '../../receita/component/identificacao';

const RequisicaoA5 = ({ requisicao, tipo }) => {


    const Convenio = () => {

        let conv = <div />

        if (requisicao.convenio[0] !== "") {
            conv =
                <>
                    <Box
                        style={{
                            margin: "0 0 1rem 1rem",
                            fontSize: 14,
                            fontWeight: 'bold',
                            textAlign: 'left',
                            letterSpacing: 1,
                        }}
                    >
                        <Box>
                            Convênio:
                        </Box>
                        <Box
                            style={{
                                margin: "0 0 0 1rem",
                            }}
                        >
                            {requisicao.convenio[0]} - {requisicao.convenio[1]}
                        </Box>
                    </Box>
                </>
        }

        return conv
    }

    return (
        <>
            <PageA5>
                <Box width={1} height={1} display="block">
                    <Box display="block" height={1}>
                        <Box justifyContent="center">
                            <Box display="block">
                                <Identificacao tipo={tipo} />
                                <Convenio />
                                <Box
                                    style={{
                                        margin: "3rem 1rem 2rem 1rem",
                                        height: '30rem',
                                        fontSize: 18,
                                        fontWeight: 'bold',
                                        textAlign: 'left',
                                        letterSpacing: 2,
                                    }}
                                >
                                    <Box>
                                        Procedimentos:
                                    </Box>
                                    {requisicao.selecionados.map((p, i) =>
                                        <>
                                            <Box
                                                key={i}
                                                display='flex'
                                                style={{
                                                    margin: "0.5rem 0 0 0.5rem",
                                                    fontSize: 16,
                                                    fontWeight: 'normal',
                                                }}
                                            >
                                                {p}
                                            </Box>
                                        </>
                                    )}
                                </Box>
                                <Box
                                    style={{
                                        margin: "0 0 1rem 1rem",
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        style={{
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            textAlign: 'left',
                                            letterSpacing: 1,
                                        }}>
                                        Justificativa (Indicação Clínica)
                                    </Typography>
                                </Box>
                                <Box
                                    style={{
                                        margin: "0 0 0 3rem",
                                    }}
                                >
                                    <Typography
                                        variant="subtitle1"
                                        style={{
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            textAlign: 'left',
                                            letterSpacing: 1,
                                        }}>
                                        {requisicao.justificativa}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </PageA5>
        </>
    )
}

export default RequisicaoA5