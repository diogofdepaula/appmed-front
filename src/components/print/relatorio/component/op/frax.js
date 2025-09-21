
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
                    width: '50rem',
                    borderRight: 1,
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

const Frax = () => {

    const lme = useContext(LMEPrintContext)

    return (
        <>
            <Fence titulo="6.2 - Risco de fratura (FRAX)">
                <Box
                    sx={{
                        height: "100%",
                        flexGrow: 1,
                        border: 1,
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
                                    width: '50rem',
                                    borderRight: 1,
                                }}
                            >
                                <BoxTitulo titulo={'Risco de fratura'} />
                            </Box>
                            <Box
                                sx={{
                                    width: 1,
                                    borderRight: 1,
                                }}
                            >
                                <BoxTitulo titulo={'Fratura maior (%)'} />
                            </Box>
                            <Box
                                sx={{
                                    width: 1,
                                }}
                            >
                                <BoxTitulo titulo={'Fratura menor (%)'} />
                            </Box>
                        </BoxLinha>
                        <BoxLinha>
                            <BoxColunaA>
                                <Box
                                    sx={{
                                        pl: 1,
                                    }}
                                >
                                    FRAX
                                </Box>
                            </BoxColunaA>
                            <BoxColunaB>
                                <React.Fragment>
                                    {lme.relatorio.fraxm}
                                </React.Fragment>
                            </BoxColunaB>
                            <BoxColunaC>
                                <React.Fragment>
                                    {lme.relatorio.fraxq}
                                </React.Fragment>
                            </BoxColunaC>
                        </BoxLinha>
                    </Box>
                </Box>
            </Fence>
        </>
    )
}

export default Frax