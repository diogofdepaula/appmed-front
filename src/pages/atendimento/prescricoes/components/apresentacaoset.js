import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import React, { useCallback, useContext, useEffect } from 'react'
import { AtendimentoContext, AtendimentoNavigateContext } from '../..'

const ApresentacaoSet = () => {

    const { prescricaoEdit, setPrescricaoEdit, medicamentoEdit, setMedicamentoEdit, } = useContext(AtendimentoContext)
    const { setStep } = useContext(AtendimentoNavigateContext)


    const fetchData = useCallback(async () => {
        const res = await fetch(process.env.REACT_APP_API_URL + `/medicamentos/${prescricaoEdit.medicamentoId}`)
        const json = await res.json();
        setMedicamentoEdit(json)
    }, [prescricaoEdit, setMedicamentoEdit])

    useEffect(() => {
        let clear = true
        if (clear) {
            fetchData();
        }
        return () => clear = false
    }, [fetchData])

    const handleTableRow = param => () => {
        setPrescricaoEdit({ ...prescricaoEdit, apresentacoId: param.id })
        setStep(31)
    }

    return (
        <div>
            <Box mt={1}>
                {/* <List>
                    {medicamentoContext && medicamentoContext.apresentacoes && medicamentoContext.apresentacoes.map(apresentacao =>
                        <ListItem
                            key={apresentacao.id}
                            onClick={handleListItem(apresentacao)}
                        >
                            <div>
                                {prescricaoEdit.apresentacoId === apresentacao.id && <Typography>(opção atual)</Typography>}
                            </div>
                            {apresentacao.descricao}
                        </ListItem>
                    )}
                </List> */}
                <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                            {medicamentoEdit?.apresentacoes?.map(apresentacao =>
                                //{medicamentoEdit && medicamentoEdit.apresentacoes && medicamentoEdit.apresentacoes.map(apresentacao =>
                                <TableRow
                                    key={apresentacao.id}
                                    onClick={handleTableRow(apresentacao)}
                                >
                                    <TableCell component="th" scope="row">
                                        <div>
                                            {prescricaoEdit.apresentacoId === apresentacao.id && <Typography>(opção atual)</Typography>}
                                        </div>
                                        {apresentacao.descricao}
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </div>
    )
}

export default ApresentacaoSet