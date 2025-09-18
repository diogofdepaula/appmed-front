import { Box, Toolbar } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import 'fontsource-roboto';
import { createContext, useContext, useMemo, useState } from 'react';
import PrimaryAppBar from './components/appbar/primaryappbar';
import LeftDrawer from './components/leftdrawer';
import ClienteProvider from './providers/cliente';
import DataProvider from './providers/data';
import LoginProvider from './providers/login';
import NavigateProvider from './providers/navegation';
import PrintProvider from './providers/print';
import { blue, grey } from '@mui/material/colors';

export const DataContext = createContext()
export const ClienteContext = createContext()
export const LoginContext = createContext()
export const NavigateContext = createContext()
export const PrintContext = createContext(null)
export const ColorModeContext = createContext({ toggleColorMode: () => { } });

const MainContent = () => {
    const { page } = useContext(NavigateContext)
    return page
}

const Conteudo = () => {

    // const [openDialog, setOpenDialog] = useState(true);
    const [mode, setMode] = useState('light');
   
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [setMode],
    )

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    ...(mode === 'light'
                        ? {
                            // palette values for light mode
                        }
                        : {
                            // palette values for dark mode
                            primary: {
                                main: blue.A400,
                                light: blue[200],
                                dark: blue.A700,
                            },
                              text: {
                                primary: grey.A200,
                             },
                             action: {
                                active: grey.A200,
                             }
                        }),
                },
            }),
        [mode],
    )

    // const handleClose = () => {
    //     setOpenDialog(false)
    // }

    // if (openDialog) return <Login open={openDialog} handleClose={handleClose} />

    return (
        <>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <Box sx={{
                        display: "flex",
                        bgcolor: 'background.default',
                    }} >
                        <CssBaseline />
                        <PrimaryAppBar />
                        <LeftDrawer />
                        <Box
                            component="main"
                            sx={{
                                flexGrow: 1,
                            }}
                        >
                            <Toolbar />
                            <MainContent />
                        </Box>
                    </Box>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </>
    )
}

const App = () => {


    return (
        <>
            <DataContext.Provider value={DataProvider()} >
                <ClienteContext.Provider value={ClienteProvider()} >
                    <NavigateContext.Provider value={NavigateProvider()} >
                        <LoginContext.Provider value={LoginProvider()} >
                            <PrintContext.Provider value={PrintProvider()}>
                                <Conteudo />
                            </PrintContext.Provider>
                        </LoginContext.Provider>
                    </NavigateContext.Provider>
                </ClienteContext.Provider>
            </DataContext.Provider>
        </>
    )
}

export default App



// '& > :not(style)': {  // '& .MuiTextField-root': {
//   m: 1,
//   flexGrow: 1,
// },