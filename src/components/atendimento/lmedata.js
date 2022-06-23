import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useContext } from 'react';
import { ClienteContext } from '../../App';
import { DataDDMMYYY } from '../../utils/tempo';

const LmeData = ({ lme }) => {

    const { clienteContext } = useContext(ClienteContext)

    if (!lme) return <div />


    // const { lmeOnDuty, setPrescricaoEdit, setLmeEdit } = useContext(AtendimentoContext)
    // const { setStep, setArticlePrescricoesMain } = useContext(AtendimentoNavigateContext)


    // const handleEditarPrescricao = param => () => {
    //     setLmeEdit(null)
    //     setPrescricaoEdit(param)
    //     setStep(321)
    //     setArticlePrescricoesMain()
    // }


    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    borderWidth: 1,
                    borderColor: 'lightgray',
                    borderStyle: 'solid',
                    p: 1,
                }}
            >
                <Box
                    sx={{
                        mt: 1,
                        typography: 'h6',
                        textAlign: 'center',
                    }}
                >
                    {lme.cid10 + " - " + lme.diagnostico}
                </Box>
                <Box
                    sx={{
                        mt: 1,
                        whiteSpace: 'pre-wrap',
                        typography: 'body1',
                        textAlign: 'justify',
                    }}
                >
                    {lme.anamnese}
                </Box>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Medicamentos</TableCell>
                            <TableCell align="right">1º</TableCell>
                            <TableCell align="right">2º</TableCell>
                            <TableCell align="right">3º</TableCell>
                            <TableCell align="right">4º</TableCell>
                            <TableCell align="right">5º</TableCell>
                            <TableCell align="right">6º</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {clienteContext.prescricoes
                            .filter(p => p.lmeId === lme.id)
                            .map(prescricao =>
                                <TableRow
                                    key={prescricao.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {prescricao.medicamento.farmaco}
                                    </TableCell>
                                    {[
                                        prescricao?.lmemes1,
                                        prescricao?.lmemes2,
                                        prescricao?.lmemes3,
                                        prescricao?.lmemes4,
                                        prescricao?.lmemes5,
                                        prescricao?.lmemes6,
                                    ].map((l, i) =>
                                        <TableCell
                                            align="right"
                                            key={i}
                                        >
                                            {l}
                                        </TableCell>
                                    )}
                                </TableRow>
                            )}
                    </TableBody>
                </Table>
                <Box
                    sx={{
                        mt: 1,
                    }}
                >
                    {"Última impressão:  "}
                    {lme.ultimaimpressao
                        ?
                        DataDDMMYYY(lme.ultimaimpressao)
                        :
                        'Indefinido'
                    }
                </Box>
            </Box>
        </>
    )
}

export default LmeData