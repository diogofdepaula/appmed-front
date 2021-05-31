import React, { useCallback, useContext, useEffect } from 'react';
import { AtendimentoContext } from '../../..';
import { ClienteContext } from '../../../../../App';
import LMEEditor from '../editor';

const LMEInsert = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { prescricaoEdit, setStep, setLmeEdit, medicamentoEdit } = useContext(AtendimentoContext)

    const chargeInitial = useCallback(() => {

        const initial = {
            cid10: undefined,
            diagnostico: undefined,
            anamnese: undefined,
            tratamentoprevio: undefined,
            tratamentopreviotexto: undefined,
            atestadocapacidade: undefined,
            preenchidopor: undefined,
            preenchidoporCPF: undefined,
            raca: undefined,
            clienteId: clienteContext.id,
            // isso adiciona a nova prescricao na nova lme
            prescricoes: prescricaoEdit,
            relatorio: medicamentoEdit?.classe === 'MMCDB' ?
                {
                    tempodoencaanos: undefined,
                    tempodoencameses: undefined,
                    vhs: undefined,
                    pcr: undefined,
                    pcrvn: undefined,
                    ara: undefined,
                    arb: undefined,
                    arc: undefined,
                    ard: undefined,
                    are: undefined,
                    arf: undefined,
                    arg: undefined,
                    eapa: undefined,
                    eapb: undefined,
                    eapc: undefined,
                    eapd: undefined,
                    eape: undefined,
                    eapf: undefined,
                    eapg: undefined,
                    eaaa: undefined,
                    eaab: undefined,
                    eaac: undefined,
                    eaad: undefined,
                    eaae: undefined,
                    medicamento1: undefined,
                    dose1: undefined,
                    inicio1: undefined,
                    fim1: undefined,
                    motivo1: undefined,
                    medicamento2: undefined,
                    dose2: undefined,
                    inicio2: undefined,
                    fim2: undefined,
                    motivo2: undefined,
                    medicamento3: undefined,
                    dose3: undefined,
                    inicio3: undefined,
                    fim3: undefined,
                    motivo3: undefined,
                    medicamento4: undefined,
                    dose4: undefined,
                    inicio4: undefined,
                    fim4: undefined,
                    motivo4: undefined,
                    medicamento5: undefined,
                    dose5: undefined,
                    inicio5: undefined,
                    fim5: undefined,
                    motivo5: undefined,
                    medicamento6: undefined,
                    dose6: undefined,
                    inicio6: undefined,
                    fim6: undefined,
                    motivo6: undefined,
                    medicamento7: undefined,
                    dose7: undefined,
                    inicio7: undefined,
                    fim7: undefined,
                    motivo7: undefined,
                    ppddata: undefined,
                    ppdresultado: undefined,
                    rxtoraxdata: undefined,
                    rxtoraxresultado: undefined,
                    rxtoraxalteracao: undefined,
                    bhcgdata: undefined,
                    bhcgjustificativa: undefined,
                    infeccaoviral: undefined,
                    hepatite: undefined,
                    infeccaobacteriana: undefined,
                    neoplasia: undefined,
                    anemia: undefined,
                    alteracaohepatica: undefined,
                    das28: undefined,
                    cdai: undefined,
                    sdai: undefined,
                    basdai: undefined,
                    asdas: undefined,
                    mda: undefined,
                    eva: undefined,
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