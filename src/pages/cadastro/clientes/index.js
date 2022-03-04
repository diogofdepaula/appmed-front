import React, { createContext, useContext } from 'react';
import ClientesAppBar from '../../../components/appbar/clienteappbar';
import ClienteCadastroProvider from '../../../providers/cliente/cadastro';
import ClienteNavegateProvider from '../../../providers/navegation/cliente';

export const ClienteCadastroContext = createContext(null)
export const ClienteNavigateContext = createContext(null)

const Content = () => {
    const { page } = useContext(ClienteNavigateContext)
    return page
}

const Clientes = () => {

    return (
        <>
            <ClienteCadastroContext.Provider value={ClienteCadastroProvider()} >
                <ClienteNavigateContext.Provider value={ClienteNavegateProvider()} >
                    <ClientesAppBar />
                    <Content />
                </ClienteNavigateContext.Provider>
            </ClienteCadastroContext.Provider>
        </>
    )
}

export default Clientes