import { useState } from "react"

const ClienteProvider = () => {

    const [clienteContext, setClienteContext] = useState()

    const fetchClienteIncludes = async (param) => {
        await fetch(process.env.REACT_APP_API_URL + '/clientes/' + param)
            .then(res => {
                if (res.ok) {
                   return res.json()
                }
            }).then(data => {
                setClienteContext(data)
            })
    }

    return {
        clienteContext,
        setClienteContext,
        setClienteIncludes: (param) => fetchClienteIncludes(param),
    }
}

export default ClienteProvider