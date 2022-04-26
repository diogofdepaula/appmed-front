import { Print } from "@mui/icons-material"
import { useState } from "react"
import LmeEditorAppBar from "../../components/appbar/lmeeditorappbar"
import PrecricoesEditorAppBar from "../../components/appbar/prescricaoeditorappbar"
import PrescricoesMainAppBar from "../../components/appbar/prescricaomainappbar"
import PrintMainAppBar from "../../components/appbar/printmainappbar"
import LMECIDSet from "../../pages/atendimento/lmes/components/lmecidset"
import LMEVarSet from "../../pages/atendimento/lmes/components/lmevarset"
import LMEDelete from "../../pages/atendimento/lmes/delete"
import LMEInsert from "../../pages/atendimento/lmes/insert"
import RelatorioSet1 from "../../pages/atendimento/lmes/relatorio/components/relatorioset1"
import RelatorioSet2 from "../../pages/atendimento/lmes/relatorio/components/relatorioset2"
import RelatorioSet3 from "../../pages/atendimento/lmes/relatorio/components/relatorioset3"
import RelatorioSet4 from "../../pages/atendimento/lmes/relatorio/components/relatorioset4"
import RelatorioSet5 from "../../pages/atendimento/lmes/relatorio/components/relatorioset5"
import RelatorioSet6 from "../../pages/atendimento/lmes/relatorio/components/relatorioset6"
import LMEUpdate from "../../pages/atendimento/lmes/update"
import AtendimentoMain from "../../pages/atendimento/main"
import ApresentacaoSet from "../../pages/atendimento/prescricoes/components/apresentacaoset"
import LMEDoses from "../../pages/atendimento/prescricoes/components/lmedoses"
import LMEForkSet from "../../pages/atendimento/prescricoes/components/lmeforkset"
import MedicamentoSet from "../../pages/atendimento/prescricoes/components/medicamentoset"
import PosologiaNaoPadraoSet from "../../pages/atendimento/prescricoes/components/posologianaopadraoset"
import PosologiaSet from "../../pages/atendimento/prescricoes/components/posologiaset"
import PrescricaoVarSet from "../../pages/atendimento/prescricoes/components/prescricaovarset"
import PrescricaoDelete from "../../pages/atendimento/prescricoes/delete"
import PrescricaoInsert from "../../pages/atendimento/prescricoes/insert"
import PrescricaoUpdate from "../../pages/atendimento/prescricoes/update"

const AtendimentoNavegateProvider = () => {

    const [article, setArticle] = useState(<AtendimentoMain />)
    const [appbar, setAppbar] = useState(<PrescricoesMainAppBar />)
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
        appbar,
        setArticleAtendimentoMain: () => {
            setArticle(<AtendimentoMain />)
            setAppbar(<PrescricoesMainAppBar />)
        },
        setArticlePrescricaoInsert: () => {
            setArticle(<PrescricaoInsert />)
            setAppbar(<PrecricoesEditorAppBar />)
        },
        setArticlePrescricaoUpdate: () => {
            setArticle(<PrescricaoUpdate />)
            setAppbar(<PrecricoesEditorAppBar />)
        },
        setArticlePrescricaoDelete: () => {
            setArticle(<PrescricaoDelete />)
        },
        setArticleLMEInsert: () => {
            setArticle(<LMEInsert />)
            setAppbar(<LmeEditorAppBar />)
        },
        setArticleLMEUpdate: () => {
            setArticle(<LMEUpdate />)
            setAppbar(<LmeEditorAppBar />)
        },
        setArticleLMEDelete: () => setArticle(<LMEDelete />),
        setPagePrint: () => {
            setArticle(<Print />)
            setAppbar(<PrintMainAppBar />)
        },
        step,
        setStep: (param) => {
            setSection(SetSectionByStep(param))
            setStep(param)
        },
        section,
    }
}

export default AtendimentoNavegateProvider
