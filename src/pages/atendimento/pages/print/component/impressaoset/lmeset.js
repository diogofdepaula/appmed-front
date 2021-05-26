import { Checkbox, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ImpressaoContext } from '../../../..';
import { ClienteContext } from '../../../../../../App';

const LMESet = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { setImpressao } = useContext(ImpressaoContext)
    const [lmes, setLmes] = useState([])

    const fetchDataLmes = useCallback(async () => {
        const res = await fetch(process.env.REACT_APP_API_URL + `/lmes/allfat/${clienteContext.id}`)
        const json = await res.json();
        setLmes(json);
    }, [clienteContext])

    useEffect(() => {
        fetchDataLmes();
    }, [fetchDataLmes])


    const handleLmesChange = param => (event) => {
        if (event.target.checked) {
            setImpressao(prevState => ({
                ...prevState,
                lmesSelecionadas: prevState.lmesSelecionadas.concat(param),
            }))
        } else {
            setImpressao(prevState => ({
                ...prevState,
                lmesSelecionadas: prevState.lmesSelecionadas.filter(lme => lme.id !== param.id)
            }))
        }
    }

    return (
        <div>
            <List dense subheader={<ListSubheader>LMEs</ListSubheader>}>
                {lmes && lmes.map(lme =>
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
        </div>
    )
}

export default LMESet