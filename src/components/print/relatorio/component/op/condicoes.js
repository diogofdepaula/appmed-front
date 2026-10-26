import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { LMEPrintContext } from '../../../../../pages/print/printjob';
import { BoxCheckBox } from '../../../components';
import Fence from '../../../fence';

const BoxLinha = (props) => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                {props.children}
            </Box>
        </>
    )
}

const BoxColunaA = (props) => {
    return (
        <>
            <Box
                sx={{
                    width: '11rem',
                    borderTop: 1,
                    borderRight: 1,
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: 15,
                    p: 1
                }}
            >
                {props.children}
            </Box>
        </>
    )
}

const BoxColunaC = (props) => {
    return (
        <>
            <Box
                sx={{
                    width: 1,
                    borderTop: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    pl: 1,
                    pr: 1,
                    fontSize: 13
                }}
            >
                {props.children}
            </Box>
        </>
    )
}

const Condicoes = () => {

    const lme = useContext(LMEPrintContext)

    const condicoes = [
        [
            'Ácido Zoledrônico',
            [
                [
                    'b',
                    'Dificuldade de deglutição dos bisfosfonatos orais (risedronato e alendronato).',
                ],
            ]
        ],
        [
            'Calcitonina',
            [
                [
                    'e',
                    'Osteonecrose de mandíbula.',
                ],
                [
                    'f',
                    'Fratura atípica.',
                ],
                [
                    'g',
                    'Contraindicação absoluta aos demais medicamentos.',
                ],
            ]
        ],
        [
            'Calcitriol',
            [
                [
                    'a',
                    'Pacientes renais crônicos com depuração de creatinina endógena (DCE) menor ou igual a 30 mL/min, com osteomalácia hipofosfatêmica ou por deficiência de 1-alfa-hidroxilase, com insuficiência hepática ou hipoparatireoidismo.'
                ],
            ]
        ],
        [
            'Raloxifeno',
            [
                [
                    'h',
                    'Período pós menopausa, com baixo risco de tromboembolismo venoso e não estar em uso concomitante de estrógenos.'
                ],
                [
                    'c',
                    'Intolerância ou contraindicação aos bisfosfonatos (risedronato, alendronato, pamidronato e ácido zoledrônico).',
                ],
                [
                    'i',
                    'Osteonecrose de mandíbula ou fratura atípica.',
                ],
                [
                    'd',
                    'Alto risco de câncer de mama.',
                ],
            ]
        ],
        [
            'Romosozumabe',
            [
                [
                    'j',
                    'Presença de uma fratura incidente após tempo mínimo de tratamento de 1 ano com agente preconizado no PCDT e perda significativa de densidade mineral óssea (redução de mais de 5% em qualquer sítio no intervalo avaliado), considerando boa adesão ao tratamento e ausência de causas secundárias de perda de massa óssea.',
                ],
                [
                    'k',
                    'Presença de duas ou mais fraturas incidentes por fragilidade em vigência de tratamento para osteoporose.',
                ],
            ]
        ],
    ]

    return (
        <>
            <Fence titulo="6 - Informações clinicas">
                <Box
                    sx={{
                        height: "100%",
                        flexGrow: 1,
                        border: 1,
                        borderTop: 0,
                        display: 'flex',
                        flexDirection: 'row',
                        mt: 1,
                    }}
                >
                    <Box
                        sx={{
                            width: 1,
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        {condicoes.map((d, i) =>
                            <React.Fragment
                                key={i}
                            >
                                <BoxLinha>
                                    <BoxColunaA>
                                        <Box
                                            sx={{
                                                ml: 1,
                                            }}
                                        >
                                            {d[0]}
                                        </Box>
                                    </BoxColunaA>
                                    <BoxColunaC>
                                        {d[1].map((m, y) =>
                                            <React.Fragment
                                                key={y}
                                            >
                                                <BoxCheckBox
                                                    item={lme.relatorio.clinicaop === m[0]}
                                                >
                                                    {m[1]}
                                                </BoxCheckBox>
                                            </React.Fragment>
                                        )}
                                    </BoxColunaC>
                                </BoxLinha>
                            </React.Fragment>
                        )}
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: 1,
                        border: 1,
                        pl: 1,
                        fontSize: 15,
                    }}
                >
                    <BoxLinha>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                ml: 1,
                                mr: 1,
                            }}
                        >
                            Paciente na pós menopausa
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: 1,
                            }}
                        >
                            <BoxCheckBox
                                item={lme.relatorio.menopausa}
                            >
                                Sim
                            </BoxCheckBox>
                            <BoxCheckBox
                                item={lme.relatorio.menopausa}
                            >
                                Não
                            </BoxCheckBox>
                        </Box>
                    </BoxLinha>
                </Box>
            </Fence>
        </>
    )
}

export default Condicoes