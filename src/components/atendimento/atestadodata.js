import { Box } from '@mui/material';
import { DataDDMMYYY, DateDifferenceToday } from '../../utils/tempo';

const AtestadoData = ({ atestadoOnDuty }) => {

    if (!atestadoOnDuty) return <></>

    console.log(atestadoOnDuty);

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
                    gap: 1,
                }}
            >
                <Box
                    sx={{
                        typography: 'body1',
                        fontWeight: 'bold',
                    }}
                >
                    {atestadoOnDuty.diagnostico}
                </Box>
                <Box
                    sx={{
                        typography: 'body1',
                    }}
                >
                    {atestadoOnDuty.tratamento}
                </Box>
                <Box
                    sx={{
                        typography: 'body1',
                    }}
                >
                    {atestadoOnDuty.estado}
                </Box>
                <Box
                    sx={{
                        typography: 'body1',
                    }}
                >
                    {atestadoOnDuty.prognostico}
                </Box>
                <Box
                    sx={{
                        typography: 'body1',
                    }}
                >
                    {atestadoOnDuty.comentario}
                </Box>
                <Box
                    sx={{
                        typography: 'body1',
                        fontWeight: 'bold',
                    }}
                >
                    {atestadoOnDuty.data}
                </Box>
                 <Box
                    sx={{
                        typography: 'body1',
                        fontWeight: 'bold',
                    }}
                >
                    {"Última edição:  "}
                    {DataDDMMYYY(atestadoOnDuty?.updatedAt) + " (" + DateDifferenceToday(atestadoOnDuty?.updatedAt) + " meses )"}
                </Box>
                <Box
                    sx={{
                        mt: 1,
                    }}
                >
                    {"Última impressão:  "}
                    {atestadoOnDuty?.ultimaimpressao
                        ?
                        DataDDMMYYY(atestadoOnDuty?.ultimaimpressao) + " (" + DateDifferenceToday(atestadoOnDuty?.ultimaimpressao) + " meses )"
                        :
                        'Indefinido'
                    }
                </Box>
            </Box>
        </>
    )
}

export default AtestadoData