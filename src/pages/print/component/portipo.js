import { useContext } from "react"
import { ImpressaoContext } from "../../.."

export default function PorTipo(tipo, a4, a5 ) {

    const { impressao } = useContext(ImpressaoContext)

    let classes = impressao.local === 'consultorio' && tipo !== 'lme' ? a5 : a4

    return classes
}