import { Box, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoContext, AtendimentoNavigateContext } from '../..';
import { ClienteContext } from '../../../../App';
import InitialRelatorio from '../../lmes/components/initialrelatorio';

const LMEForkSet = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { prescricaoEdit, setLmeEdit, medicamentoEdit } = useContext(AtendimentoContext)
    const { setStep, setArticleLMEUpdate, setArticleLMEInsert } = useContext(AtendimentoNavigateContext)

    const handleNewLME = () => {
        setArticleLMEInsert()
        setStep(311)
    }

    const handleTableRow = param => () => {

        // seta da LMEEdit para lme selecionada e adiciona o prescricao nova e atualiza a lmeId para a id da lme selecionada

        if ((medicamentoEdit?.classe === 'MMCDB' || medicamentoEdit?.classe === 'MMCDPM') && !param.relatorio) {
            setLmeEdit({
                ...param,
                prescricoes: [...param.prescricoes, { ...prescricaoEdit, lmeId: param.id }],
                relatorio: InitialRelatorio(param.id)
            })
        } else {
            setLmeEdit({
                ...param,
                prescricoes: [...param.prescricoes, { ...prescricaoEdit, lmeId: param.id }]
            })
        }
        setArticleLMEUpdate()
        setStep(321)
    }

    return (
        <>
            <Box>
                <Paper
                    onClick={handleNewLME}
                >
                    <Box
                        sx={{
                            p: 2
                        }}
                    >
                        Criar uma nova LME
                    </Box>
                </Paper>
                <Divider />
                <Box
                    sx={{
                        mt: 2
                    }}
                >
                    <TableContainer component={Paper}>
                        <Table>
                            <TableBody>
                                {clienteContext.lmes?.map(lme =>
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
        </>
    )
}

export default LMEForkSet