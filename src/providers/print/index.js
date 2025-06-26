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
    const somaheighta5 = 530 // estava 440

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
        printReset: (param) => {
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
            // tive que setar avulso aqui, pois o melhor era no setPage, mas não tem como 
            // chamar um usoContexto dentro de um useContext
            // se não deixar isso, irá causar erro na reordenação do listgroup no FatoryPrint
            // especialmente quando está no avulso e clica de novo no avulso no botão lateral
            // deselegante, mas funcionou. Se for refatorar, mudar isso.
            // isso se dá por ser um parametro de navegação dentro do useContext Print e no no Navegarion
            setAvulso(param === 'avulso' ? true : false)
            setOperadora(Operadoras[0])
        }
    }
}

export default PrintProvider