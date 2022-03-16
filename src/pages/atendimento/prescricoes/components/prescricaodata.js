import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../..';
import { DataDDMMYYY, DateDifferenceAnotherDay, DateDifferenceToday } from '../../../../utils/tempo';

const PrescricaoData = () => {

    const { prescricaoOnDuty } = useContext(AtendimentoContext)

    if (!prescricaoOnDuty) return <div />

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    borderWidth: 1,
                    borderColor: 'lightgray',
                    borderStyle: 'solid',
                    p: 1,
                }}
            >
                <Box
                    sx={{
                        mt: 1,
                        typography: 'h6',
                        textAlign: 'center',
                    }}
                >
                    {prescricaoOnDuty.medicamento.farmaco}
                </Box>
                <Box
                    sx={{
                        mt: 1,
                        typography: 'body1',
                    }}
                >
                    {prescricaoOnDuty.apresentaco.descricao}
                </Box>
                <Box
                    sx={{
                        mt: 1,
                        whiteSpace: 'pre-wrap',
                        typography: 'body1',
                        textAlign: 'justify',
                    }}
                >
                    {prescricaoOnDuty.usoposologiapadrao ? prescricaoOnDuty.posologia.posologia : prescricaoOnDuty.posologianaopadrao}
                </Box>
                <Box
                    sx={{
                        mt: 1,
                        typography: 'body1',
                    }}
                >
                    {prescricaoOnDuty.continuo ? "Contínuo" : "Não Contínuo"}
                </Box>
                <Box
                    sx={{
                        mt: 1,
                        whiteSpace: 'pre-wrap',
                        typography: 'body1',
                    }}
                >
                    {prescricaoOnDuty.imprimirorientacoes ? prescricaoOnDuty.orientacoes : "Não imprimirá orientações"}
                </Box>
                {prescricaoOnDuty.lmeId &&
                    <Box
                        sx={{
                            mt: 1,
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        LME:
                        {[
                            prescricaoOnDuty.lmemes1,
                            prescricaoOnDuty.lmemes2,
                            prescricaoOnDuty.lmemes3,
                            prescricaoOnDuty.lmemes4,
                            prescricaoOnDuty.lmemes5,
                            prescricaoOnDuty.lmemes6,
                        ].map(l =>
                            <Box
                                key={l.id}
                                sx={{
                                    ml: 2,
                                    typography: 'body1',
                                }}
                            >
                                {l}
                            </Box>
                        )
                        }
                    </Box>
                }
                <Box
                    sx={{
                        mt: 1,
                    }}
                >
                    Início: {DataDDMMYYY(prescricaoOnDuty.inicio)}
                </Box>
                <Box
                    sx={{
                        mt: 1,
                    }}
                >
                    {"Tempo de uso:  "}
                    {prescricaoOnDuty.termino
                        ?
                        DateDifferenceAnotherDay(prescricaoOnDuty.termino, prescricaoOnDuty.inicio)
                        :
                        DateDifferenceToday(prescricaoOnDuty.inicio)
                    }
                    {"  meses"}
                </Box>
            </Box>
        </>
    )
}

export default PrescricaoData