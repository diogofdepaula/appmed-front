import { Box } from '@mui/material';
import { DataDDMMYYY, DateDifferenceAnotherDay, DateDifferenceToday } from '../../../../utils/tempo';

const PrescricaoData = ({prescricao}) => {

    if (!prescricao) return <div />

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
                    {prescricao?.medicamento.farmaco}
                </Box>
                <Box
                    sx={{
                        mt: 1,
                        typography: 'body1',
                    }}
                >
                    {prescricao?.apresentaco.descricao}
                </Box>
                <Box
                    sx={{
                        mt: 1,
                        whiteSpace: 'pre-wrap',
                        typography: 'body1',
                        textAlign: 'justify',
                    }}
                >
                    {prescricao?.usoposologiapadrao ? prescricao?.posologia.posologia : prescricao?.posologianaopadrao}
                </Box>
                <Box
                    sx={{
                        mt: 1,
                        typography: 'body1',
                    }}
                >
                    {prescricao?.continuo ? "Contínuo" : "Não Contínuo"}
                </Box>
                <Box
                    sx={{
                        mt: 1,
                        whiteSpace: 'pre-wrap',
                        typography: 'body1',
                    }}
                >
                    {prescricao?.imprimirorientacoes ? prescricao?.orientacoes : "Não imprimirá orientações"}
                </Box>
                {prescricao?.lmeId &&
                    <Box
                        sx={{
                            mt: 1,
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        LME:
                        {[
                            prescricao?.lmemes1,
                            prescricao?.lmemes2,
                            prescricao?.lmemes3,
                            prescricao?.lmemes4,
                            prescricao?.lmemes5,
                            prescricao?.lmemes6,
                        ].map((l, i) =>
                            <Box
                                key={i}
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
                    Início: {DataDDMMYYY(prescricao?.inicio)}
                </Box>
                <Box
                    sx={{
                        mt: 1,
                    }}
                >
                    {"Tempo de uso:  "}
                    {prescricao?.termino
                        ?
                        DateDifferenceAnotherDay(prescricao?.termino, prescricao?.inicio)
                        :
                        DateDifferenceToday(prescricao?.inicio)
                    }
                    {"  meses"}
                </Box>
            </Box>
        </>
    )
}

export default PrescricaoData