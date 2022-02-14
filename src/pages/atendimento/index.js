import { Divider } from '@mui/material'
import React, { createContext, useState } from 'react'
import AtendimentoProvider from '../../providers/atendimento'
import PrintProvider from '../../providers/print'
import AtendimentoAppBar from './component/appbar/'
import ClienteHeader from './component/clienteheader'
import Content from './component/content'

export const AtendimentoContext = createContext(null)
export const ImpressaoContext = createContext(null)
export const PrintContext = createContext(null)

const Atendimento = () => {

    const initialImpressao = {
        printRef: null,
        visualizacao: false,
        prescricoesSelecionadas: [],
        tipo: '', // simples, controlado
        meses: 6,
        local: 'consultorio', // consultorio, SUS (cisgap, cisco)
        lmes: [],
        lmesSelecionadas: [],
        termosSelecionados: [],
        lme: '',
        relatorio: true,
        comentario: '-',
        nomecomercial: true,
        continuo: false,
        requisicao: true,
        requisicoes: [], // { indice, justificativa, selecionados, convenio }
        database: new Date(),
        somaheighta4: 950, // 900, 
        somaheighta5: 440,
    }

    const [impressao, setImpressao] = useState(initialImpressao)

    return (
        <>
            <ClienteHeader />
            <AtendimentoContext.Provider value={AtendimentoProvider()}>
                <ImpressaoContext.Provider value={{ impressao, setImpressao }}>
                    <PrintContext.Provider value={PrintProvider()}>
                        <Divider />
                        <AtendimentoAppBar />
                        <Content />
                    </PrintContext.Provider>
                </ImpressaoContext.Provider>
            </AtendimentoContext.Provider>
        </>
    )
}

export default Atendimento