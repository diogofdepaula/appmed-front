import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

const Estatistica = () => {

    const [dados, setDados] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(process.env.REACT_APP_API_URL + `/prescricoes/all`)
            const json = await res.json()
            setDados(json)
        }
        fetchData()
    }, [])

    let fila = []

    dados?.forEach(w => {
        if (!fila.includes(w.medicamento.farmaco)) {
            fila.push(w.medicamento.farmaco)
        }
    })


    return (
        <>
            {fila?.map(w => (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: 'row',
                        gap: 1,
                        p: 2,

                    }}
                >
                    <Box>
                        {w}
                    </Box>
                    <Box>
                        {dados?.filter(y => y.medicamento.farmaco === w).length}
                    </Box>
                </Box>
            ))}
        </>
    )
}

export default Estatistica