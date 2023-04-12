import DeleteIcon from '@mui/icons-material/Delete';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Box, Button, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, TextField } from "@mui/material";
import { useRef, useState } from "react";
import ListProcedimentos from '../../components/listprocedimentos';
import RequisicaoLivre from './requisicaolivre';
import Tuss from '../../utils/tuss';

const requisicaoinicial = {
    indice: 0,
    justificativa: "",
    selecionados: [],
    convenio: "SUS",
}

const ListButtons = ({ list, sendParam }) => {

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 0.5,
                }}
            >
                {list.map((p, i) =>
                    <Button
                        size="small"
                        draggable
                        key={i}
                        onClick={() => sendParam(p)}
                    >
                        {p.titulo}
                    </Button>
                )}
            </Box>
        </>
    )
}

const Tips = ({ handleProcedimentoPush }) => {

    const grouptips = [
        {
            titulo: "LME",
            justificativa: "Exames a serem anexos ao LME",
            tuss: ["40304361", "40302504", "40302512", "40304370", "40308391"],
            sigtap: ["202020380", "202010643", "202010651", "202020150", "202030083"],
        },
        {
            titulo: "HOPCT",
            justificativa: "Exames de controle",
            tuss: ["40304361", "40302504", "40302512", "40301630", "40304370", "40308391", "40316521"],
            sigtap: ["202020380", "202010643", "202010651", "202010317", "202020150", "202030083", "202060250"],
        },
        {
            titulo: "HOPCTEFPPU",
            justificativa: "Exames de controle",
            tuss: ["40304361", "40302504", "40302512", "40301630", "40304370", "40308391", "40316521", "40311210", "40301761"],
            sigtap: ["202020380", "202010643", "202010651", "202010317", "202020150", "202030083", "202060250", "202010724", "202050017"],
        },
        {
            titulo: "LES",
            justificativa: "Exames de controle",
            tuss: ["40304361", "40302504", "40302512", "40301630", "40304370", "40308391", "40316521", "40311210", "40301761", "40306062", "40306704", "40306712"],
            sigtap: ["202020380", "202010643", "202010651", "202010317", "202020150", "202030083", "202060250", "202010724", "202050017", "202030121", "202030130", "202030270"],
        },
        {
            titulo: "LES24h",
            justificativa: "Exames de controle",
            tuss: ["40304361", "40302504", "40302512", "40301630", "40304370", "40308391", "40316521", "40311210", "40301761", "40306062", "40306704", "40306712", "40311180"],
            sigtap: ["202020380", "202010643", "202010651", "202010317", "202020150", "202030083", "202060250", "202010724", "202050017", "202030121", "202030130", "202030270", "202050114",],
        },
    ]

    const usmmss = [
        {
            titulo: "US OD",
            justificativa:
                "Paciente do dor e limitação em ombro direito.\n" +
                "Investigação para Síndrome do manguito Rotador.",
            unitary: {
                codigo: "40901220",
                original: "US - Articular (por articulação)",
                mod: "Ultrassonografia Articular (ombro direito)",
            },
        },
        {
            titulo: "US OE",
            justificativa:
                "Paciente do dor e limitação em ombro esquerdo.\n" +
                "Investigação para Síndrome do manguito Rotador.",
            unitary: {
                codigo: "40901220",
                original: "US - Articular (por articulação)",
                mod: "Ultrassonografia Articular (ombro esquerdo)",
            },
        },
        {
            titulo: "US CD",
            justificativa:
                "Paciente do dor em cotovelo direito com manobra de Cozen e Mill dolorosas.\n" +
                "Investigação para Epincodilite.\n" +
                "Atentar para outros achados inflamatórios como derrame articular e sinovite.",
            unitary: {
                codigo: "40901220",
                original: "US - Articular (por articulação)",
                mod: "Ultrassonografia Articular (cotovelo direito)",
            },
        },
        {
            titulo: "US CE",
            justificativa:
                "Paciente do dor em cotovelo esquerdo com manobra de Cozen e Mill dolorosas.\n" +
                "Investigação para Epincodilite.\n" +
                "Atentar para outros achados inflamatórios como derrame articular e sinovite.",
            unitary: {
                codigo: "40901220",
                original: "US - Articular (por articulação)",
                mod: "Ultrassonografia Articular (cotovelo esquerdo)",
            },
        },
        {
            titulo: "US PhD",
            justificativa:
                "Investigação de Síndrome de Túnel do Carpo.\n" +
                "Atentar para outros achados, com cristais no ligamento" +
                "triangular fibrocartilagenoso inflamatórios como" +
                "derrame articular e sinovite.",
            unitary: {
                codigo: "40901220",
                original: "US - Articular (por articulação)",
                mod: "Ultrassonografia Articular (punho direito)",
            },
        },
        {
            titulo: "US PhE",
            justificativa:
                "Investigação de Síndrome de Túnel do Carpo.\n" +
                "Atentar para outros achados, com cristais no ligamento" +
                "triangular fibrocartilagenoso inflamatórios como" +
                "derrame articular e sinovite.",
            unitary: {
                codigo: "40901220",
                original: "US - Articular (por articulação)",
                mod: "Ultrassonografia Articular (punho esquerdo)",
            },
        },
        {
            titulo: "US MD",
            justificativa:
                "Investigação de processos inflamatórios, especialmente em carpo, MCF, IFP e IFD.",
            unitary: {
                codigo: "40901220",
                original: "US - Articular (por articulação)",
                mod: "Ultrassonografia Articular (mão direita)",
            },
        },
        {
            titulo: "US ME",
            justificativa:
                "Investigação de processos inflamatórios, especialmente em carpo, MCF, IFP e IFD.",
            unitary: {
                codigo: "40901220",
                original: "US - Articular (por articulação)",
                mod: "Ultrassonografia Articular (mão esquerda)",
            },
        },
    ]

    const usmmii = [
        {
            titulo: "US QD",
            justificativa:
                "Paciente do dor e limitação em quadril direito.\n" +
                "Atentar para achados inflamatórios articulares e extra-articulares.",
            unitary: {
                codigo: "40901220",
                original: "US - Articular (por articulação)",
                mod: "Ultrassonografia Articular (quadril direito)",
            },
        },
        {
            titulo: "US QE",
            justificativa:
                "Paciente do dor e limitação em quadril esquerdo.\n" +
                "Atentar para achados inflamatórios articulares e extra-articulares.",
            unitary: {
                codigo: "40901220",
                original: "US - Articular (por articulação)",
                mod: "Ultrassonografia Articular (quadril esquerdo)",
            },
        },
        {
            titulo: "US JD",
            justificativa:
                "Paciente do dor e limitação em joelho direito.\n" +
                "Atentar para achados inflamatórios articulares e extra-articulares, e," +
                "dentro dos limites da capacidade do exame, alterações estruturais.",
            unitary: {
                codigo: "40901220",
                original: "US - Articular (por articulação)",
                mod: "Ultrassonografia Articular (joelho direito)",
            },
        },
        {
            titulo: "US JE",
            justificativa:
                "Paciente do dor e limitação em joelho esquerdo.\n" +
                "Atentar para achados inflamatórios articulares e extra-articulares, e," +
                "dentro dos limites da capacidade do exame, alterações estruturais.",
            unitary: {
                codigo: "40901220",
                original: "US - Articular (por articulação)",
                mod: "Ultrassonografia Articular (joelho esquerdo)",
            },
        },
        {
            titulo: "US TD",
            justificativa:
                "Paciente do dor e limitação em tornozelo direito.\n" +
                "Atentar para achados inflamatórios articulares e extra-articulares.",
            unitary: {
                codigo: "40901220",
                original: "US - Articular (por articulação)",
                mod: "Ultrassonografia Articular (tornozelo direito)",
            },
        },
        {
            titulo: "US TE",
            justificativa:
                "Paciente do dor e limitação em tornozelo esquerdo.\n" +
                "Atentar para achados inflamatórios articulares e extra-articulares.",
            unitary: {
                codigo: "40901220",
                original: "US - Articular (por articulação)",
                mod: "Ultrassonografia Articular (tornozelo esquerdo)",
            },
        },
        {
            titulo: "US PeD",
            justificativa:
                "Investigação de processos inflamatórios, especialmente em " +
                "tarso, MTF, IFP e IFD, além de fascia plantar.",
            unitary: {
                codigo: "40901220",
                original: "US - Articular (por articulação)",
                mod: "Ultrassonografia Articular (pé direito)",
            },
        },
        {
            titulo: "US PeE",
            justificativa:
                "Investigação de processos inflamatórios, especialmente em " +
                "tarso, MTF, IFP e IFD, além de fascia plantar.",
            unitary: {
                codigo: "40901220",
                original: "US - Articular (por articulação)",
                mod: "Ultrassonografia Articular (pé esquerdo)",
            },
        },
    ]

    const sendParamGroup = (param) => {
        let list = Tuss().filter(t => param.tuss.includes(t.codigo))
        handleProcedimentoPush(list, param.justificativa)
    }


    const sendParamUnitary = (param) => {
        handleProcedimentoPush(param.unitary, param.justificativa)
    }

    return (
        <>
            <ListButtons
                list={grouptips}
                sendParam={sendParamGroup}
            />
            <ListButtons
                list={usmmss}
                sendParam={sendParamUnitary}
            />
            <ListButtons
                list={usmmii}
                sendParam={sendParamUnitary}
            />
        </>
    )
}

const Requisicoes = ({ handleAdicionarRequisicao }) => {

    const [requisicao, setRequisicao] = useState(requisicaoinicial)
    const ind = useRef(1)

    const handleJustificativa = (event) => {
        setRequisicao({
            ...requisicao,
            indice: ind.current,
            justificativa: event.target.value
        })
    }

    const handleProcedimentoPush = (param, just) => {
        setRequisicao({
            ...requisicao,
            indice: ind.current,
            justificativa: just === undefined ? requisicao.justificativa : just,
            selecionados: requisicao.selecionados.concat(param)
        })
    }

    const handleAdicionar = () => {
        handleAdicionarRequisicao(requisicao)
        let just = requisicao.justificativa
        setRequisicao({
            indice: ind.current + 1,
            justificativa: just,
            selecionados: [],
            convenio: "SUS",
        })
        ind.current = ind.current + 1
    }

    const handleProcedimentoRemove = (param) => {
        setRequisicao({
            ...requisicao,
            indice: ind.current,
            selecionados: requisicao.selecionados.filter(w => w.original.toString().toLowerCase() !== param.original.toString().toLowerCase())
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
                        value={requisicao.justificativa}
                        label="Justificativa"
                        onChange={handleJustificativa}
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
                                {requisicao.selecionados.map((s, i) =>
                                    <ListItem
                                        key={i}
                                    >
                                        <ListItemText
                                            primary={s.mod}
                                        />
                                        <ListItemSecondaryAction>
                                            <IconButton
                                                size='small'
                                                onClick={() => handleProcedimentoRemove(s)}
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
                        handleProcedimentoPush={handleProcedimentoPush}
                    />
                    <ListProcedimentos
                        handleProcedimentoPush={handleProcedimentoPush}
                    />
                    <Tips
                        handleProcedimentoPush={handleProcedimentoPush}
                    />
                </Box>

            </Box>
        </>
    )
}

export default Requisicoes