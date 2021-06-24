import { Box, Checkbox, FormControlLabel, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core';
import { useCallback, useContext, useEffect, useState } from 'react';
import { ImpressaoContext } from '../../../..';
import { ClienteContext } from '../../../../../../App';
import Reorder from '../reorder';

const PrescricoesSet = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { impressao, setImpressao } = useContext(ImpressaoContext)
    const [prescricoes, setPrescricoes] = useState([])

    const fetchDataPrescricoes = useCallback(async () => {
        const res = await fetch(process.env.REACT_APP_API_URL + `/prescricoes/all/${clienteContext.id}`)
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

    const handleChangeCheckBox = (event) => {
        setImpressao({ ...impressao, [event.target.name]: event.target.checked })
    }

    return (
        <div>
            <Box display='block'>
                <FormControlLabel
                    disabled={impressao.local === 'consultorio' ? false : true}
                    control={
                        <Checkbox
                            color='primary'
                            name="nomecomercial"
                            checked={impressao?.nomecomercial}
                            onChange={handleChangeCheckBox}
                        />}
                    label='Nome comercial'
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            color='primary'
                            name="continuo"
                            checked={impressao?.continuo}
                            onChange={handleChangeCheckBox}
                        />}
                    label='Contínuo'
                />
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
            </Box>
        </div>
    )
}

export default PrescricoesSet