import { useState } from "react"

// Cliente escolhido pelo ClienteSet para ser usado em todos os pages, especialmente Atendimento

const ClienteProvider = () => {

    //const [cliente, setCliente] = useState([])
    const [clienteContext, setClienteContext] = useState()
    // const [clienteFast, setClienteFast] = useState()

    return {
        clienteContext,
        setClienteContext,
        // cliente,
        // setCliente,
        // setClienteReset: () => setCliente([]),
    }
}

export default ClienteProvider