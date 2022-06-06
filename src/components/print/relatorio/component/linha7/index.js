import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { LMEPrintContext } from '../..';
import { DoençaCID } from '../../../../../utils/inquiries';
import { BoxCheckBox } from '../../../components';
import Fence from '../../../fence';
import Field from '../../../field';

const Linha7Relatorio = () => {

    const lme = useContext(LMEPrintContext)

    const Inducao = () => {
        return (
            <>
                <Field
                    dados={{
                        titulo: "Já realizou dose de indução",
                        alinhamento: "left",
                        texto:
                            <>
                                <BoxCheckBox
                                    item={lme.relatorio.inducao === 'a'}
                                >
                                    Sim
                                </BoxCheckBox>
                                <BoxCheckBox
                                    item={lme.relatorio.inducao === 'b'}
                                >
                                    Não
                                </BoxCheckBox>
                                <BoxCheckBox
                                    item={lme.relatorio.inducao === 'c'}
                                >
                                    Não se aplica
                                </BoxCheckBox>
                            </>
                    }}
                />
            </>
        )
    }

    const TratamentoPrevio = () => {

        if (DoençaCID(lme.cid10) !== 'ap') return <></>

        return (
            <>
                <BoxCheckBox
                    item={lme.relatorio.ttopreviobiologico}
                >
                    Paciente já realizou tratamento com MMCD biológico de 1ª linha por 12 semanas ou teve perda de resposta.
                </BoxCheckBox>
            </>
        )
    }

    const AineSecuquinumabe = () => {

        if (DoençaCID(lme.cid10) !== 'ea') return <></>

        return (
            <>
                <BoxCheckBox
                    item={lme.relatorio.aine}
                >
                    Paciente realizou tratamento com AINH por no mínimo 3 meses.
                </BoxCheckBox>
                <BoxCheckBox
                    item={lme.relatorio.sqm}
                >
                    Para Secuquinumabe: paciente apresentou falha ou hipersensibilidade
                    com Anti-TNF em dose adequada por 6 meses
                </BoxCheckBox>
            </>
        )
    }

    return (
        <>
            <Fence titulo={"3.1 - Obrigatório para MMCD Biológico"}>
                <Box
                    sx={{
                        mb: '-1rem'
                    }}
                >

                    <Box
                        sx={{
                            display: 'inline-flex',
                        }}
                    >
                        <Field
                            dados={{
                                titulo: "Dose prescrita",
                                texto: lme.relatorio.dose,
                                alinhamento: "center",
                                largura: "7rem",
                            }}
                        />
                        <Inducao />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            mt: 2,
                        }}
                    >
                        <TratamentoPrevio />
                        <AineSecuquinumabe />
                    </Box>
                </Box>
            </Fence>
        </>
    )


}

export default Linha7Relatorio