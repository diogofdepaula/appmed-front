import React, { useContext } from 'react'
import { ClientesContext } from '..'
import ClienteInsert from '../insert'
import ClienteMain from '../main'
import ClienteUpdate from '../update'

const Content = () => {

    const { page } = useContext(ClientesContext)

    /// se mudar aqui: não esquercer de atualizar a ThirdAppBar
    switch (page) {
        case 'clientesmain':
            return <ClienteMain /> 
        case 'clienteinsert':
            return <ClienteInsert />
        case 'clienteupdate':
            return <ClienteUpdate />
        // case 'prescricaodelete':
        //     return <PrescricaoDelete />
        // case 'lmesmain':
        //     return <LMEMain />
        // case 'lmeinsert':
        //     return <LMEInsert />
        // case 'lmeupdate':
        //     return <LMEUpdate />
        // case 'lmedelete':
        //     return <LMEDelete />
        // case 'print':
        //     return <Print />
        case 'teste':
            return <div></div>
        default:
            return <ClienteMain />
    }
}

export default Content