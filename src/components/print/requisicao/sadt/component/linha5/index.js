import { Box } from "@mui/material";
import { format } from 'date-fns';
import { ptBR } from "date-fns/locale";
import React, { useContext } from 'react';
import Fence from '../../../../fence';
import Field from '../../../../field';
import { PrintContext } from "../../../../../../App";

const Procedimentos = () => {

    const itens = [
        {
            codigo: "40302075",
            descricao: "Hemoglobina glicada (A1 total); ",
        },
        {
            codigo: "40302075",
            descricao: "Hemoglobina glicada (A1 total); ",
        },
        {
            codigo: "40302075",
            descricao: "Hemoglobina glicada (A1 total); ",
        },
        {
            codigo: "40302075",
            descricao: "Hemoglobina glicada (A1 total); ",
        },
        {
            codigo: "40302075",
            descricao: "Hemoglobina glicada (A1 total); ",
        },
    ]

    const BoxColum = ({ children }) => {
        return (
            <>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        border: 1,
                        flexGrow: 1
                    }}
                >
                    {children}
                </Box>
            </>
        )
    }


    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: 1,
                    gap: 1,
                }}
            >
                <BoxColum>
                    {itens.map(t =>
                        <Box
                            key={t.codigo}
                        >
                            {"(" + t.codigo + ") " + t.descricao}
                        </Box>
                    )}
                </BoxColum>
                <BoxColum>
                    {itens.map(t =>
                        <Box
                            key={t.codigo}
                        >
                            {"(" + t.codigo + ") " + t.descricao}
                        </Box>
                    )}
                </BoxColum>
                <BoxColum>
                    {itens.map(t =>
                        <Box
                            key={t.codigo}
                        >
                            {"(" + t.codigo + ") " + t.descricao}
                        </Box>
                    )}
                </BoxColum>
                <BoxColum>
                    {itens.map(t =>
                        <Box
                            key={t.codigo}
                        >
                            {"(" + t.codigo + ") " + t.descricao}
                        </Box>
                    )}
                </BoxColum>
                <BoxColum>
                    {itens.map(t =>
                        <Box
                            key={t.codigo}
                        >
                            {"(" + t.codigo + ") " + t.descricao}
                        </Box>
                    )}
                </BoxColum>
            </Box>
        </>
    )
}


const Linha5Sadt = ({ requisicao }) => {

    const { database } = useContext(PrintContext)
    const date = format(database, "dd '/' MM '/' yyyy", { locale: ptBR })

    return (
        <>
            <Fence titulo="Dados da Solicitação / Procedimento ou Itens Assitenciais Solicitados" stretch={1}>
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
                                        largura: "6rem",
                                        alinhamento: "center",
                                    }}
                                />
                                <Field
                                    dados={{
                                        titulo: "22 - Data da Solicitação",
                                        texto: date ? date : '',
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
                                    //    texto: requisicao.justificativa,
                                    altura: "100%",
                                    grow: "1",
                                }}
                            >
                                <Box>
                                    {requisicao.justificativa.split("\n").map((i, key) => {
                                        return <div key={key}>{i}</div>;
                                    })}
                                </Box>
                            </Field>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: 1,
                            height: 1,
                        }}
                    >
                        <Fence
                            titulo="Procedimentos"
                            stretch={1}
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