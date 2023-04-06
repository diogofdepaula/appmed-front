import React, { useCallback, useContext, useEffect } from 'react'
import { AtendimentoContext, AtendimentoNavigateContext } from '..'
import ListApresentacoes from '../../../components/listapresentacao'

const ApresentacaoSet = () => {

    const { prescricaoEdit, setPrescricaoEdit, medicamentoEdit, setMedicamentoEdit, } = useContext(AtendimentoContext)
    const { setStep } = useContext(AtendimentoNavigateContext)


    const fetchData = useCallback(async () => {
        const res = await fetch(process.env.REACT_APP_API_URL + `/medicamentos/${prescricaoEdit.medicamentoId}`)
        const json = await res.json();
        setMedicamentoEdit(json)
    }, [prescricaoEdit, setMedicamentoEdit])

    useEffect(() => {
        let clear = true
        if (clear) {
            fetchData();
        }
        return () => clear = false
    }, [fetchData])

    const handleTableRow = param => () => {
        setPrescricaoEdit({ ...prescricaoEdit, apresentacoId: param.id })
        setStep(131)
    }

    return (
        <>
            <ListApresentacoes
                medicamentoEdit={medicamentoEdit}
                handleTableRow={handleTableRow}
                prescricaoEdit={prescricaoEdit}
            />
        </>
    )
}

export default ApresentacaoSet


