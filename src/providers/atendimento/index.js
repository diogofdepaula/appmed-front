import { format } from "date-fns"
import { useState } from "react"
import { LmeComRelatorio } from "../../utils/inquiries"
import { PadraoAtestado } from "../../utils/listas"

// o que for preenchido com CheckBox tem que ser true or false
// o que for preenchido com RadioBox tem que ser undefined

const NovaPrescricao = (clienteId) => {

    return {
        clienteId: clienteId,
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
        lmeId: null,
        medicamentoId: '',
        apresentacoId: '',
        posologiaId: '',
        ultimaimpressao: undefined,
    }
}

export const NovoRelatorio = (lmeId) => {

    let initial = {
        idadeinicio: '',
        vhs: '',
        pcr: '',
        ar2010a: undefined,
        ar2010b: undefined,
        ar2010c: undefined,
        ar2010d: undefined,
        ara: undefined,
        arb: undefined,
        arc: undefined,
        ard: undefined,
        are: undefined,
        arf: undefined,
        arg: undefined,
        apperiferica: undefined,
        apcaxial: undefined,
        apcentesite: undefined,
        aijsubtipo: '',
        aijopcao: '',
        apa: undefined,
        apb: undefined,
        apc: undefined,
        apd: undefined,
        ape: undefined,
        apf: undefined,
        apg: undefined,
        eaaa: undefined,
        eaab: undefined,
        eaac: undefined,
        eanya: undefined,
        eanyb: undefined,
        eanyc: undefined,
        eanyd: undefined,
        eanye: undefined,
        utilizados: '',
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
        dose: '',
        inducao: '',
        justificativa: '',
        ttopreviobiologico: false,
        rxt: false,
        sqm: false,
        aine: false,
        ppdresultado: '',
        ppdtratamento: false,
        rxtoraxresultado: '',
        rxtoraxalteracao: '',
        hepatiteimunidade: false,
        hepatitevacina: false,
        das28: '',
        cdai: '',
        sdai: '',
        sjadas: '',
        basdai: '',
        asdascrp: '',
        asdasesr: '',
        dapsa: '',
        lei: '',
    }

    if (lmeId) {
        initial = { ...initial, lmeId: lmeId }
    }

    return initial
}

const NovaLme = (clienteId, prescricaoEdit, param) => {

    return {
        clienteId: clienteId,
        cid10: param.cid10,
        diagnostico: param.descricao,
        anamnese: '',
        tratamentoprevio: false,
        tratamentopreviotexto: '',
        atestadocapacidade: false,
        preenchidopor: '',
        preenchidoporCPF: '',
        raca: '',
        ultimaimpressao: undefined,
        // isso adiciona a nova prescricao na nova lme
        prescricoes: prescricaoEdit,
        relatorio: LmeComRelatorio(param) ?
            // null, pois ainda a lme nao tem id
            NovoRelatorio(null)
            :
            null,
    }
}

const NovoAtestado = (clienteId) => {

    return {
        clienteId: clienteId,
        cid10: '',
        diagnostico: '',
        padrao: PadraoAtestado()[0],
        tratamento: '',
        estado: '',
        prognostico: '',
        consequencia: '',
        prazo: '',
        comentario: '',
        data: format(new Date(), "yyyy-MM-dd"), //new Date(),
        ultimaimpressao: undefined,
    }
}

const AtendimentoProvider = () => {

    const [prescricaoOnDuty, setPrescricaoOnDuty] = useState(null)
    const [prescricaoEdit, setPrescricaoEdit] = useState(null)
    const [lmeOnDuty, setLmeOnDuty] = useState(null)
    const [lmeEdit, setLmeEdit] = useState(null)
    const [medicamentoEdit, setMedicamentoEdit] = useState(null)
    const [atestadoEdit, setAtestadoEdit] = useState(null)
    const [atestadoOnDuty, setAtestadoOnDuty] = useState(null)

    return {
        prescricaoOnDuty,
        setPrescricaoOnDuty: (param) => {
            setPrescricaoOnDuty(param)
            setLmeOnDuty(null)
            setAtestadoOnDuty(null)
        },
        prescricaoEdit,
        setPrescricaoEdit,
        lmeOnDuty,
        setLmeOnDuty: (param) => {
            setLmeOnDuty(param)
            setPrescricaoOnDuty(null)
            setAtestadoOnDuty(null)
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
        },
        setNovoAtestado: (clienteId) => {
            setAtestadoEdit(NovoAtestado(clienteId))
        },
        atestadoEdit,
        setAtestadoEdit,
        atestadoOnDuty,
        setAtestadoOnDuty: (atestado) => {
            setAtestadoOnDuty(atestado)
            setLmeOnDuty(null)
            setPrescricaoOnDuty(null)
        },
        setResetAtendimento: () => {
            setPrescricaoEdit(null)
            setPrescricaoOnDuty(null)
            setLmeEdit(null)
            setAtestadoEdit(null)
            setMedicamentoEdit(null)
            setLmeOnDuty(null)
            setAtestadoOnDuty(null)
        }
    }
}

export default AtendimentoProvider