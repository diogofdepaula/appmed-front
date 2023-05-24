import { Box } from "@mui/material"
import React from 'react'
import Fence from '../../../../fence'
import Field from '../../../../field'

const Procedimentos = () => {

    const itens = [
        {
            codigo: "alsdfjlçksajf",
            descricao: "dddddddddd",
        },
        {
            codigo: "CCCCCCC",
            descricao: "dsça.fkljççsad",
        },
        {
            codigo: "oepidruopwieur",
            descricao: "83pojsdlkjrf",
        },
        {
            codigo: "-09sdaufjlk",
            descricao: "s.a,djfpoidsaj",
        },
    ]

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: 1,
                    gap: 2,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {itens.map(t =>
                        <Box
                            key={t.codigo}
                        >
                            {"(" + t.codigo + ") " + t.descricao}
                        </Box>
                    )}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {itens.map(t =>
                        <Box
                            key={t.codigo}
                        >
                            {"(" + t.codigo + ") " + t.descricao}
                        </Box>
                    )}
                </Box>
            </Box>
        </>
    )
}


const Linha5Sadt = () => {

    return (
        <>
            <Fence titulo="Dados da Solicitação / Procedimento ou Itens Assitenciais Solicitados">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: 1,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: 1,
                            gap: 1,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: 1,
                                }}
                            >
                                <Field
                                    dados={{
                                        titulo: "21 - Caráter",
                                        texto: 'U',
                                        largura: "6rem",
                                        alinhamento: "center",
                                    }}
                                />
                                <Field
                                    dados={{
                                        titulo: "22 - Data da Solicitação",
                                        texto: '22/22/2222',
                                        largura: "11rem",
                                        alinhamento: "center",
                                    }}
                                />
                            </Box>
                            <Box>
                                <Field
                                    dados={{
                                        titulo: "90 - Indicador de Cobertura Especial",
                                        alinhamento: "center",
                                        grow: "1",
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                width: 1,
                            }}
                        >
                            <Field
                                dados={{
                                    titulo: "23 - Indicação Clínica",
                                    alinhamento: "left",
                                    altura: "100%",
                                    grow: "1",
                                }}
                            />

                        </Box>
                    </Box>
                    <Box>
                        <Fence

                            titulo="Procedimentos"
                            grow="1"
                        >
                            <Procedimentos />
                        </Fence>
                    </Box>
                </Box>
            </Fence >
        </>
    )
}

export default Linha5Sadt