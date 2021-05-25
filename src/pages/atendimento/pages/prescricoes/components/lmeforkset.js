import { Box, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@material-ui/core';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AtendimentoContext } from '../../..';
import { ClienteContext } from '../../../../../App';

const LMEForkSet = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { prescricaoEdit, setPage, setLmeEdit, setStep } = useContext(AtendimentoContext)
    const [lmes, setlmes] = useState([])

    const fetchData = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/lmes/allfat/${clienteContext.id}`)
        const json = await res.json();
        setlmes(json);
    }, [clienteContext])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    const handleTableRow = param => () => {

        // seta da LMEEdit para lme selecionada e adiciona o prescricao nova e atualiza a lmeId para a id da lme selecionada
        setLmeEdit({
            ...param,
            prescricoes: [...param.prescricoes, { ...prescricaoEdit, lmeId: param.id }]
        })
        setPage('lmeupdate')
        setStep(21)
    }

    const handleNewLME = () => {
        // vai criar uma nova lme para inserir prescricao nela
        setPage('lmeinsert')
        setStep(11)
    }

    return (
        <div>
            <Box mt={1}>
                <Paper
                    onClick={handleNewLME}
                >
                    <Typography component={'span'} variant="body1" color="initial">
                        <Box p={2}>Criar uma nova LME</Box>
                    </Typography>
                </Paper>
                <Divider />

                <Box mt={2}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableBody>
                                {lmes?.map(lme =>
                                    <TableRow
                                        key={lme.id}
                                        onClick={handleTableRow(lme)}
                                    >
                                        <TableCell component="th" scope="row">
                                            {lme.cid10 + ' - ' + lme.diagnostico}
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </div>
    )
}

export default LMEForkSet