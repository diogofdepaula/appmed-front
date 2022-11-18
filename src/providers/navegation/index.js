import { useState } from "react"
import Atendimento from "../../pages/atendimento"
import Clientes from "../../pages/cadastro/clientes"
import Medicamentos from "../../pages/cadastro/medicamentos"
import CID10 from "../../pages/cid10"
import Print from "../../pages/print"
import Procedimentos from "../../pages/procedimentos"
import Estatistica from "../../pages/estastistica"
import Avulso from "../../pages/avulso"

const NavigateProvider = () => {

    const [page, setPage] = useState(<div />)

    // Fazer uma página inicial com o Cards para acelerar prescrição e impressão

    return {
        page,
        setPage,
        setPageAtendimento: () => setPage(<Atendimento />),
        setPageClientes: () => setPage(<Clientes />),
        setPageMedicamentos: () => setPage(<Medicamentos />),
        setPagePrint: () => setPage(<Print />),
        setPageCID: () => setPage(<CID10 />),
        setPageProcedimentos: () => setPage(<Procedimentos />),
        setPageEstatistica: () => setPage(<Estatistica />),
        setPageAvulso: () => setPage(<Avulso />),
        setPageReset: () => setPage(<div />),
    }
}

export default NavigateProvider