import { Box, Typography } from '@material-ui/core';
import React from 'react';
import PageA5 from '../../component/pagea5';
import Identificacao from '../../receita/component/identificacao';

const RequisicaoA5 = ({ requisicao, tipo }) => {

    return (
        <>
            <PageA5>
                <Box width={1} height={1} display="block">
                    <Box display="block" height={1}>
                        <Box justifyContent="center">
                            <Box display="block">
                                <Identificacao tipo={tipo} />
                                <Box
                                    style={{
                                        margin: "3rem 1rem 2rem 1rem",
                                        height: '24rem',
                                    }}
                                >
                                    {requisicao.selecionados.map((p, i) =>
                                        <>
                                            <Box display='flex' >
                                                <Typography
                                                    variant="h5"
                                                    style={{
                                                        fontSize: 18,
                                                        fontWeight: 'bold',
                                                        textAlign: 'left',
                                                        letterSpacing: 2,
                                                    }}>
                                                    {p}
                                                </Typography>
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
                                        Justificativa
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