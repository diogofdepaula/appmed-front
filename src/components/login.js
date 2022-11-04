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
// import { Box } from '@mui/system';
import React, { useContext } from 'react';
// import GoogleLogin from 'react-google-login';
import { LoginContext } from '../App';

const Login = ({ open, handleClose }) => {

    const { setLocal, locais } = useContext(LoginContext)
    // const { login, setLogin } = useContext(LoginContext)

    const handleListItem = (param) => {
        setLocal(param[1])
        handleClose(false)
    }

    // const [profilePic, setProfilePic] = useState();

    // const responseGoogle = (response) => {
    //     const { profileObj: { imageUrl, googleId } } = response
    //     setProfilePic(imageUrl)
    //     if (googleId === process.env.REACT_APP_DIOGO_GOOGLEID) {
    //         setLogin(true)
    //     }
    // }

    return (
        <>
            <Dialog open={open}>
                <DialogContent dividers>
                    <DialogTitle>Local de Atendimento</DialogTitle>
                    {/* <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <GoogleLogin
                            clientId={process.env.REACT_APP_GOOGLE_SING_CLIENTID}
                            buttonText="Google Sign-in"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                        {login ?
                            <Box
                                sx={{
                                    paddingInlineStart: "1em",
                                }}
                            >
                                <Avatar alt="Profile" src={profilePic} />
                            </Box>
                            :
                            <div />}
                    </Box> */}
                </DialogContent>
                <DialogContent dividers>
                    {/* {login ? */}
                        <List sx={{ pt: 0 }}>
                            {locais.map(local => (
                                <ListItem button onClick={() => handleListItem(local)} key={local}>
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                            <AccountBalanceIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={local[0]} />
                                </ListItem>
                            ))}
                        </List>
                        {/* : <div />
                    } */}
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Login