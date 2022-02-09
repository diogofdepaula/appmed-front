import { useReducer, useState } from "react"

const NavigateProvider = () => {

    const [page, setPage] = useState()
    const [step, setStep] = useState()
    const [section, setSection] = useState()
    const [pageContentContext, setPageContentContext] = useState()
    const [, forceUpdate] = useReducer((x) => x + 1, 0)

    return {
        pageContentContext,
        setPageContentContext,
        forceUpdate,
        page,
        setPage,
        setPageReset: () => setPage(""),
        step,
        setStep,
        section,
        setSection,
    }
}

export default NavigateProvider