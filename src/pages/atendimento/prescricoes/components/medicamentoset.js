import { Box, Button, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from '@mui/material'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AtendimentoContext, AtendimentoNavigateContext } from '../..'
import { AtendimentoLeft, AtendimentoOutside, AtendimentoRight } from '../../../../components/atendimento/layout'

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
        setStep(121)
    }

    return (
        <>
            <AtendimentoOutside>
                <AtendimentoLeft>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
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
                                    {medicamentosfiltrados
                                    .sort((a, b) => a.farmaco - b.farmaco)
                                    .map(medicamento =>
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
                </AtendimentoLeft>
                <Divider orientation="vertical" flexItem />
                <AtendimentoRight>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignContent: 'flex-start',
                            flexGrow: 1,
                            '& > :not(style)': {  // '& .MuiTextField-root': {
                                ml: '0.2rem',
                                mb: '0.2rem',
                            },
                        }}

                    >
                        {medicamentos.filter(m => m.favorito).map(x =>
                            <Button
                                variant="outlined"
                                size="small"
                                key={x.id}
                                onClick={handleTableRow(x)}
                            >
                                {x.abreviatura ?? x.farmaco}
                            </Button>
                        )}
                    </Box>
                </AtendimentoRight>
            </AtendimentoOutside>
        </>
    )
}

export default MedicamentoSet