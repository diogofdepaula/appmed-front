import { Box, Divider } from '@material-ui/core'
import React, { createContext, useState } from 'react'
import AtendimentoAppBar from './component/appbar/'
import ClienteHeader from './component/clienteheader'
import Content from './component/content'

export const AtendimentoContext = createContext(null)
export const ImpressaoContext = createContext(null)

const Atendimento = () => {

    // deixei tudo aqui para que a appbar também tivesse acesso
    const [page, setPage] = useState('')
    const [prescricaoOnDuty, setPrescricaoOnDuty] = useState([])
    const [prescricaoEdit, setPrescricaoEdit] = useState([])
    const [lmeOnDuty, setLmeOnDuty] = useState([])
    const [lmeEdit, setLmeEdit] = useState([])
    const [step, setStep] = useState(0)
    const [medicamentoEdit, setMedicamentoEdit] = useState([])

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
        requisicoes: [],
        database: new Date(),
        somaheighta4: 950, // 900, 
        somaheighta5: 440,
    }

    const [impressao, setImpressao] = useState(initialImpressao)

    const [update, setUpdate] = useState({
        count: 0,
        page: ''
    })

    const updatePage = () => {
        setImpressao(initialImpressao)
        setUpdate({
            count: update.count + 1,
            page: page
        })
    }

    return (
        <div>
            <ClienteHeader />
            <AtendimentoContext.Provider value={{
                page,
                setPage,
                updatePage,
                update,
                step,
                setStep,
                prescricaoOnDuty,
                setPrescricaoOnDuty,
                prescricaoEdit,
                setPrescricaoEdit,
                lmeOnDuty,
                setLmeOnDuty,
                lmeEdit,
                setLmeEdit,
                medicamentoEdit,
                setMedicamentoEdit,
            }} >
                <ImpressaoContext.Provider value={{ impressao, setImpressao }}>
                    <Box>
                        <Divider />
                        <AtendimentoAppBar />
                        <Content />
                    </Box>
                </ImpressaoContext.Provider>
            </AtendimentoContext.Provider>
        </div>
    )
}

export default Atendimento