import { useState } from "react"
import AtendimentoMain from "../../pages/atendimento/main"
import PrescricoesMain from "../../pages/atendimento/prescricoes"
import ApresentacaoSet from "../../pages/atendimento/prescricoes/apresentacaoset"
import LMECIDSet from "../../pages/atendimento/prescricoes/lmecidset"
import LMEDoses from "../../pages/atendimento/prescricoes/lmedoses"
import LMEForkSet from "../../pages/atendimento/prescricoes/lmeforkset"
import LMEVarSet from "../../pages/atendimento/prescricoes/lmevarset"
import MedicamentoSet from "../../pages/atendimento/prescricoes/medicamentoset"
import PosologiaNaoPadraoSet from "../../pages/atendimento/prescricoes/posologianaopadraoset"
import PosologiaSet from "../../pages/atendimento/prescricoes/posologiaset"
import PrescricaoVarSet from "../../pages/atendimento/prescricoes/prescricaovarset"
import RelatorioSet1 from "../../pages/atendimento/prescricoes/relatorioset1"
import RelatorioSet2 from "../../pages/atendimento/prescricoes/relatorioset2"
import RelatorioSet3 from "../../pages/atendimento/prescricoes/relatorioset3"
import RelatorioSet4 from "../../pages/atendimento/prescricoes/relatorioset4"
import RelatorioSet5 from "../../pages/atendimento/prescricoes/relatorioset5"
import RelatorioSet6 from "../../pages/atendimento/prescricoes/relatorioset6"

import Print from "../../pages/print"

const AtendimentoNavegateProvider = () => {

    const [article, setArticle] = useState(<AtendimentoMain />)
//    const [appbar, setAppbar] = useState(<PrescricoesMainAppBar />)
    const [section, setSection] = useState(<div />)
    const [step, setStep] = useState(111)

    // definição do step
    // 1º número:   1 - prescricao  3 - LME 5 - Alguma outra coisa      == optei por pular um, pois se precisar encaixar alguma coisa fica mais fácil
    // 2º número:   define o que era o step antes, ou seja, qual será a Section
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
            default: <div />
        }
        return Section[param] || Section.default
    }

    return {
        article,
        setArticleAtendimentoMain: () => {
            setArticle(<AtendimentoMain />)
            //setAppbar(<PrescricoesMainAppBar />)
        },
        setArticlePrescricoesMain: () => {
            setArticle(<PrescricoesMain />)
        },
        // setArticlePrescricaoInsert: () => {
        //     setArticle(<PrescricaoInsert />)
        //     setAppbar(<PrecricoesEditorAppBar />)
        // },
        // setArticlePrescricaoUpdate: () => {
        //     setArticle(<PrescricaoUpdate />)
        //     setAppbar(<PrecricoesEditorAppBar />)
        // },
        // setArticlePrescricaoDelete: () => {
        //     setArticle(<PrescricaoDelete />)
        // },
        // setArticleLMEInsert: () => {
        //     setArticle(<LMEInsert />)
        //     setAppbar(<LmeEditorAppBar />)
        // },
        // setArticleLMEUpdate: () => {
        //     setArticle(<LMEUpdate />)
        //     setAppbar(<LmeEditorAppBar />)
        // },
        // setArticleLMEDelete: () => setArticle(<LMEDelete />),
        setPagePrint: () => {
            setArticle(<Print />)
          //  setAppbar(<PrintMainAppBar />)
        },
        step,
        setStep: (param) => {
            console.log('param', param);
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
        section,
    }
}

export default AtendimentoNavegateProvider
