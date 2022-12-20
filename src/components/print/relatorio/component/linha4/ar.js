import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { LMEPrintContext } from '../../../../../pages/print/printjob'
import { CriteriosLme } from '../../../../../utils/criteriosdoencas';
import { BoxCheckBox, BoxTitulo, Caixa } from '../../../components';

const CriteriosAR = () => {

    const lme = useContext(LMEPrintContext)

    const ArAcr = () => {
        const list = CriteriosLme(lme)[0]
        return (
            <>
                <BoxTitulo titulo={'Criterios ACR'} />
                <Box
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'left',
                        pl: 1,
                    }}
                >
                    {list.map((w, i) =>
                        <BoxCheckBox
                            key={i}
                            item={w[2]}
                        >
                            {w[0]}
                        </BoxCheckBox>
                    )}
                </Box>
            </>
        )
    }

    const ArAcrEular = () => {

        const criterios = CriteriosLme(lme)[1]

        return (
            <>
                <BoxTitulo titulo={'Critérios ACR-EULAR'} />
                <Box
                    sx={{
                        ml: 1,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box>
                        Acometimento articular: {criterios[0][0][0]} pontos
                    </Box>
                    <Box>
                        Sorologia: {criterios[1][0][0]} pontos
                    </Box>
                    <Box>
                        Provas de atividade inflamatória
                        <Box
                            sx={{
                                pl: 1,
                            }}
                        >
                            <BoxCheckBox
                                item={criterios[2][0][0]}
                            >
                                VHS e PCR normais (0 ponto)
                            </BoxCheckBox>
                            <BoxCheckBox
                                item={!criterios[2][0][0]}
                            >
                                VHS e PCR alterados (1 ponto)
                            </BoxCheckBox>
                        </Box>
                    </Box>
                    <Box>
                        Duração dos sintomas
                        <Box
                            sx={{
                                pl: 1,
                            }}
                        >
                            <BoxCheckBox
                                item={criterios[3][0][0]}
                            >
                                {'<'} 6 semanas (0 ponto)
                            </BoxCheckBox>
                            <BoxCheckBox
                                item={!criterios[3][0][0]}
                            >
                                {'≥'} 6 semanas (1 ponto)
                            </BoxCheckBox>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            fontWeight: 'bold',
                        }}
                    >
                        Pontuação {criterios[0][0][0] + criterios[1][0][0] + criterios[2][0][0] + criterios[3][0][0]}
                    </Box>
                </Box>
            </>
        )
    }

    const ProvaAtividadeInflamatoria = () => {
        return (
            <>
                <BoxTitulo titulo={'Provas de Atividade Inflamatória'} />
                <Box
                    sx={{
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <Box>
                        VHS: {lme.relatorio.vhs}
                    </Box>
                    <Box>
                        PCR: {lme.relatorio.pcr}
                    </Box>
                </Box>
            </>
        )
    }

    return (
        <>
            <Caixa>
                <ArAcr />
            </Caixa>
            <Caixa>
                <ArAcrEular />
            </Caixa>
            <Caixa>
                <ProvaAtividadeInflamatoria />
            </Caixa>
        </>
    )
}

export default CriteriosAR