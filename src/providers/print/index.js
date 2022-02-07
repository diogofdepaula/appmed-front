import { useState } from "react"

const PrintModel = () => {

    const [print, setPrint] = useState([])

    return {
        print,
        setPrint,
        setPrintReset: () => setPrint([]),
    }
}

export default PrintModel



// const initialImpressao = {
//     printRef: null,
//     visualizacao: false,
//     prescricoesSelecionadas: [],
//     tipo: '', // simples, controlado
//     meses: 6,
//     local: 'consultorio', // consultorio, SUS (cisgap, cisco)
//     lmes: [],
//     lmesSelecionadas: [],
//     termosSelecionados: [],
//     lme: '',
//     relatorio: true,
//     comentario: '-',
//     nomecomercial: true,
//     continuo: false,
//     requisicao: true,
//     requisicoes: [], // { indice, justificativa, selecionados, convenio }
//     database: new Date(),
//     somaheighta4: 950, // 900, 
//     somaheighta5: 440,
// }