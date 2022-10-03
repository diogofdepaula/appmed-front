import { Box, Checkbox, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { useContext } from 'react';
import { ClienteContext, PrintContext } from '../../../../App';

const AtestadosSet = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { atestadosSelecionados, setAtestadosSelecionados } = useContext(PrintContext)

    const handleCheck = param => (event) => {
        if (event.target.checked) {
            setAtestadosSelecionados(atestadosSelecionados.concat(param))
        } else {
            setAtestadosSelecionados(atestadosSelecionados.filter(atest => atest.id !== param.id))
        }
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