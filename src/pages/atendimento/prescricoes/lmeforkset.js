import { Box, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoContext, AtendimentoNavigateContext } from '..';
import { ClienteContext } from '../../../App';
import { NovoRelatorio } from '../../../providers/atendimento';
import { MedicamentoRelatorio } from '../../../utils/ inquiries';

const LMEForkSet = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { prescricaoEdit, setLmeEdit, medicamentoEdit, setNovaLme } = useContext(AtendimentoContext)
    const { setStep } = useContext(AtendimentoNavigateContext)

    const handleNewLME = () => {
        setNovaLme(clienteContext.id, prescricaoEdit, medicamentoEdit?.classe)
        setStep(311)
    }

    const handleTableRow = param => () => {

        // seta da LMEEdit para lme selecionada e adiciona o prescricao nova e atualiza a lmeId para a id da lme selecionada

        if (MedicamentoRelatorio(medicamentoEdit) && !param.relatorio) {
            setLmeEdit({
                ...param,
                prescricoes: [...param.prescricoes, { ...prescricaoEdit, lmeId: param.id }],
                relatorio: NovoRelatorio(param.id)
            })
        } else {
            setLmeEdit({
                ...param,
                prescricoes: [...param.prescricoes, { ...prescricaoEdit, lmeId: param.id }]
            })
        }
        setStep(321)
    }

    return (
        <>
            <Box>
                <Paper>
                    <Box
                        sx={{
                            p: 2
                        }}
                        onClick={handleNewLME}
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