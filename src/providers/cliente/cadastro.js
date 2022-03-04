
import { useState } from "react"

export const InitialCliente = () => {

    return {
        nome: "",
        nascimento: "",
        sexo: "feminino",
        peso: "",
        altura: "",
        endereco: "",
        telefone: "",
        celular: "",
        email: "",
        cns: "",
        cpf: "",
        mae: ""
    }
}

// Provider usado no page de Cadastro.
const ClienteCadastroProvider = () => {

    const [page, setPage] = useState('')
    //const [clienteOnDuty, setClienteOnDuty] = useState(clientesContext)
    const [clienteOnDuty, setClienteOnDuty] = useState()
    const [clienteEdit, setClienteEdit] = useState([])

    return {
        clienteOnDuty,
        setClienteOnDuty,
        clienteEdit,
        setClienteEdit,
        page,
        setPage,
    }
}

export default ClienteCadastroProvider
