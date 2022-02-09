import { useState } from "react"

const ClienteProvider = () => {

    const [cliente, setCliente] = useState([])
    const [clienteContext, setClienteContext] = useState()

    return {
        clienteContext,
        setClienteContext,
        cliente,
        setCliente,
        setClienteReset: () => setCliente([]),
    }
}

export default ClienteProvider