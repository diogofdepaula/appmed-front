import { Box, Button } from "@mui/material";
import Tuss from '../../../utils/tuss';

const ListButtons = ({ list, sendParam }) => {

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 0.2,
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
        titulo: "1ª Rotina",
        justificativa: "Investigação de doença reumatológica",
        tuss: ["40304370", "40308391", "40304361", "40306860", "40308804", "40306852", "40314430", "40301150"],
        sigtap: ["202020380", "202020150", "202030083", "202030075", "202010120"],
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
            "Investigação para Síndrome do Manguito Rotador.",
        unitary: {
            codigo: "40901220",
            mod: "Ultrassonografia Articular (ombro direito)",
        },
    },
    {
        titulo: "US OE",
        justificativa:
            "Paciente do dor e limitação em ombro esquerdo.\n" +
            "Investigação para Síndrome do Manguito Rotador.",
        unitary: {
            codigo: "40901220",
            mod: "Ultrassonografia Articular (ombro esquerdo)",
        },
    },
    {
        titulo: "US ODouE",
        justificativa:
            "Paciente do dor e limitação em ombros.\n" +
            "Investigação para Síndrome do Manguito Rotador.",
        unitary: {
            codigo: "40901220",
            mod: "Ultrassonografia Articular (ombro direito ou " +
                "esquerdo -- fazer do lado que estiver pior no dia do exame)",
        },
    },
    {
        titulo: "US CD",
        justificativa:
            "Paciente do dor em cotovelo direito.\n" +
            "Investigação para Epincodilite.\n" +
            "Atentar para outros achados inflamatórios como derrame articular e sinovite.",
        unitary: {
            codigo: "40901220",
            mod: "Ultrassonografia Articular (cotovelo direito)",
        },
    },
    {
        titulo: "US CE",
        justificativa:
            "Paciente do dor em cotovelo esquerdo.\n" +
            "Investigação para Epincodilite.\n" +
            "Atentar para outros achados inflamatórios como derrame articular e sinovite.",
        unitary: {
            codigo: "40901220",
            mod: "Ultrassonografia Articular (cotovelo esquerdo)",
        },
    },
    {
        titulo: "US CDouE",
        justificativa:
            "Paciente do dor em cotovelos.\n" +
            "Investigação para Epincodilite.\n" +
            "Atentar para outros achados inflamatórios como derrame articular e sinovite.",
        unitary: {
            codigo: "40901220",
            mod: "Ultrassonografia Articular (cotovelo direito ou " +
            "esquerdo -- fazer do lado que estiver pior no dia do exame)",
        },
    },
    {
        titulo: "US PhD",
        justificativa:
            "Investigação de Síndrome de Túnel do Carpo.\n" +
            "Atentar para outros achados, com cristais no ligamento " +
            "triangular fibrocartilagenoso inflamatórios como " +
            "derrame articular e sinovite.",
        unitary: {
            codigo: "40901220",
            mod: "Ultrassonografia Articular (punho direito)",
        },
    },
    {
        titulo: "US PhE",
        justificativa:
            "Investigação de Síndrome de Túnel do Carpo.\n" +
            "Atentar para outros achados, com cristais no ligamento " +
            "triangular fibrocartilagenoso inflamatórios como " +
            "derrame articular e sinovite.",
        unitary: {
            codigo: "40901220",
            mod: "Ultrassonografia Articular (punho esquerdo)",
        },
    },
    {
        titulo: "US PhDouE",
        justificativa:
            "Investigação de Síndrome de Túnel do Carpo.\n" +
            "Atentar para outros achados, com cristais no ligamento " +
            "triangular fibro cartilagenoso inflamatórios como " +
            "derrame articular e sinovite.",
        unitary: {
            codigo: "40901220",
            mod: "Ultrassonografia Articular (punho direito ou " +
            "esquerdo -- fazer do lado que estiver pior no dia do exame)",
        },
    },
    {
        titulo: "US MD",
        justificativa:
            "Investigação de processos inflamatórios, especialmente em carpo, MCF, IFP e IFD.",
        unitary: {
            codigo: "40901220",
            mod: "Ultrassonografia Articular (mão direita)",
        },
    },
    {
        titulo: "US ME",
        justificativa:
            "Investigação de processos inflamatórios, especialmente em carpo, MCF, IFP e IFD.",
        unitary: {
            codigo: "40901220",
            mod: "Ultrassonografia Articular (mão esquerda)",
        },
    },
    {
        titulo: "US MDouE",
        justificativa:
            "Investigação de processos inflamatórios, especialmente em carpo, MCF, IFP e IFD.",
        unitary: {
            codigo: "40901220",
            mod: "Ultrassonografia Articular (mão direita ou " +
            "esquerda -- fazer do lado que estiver pior no dia do exame)",
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
            mod: "Ultrassonografia Articular (quadril esquerdo)",
        },
    },
    {
        titulo: "US QDouE",
        justificativa:
            "Paciente do dor e limitação em quadris.\n" +
            "Atentar para achados inflamatórios articulares e extra-articulares.",
        unitary: {
            codigo: "40901220",
            mod: "Ultrassonografia Articular (quadril direito ou " +
            "esquerdo -- fazer do lado que estiver pior no dia do exame)",
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
            mod: "Ultrassonografia Articular (joelho esquerdo)",
        },
    },
    {
        titulo: "US JDouE",
        justificativa:
            "Paciente do dor e limitação em joelhos.\n" +
            "Atentar para achados inflamatórios articulares e extra-articulares, e," +
            "dentro dos limites da capacidade do exame, alterações estruturais.",
        unitary: {
            codigo: "40901220",
            mod: "Ultrassonografia Articular (joelho direito ou " +
            "esquerdo -- fazer do lado que estiver pior no dia do exame)",
        },
    },
    {
        titulo: "US TD",
        justificativa:
            "Paciente do dor e limitação em tornozelo direito.\n" +
            "Atentar para achados inflamatórios articulares e extra-articulares.",
        unitary: {
            codigo: "40901220",
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
            mod: "Ultrassonografia Articular (tornozelo esquerdo)",
        },
    },
    {
        titulo: "US TDouE",
        justificativa:
            "Paciente do dor e limitação em tornozelos.\n" +
            "Atentar para achados inflamatórios articulares e extra-articulares.",
        unitary: {
            codigo: "40901220",
            mod: "Ultrassonografia Articular (tornozelo direito ou " +
            "esquerdo -- fazer do lado que estiver pior no dia do exame)",
        },
    },
    {
        titulo: "US PeD",
        justificativa:
            "Investigação de processos inflamatórios, especialmente em " +
            "tarso, MTF, IFP e IFD, além de fascia plantar.",
        unitary: {
            codigo: "40901220",
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
            mod: "Ultrassonografia Articular (pé esquerdo)",
        },
    },
    {
        titulo: "US PeDouE",
        justificativa:
            "Investigação de processos inflamatórios, especialmente em " +
            "tarso, MTF, IFP e IFD, além de fascia plantar.",
        unitary: {
            codigo: "40901220",
            mod: "Ultrassonografia Articular (pé direito ou " +
            "esquerdo -- fazer do lado que estiver pior no dia do exame)",
        },
    },
]

// const rxmmss = []

// const rxmmii = []

// const lab = []

const onetips = [
    {
        titulo: "FST",
        justificativa:
            "Paciente com ",
        unitary: {
            codigo: "50000160",
            mod: "Fisioterapia motora",
        },
    },
    {
        titulo: "NUT",
        justificativa:
            "Paciente com ",
        unitary: {
            codigo: "50000560",
            mod: "Consulta ambulatorial por nutricionista",
        },
    },
    {
        titulo: "PSC",
        justificativa:
            "Paciente com Fibromialgia com transtorno do humor e afeto.",
        unitary: {
            codigo: "50000470",
            mod: "Sessão de psicoterapia individual por psicólogo",
        },
    },
]

export const Tips = ({ handleProcedimentoPush }) => {

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
                list={onetips}
                sendParam={sendParamUnitary}
            />
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

export const MultiplesSimultaneos = ({ handleAdicinarMultiplos, ind }) => {

    const list = [
        {
            titulo: "Rotina BioL",
            multi: [
                {
                    indice: ind,
                    justificativa: "Exames de rotina antes de iniciar imunobiológico.",
                    selecionados: [
                        {
                            codigo: "40304361",
                            original: "Hemograma com contagem de plaquetas ou frações (eritrograma, leucograma, plaquetas)",
                            mod: "Hemograma",
                        },
                        {
                            codigo: "40304370",
                            original: "Hemossedimentação, (VHS) - pesquisa e/ou dosagem",
                            mod: "VHS",
                        },
                        {
                            codigo: "40308383",
                            original: "Proteína C reativa, qualitativa - pesquisa",
                            mod: "Proteína C reativa, qualitativa",
                        },
                        {
                            codigo: "40302504",
                            original: "Transaminase oxalacética (amino transferase aspartato) - pesquisa e/ou dosagem",
                            mod: "TGO",
                        },
                        {
                            codigo: "40302512",
                            original: "Transaminase pirúvica (amino transferase de alanina) - pesquisa e/ou dosagem",
                            mod: "TGP",
                        },
                        {
                            codigo: "40301630",
                            original: "Creatinina - pesquisa e/ou dosagem",
                            mod: "Creatinina",
                        },
                        {
                            codigo: "40307018",
                            original: "Hepatite B - HBSAG (AU, antígeno austrália) - pesquisa e/ou dosagem",
                            mod: "HBsAg",
                        },
                        {
                            codigo: "40306992",
                            original: "Hepatite B - HBSAC (anti-antígeno de superfície) - pesquisa e/ou dosagem",
                            mod: "Hepatite B - HBSAC (anti-antígeno de superfície)",
                        },
                        {
                            codigo: "40307026",
                            original: "Hepatite C - anti-HCV - pesquisa e/ou dosagem",
                            mod: "Hepatite C - anti-HCV",
                        },
                        {
                            codigo: "40307760",
                            original: "Sífilis - VDRL",
                            mod: "Sífilis - VDRL",
                        },
                        {
                            codigo: "40307182",
                            original: "HIV1+ HIV2, (determinação conjunta), pesquisa de anticorpos",
                            mod: "HIV1+ HIV2, (determinação conjunta), pesquisa de anticorpos",
                        },
                    ],
                },
                {
                    indice: ind + 1,
                    justificativa: "Exame de rotina antes de iniciar imunobiológico.",
                    selecionados: [
                        {
                            codigo: "40307638",
                            original: "PPD (tuberculina), IDeR",
                            mod: "PPD (teste tuberculínico)",
                        },
                    ],
                },
                {
                    indice: ind + 2,
                    justificativa: "Exame de rotina antes de iniciar imunobiológico.",
                    selecionados: [
                        {
                            codigo: "40805026",
                            original: "RX - Tórax - 2 incidências",
                            mod: "Radiografia de tórax - 2 incidências (PA e Perfil); ",
                        },
                    ],
                }
            ]

        }
    ]

    const sendParamMultiple = (param) => {
        handleAdicinarMultiplos(param.multi)
    }

    return (
        <>
            <ListButtons
                list={list}
                sendParam={sendParamMultiple}
            />
        </>
    )
}