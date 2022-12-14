import { useState } from "react"
import AtendimentoMain from "../../pages/atendimento/main"
import PrescricoesMain from "../../pages/atendimento/prescricoes"
import ApresentacaoSet from "../../pages/atendimento/prescricoes/apresentacaoset"
import AtestadoSet from "../../pages/atendimento/prescricoes/atestadoset"
import LMECIDSet from "../../pages/atendimento/prescricoes/lmecidset"
import LmeDelete from "../../pages/atendimento/prescricoes/lmedetele"
import LMEDoses from "../../pages/atendimento/prescricoes/lmedoses"
import LMEForkSet from "../../pages/atendimento/prescricoes/lmeforkset"
import LMEVarSet from "../../pages/atendimento/prescricoes/lmevarset"
import MedicamentoSet from "../../pages/atendimento/prescricoes/medicamentoset"
import PosologiaNaoPadraoSet from "../../pages/atendimento/prescricoes/posologianaopadraoset"
import PosologiaSet from "../../pages/atendimento/prescricoes/posologiaset"
import PrescricaoDelete from "../../pages/atendimento/prescricoes/prescricaodelete"
import PrescricaoVarSet from "../../pages/atendimento/prescricoes/prescricaovarset"
import RelatorioSet1 from "../../pages/atendimento/prescricoes/relatorioset1"
import RelatorioSet2 from "../../pages/atendimento/prescricoes/relatorioset2"
import RelatorioSet3 from "../../pages/atendimento/prescricoes/relatorioset3"
import RelatorioSet4 from "../../pages/atendimento/prescricoes/relatorioset4"
import RelatorioSet5 from "../../pages/atendimento/prescricoes/relatorioset5"
import RelatorioSet6 from "../../pages/atendimento/prescricoes/relatorioset6"
import Requisicao from "../../pages/atendimento/requisicao"
import Print from "../../pages/print"

const AtendimentoNavegateProvider = () => {

    const [article, setArticle] = useState(<AtendimentoMain />)
    const [section, setSection] = useState(<div />)
    const [step, setStep] = useState(111)
    // utilizado no botão que manda imprimir
    // quando puder, bolar algo para não precisar disso
    const [print, setPrint] = useState(false)

    // definição do step
    // 1º número:   1 - prescricao  3 - LME 5 - Alguma outra coisa  7 - Atestados     == optei por pular um, pois se precisar encaixar alguma coisa fica mais fácil
    //                                         -- optei por não por o Atestado aqui pois só tem uma pagina de formulário.    
    // 2º número:   define o que era o step antes, ou seja, qual será a Section agora
    // 3º número:   define variaçoes dentro da Section

    const SetSectionByStep = (param) => {

        const Section = {
            111: <MedicamentoSet />,
            121: <ApresentacaoSet />,
            131: <PosologiaSet />,
            132: <PosologiaNaoPadraoSet />,
            141: <PrescricaoVarSet />,
            151: <LMEDoses />,
            161: <LMEForkSet />,
            311: <LMECIDSet />,
            321: <LMEVarSet />,
            331: <RelatorioSet1 />,
            341: <RelatorioSet2 />,
            351: <RelatorioSet3 />,
            361: <RelatorioSet4 />,
            371: <RelatorioSet5 />,
            381: <RelatorioSet6 />,
            711: <AtestadoSet />,
            default: <div />
        }
        return Section[param] || Section.default
    }

    return {
        article,
        step,
        section,
        print, 
        setPrint,
        setArticleAtendimentoMain: () => {
            setArticle(<AtendimentoMain />)
            setPrint(false)
        },
        setArticlePrescricoesMain: () => {
            setArticle(<PrescricoesMain />)
        },
        setArticlePrescricaoDelete: () => {
            setArticle(<PrescricaoDelete />)
        },
        setArticleLMEDelete: () => {
            setArticle(<LmeDelete />)
        },
        setArticlePrint: () => {
            setArticle(<Print />)
            setPrint(true)
        },
        setArticleRequisicao: () => {
            setArticle(<Requisicao />)
        },
        setStep: (param) => {
            setSection(SetSectionByStep(param))
            setStep(param)
        },
        setStepPrevious: () => {
            setSection(SetSectionByStep(step - 10))
            setStep(step - 10)
        },
        setStepNext: () => {
            setSection(SetSectionByStep(step + 10))
            setStep(step + 10)
        },
        setResetAtendimentoNavegate: () => {
            setStep(0)
            setArticle(<AtendimentoMain />)
            setPrint(false)
        }
    }
}

export default AtendimentoNavegateProvider
