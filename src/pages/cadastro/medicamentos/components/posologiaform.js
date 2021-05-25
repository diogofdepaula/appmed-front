import { Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Tooltip } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useContext } from 'react';
import { MedicamentosContext } from '..';

const PosologiaForm = () => {

    const { medicamentoEdit, setMedicamentoEdit } = useContext(MedicamentosContext)

    const handleAdd = () => {

        let ppposologia = document.getElementById('posologia')
        let ppquantidade = document.getElementById('quantidade')
        let ppforma = document.getElementById('forma')

        setMedicamentoEdit({
            ...medicamentoEdit,
            posologias: [
                ...medicamentoEdit.posologias, {
                    posologia: ppposologia.value,
                    quantidade: ppquantidade.value,
                    forma: ppforma.value,
                }]
        })

        ppposologia.value = ""
        ppquantidade.value = ""
        ppforma.value = ""
    }

    const handleDelete = (param, ind) => () => {

        if (param.id >= 0) {
            // deletar uma que já existe
            setMedicamentoEdit({
                ...medicamentoEdit,
                posologias: [
                    ...medicamentoEdit.posologias.map(pp => {
                        if (pp.id !== param.id) {
                            return pp
                        } else {
                            return {
                                ...pp,
                                medicamentoId: ""
                            }
                        }
                    })
                ]
            })
        } else {
            // retira um que nem foi registrado no banco
            setMedicamentoEdit({
                ...medicamentoEdit,
                posologias: medicamentoEdit.posologias.filter((w, index) => index !== ind)
            })
        }
    }

    return (
        <div>
            <Grid container item spacing={2} >
                <Grid item xs>
                    {medicamentoEdit.posologias &&
                        <TableContainer component={Paper} >
                            <Table>
                                <TableBody>
                                    {medicamentoEdit.posologias
                                        .filter(x => x.id === undefined || (x.id >= 0 && x.medicamentoId !== ""))
                                        .map((pp, i) =>
                                            <TableRow key={i}>
                                                <TableCell component="th" scope="row">
                                                    <Grid container direction="column" justify="flex-start" alignItems="stretch">
                                                        <Grid item>
                                                            {pp.posologia}
                                                        </Grid>
                                                        <Grid item>
                                                            {pp.quantidade} - {pp.forma}
                                                        </Grid>
                                                    </Grid>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Tooltip title="Excluir">
                                                        <span>
                                                            <IconButton
                                                                onClick={handleDelete(pp, i)}
                                                            >
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </span>
                                                    </Tooltip>
                                                </TableCell>
                                            </TableRow>
                                        )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    }
                </Grid>
                <Grid container item>
                    <Grid container item spacing={1} xs={11}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                multiline
                                rows={3}
                                id="posologia"
                                label="Posologia"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                id="quantidade"
                                label="Quantidade"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                id="forma"
                                label="Forma"
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={1}>
                        <Tooltip title="Adicionar">
                            <span>
                                <IconButton
                                    onClick={handleAdd}
                                >
                                    <ArrowUpwardIcon />
                                </IconButton>
                            </span>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default PosologiaForm