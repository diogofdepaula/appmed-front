import { Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Tooltip } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useContext, useState } from 'react';
import { MedicamentosContext } from '..';
import ApresentacaoDialog from './dialogs/apresentacaodialog';

const ApresentacaoForm = () => {

    const { medicamentoEdit, setMedicamentoEdit } = useContext(MedicamentosContext)

    const handleAdd = () => {

        let apdescricao = document.getElementById('descricao')
        let apuso = document.getElementById('uso')

        setMedicamentoEdit({
            ...medicamentoEdit,
            apresentacoes: [
                ...medicamentoEdit.apresentacoes, {
                    descricao: apdescricao.value,
                    uso: apuso.value,
                }]
        })

        apdescricao.value = ""
        apuso.value = ""
    }

    const handleDelete = (param, ind) => () => {

        if (param.id >= 0) {
            // deletar uma que já existe
            setMedicamentoEdit({
                ...medicamentoEdit,
                apresentacoes: [
                    ...medicamentoEdit.apresentacoes.map(ap => {
                        if (ap.id !== param.id) {
                            return ap
                        } else {
                            return {
                                ...ap,
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
                apresentacoes: medicamentoEdit.apresentacoes.filter((w, index) => index !== ind)
            })
        }
    }
    
    const [open, setOpen] = useState(false)
    const [ap, setAp] = useState(null)
 
    const handleEdit = ap => () => {
        setAp(ap)
        setOpen(true)
    }
 
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            {open && <ApresentacaoDialog open={open} ap={ap} handleClose={handleClose}/>}
            <Grid container item spacing={2} >
                <Grid item xs>
                    {medicamentoEdit.apresentacoes &&
                        <TableContainer component={Paper} >
                            <Table>
                                <TableBody>
                                    {medicamentoEdit.apresentacoes
                                        .filter(x => x.id === undefined || (x.id >= 0 && x.medicamentoId !== ""))
                                        .map((ap, i) =>
                                            <TableRow key={i}>
                                                <TableCell component="th" scope="row">
                                                    {ap.descricao} - {ap.uso}
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Tooltip title="Excluir">
                                                        <span>
                                                            <IconButton onClick={handleDelete(ap, i)} size="large">
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </span>
                                                    </Tooltip>
                                                    <Tooltip title="Editar" >
                                                        <span>
                                                            <IconButton disabled={!ap.id} onClick={handleEdit(ap)} size="large">
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
                        <Grid item xs={9}>
                            <TextField
                                fullWidth
                                id="descricao"
                                label="Apresentação"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                fullWidth
                                id="uso"
                                label="Uso"
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

export default ApresentacaoForm