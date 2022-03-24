import { useState } from "react"

// Cliente escolhido pelo ClienteSet para ser usado em todos os pages, especialmente Atendimento

const ClienteProvider = () => {

    //const [clienteTeste, setClienteTeste] = useState([])
    const [clienteContext, setClienteContext] = useState()
    // const [clienteFast, setClienteFast] = useState()

    return {
        clienteContext,
        setClienteContext,
        // clienteTeste, 
        // setClienteTeste,
        // setClienteReset: () => setCliente([]),
    }
}

export default ClienteProvider