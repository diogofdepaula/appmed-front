import { useContext } from "react"
import { LoginContext } from "../../../App"

export default function PageSize(tipo) {

    const { local } = useContext(LoginContext)

    // true = A5  // false = A4
    let size = local.cod === 'consultorio' && tipo !== 'lme' 

    return size
}