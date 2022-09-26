import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Tooltip } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoContext } from '..';
import { DataDDMMYYY } from '../../../utils/tempo';

const CiDForm = () => {

    const { atestadoEdit, setAtestadoEdit } = useContext(AtendimentoContext)

    const handleAdd = () => {

        let formcid = document.getElementById('cid10')
        let formdiagnostico = document.getElementById('diagnostico')

        setAtestadoEdit({
            ...atestadoEdit,
            cid10: atestadoEdit.cid10.concat(formcid.value),
            diagnostico: atestadoEdit.diagnostico.concat(formdiagnostico.value),
        })

        formcid.value = ""
        formdiagnostico.value = ""
    }

    const handleDelete = (paramA, paramB) => {

        setAtestadoEdit({
            ...atestadoEdit,
            cid10: atestadoEdit.cid10.filter(c => c !== paramA),
            diagnostico: atestadoEdit.diagnostico.filter(d => d !== paramB)
        })
    }

    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                }}
            >
                <Box>
                    {atestadoEdit.cid10 &&
                        <TableContainer component={Paper} >
                            <Table
                                size='small'
                            >
                                <TableBody>
                                    {atestadoEdit.cid10
                                        .map((cid, i) =>
                                            <TableRow key={i}>
                                                <TableCell component="th" scope="row" size='small'>
                                                    {cid}
                                                </TableCell>
                                                <TableCell component="th" scope="row" size='small'>
                                                    {atestadoEdit.diagnostico[i]}
                                                </TableCell>
                                                <TableCell align="right" size='small'>
                                                    <Tooltip title="Excluir">
                                                        <IconButton
                                                            component="span"
                                                            onClick={() => handleDelete(cid, atestadoEdit.diagnostico[i])}
                                                            size="small"
                                                        >
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                </TableCell>
                                            </TableRow>
                                        )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    }
                </Box>
                <Box
                    sx={{
                        display: 'inline-flex',
                        gap: 1,
                    }}
                >
                    <TextField
                        id="cid10"
                        label="CID10"
                    />
                    <TextField
                        fullWidth
                        id="diagnostico"
                        label="Diagnóstico"
                    />
                    <Tooltip title="Adicionar">
                        <IconButton
                            component="span"
                            onClick={() => handleAdd()}
                            size="large"
                        >
                            <ArrowUpwardIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
        </>
    )
}

const AtestadoSet = () => {

    const { atestadoEdit, setAtestadoEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        setAtestadoEdit({ ...atestadoEdit, [event.target.name]: event.target.value })
    }

    const handleData = (event) => {
        setAtestadoEdit({ ...atestadoEdit, data: DataDDMMYYY(event.target.value) })
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    gap: 1,
                }}
            >
                <CiDForm />
                <TextField
                    fullWidth
                    multiline
                    rows={3}
                    name="tratamento"
                    label="Tratamento"
                    value={atestadoEdit.tratamento}
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    multiline
                    rows={3}
                    name="estado"
                    label="Estado atual"
                    value={atestadoEdit.estado}
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    name="prognostico"
                    label="Prognóstico"
                    value={atestadoEdit.prognostico}
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    name="comentario"
                    label="Comentário"
                    value={atestadoEdit.comentario}
                    onChange={handleChange}
                />
                <TextField
                     name="data"
                     label="Data"
                     type="date"
                     variant="outlined"
                     InputLabelProps={{
                         shrink: true,
                     }}
                    value={atestadoEdit.data}
                    onChange={(e) => handleData(e)}
                />
            </Box>
        </>
    )
}

export default AtestadoSet







