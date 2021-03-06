import { useState } from "react"
import Atendimento from "../../pages/atendimento"
import Clientes from "../../pages/cadastro/clientes"
import Medicamentos from "../../pages/cadastro/medicamentos"
import Print from "../../pages/print"

const NavigateProvider = () => {

    const [page, setPage] = useState(<div />)

    // Fazer uma página inicial com o Cards para acelerar prescrição e impressão

    return {
        page,
        setPage,
        setPageAtendimento: () => setPage(<Atendimento />),
        setPageClientes: () => setPage(<Clientes />),
        setPageMedicamentos: () => setPage(<Medicamentos />),
        setPagePrint:  () => setPage(<Print />),
        setPageReset: () => setPage(<div />),
    }
}

export default NavigateProvider