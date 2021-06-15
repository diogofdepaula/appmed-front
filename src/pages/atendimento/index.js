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
        meses: 1,
        local: '', // consultorio, SUS (cisgap, cisco)
        lmesSelecionadas: [],
        lme: '',
        relatorio: true,
        comentario: '-',
        database: new Date(),
        somaheighta4: 800, // 900, 
        somaheighta4a5: 350,
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
                page: page,
                setPage: setPage,
                updatePage: updatePage,
                update: update,
                step: step,
                setStep: setStep,
                prescricaoOnDuty: prescricaoOnDuty,
                setPrescricaoOnDuty: setPrescricaoOnDuty,
                prescricaoEdit: prescricaoEdit,
                setPrescricaoEdit: setPrescricaoEdit,
                lmeOnDuty: lmeOnDuty,
                setLmeOnDuty: setLmeOnDuty,
                lmeEdit: lmeEdit,
                setLmeEdit: setLmeEdit,
                medicamentoEdit: medicamentoEdit,
                setMedicamentoEdit: setMedicamentoEdit,
            }} >
                <ImpressaoContext.Provider value={{ impressao: impressao, setImpressao: setImpressao }}>
                    <Box>
                        <Divider />
                        <AtendimentoAppBar />
                        <Content />

                        {/* <Divider />
                    step: {JSON.stringify(step)}
                    <Divider />

                    <Divider />
                    page: {JSON.stringify(page)} 
                    <Divider /> */}

                        {/* <Divider />
                    prescEdit: {JSON.stringify(prescricaoEdit)}
                    <Divider />
                    
                    <Divider />
                    prescOnDuty: {JSON.stringify(prescricaoOnDuty)}
                    <Divider /> */}


                        {/* <Divider /> 
                    lmeEdit:  {JSON.stringify(lmeEdit)}
                    <Divider />
                    */}
                        {/*                     
                    <Divider /> 
                    medicamentoEdit:  {JSON.stringify(medicamentoEdit)} 
                    <Divider />  */}

                    </Box>
                </ImpressaoContext.Provider>
            </AtendimentoContext.Provider>
        </div>
    )
}

export default Atendimento