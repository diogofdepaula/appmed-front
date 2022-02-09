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
import React, { useContext, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { LoginContext } from '../App';

const Login = ({ open, handleClose }) => {

    const { setLocalConsultorio, locais } = useContext(LoginContext)

    const handleListItem = () => {
        setLocalConsultorio()
        handleClose(false)
    }

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [profilePic, setProfilePic] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const responseGoogle = (response) => {
        const { profileObj: { name, email, imageUrl, googleId } } = response
        setName(name)
        setEmail(email)
        setProfilePic(imageUrl)
        if (googleId === "109365313027534073172") {
            setIsLoggedIn(true)
        }
    }


//     REACT_GOOGLE_SING_CLIENTID="1078637101112-9e3epok8f304g0fcs5cn73v1h0dm6q9q.apps.googleusercontent.com"
// REACT_DIOGO_GOOGLEID="109365313027534073172"

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
                            clientId="1078637101112-9e3epok8f304g0fcs5cn73v1h0dm6q9q.apps.googleusercontent.com"
                            buttonText="Google oAUth Sign-in"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                        {isLoggedIn ? (
                            <div style={{ textAlign: "center" }}>
                                <h1>User Information</h1>
                                <img className="profile" src={profilePic} alt="Profile" />
                                <p>Name: {name}</p>
                                <p>Email: {email}</p>
                            </div>
                        ) : (
                            ""
                        )}
                    </Box>
                </DialogContent>
                <DialogContent dividers>
                    {/* <DialogTitle>Local de Atendimento</DialogTitle> */}
                    {isLoggedIn ?
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
                : <div />    
                }
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Login