import { useState } from "react"

const AtendimentoProvider = () => {

    const [prescricaoOnDuty, setPrescricaoOnDuty] = useState(null)
    const [prescricaoEdit, setPrescricaoEdit] = useState(null)
    const [lmeOnDuty, setLmeOnDuty] = useState(null)
    const [lmeEdit, setLmeEdit] = useState(null)
    const [medicamentoEdit, setMedicamentoEdit] = useState(null)

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
    }
}

export default AtendimentoProvider