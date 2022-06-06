import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { LMEPrintContext } from '../..';
import { BoxCheckBox, BoxTitulo, Caixa } from '../../../components';

const CriteriosAP = () => {

    const lme = useContext(LMEPrintContext)

    const somatoria =
        (lme.relatorio.apa ? 2 : 0) +
        (lme.relatorio.apb ? 1 : 0) +
        (lme.relatorio.apc ? 1 : 0) +
        (lme.relatorio.apd ? 1 : 0) +
        (lme.relatorio.ape ? 1 : 0) +
        (lme.relatorio.apf ? 1 : 0) +
        (lme.relatorio.apg ? 1 : 0)

    const Asas = () => {
        return (
            <>
                <BoxTitulo titulo={'Critérios Caspar'} />
                <Box
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        pl: 1,
                    }}
                >
                    <BoxCheckBox
                        item={lme.relatorio.apa}
                    >
                        Psoríase atual (2 pontos)
                    </BoxCheckBox>
                    <BoxCheckBox
                        item={lme.relatorio.apb}
                    >
                        História pessoal de psoríase (1 ponto)
                    </BoxCheckBox>
                    <BoxCheckBox
                        item={lme.relatorio.apc}
                    >
                        História familiar de psoríase (familiar de 1º ou 2º grau) (1 ponto)
                    </BoxCheckBox>
                    <BoxCheckBox
                        item={lme.relatorio.apd}
                    >
                        Distrofia ungueal psoriásica típica (1 ponto)
                    </BoxCheckBox>
                    <BoxCheckBox
                        item={lme.relatorio.ape}
                    >
                        Fator reumatoide negativo (1 ponto)
                    </BoxCheckBox>
                    <BoxCheckBox
                        item={lme.relatorio.apf}
                    >
                        História de dactilite ou dactilite atual (1 ponto)
                    </BoxCheckBox>
                    <BoxCheckBox
                        item={lme.relatorio.apg}
                    >
                        Formação óssea justa-articular à radiografia simples de mão ou pés (1 ponto)
                    </BoxCheckBox>
                    <Box
                        sx={{
                            ml: 2
                        }}
                    >
                        Somatória da pontuação: {somatoria} pontos
                    </Box>
                </Box>
            </>
        )
    }

    const Ny = () => {

        return (
            <>
                <BoxTitulo titulo={'Classificação da doença inflamatória articular'} />
                <Box
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        borderBottom: 1,
                        pl: 1,
                    }}
                >
                    <BoxCheckBox
                        item={lme.relatorio.apperiferica}
                    >
                        Artrite periférica
                    </BoxCheckBox>
                    <BoxCheckBox
                        item={lme.relatorio.apcaxial}
                    >
                        Artrite axial
                    </BoxCheckBox>
                    <BoxCheckBox
                        item={lme.relatorio.apcentesite}
                    >
                        Entesite
                    </BoxCheckBox>
                </Box>
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
                <Asas />
            </Caixa>
            <Caixa
                largura={'36rem'}
            >
                <Ny />
            </Caixa>
        </>
    )
}

export default CriteriosAP