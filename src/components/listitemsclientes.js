import PersonIcon from '@mui/icons-material/Person';
import { Box, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React, { memo } from 'react';
import { CalcIdade } from '../utils/tempo';

const ClienteItem = memo(({ cliente, handleListItem }) => {
    return (
        <>
            <ListItem
                button
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
                                color: 'black',
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
            </ListItem>
        </>
    )
})

const ListItemsClientes = memo(({ clientesfiltrados, handleListItem, }) => {

    return (
        <>
            {clientesfiltrados
                .sort((x, y) => {
                    let a = x.nome.toUpperCase()
                    let b = y.nome.toUpperCase()
                    return a === b ? 0 : a > b ? 1 : -1
                })
                .map(cliente =>
                    <ClienteItem
                        key={cliente.id}
                        cliente={cliente}
                        handleListItem={handleListItem}
                    />
                )}
        </>
    )
})

export default ListItemsClientes


