import { Box, Checkbox, FormControlLabel, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { useCallback, useContext, useEffect, useState } from 'react';
import { ClienteContext, LoginContext, PrintContext } from '../../../../App';
import Reorder from '../reorder';

const PrescricoesSet = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { local } = useContext(LoginContext)
    const [prescricoes, setPrescricoes] = useState([])
    const { nomecomercial, setNomeComercial, continuo, setContinuo, prescricoesSelecionadas, setPrescricoesSelecionadas, } = useContext(PrintContext)

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
            setPrescricoesSelecionadas(prescricoesSelecionadas.concat(param))
        } else {
            setPrescricoesSelecionadas(prescricoesSelecionadas.filter(presc => presc.id !== param.id))
        }
    }

    const handleChangeNomeComercial = (event) => {
        setNomeComercial(event.target.checked)
    }

    const handleChangeContinuo = (event) => {
        setContinuo(event.target.checked)
    }

    return (
        <>
            <Box display='block'>
                <FormControlLabel
                    disabled={local === 'consultorio' ? false : true}
                    control={
                        <Checkbox
                            color='primary'
                            name="nomecomercial"
                            checked={nomecomercial}
                            onChange={handleChangeNomeComercial}
                        />}
                    label='Nome comercial'
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            color='primary'
                            name="continuo"
                            checked={continuo}
                            onChange={handleChangeContinuo}
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
        </>
    )
}

export default PrescricoesSet