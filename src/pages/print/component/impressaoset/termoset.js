import { Checkbox, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import React, { useContext } from 'react';
import { ClienteContext, PrintContext } from '../../../../App';

const TermoSet = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { termosSelecionados, setTermosSelecionados } = useContext(PrintContext)

    const handleLmesChange = param => (event) => {
        if (event.target.checked) {
            setTermosSelecionados(termosSelecionados.concat(param))
        } else {
            setTermosSelecionados(termosSelecionados.filter(t => t !== param))
        }
    }

    return (
        <>
            <List dense subheader={<ListSubheader>Termos</ListSubheader>}>
                {clienteContext.lmes?.map(l => l.prescricoes.map(p =>
                    <ListItem key={p.id}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                onChange={handleLmesChange(p.medicamento.farmaco)}
                            />
                        </ListItemIcon>
                        <ListItemText primary={p.medicamento.farmaco} />
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default TermoSet