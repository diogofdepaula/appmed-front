import { useState } from "react"

const PrintProvider = () => {

    const [visualizacao, setVisualizacao] = useState(false)
    const [prescricoesSelecionadas, setPrescricoesSelecionadas] = useState([])
    const [tipo, setTipo] = useState('simples') // simples, controlado
    const [meses, setMeses] = useState(6)
    const [lmesSelecionadas, setLmesSelecionadas] = useState([])
    const [termosSelecionados, setTermosSelecionados] = useState([])
    const [lme, setLme] = useState('')
    const [relatorio, setRelatorio] = useState(true)
    const [atestadosSelecionados, setAtestadosSelecionados] = useState([])
    const [comentario, setComentario] = useState('')
    const [nomecomercial, setNomeComercial] = useState(true)
    const [continuo, setContinuo] = useState(false)
    const [requisicao, setRequisicao] = useState(true)
    const [requisicoes, setRequisicoes] = useState([]) // { indice, justificativa, selecionados, convenio }
    const [database, setDatabase] = useState(new Date())
    const somaheighta4 = 950 // 900, 
    const somaheighta5 = 440

    return {
        visualizacao,
        setVisualizacao,
        prescricoesSelecionadas,
        setPrescricoesSelecionadas,
        tipo,
        setTipo,
        meses,
        setMeses,
        lmesSelecionadas,
        setLmesSelecionadas,
        termosSelecionados,
        setTermosSelecionados,
        lme,
        setLme,
        relatorio,
        setRelatorio,
        atestadosSelecionados,
        setAtestadosSelecionados,
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
        setDatabase,
        somaheighta4,
        somaheighta5,
        printReset: () => {
            setVisualizacao(false)
            setPrescricoesSelecionadas([])
            setTipo('simples')
            setMeses(6)
            setLmesSelecionadas([])
            setTermosSelecionados([])
            setAtestadosSelecionados([])
            setLme('')
            setRelatorio(true)
            setComentario('')
            setNomeComercial(true)
            setContinuo(false)
            setRequisicao(true)
            setRequisicoes([])
            setDatabase(new Date())
        }
    }
}

export default PrintProvider