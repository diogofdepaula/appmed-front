import { useContext } from "react"
import { LoginContext } from "../../../App"

export default function PorTipo(tipo, a4, a5 ) {

    const { local } = useContext(LoginContext)

    let classes = local.cod === 'consultorio' && tipo !== 'lme' ? a5 : a4

    return classes
}