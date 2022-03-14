import { useState } from "react"

const AtendimentoProvider = () => {

    const [page, setPage] = useState('')
    const [prescricaoOnDuty, setPrescricaoOnDuty] = useState([])
    const [prescricaoEdit, setPrescricaoEdit] = useState([])
    const [lmeOnDuty, setLmeOnDuty] = useState([])
    const [lmeEdit, setLmeEdit] = useState([])
    //const [step, setStep] = useState(0)
    const [medicamentoEdit, setMedicamentoEdit] = useState([])
    // const [update, setUpdate] = useState({
    //     count: 0,
    //     page: ''
    // })

    // const updatePage = () => {
    //     setUpdate({
    //         count: update.count + 1,
    //         page: page
    //     })
    // }

    return {
        page,
        setPage,
        // updatePage,
        // update,
        // step,
        // setStep,
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