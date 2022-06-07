import { Box } from '@mui/material'
import React, { useContext } from 'react'
import { LMEPrintContext } from '../..'
import { BoxCheckBox } from '../../../components'
import Fence from '../../../fence'

const Linha9Relatorio = () => {

    const lme = useContext(LMEPrintContext)

    return (
        <>
            <Fence titulo={'5 - Para solicitação dos medicamentos MMCD biológicos e alvo-específico'}>
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        border: 1,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box
                        sx={{
                            display: 'inline-flex',
                            width: '100%',
                            borderBottom: 1,
                        }}
                    >
                        <Box
                            sx={{
                                width: '6rem'
                            }}
                        >
                            PPD:
                        </Box>
                        <Box
                            sx={{
                                width: '7rem'
                            }}
                        >
                            <BoxCheckBox
                                item={lme.relatorio.ppdresultado === "c"}
                            >
                                Não reator
                            </BoxCheckBox>
                        </Box>
                        <Box
                            sx={{
                                width: '9rem'
                            }}
                        >
                            <BoxCheckBox
                                item={lme.relatorio.ppdresultado === "b"}
                            >
                                Acima de 5 mm
                            </BoxCheckBox>
                        </Box>
                        <Box
                            sx={{
                                width: '9rem'
                            }}
                        >
                            <BoxCheckBox
                                item={lme.relatorio.ppdresultado === "a"}
                            >
                                Até 5 mm
                            </BoxCheckBox>
                        </Box>
                        Se PPD {'≥'} 5mm, fez tratamento para TB latente
                        <Box
                            sx={{
                                ml: 1,
                                display: 'inline-flex',
                                gap: 1,
                            }}
                        >
                            <BoxCheckBox
                                item={lme.relatorio.ppdtratamento}
                            >
                                Sim
                            </BoxCheckBox>
                            <BoxCheckBox
                                item={!lme.relatorio.ppdtratamento}
                            >
                                Não
                            </BoxCheckBox>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'inline-flex',
                            width: '100%',
                            borderBottom: 1,
                        }}
                    >
                        <Box
                            sx={{
                                width: '6rem'
                            }}
                        >
                            Rx de Tórax:
                        </Box>
                        <Box
                            sx={{
                                width: '7rem'
                            }}
                        >
                            <BoxCheckBox
                                item={lme.relatorio.rxtoraxresultado === "a"}
                            >
                                Normal
                            </BoxCheckBox>
                        </Box>
                        <BoxCheckBox
                            item={lme.relatorio.rxtoraxresultado === "b"}
                        >
                            Alterado{lme.relatorio.rxtoraxresultado === "b" && (': ' + lme.relatorio.rxtoraxalteracao)}
                        </BoxCheckBox>
                    </Box>
                    <Box
                        sx={{
                            display: 'inline-flex',
                            width: '100%',
                        }}
                    >
                        Possui imunidade para Hepatite B:
                        <Box
                            sx={{
                                ml: 1,
                                mr: 2,
                                display: 'inline-flex',
                                gap: 1,
                            }}
                        >
                            <BoxCheckBox
                                item={lme.relatorio.hepatiteimunidade}
                            >
                                Sim
                            </BoxCheckBox>
                            <BoxCheckBox
                                item={!lme.relatorio.hepatiteimunidade}
                            >
                                Não
                            </BoxCheckBox>
                        </Box>
                        Se não, foi vacinado:
                        <Box
                            sx={{
                                ml: 1,
                                display: 'inline-flex',
                                gap: 1,
                            }}
                        >
                            <BoxCheckBox
                                item={lme.relatorio.hepatitevacina}
                            >
                                Sim
                            </BoxCheckBox>
                            <BoxCheckBox
                                item={!lme.relatorio.hepatitevacina}
                            >
                                Não
                            </BoxCheckBox>
                        </Box>
                    </Box>
                </Box>
            </Fence>
        </>
    )
}

export default Linha9Relatorio

