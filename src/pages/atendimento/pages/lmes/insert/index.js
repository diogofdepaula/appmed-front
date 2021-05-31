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
            tratamentoprevio: false,
            tratamentopreviotexto: '',
            atestadocapacidade: false,
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
                    infeccaoviral: undefined,
                    hepatite: undefined,
                    infeccaobacteriana: undefined,
                    neoplasia: undefined,
                    anemia: undefined,
                    alteracaohepatica: undefined,
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