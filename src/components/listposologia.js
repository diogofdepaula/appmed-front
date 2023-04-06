import { Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import React from 'react';

const ListPosologia = ({ medicamentoEdit, handleClickTable, prescricaoEdit }) => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        {medicamentoEdit?.posologias?.map(posologia =>
                            <TableRow
                                key={posologia.id}
                                onClick={() => handleClickTable(posologia)}
                            >
                                <TableCell component="th" scope="row">
                                    <div>
                                        {prescricaoEdit?.posologiaId === posologia.id && <Typography>(opção atual)</Typography>}
                                    </div>
                                    {posologia.posologia}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default ListPosologia
