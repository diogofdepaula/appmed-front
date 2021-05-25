import React, { useContext } from 'react'
import { ClienteContext } from '../../App'

const ClienteHome = () => {

    const { clienteContext } = useContext(ClienteContext)
    
    return (
        <div display="flex">
            <div>
                Página ClienteHome
            </div>
            <div>
                {clienteContext.nome}
            </div>
        </div>
    )
}
export default ClienteHome