import { useState } from "react"

const Cliente = () => {

    const [cliente, setCliente] = useState([])

    return {
        cliente,
        setCliente,
        setClienteReset: () => setCliente([]),
    }
}

export default Cliente