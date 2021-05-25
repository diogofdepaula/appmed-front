import React, { useCallback, useContext, useEffect } from 'react';
import { AtendimentoContext } from '../../..';
import { ClienteContext } from '../../../../../App';
import LMEEditor from '../editor';

const LMEInsert = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { prescricaoEdit, setStep, setLmeEdit, medicamentoEdit } = useContext(AtendimentoContext)

    const chargeInitial = useCallback(() => {

        const initial = {
            cid10: '',
            diagnostico: '',
            anamnese: '',
            tratamentoprevio: '',
            tratamentopreviotexto: '',
            atestadocapacidade: '',
            preenchidopor: '',
            preenchidoporCPF: '',
            raca: '',
            clienteId: clienteContext.id,
            // isso adiciona a nova prescricao na nova lme
            prescricoes: prescricaoEdit,
            relatorio: medicamentoEdit?.classe === 'MMCDB' ?
                {
                    tempodoencaanos: '',
                    tempodoencameses: '',
                    vhs: '',
                    pcr: '',
                    pcrvn: '',
                    ara: '',
                    arb: '',
                    arc: '',
                    ard: '',
                    are: '',
                    arf: '',
                    arg: '',
                    eapa: '',
                    eapb: '',
                    eapc: '',
                    eapd: '',
                    eape: '',
                    eapf: '',
                    eapg: '',
                    eaaa: '',
                    eaab: '',
                    eaac: '',
                    eaad: '',
                    eaae: '',
                    medicamento1: '',
                    dose1: '',
                    inicio1: '',
                    fim1: '',
                    motivo1: '',
                    medicamento2: '',
                    dose2: '',
                    inicio2: '',
                    fim2: '',
                    motivo2: '',
                    medicamento3: '',
                    dose3: '',
                    inicio3: '',
                    fim3: '',
                    motivo3: '',
                    medicamento4: '',
                    dose4: '',
                    inicio4: '',
                    fim4: '',
                    motivo4: '',
                    medicamento5: '',
                    dose5: '',
                    inicio5: '',
                    fim5: '',
                    motivo5: '',
                    medicamento6: '',
                    dose6: '',
                    inicio6: '',
                    fim6: '',
                    motivo6: '',
                    medicamento7: '',
                    dose7: '',
                    inicio7: '',
                    fim7: '',
                    motivo7: '',
                    ppddata: undefined,
                    ppdresultado: '',
                    rxtoraxdata: undefined,
                    rxtoraxresultado: '',
                    rxtoraxalteracao: '',
                    bhcgdata: undefined,
                    bhcgjustificativa: '',
                    infeccaoviral: '',
                    hepatite: '',
                    infeccaobacteriana: '',
                    neoplasia: '',
                    anemia: '',
                    alteracaohepatica: '',
                    das28: '',
                    cdai: '',
                    sdai: '',
                    basdai: '',
                    asdas: '',
                    mda: '',
                    eva: '',
                }
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