import { Box, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AtendimentoContext } from '../../..';
import { ClienteContext } from '../../../../../App';
import LMEData from '../components/lmedata';

const LMEMain = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { lmeOnDuty, setLmeOnDuty } = useContext(AtendimentoContext)

    const [lmes, setLmes] = useState([])

    const fetchData = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/lmes/allfat/${clienteContext.id}`)
        const json = await res.json();
        setLmes(json);
    }, [clienteContext])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <div>
            <Box m={1}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <Box ml={1} mt={1}>
                            <TableContainer component={Paper} >
                                <Table>
                                    <TableBody>
                                        {lmes && lmes.map(lme =>
                                            <TableRow
                                                key={lme.id}
                                                onClick={() => setLmeOnDuty(lme)}
                                            >
                                                <TableCell component="th" scope="row">
                                                    <Box fontWeight={lmeOnDuty?.id === lme.id ? "fontWeightBold" : ""}>
                                                        {lme.cid10} - Acho que só isso
                                                </Box>
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
                        {lmeOnDuty && <LMEData />}
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default LMEMain