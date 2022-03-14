import { Print } from "@mui/icons-material"
import { useState } from "react"
import LmeEditorAppBar from "../../components/appbar/lmeeditorappbar"
import LmesMainAppBar from "../../components/appbar/lmemainappbar"
import PrecricoesEditorAppBar from "../../components/appbar/prescricaoeditorappbar"
import PrescricoesMainAppBar from "../../components/appbar/prescricaomainappbar"
import PrintMainAppBar from "../../components/appbar/printmainappbar"
import LMEDelete from "../../pages/atendimento/pages/lmes/delete"
import LMEInsert from "../../pages/atendimento/pages/lmes/insert"
import LMEMain from "../../pages/atendimento/pages/lmes/main"
import LMEUpdate from "../../pages/atendimento/pages/lmes/update"
import PrescricaoDelete from "../../pages/atendimento/pages/prescricoes/delete"
import PrescricaoInsert from "../../pages/atendimento/pages/prescricoes/insert"
import PrescricaoMain from "../../pages/atendimento/pages/prescricoes/main"
import PrescricaoUpdate from "../../pages/atendimento/pages/prescricoes/update"

const AtendimentoNavegateProvider = () => {

    const [article, setArticle] = useState(<div>Atendimento Content  - fazer uma coisa bacana depois com Cards para acelerar o acesso.</div>)
    const [appbar, setAppbar] = useState(<div />)
    const [step, setStep] = useState()

    return {
        article,
        appbar,
        setArticlePrescricaoMain: () => {
            setArticle(<PrescricaoMain />)
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
        setArticleLMEMain: () => {
            setArticle(<LMEMain />)
            setAppbar(<LmesMainAppBar />)
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
        setStep,
    }
}

export default AtendimentoNavegateProvider
