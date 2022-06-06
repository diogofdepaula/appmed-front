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
                        mt: 2,
                        mr: 1,
                        mb: '-0.7rem',
                        border: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        //gap: 1,
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
                                width: '10rem'
                            }}
                        >
                            <BoxCheckBox
                                item={lme.relatorio.ppdresultado === "b"}
                            >
                                Acima de 5 mm
                            </BoxCheckBox>
                        </Box>
                        <BoxCheckBox
                            item={lme.relatorio.ppdresultado === "a"}
                        >
                            Até 5 mm
                        </BoxCheckBox>
                        Se PPD {'≥'} 5mm
                        Tratamento para TB latente
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
                            Alterado: {lme.relatorio.rxtoraxalteracao}
                        </BoxCheckBox>
                    </Box>
                    <Box
                        sx={{
                            display: 'inline-flex',
                            width: '100%',
                        }}
                    >
                        Possui imunidade para Hepatite B:
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
                        Se não, foi vacinado:
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
            </Fence>
        </>
    )
}

export default Linha9Relatorio

