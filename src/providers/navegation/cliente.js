
import { useState } from "react"
import ClienteForm from "../../pages/cadastro/clientes/form"
import ClienteMain from "../../pages/cadastro/clientes/main"

const ClienteNavegateProvider = () => {

    const [page, setPage] = useState(<ClienteMain />)
    // mudar de page para article depois

    return {
        page,
        setPageMain: () => setPage(<ClienteMain />),
        setPageForm: () => setPage(<ClienteForm />),
    }
}

export default ClienteNavegateProvider
