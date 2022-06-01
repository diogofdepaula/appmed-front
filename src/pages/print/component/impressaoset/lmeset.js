import { Checkbox, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import React, { useCallback, useContext, useEffect } from 'react';
import { ClienteContext, PrintContext } from '../../../../App';

const LMESet = () => {

    const { clienteContext } = useContext(ClienteContext)

    const { lmes, setLmes, lmesSelecionadas, setLmesSelecionadas, } = useContext(PrintContext)

    const fetchDataLmes = useCallback(async () => {
        const res = await fetch(process.env.REACT_APP_API_URL + `/lmes/allfat/${clienteContext.id}`)
        const json = await res.json();
        setLmes(json)
    }, [clienteContext, setLmes])

    useEffect(() => {
        fetchDataLmes();
    }, [fetchDataLmes])


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