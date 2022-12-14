import { useState } from "react"

const ClienteProvider = () => {

    const [clienteContext, setClienteContext] = useState()

    const fetchResetCliente = async () => {
        await fetch(process.env.REACT_APP_API_URL + '/clientes/' + clienteContext.id)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            }).then(data => {
                // isso inclui os includes Prescricao nas LMES sem precisar
                // fazer uma pesquisa duplicada no bando de dados
                const lmes = data.lmes.map(l => {
                    let n = data.prescricoes.filter(p => p.lmeId === l.id)
                    return { ...l, prescricoes: n }
                })
                return { ...data, lmes: lmes }
            }).then(cliente => {
                setClienteContext(cliente)
            })
    }

    return {
        clienteContext,
        setClienteContext,
        setResetCliente: () => fetchResetCliente()
    }
}

export default ClienteProvider