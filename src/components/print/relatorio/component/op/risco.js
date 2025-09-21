
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
                    pl: 1,
                    fontSize: 15,
                    p: 1,
                    gap: 0.5
                }}
            >
                {props.children}
            </Box>
        </>
    )
}

const RiscoFratura = () => {

    const lme = useContext(LMEPrintContext)

    const riscos = [
        [
            'Baixo',
            [
                [
                    'a',
                    'Paciente sem diagnóstico de osteoporose (T-escore maior que -2,5 DP) e baixo risco de fratura no FRAX e sem fraturas prévias'
                ],
            ],
        ],
        [
            'Moderado',
            [
                [
                    'b',
                    'Osteopenia e sem fraturas osteoporóticas prévias',
                ]
            ]
        ],
        [
            'Alto',
            [
                [
                    'c',
                    'T-escore igual ou inferior a -2,5 DP',
                ],
                [
                    'd',
                    'T-escore entre -1,0 e -2,49 DP e alto risco de fratura no FRAX',
                ],
                [
                    'e',
                    'Fratura osteoporótica prévia',
                ]
            ]
        ],
        [
            'Muito alto',
            [
                [
                    'f',
                    'Fratura osteoporótica nos últimos 12 meses',
                ],
                [
                    'g',
                    'Múltiplas fraturas osteoporóticas',
                ],
                [
                    'h',
                    'Fraturas osteoporóticas durante o tratamento',
                ],
                [
                    'i',
                    'Fraturas osteoporóticas em uso de medicamento que altera o metabolismo ósseo',
                ],
                [
                    'j',
                    ' T-escore inferior a -3,0 DP',
                ],
                [
                    'k',
                    'Muito alto risco de fratura no FRAX',
                ],
                [
                    'l',
                    'Risco de queda aumentada',
                ],
            ]
        ]
    ]

    return (
        <>
            <Fence titulo="6.1 - Risco de fratura">
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
                        {riscos.map((d, i) =>
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
                                                    item={lme.relatorio.riscofx === m[0]}
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
            </Fence>
        </>
    )
}

export default RiscoFratura