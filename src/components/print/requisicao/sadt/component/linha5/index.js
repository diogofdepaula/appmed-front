import { Box } from "@mui/material";
import { format } from 'date-fns';
import { ptBR } from "date-fns/locale";
import React, { useContext } from 'react';
import Fence from '../../../../fence';
import Field from '../../../../field';
import { PrintContext } from "../../../../../../App";

const ProcedColumn = ({ children }) => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    fontSize: 14.5,
                }}
            >
                {children}
            </Box>
        </>
    )
}

const ProcedItem = ({ item }) => {
    return (
        <>
            <Box>
                {"[ " + item.codigo + " ] " + item.mod}
            </Box>
        </>
    )
}

const Procedimentos = ({ requisicao }) => {

    const list = 
        requisicao.selecionados
        // coloca em ordem de tamanho
        .sort((a, b) => a.mod.length - b.mod.length)
        // divide a lista em tamanhos iguais 
        // (6 é o número de itens)
        .reduce((all, one, i) => {
        const ch = Math.floor(i / 6);
        all[ch] = [].concat((all[ch] || []), one);
        return all
    }, [])

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
                {list.map((l, i) =>
                    <ProcedColumn key={i} >
                        {l.map((item, y) =>
                            <ProcedItem
                                key={y + 1000}
                                item={item}
                            />
                        )}
                    </ProcedColumn>
                )}
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
                            <Procedimentos requisicao={requisicao} />
                        </Fence>
                    </Box>
                </Box>
            </Fence >
        </>
    )
}

export default Linha5Sadt