//import { Checkbox, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { Box, Checkbox, FormControlLabel, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import React, { useContext } from 'react';
import { ClienteContext, PrintContext } from '../../../../App';

const LMESet = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { lmesSelecionadas, setLmesSelecionadas, renovacao, setRenovacao } = useContext(PrintContext)

    const handleLmesChange = param => (event) => {
        if (event.target.checked) {
            setLmesSelecionadas(lmesSelecionadas.concat(param))
        } else {
            setLmesSelecionadas(lmesSelecionadas.filter(lme => lme.id !== param.id))
        }
    }

    const handleChangeRenovacao = (event) => {
        setRenovacao(event.target.checked)
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    p: 1,
                    gap: 1
                }}
            >
                <FormControlLabel
                    control={
                        <Checkbox
                            color='primary'
                            name="renovacao"
                            checked={renovacao}
                            onChange={handleChangeRenovacao}
                        />}
                    label='Renovação'
                />
                <List dense subheader={<ListSubheader>LMEs</ListSubheader>}>
                    {clienteContext.lmes?.map(lme =>
                        <ListItem key={lme.id}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    onChange={handleLmesChange(lme)}
                                />
                            </ListItemIcon>
                            <ListItemText primary={lme.cid10} secondary={lme.prescricoes.map(p => p.medicamento.farmaco.concat(" "))} />
                        </ListItem>
                    )}
                </List>
            </Box>
        </>
    )
}

export default LMESet