import { Box, Table, TableBody, TableCell, TableRow } from '@mui/material';
import { memo, useContext } from 'react';
import { AtendimentoContext } from '../pages/atendimento';
import { LmeComRelatorio } from '../utils/inquiries';

const TableLmes = memo(({ lmes, setLmeOnDuty }) => {

    const { lmeOnDuty } = useContext(AtendimentoContext)

    if (lmes.length === 0) return <></>

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
                        {lmes.map(lme =>
                            <TableRow
                                key={lme.id}
                                onClick={() => setLmeOnDuty(lme)}
                            >
                                <TableCell component="th" scope="row">
                                    <Box
                                        sx={{
                                            fontWeight: lmeOnDuty?.id === lme.id ?'bold' : 'regular',
                                        }}
                                    >
                                        {lme.cid10}{((LmeComRelatorio(lme)) && !lme.relatorio) ? " -  precisa de relatório" : (lme.relatorio?.idadeinicio === '' ? " -  precisa editar relatório" : '')}
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

export default TableLmes


