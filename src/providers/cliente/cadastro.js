
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

    // definir as variáveis das paginas em somente um lugar tanto para aqui como para Content
    const [page, setPage] = useState('clientesmain')
    //const [clienteOnDuty, setClienteOnDuty] = useState(clientesContext)
    const [clienteOnDuty, setClienteOnDuty] = useState()
    const [clienteEdit, setClienteEdit] = useState([])

    return {
        clienteOnDuty,
        setClienteOnDuty,
        clienteEdit,
        setClienteEdit,
        page,
        setPageMain: () => setPage('clientesmain'),
        setPageInsert: () => setPage('clienteinsert'),
        setPageUpdate: () => setPage('clienteupdate'),
    }
}

export default ClienteCadastroProvider
