import { Box, Chip, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { AtendimentoContext } from '../../..';
import Cid10 from '../../../../../components/cid10';

const LMECIDSet = () => {

    const { lmeEdit, setLmeEdit, setStep } = useContext(AtendimentoContext)
    const [cid10] = useState(Cid10())
    const [cidsfiltrados, setcidsfiltrados] = useState([])

    const filterCID10 = event => {

        if (event.target.value.length >= 3) {
            let filtro = [...cid10].filter(w =>
                w.cid10.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 ||
                w.descricao.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
            )
            if (filtro.length === 0) {
                filtro.push({
                    id: 0,
                    farmaco: "nenhum cid encontrado"
                })

                // tem algum erro aqui quando coloca filtra algo que não encontoru não está pondo essa linha "nenhum cid encontrado"
            }
            setcidsfiltrados(filtro)
        } else {
            setcidsfiltrados([])
        }
    }

    const handleTableRow = param => () => {
        setLmeEdit({
            ...lmeEdit,
            cid10: param.cid10,
            diagnostico: param.descricao

        })
        setStep(21)
    }

    return (
        <div>
            <Box m={2}>
                <Box>
                    <Grid container justify="flex-start" spacing={1}>
                        {cid10.filter(m => m.favorito).map(x =>
                            <Grid item key={x.cid10}>
                                <Chip
                                    label={x.cid10}
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
                        label='Filtrar CIDs (pelo menos 3 digitos)'
                        onChange={filterCID10}
                    />
                </Box>
                <Box mt={1}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableBody>
                                {cidsfiltrados.map(cid =>
                                    <TableRow
                                        key={cid.id}
                                        onClick={handleTableRow(cid)}
                                    >
                                        <TableCell component="th" scope="row">
                                            {cid.cid10} - {cid.descricao}
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </div>
    )
}

export default LMECIDSet