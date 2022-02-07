import { useState } from "react"

const LoginProvider = () => {

    // o mais certo seria pegar do bando de dados ou fazer um bando de dados NOSQL ou SQLite para gardar essas variáveis 
    // como o CID 10 também
    const locais = [
        ['Consultório', 'consultorio',],
        ['CISGAP', 'cisgap',],
        ['CISCO', 'cisco',],
    ]

    const [login, setLogin] = useState(false)

    const [profissional, setProfissional] = useState({
        nome: "Dr. Diogo Ferreira de Paula",
        crm: "23838"
    })
    const [local, setLocal] = useState('nada')

    return {
        login,
        setLogin: () => setLogin(true),
        profissional,
        setProfissional,
        locais,
        local,
        setLocalConsultorio: () => setLocal("consultorio"),
        setLocalCisco: () => setLocal("cisco"),
        setLocalCisgap: () => setLocal("cisgap"),
    }
}

export default LoginProvider