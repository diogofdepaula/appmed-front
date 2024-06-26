import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { LMEPrintContext } from '../../../../../pages/print/printjob'
import FitText from '../../../../../pages/print/component/fittext';
import { DoençaCID } from '../../../../../utils/inquiries';
import { BoxCheckBox } from '../../../components';
import Fence from '../../../fence';
import MedicamentosAIJ from './aij';

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

const BoxTitulo = (props) => {
    return (
        <>
            <Box
                sx={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                }}
            >
                {props.titulo}
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
                    fontSize: 13
                }}
            >
                {props.children}
            </Box>
        </>
    )
}

const BoxColunaB = (props) => {

    return (
        <>
            <Box
                sx={{
                    width: '10rem',
                    borderTop: 1,
                    borderRight: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 13
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
                    width: '12rem',
                    borderTop: 1,
                    borderRight: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    pl: 1,
                    fontSize: 13
                }}
            >
                {props.children}
            </Box>
        </>
    )
}

const Linha6LME = () => {

    const lme = useContext(LMEPrintContext)
    // na lógica colocar somente os medicamentos que tem data de início igual a new Date()

    if (DoençaCID(lme.cid10) === 'aij') return <MedicamentosAIJ />

    const ar = [
        [
            'AINH',
            '------',
            [
                'Naproxeno'
            ],
        ],
        [
            'Glicocorticoide',
            '------',
            [
                'Prednisona'
            ],
        ],
        [
            'Imunossupressores',
            '------',
            [
                'Azatioprina',
                'Ciclosporina',
            ],
        ],
        [
            'MMCD Sintéticos',
            'Primeira',
            [
                'Metotrexato',
                'Sulfassalazina',
                'Leflunomida',
                'Cloroquina',
                'Hidroxicloroquina',
            ],
        ],
        [
            'MMCD Alvo-específico',
            'Segunda e terceira',
            [
                'Tofacitinibe',
                'Baricitinibe',
                'Upadacitinibe',
            ],
        ],
        [
            'MMCD Biológicos',
            'Segunda e terceira',
            [
                'Abatacepte',
                'Adalimumabe',
                'Certolizumabe',
                'Etanercepte',
                'Golimumabe',
                'Infliximabe',
                'Tocilizumabe',
            ],
        ],
        [
            'MMCD Biológicos',
            'Segunda e terceira',
            [
                'Rituximabe',
            ],
        ],
    ]

    const ea = [
        [
            'AINH',
            '------',
            [
                'Naproxeno'
            ],
        ],
        [
            'Imunossupressores',
            '------',
            [
                'Azatioprina',
                'Ciclosporina',
            ],
        ],
        [
            'MMCD Sintéticos',
            'Primeira',
            [
                'Metotrexato',
                'Sulfassalazina',
            ],
        ],
        [
            'MMCD Biológicos',
            'Segunda e terceira',
            [
                'Abatacepte',
                'Adalimumabe',
                'Etanercepte',
                'Certolizumabe',
                'Golimumabe',
                'Infliximabe',
                'Secuquinumabe',
            ],
        ],
    ]

    const ap = [
        [
            'AINH',
            '------',
            [
                'Naproxeno'
            ],
        ],
        [
            'Glicocorticoide',
            '------',
            [
                'Prednisona'
            ],
        ],
        [
            'Imunossupressores',
            '------',
            [
                'Ciclosporina',
            ],
        ],
        [
            'MMCD Sintéticos',
            'Primeira',
            [
                'Metotrexato',
                'Sulfassalazina',
                'Leflunomida',
            ],
        ],
        [
            'MMCD Biológicos',
            'Segunda e terceira',
            [
                'Adalimumabe',
                'Etanercepte',
                'Golimumabe',
                'Infliximabe',
            ],
        ],
        [
            'MMCD Biológicos',
            'Terceira',
            [
                'Certolizumabe',
                'Secuquinumabe',
            ],
        ],
        [
            'MMCD Alvo-específico',
            'Terceira',
            [
                'Tofacitinibe',
            ],
        ],
    ]

    const SetMedicamentos = () => {
        const Medicamentos = {
            'ar': ar,
            'ea': ea,
            'ap': ap,
            // 'aij': aij,
            default: []
        }
        return Medicamentos[DoençaCID(lme.cid10)] || Medicamentos.default
    }

    return (
        <>
            <Fence titulo="3 - Medicamento solicitado">
                <Box
                    sx={{
                        height: "100%",
                        flexGrow: 1,
                        border: 1,
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <BoxLinha>
                            <Box
                                sx={{
                                    width: '11rem',
                                    borderRight: 1,
                                }}
                            >
                                <BoxTitulo titulo={'Classe - Fármaco'} />
                            </Box>
                            <Box
                                sx={{
                                    width: '10rem',
                                    borderRight: 1,
                                }}
                            >
                                <BoxTitulo titulo={'Etapa de tratamento'} />
                            </Box>
                            <Box
                                sx={{
                                    width: '12rem',
                                    borderRight: 1,
                                }}
                            >
                                <BoxTitulo titulo={'Medicamento solicitado'} />
                            </Box>
                        </BoxLinha>
                        {SetMedicamentos().map((d, i) =>
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
                                    <BoxColunaB>
                                        {d[1]}
                                    </BoxColunaB>
                                    <BoxColunaC>
                                        {d[2].map((m, y) =>
                                            <React.Fragment
                                                key={y}
                                            >
                                                <BoxCheckBox
                                                    item={lme.prescricoes.find(p => p.medicamento.farmaco === m && p.emuso)}
                                                >
                                                    {m}
                                                </BoxCheckBox>
                                            </React.Fragment>
                                        )}
                                    </BoxColunaC>
                                </BoxLinha>
                            </React.Fragment>
                        )}
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                        }}
                    >
                        <BoxTitulo titulo={'Medicamentos utilizados anteriormente e tempo de uso'} />
                        <Box
                            sx={{
                                width: '100%',
                                height: '100%',
                                borderTop: 1,
                                // p: 1,
                            }}
                        >
                            <FitText
                                texto={lme.relatorio.utilizados}
                                inicial={8}
                                maxfont={14}
                                erro={50}
                                padding={1}
                                align='justify'
                            />
                        </Box>
                        {lme.relatorio.rxt &&
                            <Box
                                sx={{
                                    borderTop: 1,
                                    fontSize: 12,
                                    px: 0.5,
                                }}
                            >
                                Possui contraindicação absoluta, toxicidade ou falha
                                terapêutica aos MMCD biológicos anti-TNF e não
                                anti-TNF e MMDC alvo-específico ( X ) Sim (   ) Não
                            </Box>
                        }
                    </Box>
                </Box>
            </Fence>
        </>
    )
}

export default Linha6LME