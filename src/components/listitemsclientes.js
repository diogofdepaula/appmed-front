import PersonIcon from '@mui/icons-material/Person';
import { Box, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React, { memo } from 'react';
import CalcIdade from '../utils/calcidade';

const ListItemsClientes = memo(({ clientesfiltrados, handleListItem, handleMouseLeave, }) => {

    return (
        <>
            <Box
                sx={{
                    position: 'absolute',
                    top: 40,
                    width: '100%',
                    flexGrow: 1,
                }}
            >
                <Paper elevation={20} >
                    <List
                        component="nav"
                        sx={{
                            width: '100%',
                            backgroundColor: "#fff",
                            borderRadius: 4,
                        }}
                        onMouseLeave={() => handleMouseLeave()}
                    >
                        {clientesfiltrados.map(cliente =>
                            <ListItem
                                key={cliente.id}
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
                        )}
                    </List>
                </Paper>
            </Box>
        </>
    )
})

export default ListItemsClientes


