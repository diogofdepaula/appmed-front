import { Box, Table, TableBody, TableCell, TableRow } from '@mui/material';
import React, { memo, useContext } from 'react';
import { AtendimentoContext } from '../pages/atendimento';
import Reorder from '../pages/print/component/reorder';

const TablePrescricoes = memo(({ prescricoes, setPrescricaoOnDuty, uso, }) => {

    const { prescricaoOnDuty } = useContext(AtendimentoContext)

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
                        {Reorder(prescricoes).filter(x => uso ? x.emuso : !x.emuso).map(prescricao =>
                            <TableRow
                                key={prescricao.id}
                                onClick={() => setPrescricaoOnDuty(prescricao)}
                            >
                                <TableCell component="th" scope="row">
                                    <Box
                                        sx={{
                                            fontWeight: prescricaoOnDuty?.id === prescricao.id ?'bold' : 'regular',
                                        }}
                                    >
                                        {uso
                                            ?
                                            prescricao.medicamento.farmaco + " - " + prescricao.apresentaco.descricao
                                            :
                                            prescricao.medicamento.farmaco + " - interrompido"
                                        }
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

export default TablePrescricoes


