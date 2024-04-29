import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { DlqiTf } from '../inputs';

const Questionary = [ // interface no TS
    {
        nome: "dlqi1",
        pergunta: "O quanto sua pele foi afetada durante a semana que passou por causa de coceira, inflamação, dor ou queimação?",
        resposta: [
            {
                valor: 3,
                label: "realmente muito",
            }, {
                valor: 2,
                label: "bastante",
            }, {
                valor: 1,
                label: "um pouco",
            }, {
                valor: 0,
                label: "nada",
            },
        ]
    },
    {
        nome: "dlqi2",
        pergunta: "Quanto constrangimento ou outro tipo de limitação foi causado por sua pele durante a semana que passou?",
        resposta: [
            {
                valor: 3,
                label: "realmente muito",
            }, {
                valor: 2,
                label: "bastante",
            }, {
                valor: 1,
                label: "um pouco",
            }, {
                valor: 0,
                label: "nada",
            },
        ]
    },
    {
        nome: "dlqi3",
        pergunta: "O quanto sua pele interferiu nas suas atividades de compras ou passeios, em casa ou locais públicos, durante a semana que passou?",
        resposta: [
            {
                valor: 3,
                label: "realmente muito",
            }, {
                valor: 2,
                label: "bastante",
            }, {
                valor: 1,
                label: "um pouco",
            }, {
                valor: 0,
                label: "nada",
            }, {
                valor: 999,
                label: "sem relevância",
            },
        ]
    },
    {
        nome: "dlqi4",
        valor: 0,
        pergunta: "Até que ponto sua pele interferiu na semana que passou com relação às roupas que você normalmente usa?",
        resposta: [
            {
                valor: 3,
                label: "realmente muito",
            }, {
                valor: 2,
                label: "bastante",
            }, {
                valor: 1,
                label: "um pouco",
            }, {
                valor: 0,
                label: "nada",
            }, {
                valor: 999,
                label: "sem relevância",
            },]
    },
    {
        nome: "dlqi5",
        pergunta: "O quanto sua pele afetou qualquer uma das suas atividades sociais ou de lazer na semana que passou?",
        resposta: [
            {
                valor: 3,
                label: "realmente muito",
            }, {
                valor: 2,
                label: "bastante",
            }, {
                valor: 1,
                label: "um pouco",
            }, {
                valor: 0,
                label: "nada",
            }, {
                valor: 999,
                label: "sem relevância",
            },
        ]
    },
    {
        nome: "dlqi6",
        pergunta: "Quão difícil foi para você praticar esportes durante a semana que passou?",
        resposta: [
            {
                valor: 3,
                label: "realmente muito",
            }, {
                valor: 2,
                label: "bastante",
            }, {
                valor: 1,
                label: "um pouco",
            }, {
                valor: 0,
                label: "nada",
            }, {
                valor: 999,
                label: "sem relevância",
            },
        ],
    },
    {
        nome: "dlqi7",
        pergunta: "Sua pele impediu que você fosse trabalhar ou estudar durante a semana que passou?",
        resposta: [
            {
                valor: 3,
                label: "sim",
            }, {
                valor: 0,
                label: "não",
            }, {
                valor: 999,
                label: "sem relevância",
            },
        ]
    },
    {
        nome: "dlqi7b",
        pergunta: "Em caso negativo, sua pele já foi problema para você no trabalho ou na vida escolar?",
        resposta: [
            {
                valor: 2,
                label: "bastante",
            }, {
                valor: 1,
                label: "um pouco",
            }, {
                valor: 0,
                label: "nada",
            },]
    },
    {
        nome: "dlqi8",
        pergunta: "Quão problemática se tornou sua relação com o(a) parceiro(a), amigos próximos ou parentes, por causa de sua pele?",
        resposta: [
            {
                valor: 3,
                label: "realmente muito",
            }, {
                valor: 2,
                label: "bastante",
            }, {
                valor: 1,
                label: "um pouco",
            }, {
                valor: 0,
                label: "nada",
            }, {
                valor: 999,
                label: "sem relevância",
            },
        ]
    },
    {
        nome: "dlqi9",
        pergunta: "Até que ponto sua pele criou dificuldades na sua vida sexual na semana que passou?",
        resposta: [
            {
                valor: 3,
                label: "realmente muito",
            }, {
                valor: 2,
                label: "bastante",
            }, {
                valor: 1,
                label: "um pouco",
            }, {
                valor: 0,
                label: "nada",
            }, {
                valor: 999,
                label: "sem relevância",
            },
        ]
    },
    {
        nome: "dlqi10",
        pergunta: ". Até que ponto seu tratamento dermatológico criou problemas para você na semana que passou?",
        resposta: [
            {
                valor: 3,
                label: "realmente muito",
            }, {
                valor: 2,
                label: "bastante",
            }, {
                valor: 1,
                label: "um pouco",
            }, {
                valor: 0,
                label: "nada",
            }, {
                valor: 999,
                label: "sem relevância",
            },
        ]
    },
]

export const CalcPso = () => {

    const [index, setIndex] = useState({
        dlqi1: 0,
        dlqi2: 0,
        dlqi3: 0,
        dlqi4: 0,
        dlqi5: 0,
        dlqi6: 0,
        dlqi7: 0,
        dlqi7b: 0,
        dlqi8: 0,
        dlqi9: 0,
        dlqi10: 0,
    })

    const [dlqi, setDlqi] = useState()

    const calcdlqi = (dlqi1, dlqi2, dlqi3, dlqi4, dlqi5, dlqi6, dlqi7, dlqi7b, dlqi8, dlqi9, dlqi10) => {
        return ([dlqi1, dlqi2, dlqi3, dlqi4, dlqi5, dlqi6, dlqi7, dlqi7b, dlqi8, dlqi9, dlqi10]
            .reduce((a, b) => parseInt(a) + (parseInt(b) === 999 ? 0 : parseInt(b)) ))
    }

    useEffect(() => {
        setDlqi(calcdlqi(index.dlqi1, index.dlqi2, index.dlqi3, index.dlqi4, index.dlqi5, index.dlqi6, index.dlqi7, index.dlqi7b, index.dlqi8, index.dlqi9, index.dlqi10))
    }, [index])

    const handleChange = event => {
        setIndex({ ...index, [event.target.name]: event.target.value })
    }

    return (
        <>
            <Box
                sx={{
                    display: 'inline-flex',
                    flexDirection: 'column',
                    // bgcolor: "red",
                    gap: 3,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 3,
                        typography: 'body1'
                    }}
                >
                    <Box>DLQI {"de " + dlqi}</Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    {Questionary.map((p, i) =>
                        <DlqiTf
                            key={i + 1000}
                            quest={p}
                            sete={index.dlqi7}
                            handleChange={handleChange}
                        />
                    )}
                </Box>
            </Box>
        </>
    )
}