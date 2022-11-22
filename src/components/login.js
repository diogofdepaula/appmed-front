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

const Login = ({ open, handleClose }) => {

    const { setLocal, locais } = useContext(LoginContext)

    const handleListItem = (param) => {
        setLocal(param[1])
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
                        {locais.map(local => (
                            <ListItem
                                key={local}
                                button
                                onClick={() => handleListItem(local)}
                            >
                                <ListItemAvatar>
                                    <Avatar>
                                        <AccountBalanceIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={local[0]} />
                            </ListItem>
                        ))}
                    </List>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Login