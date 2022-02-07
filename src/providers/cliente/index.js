import { useState } from "react"

const ClienteModel= () => {

    const [cliente, setCliente] = useState([])

    return {
        cliente,
        setCliente,
        setClienteReset: () => setCliente([]),
    }
}

export default ClienteModel