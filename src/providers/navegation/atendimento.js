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
import PrescricaoDelete from "../../pages/atendimento/prescricoes/delete"
import PrescricaoInsert from "../../pages/atendimento/prescricoes/insert"
import PrescricaoUpdate from "../../pages/atendimento/prescricoes/update"

const AtendimentoNavegateProvider = () => {

    const [article, setArticle] = useState(<AtendimentoMain />)
    const [appbar, setAppbar] = useState(<PrescricoesMainAppBar />)
    const [step, setStep] = useState(11)

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
        setArticlePrescricaoDelete: () => setArticle(<PrescricaoDelete />),
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
        setStep,
    }
}

export default AtendimentoNavegateProvider
