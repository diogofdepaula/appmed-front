import DeleteIcon from '@mui/icons-material/Delete';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Box, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, TextField } from "@mui/material";
import { useState } from "react";
import RequisicaoLivre from '../requisicao/requisicaolivre';

const vacinacaoinicial = {
    indicacao: "Paciente com doença autoimune em uso de medicamento modificador de resposta imunológica.",
    selecionadas: [],
}

const vacinas = [
    {
        original: "Vacina influenza quadrivalente (4V)",
        mod: "Influenza (4V)",
        comentario: "Se disponível, a vacina influenza quadrivalente (4V) é preferível à vacina influenza trivalente (3V).",
        crie: false
    },
    {
        original: "Vacina influenza trivalente (3V)",
        mod: "Influenza (3V)",
        comentario: "Se disponível, a vacina influenza quadrivalente (4V) é preferível à vacina influenza trivalente (3V).",
        crie: true
    },
    {
        original: "Pneumocócica polissacarídica 23-valente (VPP23)",
        mod: "Pneumo23 (VPP23)",
        comentario:
            "Sempre iniciar esquema com a vacina conjugada (VPC13), seguida pela aplicação " +
            "da vacina VPP23, respeitando o intervalo mínimo de dois meses entre elas. " +
            "Para indivíduos que já receberam a VPP23 e não anteriormente vacinados com VPC13, " +
            "recomenda-se um intervalo de 12 meses para a aplicação de VPC13 e de cinco anos " +
            "para a aplicação da segunda dose da VPP23, com intervalo mínimo de dois meses " +
            "entre as vacinas conjugada e polissacarídica.",
        crie: true,
    },
    {
        original: "Pneumocócicas conjugadas (VPC13)",
        mod: "Pneumo13 (VPC13)",
        comentario:
            "Sempre iniciar esquema com a vacina conjugada (VPC13), seguida pela aplicação " +
            "da vacina VPP23, respeitando o intervalo mínimo de dois meses entre elas. " +
            "Para indivíduos que já receberam a VPP23 e não anteriormente vacinados com VPC13, " +
            "recomenda-se um intervalo de 12 meses para a aplicação de VPC13 e de cinco anos " +
            "para a aplicação da segunda dose da VPP23, com intervalo mínimo de dois meses " +
            "entre as vacinas conjugada e polissacarídica.",
        crie: false,
    },
    {
        original: "Meningocócicas conjugadas (MenACWY)",
        mod: "Meningo ACWY (MenACWY)",
        comentario:
            "Em vigência e enquanto perdurar a imunossupressão: uma dose de reforço a cada cinco anos.",
        crie: false,
    },
    {
        original: "Meningocócica B",
        mod: "Meningo B (MenB)",
        comentario:
            "Adultos até 50 anos: duas doses com intervalo de um a dois meses entre elas.",
        crie: true,
    },
    {
        original: "Hepatite B",
        mod: "Hepatite B (HepB)",
        comentario:
            "Para imunodeprimidos, quatro doses: 0 - 1 - 2 - 6 meses, com o dobro do volume recomendado para a faixa etária.",
        crie: true,
    },
    {
        original: "Vírus do papiloma humano",
        mod: "Vírus do papiloma humano (HPV)",
        comentario:
            "Três doses: 0 - 1 a 2 - 6 meses. Esquema de três doses é obrigatório para imunossuprimidos, mesmo entre 9 e 14 anos.",
        crie: true,
    },
    {
        original: "Haemophilus influenzae B",
        mod: "Haemophilus influenzae B",
        comentario:
            "Pessoas vacinadas na infância mas que não receberam dose de reforço após os 12 meses de idade: uma dose." +
            "Se imunodeprimidas, duas doses com intervalo de dois meses entre elas.",
        crie: true,
    },
    {
        original: "Herpes zóster inativada (VZR)",
        mod: "Herpes zóster inativada (VZR)",
        comentario:
            "Recomendada a partir de 18 anos para imunodeprimidos: duas doses (0 - 2 meses) podendo-se usar o intervalo " + 
            "mínimo de um mês. A partir de 50 anos rotina para imunocompetentes.",
        crie: false,
    },
    {
        original: "COVID19",
        mod: "COVID19",
        comentario:
            "Seguir as recomendações do o Plano Nacional de Operacionalização da Campanha de Vacinação contra a covid-19 (PNO)" + 
            "e outras Notas Técnicas e Informes Operacionais do ministério da saúde.",
        crie: true,
    },
]

const ListVacinas = ({ handleVacinaPush }) => {

    return (
        <>
            <List
                dense={true}
            >
                {vacinas.map((p, i) =>
                    <ListItem
                        key={i}
                        button
                        onClick={() => handleVacinaPush(p)}
                    >
                        <ListItemText primary={p.original} />
                    </ListItem>
                )}
            </List>
        </>
    )
}

const Vacinacao = ({ handleAdicionarVacinacao }) => {

    const [vacinacao, setVacinacao] = useState(vacinacaoinicial)

    const handleIndicacao = (event) => {
        setVacinacao({
            ...vacinacao,
            indicacao: event.target.value
        })
    }

    const handleVacinaPush = (param, indic) => {
        setVacinacao({
            ...vacinacao,
            indicacao: indic === undefined ? vacinacao.indicacao : indic,
            selecionadas: vacinacao.selecionadas.concat(param)
        })
    }

    const handleAdicionar = () => {
        handleAdicionarVacinacao(vacinacao)
        let indic = vacinacao.indicacao
        setVacinacao({
            indicacao: indic,
            selecionadas: [],
        })
    }

    const handleVacinaRemove = (param) => {
        setVacinacao({
            ...vacinacao,
            selecionadas: vacinacao.selecionadas.filter(w => w.original.toString().toLowerCase() !== param.original.toString().toLowerCase())
        })
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 1,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        width: 0.4,
                    }}
                >
                    <TextField
                        fullWidth
                        multiline
                        variant='outlined'
                        rows={3}
                        value={vacinacao.indicacao}
                        label="Indicação"
                        onChange={handleIndicacao}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 0.5,
                            border: 1,
                            borderRadius: 1,
                            borderColor: "#42a5f5"
                        }}
                    >
                        <Box
                            sx={{
                                flexShrink: 0
                            }}
                        >
                            <IconButton
                                onClick={() => handleAdicionar()}
                                size="large"
                            >
                                <ReadMoreIcon />
                            </IconButton>
                        </Box>
                        <Box
                            sx={{
                                width: '100%'
                            }}
                        >
                            <List
                                dense={true}
                            >
                                {vacinacao.selecionadas.map((s, i) =>
                                    <ListItem
                                        key={i}
                                    >
                                        <ListItemText
                                            primary={s.mod}
                                        />
                                        <ListItemSecondaryAction>
                                            <IconButton
                                                size='small'
                                                onClick={() => handleVacinaRemove(s)}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                )}
                            </List>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        width: 0.6,
                    }}
                >
                    <RequisicaoLivre
                        handleVacinaPush={handleVacinaPush}
                    />
                    <ListVacinas
                        handleVacinaPush={handleVacinaPush}
                    />
                    {/* <Tips
                        handleProcedimentoPush={handleProcedimentoPush}
                    /> */}
                </Box>
            </Box>
        </>
    )
}

export default Vacinacao