import { Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import MoreIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import React from 'react';
import ClienteSet from './clienteset';

const PrimaryAppBar = () => {

    const handleHome = () => {
        window.location.reload()
    }

    return (
        <>
            <Box flexGrow={1} >
                <AppBar
                    position="fixed"
                    style={{ zIndex: 1251 }}
                >
                    <Toolbar>
                        <Box
                            style={{
                                // menos 16 do padding
                                display: 'flex',
                                alignItems: 'center',
                                //width: '216px'
                                // se somente o icone da casa
                                width: '44px'
                            }}
                        >
                            <HomeIcon
                                fontSize='large'
                                onClick={handleHome}
                            />
                        </Box>
                        <Box
                            style={{
                                flexGrow: 1,
                                marginRight: 20
                            }}
                        >
                            <ClienteSet />
                        </Box>
                        <Box>
                            <IconButton color="inherit">
                                <Badge badgeContent={122} color="secondary">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton color="inherit">
                                <Badge badgeContent={1} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                edge="end"
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <IconButton
                                color="inherit"
                            >
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