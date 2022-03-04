
import { useState } from "react"
import ClienteInsert from "../../pages/cadastro/clientes/insert"
import ClienteMain from "../../pages/cadastro/clientes/main"
import ClienteUpdate from "../../pages/cadastro/clientes/update"

const ClienteNavegateProvider = () => {

    const [page, setPage] = useState(<ClienteMain />)
    const [clienteOnDuty, setClienteOnDuty] = useState()
    const [clienteEdit, setClienteEdit] = useState([])

    return {
        clienteOnDuty,
        setClienteOnDuty,
        clienteEdit,
        setClienteEdit,
        page,
        setPageMain: () => setPage(<ClienteMain />),
        // clienteinsert e update é exatamete a mesma coisa
        setPageInsert: () => setPage(<ClienteInsert />),
        setPageUpdate: () => setPage(<ClienteUpdate />),
    }
}

export default ClienteNavegateProvider
