import { Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Tooltip } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useContext, useState } from 'react';
import { MedicamentosContext } from '..';
import NomeComercialDialog from './dialogs/nomecomercialdialog';
 
const NomeComercialForm = () => {
 
    const { medicamentoEdit, setMedicamentoEdit } = useContext(MedicamentosContext)
 
    const handleAdd = () => {
 
        let ncnomefantasia = document.getElementById('nomefantasia')
 
        setMedicamentoEdit({
            ...medicamentoEdit,
            nomescomerciais: [
                ...medicamentoEdit.nomescomerciais, {
                    nomefantasia: ncnomefantasia.value,
                }]
        })
 
        ncnomefantasia.value = ""
    }
 
    const handleDelete = (param, ind) => () => {
 
        if (param.id >= 0) {
            // deletar uma que já existe
            setMedicamentoEdit({
                ...medicamentoEdit,
                nomescomerciais: [
                    ...medicamentoEdit.nomescomerciais.map(nc => {
                        if (nc.id !== param.id) {
                            return nc
                        } else {
                            return {
                                ...nc,
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
                nomescomerciais: medicamentoEdit.nomescomerciais.filter((w, index) => index !== ind)
            })
        }
    }
 
    const [open, setOpen] = useState(false)
    const [nc, setNc] = useState(null)
 
    const handleEdit = nc => () => {
        setNc(nc)
        setOpen(true)
    }
 
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            {open && <NomeComercialDialog open={open} nc={nc} handleClose={handleClose}/>}
            <Grid container item spacing={2} >
                <Grid item xs>
                    {medicamentoEdit.nomescomerciais &&
                        <TableContainer component={Paper} >
                            <Table>
                                <TableBody>
                                    {medicamentoEdit.nomescomerciais
                                        .filter(x => x.id === undefined || (x.id >= 0 && x.medicamentoId !== ""))
                                        .map((nc, i) =>
                                            <TableRow key={i}>
                                                <TableCell component="th" scope="row">
                                                    {nc.nomefantasia}
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Tooltip title="Excluir">
                                                        <span>
                                                            <IconButton onClick={handleDelete(nc, i)} size="large">
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </span>
                                                    </Tooltip>
                                                    <Tooltip title="Editar" >
                                                        <span>
                                                            <IconButton disabled={!nc.id} onClick={handleEdit(nc)} size="large">
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
                        <Grid item xs>
                            <TextField
                                fullWidth
                                id="nomefantasia"
                                label="Nome de fantasia"
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
 
export default NomeComercialForm

