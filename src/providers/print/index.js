import { useState } from "react"
import { Operadoras } from "../../utils/operadoras"

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
    const [emBranco, setEmBranco] = useState([])
    const [database, setDatabase] = useState(new Date())
    const [renovacao, setRenovacao] = useState(false)
    const [avulso, setAvulso] = useState(false)
    const [operadora, setOperadora] = useState(Operadoras[0])
    const somaheighta4 = 950 // 900, 
    const somaheighta5 = 500 // estava 440

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
        emBranco,
        setEmBranco,
        database,
        setDatabase,
        renovacao,
        setRenovacao,
        avulso, 
        setAvulso,
        operadora, 
        setOperadora,
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
            setEmBranco([])
            setDatabase(new Date())
            setRenovacao(false)
            setAvulso(false)
            setOperadora(Operadoras[0])
        }
    }
}

export default PrintProvider