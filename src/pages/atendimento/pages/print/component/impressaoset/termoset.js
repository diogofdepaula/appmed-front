import { Checkbox, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import React, { useContext } from 'react';
import { ImpressaoContext } from '../../../..';

const TermoSet = () => {

    const { impressao, setImpressao } = useContext(ImpressaoContext)

    const handleLmesChange = param => (event) => {
        if (event.target.checked) {
            setImpressao(prevState => ({
                ...prevState,
                termosSelecionados: prevState.termosSelecionados.concat(param),
            }))
        } else {
            setImpressao(prevState => ({
                ...prevState,
                termosSelecionados: prevState.termosSelecionados.filter(t => t !== param)
            }))
        }
    }

    return (
        <div>
            <List dense subheader={<ListSubheader>Termos</ListSubheader>}>
                {impressao.lmes && impressao.lmes.map(l => l.prescricoes.map(p =>
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
        </div>
    )
}

export default TermoSet