import { Divider } from '@mui/material'
import React, { createContext } from 'react'
import AtendimentoProvider from '../../providers/atendimento'
import PrintProvider from '../../providers/print'
import AtendimentoAppBar from './component/appbar/'
import ClienteHeader from './component/clienteheader'
import Content from './component/content'

export const AtendimentoContext = createContext(null)
export const ImpressaoContext = createContext(null)
export const PrintContext = createContext(null)

const Atendimento = () => {

    return (
        <>
            <ClienteHeader />
            <AtendimentoContext.Provider value={AtendimentoProvider()}>
                <PrintContext.Provider value={PrintProvider()}>
                    <Divider />
                    <AtendimentoAppBar />
                    <Content />
                </PrintContext.Provider>
            </AtendimentoContext.Provider>
        </>
    )
}

export default Atendimento