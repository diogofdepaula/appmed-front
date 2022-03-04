import React, { createContext } from 'react';
import ClientesAppBar from '../../../components/appbar/clienteappbar';
import ClienteCadastroProvider from '../../../providers/cliente/cadastro';
import Content from './content';

export const ClienteCadastroContext = createContext(null)

const Clientes = () => {

    return (
        <>
            <ClienteCadastroContext.Provider value={ClienteCadastroProvider()} >
                <ClientesAppBar />
                <Content />
            </ClienteCadastroContext.Provider>
        </>
    )
}

export default Clientes