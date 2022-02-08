import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { DialogContent } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import GoogleLogin from 'react-google-login';
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
                <DialogContent dividers>
                    <DialogTitle>Login do APPMED</DialogTitle>
                    <Box
                        sx={{ 
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <GoogleLogin
                            clientId={process.env.REACT_GOOGLEID}
                            buttonText="Google oAUth Sign-in"
                            //onSuccess={responseGoogle}
                            //onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </Box>
                </DialogContent>
                <DialogContent dividers>
                    {/* <DialogTitle>Local de Atendimento</DialogTitle> */}
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
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Login