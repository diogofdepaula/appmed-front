import { Box } from '@mui/material';
import React from 'react';

const AtestadoData = ({ atestadoOnDuty }) => {

    if (!atestadoOnDuty) return <></>

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
            </Box>
        </>
    )
}

export default AtestadoData