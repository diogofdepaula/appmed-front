import { Checkbox, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core';
import { useCallback, useContext, useEffect, useState } from 'react';
import { ImpressaoContext } from '../../../..';
import { ClienteContext } from '../../../../../../App';
import Reorder from '../reorder';

const PrescricoesSet = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { setImpressao } = useContext(ImpressaoContext)
    const [prescricoes, setPrescricoes] = useState([])

    const fetchDataPrescricoes = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/prescricoes/all/${clienteContext.id}`)
        const json = await res.json();

        setPrescricoes(Reorder(json));
    }, [clienteContext.id, setPrescricoes])

    useEffect(() => {
        fetchDataPrescricoes();
    }, [fetchDataPrescricoes])


    const handleCheck = param => (event) => {

        if (event.target.checked) {
            setImpressao(prevState => ({
                ...prevState,
                prescricoesSelecionadas: prevState.prescricoesSelecionadas.concat(param),
            }))
        } else {
            setImpressao(prevState => ({
                ...prevState,
                prescricoesSelecionadas: prevState.prescricoesSelecionadas.filter(presc => presc.id !== param.id)
            }))
        }
    }

    return (
        <div>
            <List dense subheader={<ListSubheader>Prescrições</ListSubheader>} >
                {prescricoes?.map((prescricao, i) =>
                    prescricao.emuso &&
                    <ListItem key={prescricao.id}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                onChange={handleCheck(prescricao)}
                            />
                        </ListItemIcon>
                        <ListItemText primary={prescricao.medicamento.farmaco} secondary={prescricao.apresentaco.descricao} />
                    </ListItem>
                )}
            </List>
        </div>
    )
}

export default PrescricoesSet