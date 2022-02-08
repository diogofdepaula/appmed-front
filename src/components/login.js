import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import React, { useContext } from 'react';
import { LoginContext } from '../App';

const Login = ({ open, handleClose }) => {

    const { setLocalConsultorio, locais } = useContext(LoginContext)

    const handleListItem = () => {
        setLocalConsultorio()
        handleClose(false)
    }

    return (
        <>
            <Dialog open={open}>
                <DialogTitle>Local de Atendimento</DialogTitle>
                <List sx={{ pt: 0 }}>
                    {locais.map(local => (
                        <ListItem button onClick={() => handleListItem()} key={local}>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                    <AccountBalanceIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={local[0]} />
                        </ListItem>
                    ))}
                </List>
            </Dialog>
        </>
    )
}

export default Login