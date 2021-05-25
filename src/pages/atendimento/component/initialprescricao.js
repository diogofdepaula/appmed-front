import { format } from "date-fns"

export default function InitialPrescricao (param) {

    const initial = {
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
        termino: null,
        motivotermico: '',
        clienteId: param, 
        lmeId: null,
        medicamentoId: '',
        apresentacoId: '',
        posologiaId: ''
    }

    return initial
}


