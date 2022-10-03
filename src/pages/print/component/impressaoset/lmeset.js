import { Checkbox, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import React, { useContext } from 'react';
import { PrintContext } from '../../../../App';

const LMESet = () => {

    const { lmes, lmesSelecionadas, setLmesSelecionadas, } = useContext(PrintContext)

    // ao clicar no PrintButton
    // isso adiciona os includes nas lmes que vem o ClienteContext, os quais não tem incluides
    // não quis mudar no BD, pois ele faria uma busca duplicada dos includes

    const handleLmesChange = param => (event) => {
        if (event.target.checked) {
            setLmesSelecionadas(lmesSelecionadas.concat(param))
        } else {
            setLmesSelecionadas(lmesSelecionadas.filter(lme => lme.id !== param.id))
        }
    }

    return (
        <>
            <List dense subheader={<ListSubheader>LMEs</ListSubheader>}>
                {lmes?.map(lme =>
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
        </>
    )
}

export default LMESet