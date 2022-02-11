import { useContext } from "react"
import { ImpressaoContext } from "../../atendimento"

export default function PageSize(tipo) {

    const { impressao } = useContext(ImpressaoContext)

    // true = A5  // false = A4
    let size = impressao.local === 'consultorio' && tipo !== 'lme' 

    return size
}