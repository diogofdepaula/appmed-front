import { useState } from "react"

const ClienteProvider = () => {

    const [clienteContext, setClienteContext] = useState()

    return {
        clienteContext,
        setClienteContext,
    }
}

export default ClienteProvider