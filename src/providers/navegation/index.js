import { useState } from "react"

const NavegationModel = () => {

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

export default NavegationModel