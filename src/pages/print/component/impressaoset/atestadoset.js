import { Box, Checkbox, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { useContext } from 'react';
import { ClienteContext } from '../../../../App';

const AtestadosSet = () => {

    const { clienteContext } = useContext(ClienteContext)
    // const { nomecomercial, setNomeComercial, continuo, setContinuo, prescricoesSelecionadas, setPrescricoesSelecionadas, } = useContext(PrintContext)

     const handleCheck = () => {
    //     if (event.target.checked) {
    //         setPrescricoesSelecionadas(prescricoesSelecionadas.concat(param))
    //     } else {
    //         setPrescricoesSelecionadas(prescricoesSelecionadas.filter(presc => presc.id !== param.id))
    //     }
     }

    return (
        <>
            <Box>
                <List
                    dense
                    subheader={<ListSubheader>Atestados</ListSubheader>}
                >
                    {clienteContext.atestados?.map(atestado =>
                        <ListItem key={atestado.id}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    onChange={handleCheck(atestado)}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={atestado.data}
                                // secondary={prescricao.apresentaco.descricao}
                            />
                        </ListItem>
                    )}
                </List>
            </Box>
        </>
    )
}

export default AtestadosSet