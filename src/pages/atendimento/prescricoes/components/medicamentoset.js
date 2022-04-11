import { Box, Chip, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from '@mui/material'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AtendimentoContext, AtendimentoNavigateContext } from '../..'

const MedicamentoSet = () => {

    const { prescricaoEdit, setPrescricaoEdit } = useContext(AtendimentoContext)
    const { setStep } = useContext(AtendimentoNavigateContext)

    const [medicamentos, setMedicamentos] = useState([])
    const [medicamentosfiltrados, setmedicamentosfiltrados] = useState([])

    const fetchData = useCallback(async () => {
        const res = await fetch(process.env.REACT_APP_API_URL + '/medicamentos/short')
        const json = await res.json()
        setMedicamentos(json)
    }, [])

    useEffect(() => {
        fetchData()
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
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexGrow: 1,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                        mr: 2
                    }}
                >
                    <TextField
                        fullWidth
                        autoFocus
                        variant='outlined'
                        label='Digite o nome do fármaco'
                        onChange={filterMedicamento}
                    />
                    <TableContainer component={Paper}>
                        <Table>
                            <TableBody>
                                {medicamentosfiltrados.map(medicamento =>
                                    <TableRow
                                        key={medicamento.id}
                                        onClick={handleTableRow(medicamento)}
                                    >
                                        <TableCell component="th" scope="row">
                                            {medicamento.abreviatura 
                                            ? 
                                            medicamento.farmaco + ' (' + medicamento.abreviatura + ')' 
                                            : 
                                            medicamento.farmaco
                                            }
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignContent: 'flex-start',
                        width: '10rem', //'20%',
                        flexGrow: 1,
                        '& > :not(style)': {  // '& .MuiTextField-root': {
                            ml: '0.2rem',
                            mb: '0.2rem',
                        },
                    }}

                >
                    {medicamentos.filter(m => m.favorito).map(x =>
                        <Chip
                            key={x.id}
                            label={x.abreviatura ?? x.farmaco}
                            clickable
                            color="primary"
                            variant="outlined"
                            onClick={handleTableRow(x)}
                        />
                    )}
                </Box>
            </Box>


        </>
    )
}

export default MedicamentoSet