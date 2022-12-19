import { useState } from "react"

const ClienteProvider = () => {

    const [clienteContext, setClienteContext] = useState()

    const fetchResetCliente = async (param) => {
        const id = param === undefined ? clienteContext.id : param
        await fetch(process.env.REACT_APP_API_URL + '/clientes/' + id)
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
        setResetCliente: (param) => fetchResetCliente(param)
    }
}

export default ClienteProvider