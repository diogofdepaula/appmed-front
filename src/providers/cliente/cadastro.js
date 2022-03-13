
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

    const [clienteOnDuty, setClienteOnDuty] = useState()
    const [clienteEdit, setClienteEdit] = useState(InitialCliente())

    return {
        clienteOnDuty,
        setClienteOnDuty,
        clienteEdit,
        setClienteEdit,
    }
}

export default ClienteCadastroProvider
