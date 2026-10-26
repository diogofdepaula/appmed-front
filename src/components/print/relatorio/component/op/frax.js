import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { LMEPrintContext } from '../../../../../pages/print/printjob';
import Fence from '../../../fence';

const BoxLinha = (props) => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: 1,
                    fontSize: 15
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
                    width: '1',
                    pl: 1,
                    borderRight: 1,
                    display: 'flex',
                    alignItems: 'center',
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
            <Fence titulo="5.2 - Risco de fratura (FRAX)">
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
                                    width: '30rem',
                                    borderRight: 1,
                                    pl: 1,
                                    display: 'flex',
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                }}
                            >
                                Risco de fratura FRAX
                            </Box>
                            <BoxLinha>
                                <BoxColunaA>
                                    Fratura maior (%)
                                </BoxColunaA>
                                <BoxColunaB>
                                    <React.Fragment>
                                        {lme.relatorio.fraxm}
                                    </React.Fragment>
                                </BoxColunaB>
                            </BoxLinha>
                            <BoxLinha>
                                <BoxColunaA>
                                    Fratura menor (%)
                                </BoxColunaA>
                                <BoxColunaC>
                                    <React.Fragment>
                                        {lme.relatorio.fraxq}
                                    </React.Fragment>
                                </BoxColunaC>
                            </BoxLinha>
                        </BoxLinha>
                    </Box>
                </Box>
            </Fence>
        </>
    )
}

export default Frax