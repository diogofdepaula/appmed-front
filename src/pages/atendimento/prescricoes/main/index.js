import { Box, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AtendimentoContext } from '../..';
import { ClienteContext } from '../../../../App';
import Reorder from '../../component/reorder';
import PrescricaoData from '../components/prescricaodata';

const PrescricaoMain = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { prescricaoOnDuty, setPrescricaoOnDuty } = useContext(AtendimentoContext)

    const [prescricoes, setPrescricoes] = useState([])

    const fetchData = useCallback(async () => {
        const res = await fetch(process.env.REACT_APP_API_URL + `/prescricoes/all/${clienteContext.id}`)
        const json = await res.json();
        setPrescricoes(json);
    }, [clienteContext])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <div>
            <Box m={1}>
                <Grid container spacing={1} >
                    <Grid item xs={4}>
                        <Box ml={1} mt={1}>
                            <TableContainer component={Paper} >
                                <Table>
                                    <TableBody>
                                        {prescricoes && Reorder(prescricoes).filter(x => x.emuso).map(prescricao =>
                                            <TableRow
                                                key={prescricao.id}
                                                onClick={() => setPrescricaoOnDuty(prescricao)}
                                            >
                                                <TableCell component="th" scope="row">
                                                    <Box fontWeight={prescricaoOnDuty?.id === prescricao.id ? "fontWeightBold" : ""}>
                                                        {prescricao.medicamento.farmaco} - {prescricao.apresentaco.descricao}
                                                    </Box>
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                        <Box ml={1} mt={1}>
                            <TableContainer component={Paper} >
                                <Table>
                                    <TableBody>
                                        {prescricoes && Reorder(prescricoes).filter(x => !x.emuso).map(prescricao =>
                                            <TableRow
                                                key={prescricao.id}
                                                onClick={() => setPrescricaoOnDuty(prescricao)}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {prescricao.medicamento.farmaco} - interrompido
                                        </TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Divider orientation="vertical" flexItem />
                    </Grid>
                    <Grid item xs>
                        <Box mx={1}>
                            {prescricaoOnDuty && <PrescricaoData />}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
export default PrescricaoMain