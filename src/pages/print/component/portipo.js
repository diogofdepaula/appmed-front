import { useContext } from "react"
import { ImpressaoContext } from "../../.."
import { LoginContext } from "../../../App"

export default function PorTipo(tipo, a4, a5 ) {

    const { local } = useContext(LoginContext)

    let classes = local === 'consultorio' && tipo !== 'lme' ? a5 : a4

    return classes
}