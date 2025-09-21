
import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { LMEPrintContext } from '../../../../../pages/print/printjob';
import { BoxCheckBox } from '../../../components';
import Fence from '../../../fence';

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
            'a',
            'Doença renal crônica estágio 4 ou 5'
        ],
        [
            'b',
            'Dificuldade de deglutição dos bisfosfonatos orais (risedronato e alendronato)',
        ],
        [
            'c',
            'Intolerância ou contraindicação aos bisfosfonatos (risedronato, alendronato, pamidronato e ácido zoledrônico)',
        ],
        [
            'd',
            'Alto risco de câncer de mama',
        ],
        [
            'e',
            'Osteonecrose de mandíbula',
        ]
    ]

    return (
        <>
            <Fence titulo="7 - Informações clínicas - assinalar caso o paciente apresente alguma das condições abaixo">
                <Box
                    sx={{
                        height: "100%",
                        flexGrow: 1,
                        border: 1,
                        borderTop: 0,
                        display: 'flex',
                        flexDirection: 'row',
                        mt: 1
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
                                {/* <BoxLinha> */}
                                    <BoxColunaC>
                                            <React.Fragment>
                                                <BoxCheckBox
                                                    item={lme.relatorio.clinicaop === d[0]}
                                                >
                                                    {d[1]}
                                                </BoxCheckBox>
                                            </React.Fragment>
                                    </BoxColunaC>
                                {/* </BoxLinha> */}
                            </React.Fragment>
                        )}
                    </Box>
                </Box>
            </Fence>
        </>
    )
}

export default Condicoes