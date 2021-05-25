import { Box, IconButton, List, ListItem, ListItemText, Tooltip, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../..';
import EditIcon from '@material-ui/icons/Edit';

const LMEData = () => {

    const { lmeOnDuty, setPrescricaoEdit, setStep, setPage, setLmeEdit } = useContext(AtendimentoContext)

    const handleEditarPrescricao = param => () => {
        setLmeEdit(null)
        setPrescricaoEdit(param)
        setStep(21)
        setPage('prescricaoupdate')
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
                                            >
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