import AtestadoA4 from "./atestadoa4"
import AtestadoA5 from "./atestadoa5"

const Atestado = ({ tipo }) => {

    if (tipo !== "consultorio") return <AtestadoA4 tipo={tipo} />

    return <AtestadoA5 tipo={tipo} />
}

export default Atestado