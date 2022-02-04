import { Typography } from '@mui/material';
import { Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Tooltip } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useContext, useState } from 'react';
import { MedicamentosContext } from '..';
import PosologiaDialog from './dialogs/posologiadialog';

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

    const [open, setOpen] = useState(false)
    const [pp, setPp] = useState(null)

    const handleEdit = pp => () => {
        setPp(pp)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            {open && <PosologiaDialog open={open} pp={pp} handleClose={handleClose} />}
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
                                                    <Grid container direction="column" justifyContent="flex-start" alignItems="stretch">
                                                        <Grid item>
                                                            <Typography component='span'>
                                                                {pp.posologia.split("\n").map((i, key) => {
                                                                    return <div key={Math.random() * 1000}>{i}</div>;
                                                                })}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            {pp.quantidade} - {pp.forma}
                                                        </Grid>
                                                    </Grid>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Tooltip title="Excluir">
                                                        <span>
                                                            <IconButton onClick={handleDelete(pp, i)} size="large">
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </span>
                                                    </Tooltip>
                                                    <Tooltip title="Editar" >
                                                        <span>
                                                            <IconButton disabled={!pp.id} onClick={handleEdit(pp)} size="large">
                                                                <EditIcon />
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
                                rows={4}
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
                                <IconButton onClick={handleAdd} size="large">
                                    <ArrowUpwardIcon />
                                </IconButton>
                            </span>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default PosologiaForm