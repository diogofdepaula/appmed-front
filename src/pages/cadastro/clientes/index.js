import { Box } from '@material-ui/core';
import React, { createContext, useContext, useState } from 'react';
import { ClienteContext } from '../../../App';
import ClientesAppBar from './components/appbar';
import Content from './components/content';

// tem o ClienteContext (sem s) que eu preferi manter
// para poder acessar o Cliente de todo o programa
export const ClientesContext = createContext(null)

const Clientes = () => {

    const { clientesContext } = useContext(ClienteContext)

    const [page, setPage] = useState('')
    const [clienteOnDuty, setClienteOnDuty] = useState(clientesContext)
    const [clienteEdit, setClienteEdit] = useState([])

    return (
        <div>
            <ClientesContext.Provider value={{
                page: page,
                setPage: setPage,
                clienteOnDuty: clienteOnDuty,
                setClienteOnDuty: setClienteOnDuty,
                clienteEdit: clienteEdit,
                setClienteEdit: setClienteEdit,
            }} >
                <Box>
                    <ClientesAppBar />
                    <Content />
                </Box>
            </ClientesContext.Provider>
        </div>
    )
}

export default Clientes