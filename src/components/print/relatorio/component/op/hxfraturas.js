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
                    width: '11rem',
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
            <Fence titulo="4 - Histórico de fraturas Osteoporóticas">
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
                                    width: '11rem',
                                    borderRight: 1,
                                }}
                            >
                                <BoxTitulo titulo={'Tipo'} />
                            </Box>
                            <Box
                                sx={{
                                    width: 1,
                                }}
                            >
                                <BoxTitulo titulo={'Quantidade, osso acometido e datas das ocorrências'} />
                            </Box>
                        </BoxLinha>
                        <BoxLinha>
                            <BoxColunaA>
                                <Box
                                    sx={{
                                        pl: 1,
                                    }}
                                >
                                    Fraturas maiores
                                </Box>
                            </BoxColunaA>
                            <BoxColunaC>
                                <React.Fragment>
                                    {lme.relatorio.fxmaiores}
                                </React.Fragment>
                            </BoxColunaC>
                        </BoxLinha>
                        <BoxLinha>
                            <BoxColunaA>
                                <Box
                                    sx={{
                                        pl: 1,
                                    }}
                                >
                                    Fraturas menores
                                </Box>
                            </BoxColunaA>
                            <BoxColunaC>
                                <React.Fragment>
                                    {lme.relatorio.fxmenores}
                                </React.Fragment>
                            </BoxColunaC>
                        </BoxLinha>
                    </Box>
                </Box>
            </Fence>
        </>
    )
}

export default HxFratura