import TextRotationNoneIcon from '@mui/icons-material/TextRotationNone';
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoContext, AtendimentoNavigateContext } from '..';

const PosologiaSet = () => {

    const { prescricaoEdit, setPrescricaoEdit, medicamentoEdit } = useContext(AtendimentoContext)
    const { setStep } = useContext(AtendimentoNavigateContext)

    const handleButton = () => {
        setPrescricaoEdit(prescricaoEdit)
        setStep(132)
    }

    const handleClickTable = (param) => {
        setPrescricaoEdit({
            ...prescricaoEdit,
            usoposologiapadrao: true,
            posologiaId: param.id
        })
        setStep(141)
    }

    return (
        <>
            <Box>
                <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                            {medicamentoEdit?.posologias?.map(posologia =>
                                <TableRow
                                    key={posologia.id}
                                    onClick={() => handleClickTable(posologia)}
                                >
                                    <TableCell component="th" scope="row">
                                        <div>
                                            {prescricaoEdit.posologiaId === posologia.id && <Typography>(opção atual)</Typography>}
                                        </div>
                                        {posologia.posologia}
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box mt={1}>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<TextRotationNoneIcon />}
                    onClick={handleButton}
                >
                    Usar posologia não padronizada
                    <div>
                        {prescricaoEdit.posologiaId === null && <Typography>  (opção atual)</Typography>}
                    </div>
                </Button>
            </Box>
        </>
    )
}

export default PosologiaSet