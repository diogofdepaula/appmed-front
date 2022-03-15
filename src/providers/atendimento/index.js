import { useState } from "react"

const AtendimentoProvider = () => {

    const [prescricaoOnDuty, setPrescricaoOnDuty] = useState([])
    const [prescricaoEdit, setPrescricaoEdit] = useState([])
    const [lmeOnDuty, setLmeOnDuty] = useState([])
    const [lmeEdit, setLmeEdit] = useState([])
    const [medicamentoEdit, setMedicamentoEdit] = useState([])

    return {
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
    }
}

export default AtendimentoProvider