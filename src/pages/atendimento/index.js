import { Divider } from '@mui/material'
import React, { createContext, useContext } from 'react'
import { ClienteContext } from '../../App'
import AtendimentoProvider from '../../providers/atendimento'
import AtendimentoNavegateProvider from '../../providers/navegation/atendimento'
import PrintProvider from '../../providers/print'
import AtendimentoAppBar from './component/appbar/'
import ClienteHeader from './component/clienteheader'

export const AtendimentoContext = createContext(null)
export const PrintContext = createContext(null)
export const AtendimentoNavigateContext = createContext(null)

const Content = () => {
    const { article } = useContext(AtendimentoNavigateContext)
    return article
}

const Atendimento = () => {

    const { clienteContext } = useContext(ClienteContext)

    console.log('clienteContext   ', clienteContext);

    return (
        <>
            <ClienteHeader />
            <AtendimentoNavigateContext.Provider value={AtendimentoNavegateProvider()} >
                <AtendimentoContext.Provider value={AtendimentoProvider()}>
                    <PrintContext.Provider value={PrintProvider()}>
                        <Divider />
                        <AtendimentoAppBar />
                        <Content />
                    </PrintContext.Provider>
                </AtendimentoContext.Provider>
            </AtendimentoNavigateContext.Provider>
        </>
    )
}

export default Atendimento