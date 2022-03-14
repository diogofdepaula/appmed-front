import { Box, IconButton, List, ListItem, ListItemText, Tooltip, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoContext, AtendimentoNavigateContext } from '../..';
import EditIcon from '@mui/icons-material/Edit';

const LMEData = () => {

    const { lmeOnDuty, setPrescricaoEdit, setLmeEdit } = useContext(AtendimentoContext)
    const { setStep, setArticlePrescricaoUpdate } = useContext(AtendimentoNavigateContext)


    const handleEditarPrescricao = param => () => {
        setLmeEdit(null)
        setPrescricaoEdit(param)
        setStep(21)
        setArticlePrescricaoUpdate()
    }

    return (
        <div>
            <Box>
                <Box my={1} display="flex" justifyContent="center" alignItems="flex-end">
                    <Typography variant={'h6'}>{lmeOnDuty.cid10 + " - " + lmeOnDuty.diagnostico} </Typography>
                </Box>
                <Box ml={1}>
                    <Typography variant={'body1'}>{lmeOnDuty.anamnese}</Typography>
                    <Box mt={1}>
                        <List>
                            {lmeOnDuty?.prescricoes.map(prescricao =>
                                prescricao.emuso &&
                                <ListItem key={prescricao.id}>
                                    <ListItemText
                                        primary={prescricao.medicamento.farmaco}
                                    />
                                    <Tooltip title="Editar">
                                        <span>
                                            <IconButton
                                                disabled={!lmeOnDuty}
                                                onClick={handleEditarPrescricao(prescricao)}
                                                size="large">
                                                <EditIcon />
                                            </IconButton>
                                        </span>
                                    </Tooltip>
                                </ListItem>
                            )}
                        </List>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default LMEData