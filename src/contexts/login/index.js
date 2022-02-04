import { useState } from "react"

const Login = () => {

    // https://www.youtube.com/watch?v=QjHX9qOngGA&t=1140s
    const [profissional, setProfissional] = useState({
        nome: "Dr. Diogo Ferreira de Paula",
        crm: "23838"
    })
    const [local, setLocal] = useState('consultório')

    return {
        profissional,
        setProfissional,
        local,
        setLocal: (param) => setLocal(param),
    }
}

export default Login