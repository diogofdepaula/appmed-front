import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { LMEPrintContext } from '../../../../../pages/print/printjob';
import { BoxTitulo } from '../../../components';
import Fence from '../../../fence';

const BoxLinha = (props) => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: 1,
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
                    width: '12rem',
                    pl: 1,
                    borderRight: 1,
                    borderBottom: 1,
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: 15
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
                    width: 1,

                    borderRight: 1,
                    borderBottom: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 15
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
                    display: 'flex',
                    borderBottom: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    fontSize: 15
                }}
            >
                {props.children}
            </Box>
        </>
    )
}

const HxFratura = () => {

    const lme = useContext(LMEPrintContext)

    return (
        <>
            <Fence titulo="3 - Histórico de fraturas Osteoporóticas">
                <Box
                    sx={{
                        height: "100%",
                        flexGrow: 1,
                        border: 1,
                        borderBottom: 0,
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
                        <BoxLinha>
                            <Box
                                sx={{
                                    width: 1,
                                }}
                            >
                                <BoxTitulo titulo={'Quantidade, osso acometido e datas das ocorrências'} />
                            </Box>
                        </BoxLinha>
                        <BoxLinha>
                            <BoxLinha>
                                <BoxColunaA>
                                    Fraturas maiores
                                </BoxColunaA>
                                <BoxColunaB>
                                    <React.Fragment>
                                        {lme.relatorio.fxmaiores}
                                    </React.Fragment>
                                </BoxColunaB>
                            </BoxLinha>
                            <BoxLinha>
                                <BoxColunaA>
                                    Fraturas menores
                                </BoxColunaA>
                                <BoxColunaC>
                                    <React.Fragment>
                                        {lme.relatorio.fxmenores}
                                    </React.Fragment>
                                </BoxColunaC>
                            </BoxLinha>
                        </BoxLinha>
                    </Box>
                </Box >
            </Fence >
        </>
    )
}

export default HxFratura