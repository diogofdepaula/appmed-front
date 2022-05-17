import { useState } from "react"

const ClienteProvider = () => {

    const [clienteContext, setClienteContext] = useState()

    const fetchClienteIncludes = async (param) => {
        console.log("teste 1");
        await fetch(process.env.REACT_APP_API_URL + '/clientes/' + param)
            .then(res => {
                if (res.ok) {
                    console.log("teste 2");
                   return res.json()
                }
            }).then(data => {
                console.log("teste 3");
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