import PersonIcon from '@mui/icons-material/Person';
import { Box, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CalcIdade } from '../utils/tempo';

const ClienteItem = ({ cliente, handleListItem, selectedIndex, index }) => {
    return (
        <>
            <ListItemButton
                selected={selectedIndex === index}
                onClick={() => handleListItem(cliente)}
            >
                <ListItemIcon>
                    <PersonIcon />
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Box
                            sx={{
                                typography: 'body1',
                            }}
                        >
                            {cliente.nome}
                        </Box>
                    }
                    secondary={
                        cliente.nascimento
                            ?
                            "DN " + format(parseISO(cliente.nascimento),
                                "dd'/'MM'/'yyyy", { locale: ptBR }) +
                            "  (" + CalcIdade(cliente.nascimento).concat(" anos)")
                            :
                            ''
                    }
                />
            </ListItemButton>
        </>
    )
}

const ListItemsClientes = ({ clientesfiltrados, handleListItem, selectedIndex }) => {

    return (
        <>
            {clientesfiltrados
                .sort((x, y) => {
                    let a = x.nome.toUpperCase()
                    let b = y.nome.toUpperCase()
                    return a === b ? 0 : a > b ? 1 : -1
                })
                .map((cliente, i) =>
                    <ClienteItem
                        index={i}
                        selectedIndex={selectedIndex}
                        key={cliente.id}
                        cliente={cliente}
                        handleListItem={handleListItem}
                    />
                )}
        </>
    )
}

export default ListItemsClientes


