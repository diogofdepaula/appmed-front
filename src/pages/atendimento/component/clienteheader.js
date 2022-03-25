import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton, Tooltip } from '@mui/material';
import React, { useContext } from 'react';
import { ClienteContext } from '../../../App';
import { CalcIdade } from '../../../utils/tempo';

const ClienteHeader = () => {

    const { clienteContext } = useContext(ClienteContext)

    return (
        <>
            <Box
                sx={{
                    m: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        typography: 'h5',
                        fontWeight: 'bold',
                    }}>
                    {clienteContext?.nome}
                </Box>
                <Box
                    sx={{
                        ml: 1,
                        typography: 'h6',
                    }}>
                    - {CalcIdade(clienteContext?.nascimento)} anos -
                </Box>
                <Box
                    sx={{
                        ml: 1,
                        typography: 'body1',
                    }}>
                    ID {clienteContext?.id}
                </Box>
                <Tooltip title="Editar cliente">
                <IconButton
                    onClick={() => {
                        //setPrescricaoOnDuty(null)
                        //setArticlePrescricaoMain()
                    }}
                    size="large">
                    <EditIcon />
                </IconButton>
            </Tooltip>
                
            </Box>
        </>
    )
}

export default ClienteHeader