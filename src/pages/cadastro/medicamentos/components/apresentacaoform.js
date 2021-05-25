import { Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Tooltip } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useContext } from 'react';
import { MedicamentosContext } from '..';

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

    return (
        <div>
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
                                                            <IconButton
                                                                onClick={handleDelete(ap, i)}
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

export default ApresentacaoForm