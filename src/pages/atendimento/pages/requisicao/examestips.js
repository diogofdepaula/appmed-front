import { useContext } from "react"
import { ImpressaoContext } from "../.."

const ExamesTips = () => {

    const { impressao } = useContext(ImpressaoContext)

    // const exames = [
    //     []
    // ]

    return (
        <>
           {JSON.stringify(impressao)}
        </>
    )
}

export default ExamesTips

//"selecionados":["(40304361) Hemograma com contagem de plaquetas ou frações (eritrograma, leucograma, plaquetas)","(40302504) Transaminase oxalacética (amino transferase aspartato) - pesquisa e/ou dosagem","(40302512) Transaminase pirúvica (amino transferase de alanina) - pesquisa e/ou dosagem","(40301630) Creatinina - pesquisa e/ou dosagem","(40304370) Hemossedimentação, (VHS) - pesquisa e/ou dosagem","(40308391) Proteína C reativa, quantitativa - pesquisa e/ou dosagem"],"convenio":[["322571","UNIMED GUARAPUAVA COOPERATIVA DE TRABALHO MÉDICO","UNIMED",true,"XXX"]]}]