import { useState } from "react"

const Navegacao = () => {

    const [page, setPage] = useState()
    const [section, setSection] = useState()

    return {
        page,
        setPage,
        setPageReset: () => setPage(""),
        section,
        setSection,
    }
}

export default Navegacao