import React, { useContext } from 'react'
import { ClienteCadastroContext } from '.'
import ClienteInsert from './insert'
import ClienteMain from './main'
import ClienteUpdate from './update'

const Content = () => {

    const { page } = useContext(ClienteCadastroContext)

    switch (page) {
        case 'main':
            return <ClienteMain /> 
        case 'insert':
            return <ClienteInsert />
        case 'update':
            return <ClienteUpdate />
        default:
            return <div />
    }
}

export default Content