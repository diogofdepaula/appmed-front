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

// const ListButtons = ({ list, sendParam }) => {

//     return (
//         <>
//             <Box
//                 sx={{
//                     display: 'flex',
//                     flexDirection: 'row',
//                     gap: 0.5,
//                 }}
//             >
//                 {list.map((p, i) =>
//                     <Button
//                         size="small"
//                         draggable
//                         key={i}
//                         onClick={() => sendParam(p)}
//                     >
//                         {p.titulo}
//                     </Button>
//                 )}
//             </Box>
//         </>
//     )
// }

// const Tips = ({ handleProcedimentoPush }) => {

//     const grouptips = [
//         {
//             titulo: "LME",
//             justificativa: "Exames a serem anexos ao LME",
//             tuss: ["40304361", "40302504", "40302512", "40304370", "40308391"],
//             sigtap: ["202020380", "202010643", "202010651", "202020150", "202030083"],
//         },
//         {
//             titulo: "HOPCT",
//             justificativa: "Exames de controle",
//             tuss: ["40304361", "40302504", "40302512", "40301630", "40304370", "40308391", "40316521"],
//             sigtap: ["202020380", "202010643", "202010651", "202010317", "202020150", "202030083", "202060250"],
//         },
//         {
//             titulo: "HOPCTEFPPU",
//             justificativa: "Exames de controle",
//             tuss: ["40304361", "40302504", "40302512", "40301630", "40304370", "40308391", "40316521", "40311210", "40301761"],
//             sigtap: ["202020380", "202010643", "202010651", "202010317", "202020150", "202030083", "202060250", "202010724", "202050017"],
//         },
//         {
//             titulo: "LES",
//             justificativa: "Exames de controle",
//             tuss: ["40304361", "40302504", "40302512", "40301630", "40304370", "40308391", "40316521", "40311210", "40301761", "40306062", "40306704", "40306712"],
//             sigtap: ["202020380", "202010643", "202010651", "202010317", "202020150", "202030083", "202060250", "202010724", "202050017", "202030121", "202030130", "202030270"],
//         },
//         {
//             titulo: "LES24h",
//             justificativa: "Exames de controle",
//             tuss: ["40304361", "40302504", "40302512", "40301630", "40304370", "40308391", "40316521", "40311210", "40301761", "40306062", "40306704", "40306712", "40311180"],
//             sigtap: ["202020380", "202010643", "202010651", "202010317", "202020150", "202030083", "202060250", "202010724", "202050017", "202030121", "202030130", "202030270", "202050114",],
//         },
//     ]

//     const usmmss = [
//         {
//             titulo: "US OD",
//             justificativa:
//                 "Paciente do dor e limitação em ombro direito.\n" +
//                 "Investigação para Síndrome do manguito Rotador.",
//             unitary: {
//                 codigo: "40901220",
//                 original: "US - Articular (por articulação)",
//                 mod: "Ultrassonografia Articular (ombro direito)",
//             },
//         },
//         {
//             titulo: "US OE",
//             justificativa:
//                 "Paciente do dor e limitação em ombro esquerdo.\n" +
//                 "Investigação para Síndrome do manguito Rotador.",
//             unitary: {
//                 codigo: "40901220",
//                 original: "US - Articular (por articulação)",
//                 mod: "Ultrassonografia Articular (ombro esquerdo)",
//             },
//         },
//         {
//             titulo: "US CD",
//             justificativa:
//                 "Paciente do dor em cotovelo direito com manobra de Cozen e Mill dolorosas.\n" +
//                 "Investigação para Epincodilite.\n" +
//                 "Atentar para outros achados inflamatórios como derrame articular e sinovite.",
//             unitary: {
//                 codigo: "40901220",
//                 original: "US - Articular (por articulação)",
//                 mod: "Ultrassonografia Articular (cotovelo direito)",
//             },
//         },
//         {
//             titulo: "US CE",
//             justificativa:
//                 "Paciente do dor em cotovelo esquerdo com manobra de Cozen e Mill dolorosas.\n" +
//                 "Investigação para Epincodilite.\n" +
//                 "Atentar para outros achados inflamatórios como derrame articular e sinovite.",
//             unitary: {
//                 codigo: "40901220",
//                 original: "US - Articular (por articulação)",
//                 mod: "Ultrassonografia Articular (cotovelo esquerdo)",
//             },
//         },
//         {
//             titulo: "US PhD",
//             justificativa:
//                 "Investigação de Síndrome de Túnel do Carpo.\n" +
//                 "Atentar para outros achados, com cristais no ligamento" +
//                 "triangular fibrocartilagenoso inflamatórios como" +
//                 "derrame articular e sinovite.",
//             unitary: {
//                 codigo: "40901220",
//                 original: "US - Articular (por articulação)",
//                 mod: "Ultrassonografia Articular (punho direito)",
//             },
//         },
//         {
//             titulo: "US PhE",
//             justificativa:
//                 "Investigação de Síndrome de Túnel do Carpo.\n" +
//                 "Atentar para outros achados, com cristais no ligamento" +
//                 "triangular fibrocartilagenoso inflamatórios como" +
//                 "derrame articular e sinovite.",
//             unitary: {
//                 codigo: "40901220",
//                 original: "US - Articular (por articulação)",
//                 mod: "Ultrassonografia Articular (punho esquerdo)",
//             },
//         },
//         {
//             titulo: "US MD",
//             justificativa:
//                 "Investigação de processos inflamatórios, especialmente em carpo, MCF, IFP e IFD.",
//             unitary: {
//                 codigo: "40901220",
//                 original: "US - Articular (por articulação)",
//                 mod: "Ultrassonografia Articular (mão direita)",
//             },
//         },
//         {
//             titulo: "US ME",
//             justificativa:
//                 "Investigação de processos inflamatórios, especialmente em carpo, MCF, IFP e IFD.",
//             unitary: {
//                 codigo: "40901220",
//                 original: "US - Articular (por articulação)",
//                 mod: "Ultrassonografia Articular (mão esquerda)",
//             },
//         },
//     ]

//     const usmmii = [
//         {
//             titulo: "US QD",
//             justificativa:
//                 "Paciente do dor e limitação em quadril direito.\n" +
//                 "Atentar para achados inflamatórios articulares e extra-articulares.",
//             unitary: {
//                 codigo: "40901220",
//                 original: "US - Articular (por articulação)",
//                 mod: "Ultrassonografia Articular (quadril direito)",
//             },
//         },
//         {
//             titulo: "US QE",
//             justificativa:
//                 "Paciente do dor e limitação em quadril esquerdo.\n" +
//                 "Atentar para achados inflamatórios articulares e extra-articulares.",
//             unitary: {
//                 codigo: "40901220",
//                 original: "US - Articular (por articulação)",
//                 mod: "Ultrassonografia Articular (quadril esquerdo)",
//             },
//         },
//         {
//             titulo: "US JD",
//             justificativa:
//                 "Paciente do dor e limitação em joelho direito.\n" +
//                 "Atentar para achados inflamatórios articulares e extra-articulares, e," +
//                 "dentro dos limites da capacidade do exame, alterações estruturais.",
//             unitary: {
//                 codigo: "40901220",
//                 original: "US - Articular (por articulação)",
//                 mod: "Ultrassonografia Articular (joelho direito)",
//             },
//         },
//         {
//             titulo: "US JE",
//             justificativa:
//                 "Paciente do dor e limitação em joelho esquerdo.\n" +
//                 "Atentar para achados inflamatórios articulares e extra-articulares, e," +
//                 "dentro dos limites da capacidade do exame, alterações estruturais.",
//             unitary: {
//                 codigo: "40901220",
//                 original: "US - Articular (por articulação)",
//                 mod: "Ultrassonografia Articular (joelho esquerdo)",
//             },
//         },
//         {
//             titulo: "US TD",
//             justificativa:
//                 "Paciente do dor e limitação em tornozelo direito.\n" +
//                 "Atentar para achados inflamatórios articulares e extra-articulares.",
//             unitary: {
//                 codigo: "40901220",
//                 original: "US - Articular (por articulação)",
//                 mod: "Ultrassonografia Articular (tornozelo direito)",
//             },
//         },
//         {
//             titulo: "US TE",
//             justificativa:
//                 "Paciente do dor e limitação em tornozelo esquerdo.\n" +
//                 "Atentar para achados inflamatórios articulares e extra-articulares.",
//             unitary: {
//                 codigo: "40901220",
//                 original: "US - Articular (por articulação)",
//                 mod: "Ultrassonografia Articular (tornozelo esquerdo)",
//             },
//         },
//         {
//             titulo: "US PeD",
//             justificativa:
//                 "Investigação de processos inflamatórios, especialmente em " +
//                 "tarso, MTF, IFP e IFD, além de fascia plantar.",
//             unitary: {
//                 codigo: "40901220",
//                 original: "US - Articular (por articulação)",
//                 mod: "Ultrassonografia Articular (pé direito)",
//             },
//         },
//         {
//             titulo: "US PeE",
//             justificativa:
//                 "Investigação de processos inflamatórios, especialmente em " +
//                 "tarso, MTF, IFP e IFD, além de fascia plantar.",
//             unitary: {
//                 codigo: "40901220",
//                 original: "US - Articular (por articulação)",
//                 mod: "Ultrassonografia Articular (pé esquerdo)",
//             },
//         },
//     ]

//     const sendParamGroup = (param) => {
//         let list = Tuss().filter(t => param.tuss.includes(t.codigo))
//         handleProcedimentoPush(list, param.justificativa)
//     }


//     const sendParamUnitary = (param) => {
//         handleProcedimentoPush(param.unitary, param.justificativa)
//     }

//     return (
//         <>
//             <ListButtons
//                 list={grouptips}
//                 sendParam={sendParamGroup}
//             />
//             <ListButtons
//                 list={usmmss}
//                 sendParam={sendParamUnitary}
//             />
//             <ListButtons
//                 list={usmmii}
//                 sendParam={sendParamUnitary}
//             />
//         </>
//     )
// }

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

    // 

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