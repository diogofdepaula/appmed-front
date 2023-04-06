import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import React from 'react'

const ListMedicamentos = ({ medicamentosfiltrados, handleTableRow }) => {

    return (
        <>
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
                                            medicamento.farmaco}
                                    </TableCell>
                                </TableRow>
                            )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default ListMedicamentos