
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

const Dxa = () => {

    const lme = useContext(LMEPrintContext)

    return (
        <>
            <Fence titulo="5 - Densitometria óssea">
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
                                <BoxTitulo titulo={'Sítio'} />
                            </Box>
                            <Box
                                sx={{
                                    width: 1,
                                    borderRight: 1,
                                }}
                            >
                                <BoxTitulo titulo={'L2 - L4'} />
                            </Box>
                            <Box
                                sx={{
                                    width: 1,
                                    borderRight: 1,
                                }}
                            >
                                <BoxTitulo titulo={'CF'} />
                            </Box>
                            <Box
                                sx={{
                                    width: 1,
                                }}
                            >
                                <BoxTitulo titulo={'FT'} />
                            </Box>
                        </BoxLinha>
                        <BoxLinha>
                            <Box
                                sx={{
                                    width: '50rem',
                                    borderRight: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: 15
                                }}
                            >
                                <Box
                                    sx={{
                                        pl: 1,
                                    }}
                                >
                                    T-escore (desvio-padrão)
                                </Box>
                            </Box>
                            <BoxColunaB>
                                <React.Fragment>
                                    {lme.relatorio.l2l4}
                                </React.Fragment>
                            </BoxColunaB>
                            <BoxColunaB>
                                <React.Fragment>
                                    {lme.relatorio.cf}
                                </React.Fragment>
                            </BoxColunaB>
                            <BoxColunaC>
                                <React.Fragment>
                                    {lme.relatorio.ft}
                                </React.Fragment>
                            </BoxColunaC>
                        </BoxLinha>
                    </Box>
                </Box>
            </Fence>
        </>
    )
}

export default Dxa