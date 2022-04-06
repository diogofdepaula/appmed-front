import { Print } from "@mui/icons-material"
import { useState } from "react"
import LmeEditorAppBar from "../../components/appbar/lmeeditorappbar"
import PrecricoesEditorAppBar from "../../components/appbar/prescricaoeditorappbar"
import PrescricoesMainAppBar from "../../components/appbar/prescricaomainappbar"
import PrintMainAppBar from "../../components/appbar/printmainappbar"
import LMEDelete from "../../pages/atendimento/lmes/delete"
import LMEInsert from "../../pages/atendimento/lmes/insert"
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
    const [step, setStep] = useState(11)
    const [section, setSection] = useState(<div />)

    const SetSectionByStep = (param) => {

        console.log('param2 :>> ', param);

        const Section = {
            11: <MedicamentoSet />,
            21: <ApresentacaoSet />,
            31: <PosologiaSet />,
            32: <PosologiaNaoPadraoSet />,
            41: <PrescricaoVarSet />,
            51: <LMEDoses />,
            61: <LMEForkSet />,
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
            console.log('param1 :>> ', param);
            setSection(SetSectionByStep(param))
            setStep(param)
        }, 
        section,
    }
}

export default AtendimentoNavegateProvider
