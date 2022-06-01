import { Divider } from '@mui/material'
import React, { createContext, useContext } from 'react'
import ClienteHeader from '../../components/atendimento/clienteheader'
import AtendimentoProvider from '../../providers/atendimento'
import AtendimentoNavegateProvider from '../../providers/navegation/atendimento'
import AtendimentoAppBar from '../../components/appbar/atendimentoappbar'

export const AtendimentoContext = createContext(null)
export const AtendimentoNavigateContext = createContext(null)

const Content = () => {

    const { article } = useContext(AtendimentoNavigateContext)

    const { prescricaoEdit, lmeEdit, medicamentoEdit  } = useContext(AtendimentoContext)
    const { step } = useContext(AtendimentoNavigateContext)

    console.log('prescricaoEdit ', prescricaoEdit);
    console.log('lmeEdit ', lmeEdit);
    console.log('medicamentoEdit ', medicamentoEdit);
    console.log('step ', step);

    return article
}

const Atendimento = () => {

    return (
        <>
            <ClienteHeader />
            <AtendimentoNavigateContext.Provider value={AtendimentoNavegateProvider()} >
                <AtendimentoContext.Provider value={AtendimentoProvider()}>
                        <Divider />
                        <AtendimentoAppBar />
                        <Content />
                </AtendimentoContext.Provider>
            </AtendimentoNavigateContext.Provider>
        </>
    )
}

export default Atendimento