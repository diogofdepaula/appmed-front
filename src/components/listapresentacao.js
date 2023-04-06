import { Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import React from 'react'

const ListApresentacoes = ({ medicamentoEdit, handleTableRow, prescricaoEdit }) => {

    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        {medicamentoEdit?.apresentacoes.map(apresentacao =>
                            <TableRow
                                key={apresentacao.id}
                                onClick={handleTableRow(apresentacao)}
                            >
                                <TableCell component="th" scope="row">
                                    <div>
                                        {prescricaoEdit?.apresentacoId === apresentacao.id && <Typography>(opção atual)</Typography>}
                                    </div>
                                    {apresentacao.descricao}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default ListApresentacoes