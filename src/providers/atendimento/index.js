import { format } from "date-fns"
import { useState } from "react"

const NovaPrescricao = (clienteId) => {

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
        clienteId: clienteId,
        lmeId: null,
        medicamentoId: '',
        apresentacoId: '',
        posologiaId: ''
    }
}

export const NovoRelatorio = (lmeId) => {

    let initial = {
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
        infeccaoviral: false,
        hepatite: false,
        infeccaobacteriana: false,
        neoplasia: false,
        anemia: false,
        alteracaohepatica: false,
        das28: '',
        cdai: '',
        sdai: '',
        basdai: '',
        asdas: '',
        sledai: '',
        essdai: '',
        mda: '',
        eva: '',
    }

    if (lmeId) {
        initial = { ...initial, lmeId: lmeId }
    }

    return initial
}

const NovaLme = (clienteId, prescricaoEdit, medicamentoClasse) => {

    return {
        cid10: '',
        diagnostico: '',
        anamnese: '',
        tratamentoprevio: false,
        tratamentopreviotexto: '',
        atestadocapacidade: false,
        preenchidopor: '',
        preenchidoporCPF: '',
        raca: '',
        clienteId: clienteId,
        // isso adiciona a nova prescricao na nova lme
        prescricoes: prescricaoEdit,
        relatorio: (medicamentoClasse === 'MMCDB' || medicamentoClasse === 'MMCDPM') ?
            // null, pois ainda a lme nao tem id
            NovoRelatorio(null)
            :
            null,
    }
}

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
        setNovaPrescricao: (clienteId) => {
            setPrescricaoEdit(NovaPrescricao(clienteId))
        },
        setNovaLme: (clienteId, prescricaoEdit, medicamentoClasse) => {
            setLmeEdit(NovaLme(clienteId, prescricaoEdit, medicamentoClasse))
        }
    }
}

export default AtendimentoProvider