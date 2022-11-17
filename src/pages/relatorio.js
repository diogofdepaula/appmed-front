import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { MedicamentoRelatorio } from '../utils/inquiries';

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

    dados
        .filter(y => MedicamentoRelatorio(y.medicamento))
        .filter(y => y.emuso)
        .forEach(w => {
        if (!fila.includes(w.medicamento.farmaco)) {
            fila.push(w.medicamento.farmaco)
        }
    })


    return (
        <>
            {fila
                .sort((x, y) => {
                    let a = x.toUpperCase()
                    let b = y.toUpperCase()
                    return a === b ? 0 : a > b ? 1 : -1
                })
                .map((w, i) => (
                    <Box
                        key={i}
                        sx={{
                            display: "flex",
                            flexDirection: 'row',
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