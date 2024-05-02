import AccountCircle from '@mui/icons-material/AccountCircle';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import MailIcon from '@mui/icons-material/Mail';
import MoreIcon from '@mui/icons-material/MoreVert';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import { useContext } from 'react';
import { ColorModeContext } from '../../App';
import ClienteSet from '../clienteset';

const PrimaryAppBar = () => {

    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    const handleHome = () => {
        window.location.reload()
    }

    return (
        <>
            <AppBar
                sx={{
                    position: 'fixed',
                    zIndex: 1251,
                }}
            >
                <Toolbar>
                    <Box
                        sx={{
                            width: '24px',
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
                        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
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
        </>
    )
}

export default PrimaryAppBar