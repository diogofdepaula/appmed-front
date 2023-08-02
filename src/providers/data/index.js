import { useState } from "react"

const DataProvider = () => {

    const [dataMedUpdate, setDataMedUpdate] = useState(false)
    const [allMedicamentos, setAllMedicamentos] = useState([])

    const fetchSearchAllFat = async () => {
        await fetch(process.env.REACT_APP_API_URL + '/medicamentos/allfat')
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            }).then(data => {
                setAllMedicamentos(data)
                setDataMedUpdate(true)
            })
    }

    return {
        dataMedUpdate,
        setDataMedUpdate,
        allMedicamentos,
        setFetchAllMedicamentos: () => fetchSearchAllFat()
    }
}

export default DataProvider