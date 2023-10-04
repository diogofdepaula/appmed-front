import { useState } from "react"

const DataProvider = () => {

    const [dataClientesUpdate, setDataClientesUpdate] = useState(false)
    const [allClientes, setAllClientes] = useState([])
    const [dataMedUpdate, setDataMedUpdate] = useState(false)
    const [allMedicamentos, setAllMedicamentos] = useState([])

    const fetchSearchAllMedicamentosFat = async () => {
        const result = await fetch(process.env.REACT_APP_API_URL + '/medicamentos/allfat')
        const data = await result.json()
        setAllMedicamentos(data)
        setDataMedUpdate(true)
    }

    const fetchSearchAllClientesFit = async () => {
        const result = await fetch(process.env.REACT_APP_API_URL + '/clientes/allfit')
        const data = await result.json()
        setAllClientes(data)
        setDataClientesUpdate(true)
    }

    return {
        dataMedUpdate,
        setDataMedUpdate,
        allMedicamentos,
        dataClientesUpdate,
        setDataClientesUpdate,
        allClientes,
        setFetchAllMedicamentos: () => fetchSearchAllMedicamentosFat(),
        setFetchAllClientes: () => fetchSearchAllClientesFit()
    }
}

export default DataProvider