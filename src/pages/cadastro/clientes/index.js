import { Box } from '@mui/material';
import React, { createContext } from 'react';
import ClientesAppBar from '../../../components/appbar/clienteappbar';
import ClienteCadastroProvider from '../../../providers/cliente/cadastro';
import Content from './components/content';

export const ClienteCadastroContext = createContext(null)

const Clientes = () => {

    return (
        <>
            <ClienteCadastroContext.Provider value={ClienteCadastroProvider()} >
                <Box>
                    <ClientesAppBar />
                    <Content />
                </Box>
            </ClienteCadastroContext.Provider>
        </>
    )
}

export default Clientes