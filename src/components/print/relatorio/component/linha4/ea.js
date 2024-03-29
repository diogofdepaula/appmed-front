import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { LMEPrintContext } from '../../../../../pages/print/printjob'
import { BoxCheckBox, BoxTitulo, Caixa } from '../../../components';

const CriteriosEA = () => {

    const lme = useContext(LMEPrintContext)

    const Asas = () => {
        return (
            <>
                <BoxTitulo titulo={'Para doença inicial (até 45 anos)'} />
                <BoxTitulo
                    titulo={'Critérios classificação ASAS para Espondiloartrites axiais ou periféricas'}
                    size={14}
                />
                <BoxTitulo
                    titulo={'Critério obrigatório'}
                    size={14}
                />
                <Box
                    sx={{
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        pl: 1,
                    }}
                >
                    <BoxCheckBox
                        item={lme.relatorio.eaaa}
                    >
                        Lombalgia inflamatória por, no mínimo, 3 meses e idade de início da doença até 45 anos
                    </BoxCheckBox>
                </Box>
                <BoxTitulo
                    titulo={'Critério possíveis'}
                    size={14}
                    top={1}
                />
                <Box
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'left',
                        pl: 1,
                    }}
                >
                    <BoxCheckBox
                        item={lme.relatorio.eaac}
                    >
                        Sacroileíte em exames de imagem e, pelo menos 1 característica de Espondiloartrite
                    </BoxCheckBox>
                    <BoxCheckBox
                        item={lme.relatorio.eaab}
                    >
                        HLA-B27 e 2 ou mais características de espondiloartrite
                    </BoxCheckBox>
                </Box>
            </>
        )
    }

    const Ny = () => {

        return (
            <>
                <BoxTitulo titulo={'Para doença estabelecida (acima de 45 anos)'} />
                <BoxTitulo
                    titulo={'Critério classificação modificados de NY para Espondilite Anquilosante'}
                    size={14}
                />
                <BoxTitulo
                    titulo={'Clínicos'}
                    size={14}
                />
                <Box
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'left',
                        pl: 1,
                    }}
                >
                    <BoxCheckBox
                        item={lme.relatorio.eanya}
                    >
                        Lombalgia inflamatória por três meses ou mais de duração
                    </BoxCheckBox>
                    <BoxCheckBox
                        item={lme.relatorio.eanyb}
                    >
                        Limitação dos movimentos da coluna lombar nos planos sagital e frontal
                    </BoxCheckBox>
                    <BoxCheckBox
                        item={lme.relatorio.eanyc}
                    >
                        Lombalgia inflamatória por três meses ou mais de duração
                    </BoxCheckBox>
                </Box>
                <BoxTitulo
                    titulo={'Radiográficos'}
                    size={14}
                    top={1}
                />
                <Box
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'left',
                        pl: 1,
                    }}
                >
                    <BoxCheckBox
                        item={lme.relatorio.eanyd}
                    >
                        Radiografia com detecção de sacroileíte bilateral graus 2 - 4.
                    </BoxCheckBox>
                    <BoxCheckBox
                        item={lme.relatorio.eanye}
                    >
                        Radiografia com detecção de sacroileíte unilateral graus 3 ou 4.
                    </BoxCheckBox>
                </Box>
            </>
        )
    }

    return (
        <>
            <Caixa
                largura={'53rem'}
            >
                <Asas />
            </Caixa>
            <Caixa>
                <Ny />
            </Caixa>
        </>
    )
}

export default CriteriosEA