import { Box, FormControlLabel, FormGroup, Switch } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { MedicamentoRelatorio } from '../utils/inquiries';

const Estatistica = () => {

    const [dados, setDados] = useState([]);
    const [todos, setTodos] = useState(false);

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
        .filter(y => todos ? y : MedicamentoRelatorio(y.medicamento))
        .forEach(w => {
            if (!fila.includes(w.medicamento.farmaco)) {
                fila.push(w.medicamento.farmaco)
            }
        })

    const handleChange = (event) => {
        setTodos(event.target.checked);
    }

    return (
        <>
            <Box
                sx={{
                    display: "block",
                    p: 4,
                }}
            >
                <FormGroup>
                    <FormControlLabel
                        label="Todo medicamentos"
                        control={
                            <Switch
                                onChange={handleChange}
                            />
                        } />
                </FormGroup>
                <Box>
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
                                    gap: 1,
                                    px: 2,
                                }}
                            >
                                <Box>
                                    {w}
                                </Box>
                                <Box>
                                    {dados
                                        .filter(y => y.emuso)
                                        .filter(y => y.medicamento.farmaco === w).length
                                    }
                                </Box>
                            </Box>
                        ))}
                </Box>
            </Box>
        </>
    )
}

export default Estatistica