import { Box, Chip, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from '@mui/material'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AtendimentoContext } from '../../..'

const MedicamentoSet = () => {

    const { prescricaoEdit, setPrescricaoEdit, setStep } = useContext(AtendimentoContext)

    const [medicamentos, setMedicamentos] = useState([])
    const [medicamentosfiltrados, setmedicamentosfiltrados] = useState([])

    const fetchData = useCallback(async () => {
        const res = await fetch(process.env.REACT_APP_API_URL + '/medicamentos/short')
        const json = await res.json();
        setMedicamentos(json);
    }, [])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    const filterMedicamento = event => {

        if (event.target.value.length >= 2) {
            let filtro = [...medicamentos].filter(w =>
                w.farmaco.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 ||
                w.abreviatura.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
            )
            if (filtro.length === 0) {
                filtro.push({
                    id: 0,
                    farmaco: "nenhum medicamento encontrado"
                })
            }
            setmedicamentosfiltrados(filtro)
        } else {
            setmedicamentosfiltrados([])
        }
    }

    const handleTableRow = param => () => {
        setPrescricaoEdit({ ...prescricaoEdit, medicamentoId: param.id })
        setStep(21)
    }

    return (
        <div>
            <Box>
                <Grid container justifyContent="flex-start" spacing={1}>
                    {medicamentos.filter(m => m.favorito).map(x =>
                        <Grid item key={x.id}>
                            <Chip
                                label={x.abreviatura ?? x.farmaco}
                                clickable
                                color="primary"
                                variant="outlined"
                                onClick={handleTableRow(x)}
                            />
                        </Grid>
                    )}
                </Grid>
            </Box>
            <Box mt={2} mb={1}>
                <TextField
                    fullWidth
                    autoFocus
                    variant='outlined'
                    label='Digite o nome do fármaco'
                    onChange={filterMedicamento}
                />
            </Box>
            <Box mt={1}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                            {medicamentosfiltrados.map(medicamento =>
                                <TableRow
                                    key={medicamento.id}
                                    onClick={handleTableRow(medicamento)}
                                >
                                    <TableCell component="th" scope="row">
                                        {medicamento.abreviatura ? medicamento.farmaco + ' (' + medicamento.abreviatura + ')' : medicamento.farmaco}
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </div>
    );
}
export default MedicamentoSet