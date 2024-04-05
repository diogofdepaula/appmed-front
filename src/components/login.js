import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { DialogContent } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import React, { useContext } from 'react';
import { LoginContext } from '../App';
import { Locais } from '../utils/locais';

const Login = ({ open, handleClose }) => {

    const { setLocal } = useContext(LoginContext)

    const handleListItem = (param) => {
        setLocal(param)
        handleClose(false)
    }

    return (
        <>
            <Dialog open={open}>
                <DialogContent dividers>
                    <DialogTitle>Local de Atendimento</DialogTitle>
                </DialogContent>
                <DialogContent dividers>
                    <List>
                        {Locais("todos").map(local => (
                            <ListItem
                                key={local.cod}
                                button
                                onClick={() => handleListItem(local.cod)}
                            >
                                <ListItemAvatar>
                                    <Avatar>
                                        <AccountBalanceIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={local.dados.abreviatura} />
                            </ListItem>
                        ))}
                    </List>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Login