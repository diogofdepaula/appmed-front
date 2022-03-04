import React, { useContext } from 'react'
import { ClienteCadastroContext } from '.'
import ClienteInsert from './insert'
import ClienteMain from './main'
import ClienteUpdate from './update'

const Content = () => {

    const { page } = useContext(ClienteCadastroContext)

    switch (page) {
        case 'clientesmain':
            return <ClienteMain /> 
        case 'clienteinsert':
            return <ClienteInsert />
        case 'clienteupdate':
            return <ClienteUpdate />
        default:
            return <div />
    }
}

export default Content