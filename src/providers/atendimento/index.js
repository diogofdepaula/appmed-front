import { format } from "date-fns"
import { useState } from "react"

const AtendimentoProvider = () => {

    const [prescricaoOnDuty, setPrescricaoOnDuty] = useState(null)
    const [prescricaoEdit, setPrescricaoEdit] = useState(null)
    const [lmeOnDuty, setLmeOnDuty] = useState(null)
    const [lmeEdit, setLmeEdit] = useState(null)
    const [medicamentoEdit, setMedicamentoEdit] = useState(null)

    const NovaPrescricao = (param) => {

        return {
            continuo: true,
            imprimirorientacoes: false,
            emuso: true,
            orientacoes: '',
            usoposologiapadrao: true,
            posologianaopadrao: '',
            quantidadenaopadrao: '',
            formanaopadrao: '',
            lmemes1: '',
            lmemes2: '',
            lmemes3: '',
            lmemes4: '',
            lmemes5: '',
            lmemes6: '',
            inicio: format(new Date(), "yyyy-MM-dd"), //new Date(),
            termino: undefined,
            motivotermico: '',
            clienteId: param,
            lmeId: null,
            medicamentoId: '',
            apresentacoId: '',
            posologiaId: ''
        }
    }

    return {
        prescricaoOnDuty,
        setPrescricaoOnDuty: (param) => {
            setPrescricaoOnDuty(param)
            setLmeOnDuty(null)
        },
        prescricaoEdit,
        setPrescricaoEdit,
        lmeOnDuty,
        setLmeOnDuty: (param) => {
            setLmeOnDuty(param)
            setPrescricaoOnDuty(null)
        },
        lmeEdit,
        setLmeEdit,
        medicamentoEdit,
        setMedicamentoEdit,
        setNovaPrescricao: (param) =>{
            setPrescricaoEdit(NovaPrescricao(param))
        },
    }
}

export default AtendimentoProvider