import AccountCircle from '@mui/icons-material/AccountCircle';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import MailIcon from '@mui/icons-material/Mail';
import MoreIcon from '@mui/icons-material/MoreVert';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import ClienteSet from '../clienteset';

const PrimaryAppBar = () => {

    const handleHome = () => {
        window.location.reload()
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    backgroundColor: 'red'
                }}
            >
                <AppBar
                    sx={{
                        zIndex: 1251,
                        position: 'fixed'
                    }}
                >
                    <Toolbar>
                        <Box
                            sx={{
                                // menos 16 do padding
                                display: 'flex',
                                alignItems: 'center',
                                //width: '216px'
                                // se somente o icone da casa
                                width: '44px',
                            }}
                        >
                            <HealthAndSafetyIcon
                                fontSize='large'
                                onClick={handleHome}
                            />
                        </Box>
                        <Box
                            style={{
                                flexGrow: 1,
                                marginLeft: 20,
                            }}
                        >
                            <ClienteSet />
                        </Box>
                        <Box>
                            <IconButton color="inherit" size="large" >
                                <Badge badgeContent={77} color="secondary">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton color="inherit" size="large">
                                <Badge badgeContent={1} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton edge="end" color="inherit" size="large">
                                <AccountCircle />
                            </IconButton>
                            <IconButton color="inherit" size="large">
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default PrimaryAppBar