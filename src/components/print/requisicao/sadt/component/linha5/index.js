import { Box } from "@mui/material"
import React from 'react'
import Fence from '../../../../fence'
import Field from '../../../../field'

const Linha5Sadt = () => {

    // const dados = [
    //     {
    //         titulo: "21 - Caráter",
    //         texto: 'U',
    //         largura: "6rem",
    //         alinhamento: "center",
    //     },
    //     {
    //         titulo: "22 - Data da Solicitação",
    //         texto: '22/22/2222',
    //         largura: "11rem",
    //         alinhamento: "center",
    //     },
    //     ,
    // {
    //     titulo: "23 - Indicação Clínica",
    //     alinhamento: "left",
    //     largura: "30rem",
    //     grow: "1",
    // },
    // ]

    return (
        <>
            <Fence titulo="Dados da Solicitação / Procedimento ou Itens Assitenciais Solicitados">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',

                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1,
                                bgcolor: 'red',
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
                                        largura: "15rem",
                                        alinhamento: "center",
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box>
                            <Field
                                dados={{
                                    titulo: "23 - Indicação Clínica",
                                    alinhamento: "left",
                                    largura: "30rem",
                                    grow: "1",
                                }}
                            />

                        </Box>
                    </Box>
                    <Box>
                        <Field
                            dados={{
                                titulo: "Procedimentos",
                                texto: "Aqui vai os exames a serem pedidos",
                                largura: "50rem",
                                grow: 1,
                                alinhamento: "center",
                            }}
                        />
                    </Box>
                </Box>
            </Fence>
        </>
    )
}

export default Linha5Sadt