import { Box, Table, TableBody, TableCell, TableRow } from '@mui/material';
import { memo } from 'react';

const TableAtestados = memo(() => {
    //const TableAtestados = memo(({ setLmeOnDuty }) => {
    // const { clienteContext } = useContext(ClienteContext)

    // if (lmes.length === 0) return <></>

    const list = ["aaaaa", "bbbbbb", "cccccc"]

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
                        {list.map(x =>
                            <TableRow
                                key={x.id}
                                //onClick={() => setLmeOnDuty(x)}
                            >
                                <TableCell component="th" scope="row">
                                    <Box
                                        sx={{
                                            //fontWeight: lmeOnDuty?.id === x.id ? 'bold' : 'regular',
                                        }}
                                    >
                                        {x}
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


