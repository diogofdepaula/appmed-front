import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton, Tooltip } from '@mui/material';
import React, { useContext } from 'react';
import { ClienteContext } from '../../../App';
import { CalcIdade } from '../../../utils/tempo';

const ClienteHeader = () => {

    const { clienteContext } = useContext(ClienteContext)

    const dados = [
        CalcIdade(clienteContext?.nascimento) + " anos", 
        "CNS " + clienteContext?.cns,
        "CPF " + clienteContext?.cpf,
        "ID " + clienteContext?.id,
    ]

    return (
        <>
            <Box
                sx={{
                    mt: 2,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box
                    sx={{
                        typography: 'h5',
                        fontWeight: 'bold',
                        flexGrow: 1,
                        textAlign: 'center',
                    }}>
                    {clienteContext?.nome}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        typography: 'subtitle2' ,
                    }}
                >
                    {dados.map(d => 
                        <Box
                            key={d}
                            sx={{
                                ml: 2,
                            }}
                        >
                            {d}
                        </Box>
                    )}
                    <Tooltip title="Editar cliente">
                        <IconButton
                            onClick={() => {
                                //setPrescricaoOnDuty(null)
                                //setArticlePrescricaoMain()
                            }}
                            >
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>

        </>
    )
}

export default ClienteHeader