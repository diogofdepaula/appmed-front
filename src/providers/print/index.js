import { useState } from "react"

const PrintProvider = () => {

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
    const [requisicoes, setRequisicoes] = useState([])
    const [vacinacao, setVacinacao] = useState([])
    const [database, setDatabase] = useState(new Date())
    const [renovacao, setRenovacao] = useState(false)
    const [avulso, setAvulso] = useState(false)
    const [convenio, setConvenio] = useState(false) // pus assim, mas depois fazer com o nome do convênio
    const somaheighta4 = 950 // 900, 
    const somaheighta5 = 440

    return {
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
        requisicoes,
        setRequisicoes,
        vacinacao,
        setVacinacao,
        database,
        setDatabase,
        renovacao,
        setRenovacao,
        avulso, 
        setAvulso,
        convenio, 
        setConvenio,
        somaheighta4,
        somaheighta5,
        printReset: () => {
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
            setRequisicoes([])
            setVacinacao([])
            setDatabase(new Date())
            setRenovacao(false)
            setAvulso(false)
            setConvenio(false)
        }
    }
}

export default PrintProvider