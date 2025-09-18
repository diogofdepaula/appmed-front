import { useState } from "react"
import { Locais } from "../../utils/locais"

const LoginProvider = () => {

    // DEIXEI COMO TRUE SÓ PARA FASE DE DESENVOLVIMENTO
    // DEPOIS QUE TERMINAR VOLTAR PARA FALSE E
    // GUARADAR DADOS DE QUE FEZ O LOGIN NO PROFISSIONAL OU CRIAR UM 'USUÁRIO'
    const [login, setLogin] = useState(true)

    const [profissional, setProfissional] = useState({
        nome: "Dr. Diogo Ferreira de Paula",
        crm: "23838"
    })
    const [local, setLocal] = useState(Locais('consultorio'))

    return {
        login,
        setLogin: () => setLogin(true),
        profissional,
        setProfissional,
        local,
        setLocal: (param) => setLocal(Locais(param)),
    }
}

export default LoginProvider