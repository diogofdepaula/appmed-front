import { Box, Table, TableBody, TableCell, TableRow } from '@mui/material';
import { memo } from 'react';
import { ClienteContext } from '../App';
import { useContext } from "react";

const TableAtestados = memo(() => {
    
    const { clienteContext } = useContext(ClienteContext)

    if (clienteContext.atestados.length === 0) return <></>

    return (
        <>
            <Box
                sx={{
                    borderTopWidth: 1,
                    borderRightWidth: 1,
                    borderLeftWidth: 1,
                    borderBottomWidth: 0,
                    borderColor: 'lightgray',
                    borderStyle: 'solid',
                }}
            >
                <Table>
                    <TableBody>
                        {clienteContext.atestados.map(x =>
                            <TableRow
                                key={x}
                                //onClick={() => setLmeOnDuty(x)}
                            >
                                <TableCell component="th" scope="row">
                                    <Box
                                        sx={{
                                            //fontWeight: lmeOnDuty?.id === x.id ? 'bold' : 'regular',
                                        }}
                                    >
                                        {x.cid10}
                                    </Box>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </Box>
        </>
    )
})

export default TableAtestados


