import AtestadoA4 from "./atestadoa4"
import AtestadoA5 from "./atestadoa5"

const Atestado = ({ texto, tipo }) => {

    if (tipo !== "consultorio") return <AtestadoA4 texto={texto} tipo={tipo} />

    return <AtestadoA5 texto={texto} tipo={tipo} />
}

export default Atestado