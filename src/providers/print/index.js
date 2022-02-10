import { useState } from "react"

const PrintProvider = () => {

    const [print, setPrint] = useState([])
    const printRef = null
    const [visualizacao, setVisualizacao] = useState(false)
    const [prescricoesSelecionadas, setPrescricoesSelecionadas] = useState([])
    const [tipo, setTipo] = useState('simples') // simples, controlado
    const [meses, setMeses] = useState(6)
    const [lmes, setLmes] = useState([])
    const [lmesSelecionadas, setLmesSelecionadas] = useState([])
    const [termosSelecionados, setTermosSelecionados] = useState([])
    const [lme, setLme] = useState('')
    const [relatorio, setRelatorio] = useState(true)
    const [comentario, setComentario] = useState('')
    const [nomecomercial, setNomeComercial] = useState(true)
    const [continuo, setContinuo] = useState(false)
    const [requisicao, setRequisicao] = useState(true)
    const [requisicoes, setRequisicoes] = useState([]) // { indice, justificativa, selecionados, convenio }
    const [database, setdatabase] = useState(new Date())
    const somaheighta4 = 950 // 900, 
    const somaheighta5 = 440

    return {
        print,
        setPrint,
        setPrintReset: () => setPrint([]),
        printRef,
        visualizacao,
        setVisualizacao,
        prescricoesSelecionadas,
        setPrescricoesSelecionadas,
        tipo,
        setTipo,
        meses,
        setMeses,
        lmes,
        setLmes,
        lmesSelecionadas,
        setLmesSelecionadas,
        termosSelecionados,
        setTermosSelecionados,
        lme,
        setLme,
        relatorio,
        setRelatorio,
        comentario,
        setComentario,
        nomecomercial,
        setNomeComercial,
        continuo,
        setContinuo,
        requisicao,
        setRequisicao,
        requisicoes,
        setRequisicoes,
        database,
        setdatabase,
        somaheighta4,
        somaheighta5,
    }
}

export default PrintProvider