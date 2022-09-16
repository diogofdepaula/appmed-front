import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { ClienteContext } from '../App';

const AtestadoData = ({ atestado }) => {

    const { clienteContext } = useContext(ClienteContext)

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
                {JSON.stringify(clienteContext.atestados)}
            </Box>
        </>
    )
}

export default AtestadoData