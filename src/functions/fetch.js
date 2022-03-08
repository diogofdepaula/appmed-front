import { useCallback, useEffect } from "react"

const Fetch = (param) => {
    const fetchData = useCallback(async () => {
        const res = await fetch(process.env.REACT_APP_API_URL + param)
        const json = await res.json()
        return {
            json,
            res
        }
    }, [])

    useEffect(() => {
        fetchData();
      }, [fetchData])

    return fetchData
}

export default Fetch