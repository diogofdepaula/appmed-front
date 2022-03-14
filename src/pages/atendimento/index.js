import { Divider } from '@mui/material'
import React, { createContext, useContext } from 'react'
import AtendimentoProvider from '../../providers/atendimento'
import AtendimentoNavegateProvider from '../../providers/navegation/atendimento'
import PrintProvider from '../../providers/print'
import AtendimentoAppBar from './component/appbar/'
import ClienteHeader from './component/clienteheader'

export const AtendimentoContext = createContext(null)
export const PrintContext = createContext(null)
export const AtendimentoNavigateContext = createContext(null)

const Atendimento = () => {

    const Content = () => {
        const { article } = useContext(AtendimentoNavigateContext)
        return article
    }

    return (
        <>
            <ClienteHeader />
            <AtendimentoContext.Provider value={AtendimentoProvider()}>
                <AtendimentoNavigateContext.Provider value={AtendimentoNavegateProvider()} >
                    <PrintContext.Provider value={PrintProvider()}>
                        <Divider />
                        <AtendimentoAppBar />
                        <Content />
                    </PrintContext.Provider>
                </AtendimentoNavigateContext.Provider>
            </AtendimentoContext.Provider>
        </>
    )
}

export default Atendimento