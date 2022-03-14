import React, { useCallback, useContext, useEffect } from 'react';
import { AtendimentoContext, AtendimentoNavigateContext } from '../../..';
import { ClienteContext } from '../../../../../App';
import InitialRelatorio from '../components/initialrelatorio';
import LMEEditor from '../editor';

const LMEInsert = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { prescricaoEdit, setLmeEdit, medicamentoEdit } = useContext(AtendimentoContext)
    const { setStep } = useContext(AtendimentoNavigateContext)

    const chargeInitial = useCallback(() => {

        const initial = {
            cid10: '',
            diagnostico: '',
            anamnese: '',
            tratamentoprevio: false,
            tratamentopreviotexto: '',
            atestadocapacidade: false,
            preenchidopor: '',
            preenchidoporCPF: '',
            raca: '',
            clienteId: clienteContext.id,
            // isso adiciona a nova prescricao na nova lme
            prescricoes: prescricaoEdit,
            relatorio: (medicamentoEdit?.classe === 'MMCDB' || medicamentoEdit?.classe === 'MMCDPM') ?
                // null, pois ainda a lme nao tem id
                InitialRelatorio(null)
                :
                null,
        }
        setLmeEdit(initial)
        setStep(11)
    }, [setStep, setLmeEdit, clienteContext, prescricaoEdit, medicamentoEdit])

    useEffect(() => {
        chargeInitial()
    }, [chargeInitial])

    return (
        <div>
            <LMEEditor />
        </div>
    )
}

export default LMEInsert