import { Box, Toolbar } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import 'fontsource-roboto';
import React, { createContext, useContext, useState } from 'react';
import PrimaryAppBar from './components/appbar/primaryappbar';
import LeftDrawer from './components/leftdrawer';
import Login from './components/login';
import ClienteProvider from './providers/cliente';
import LoginProvider from './providers/login';
import NavigateProvider from './providers/navegation';
import PrintProvider from './providers/print'
import DataProvider from './providers/data';

export const DataContext = createContext()
export const ClienteContext = createContext()
export const LoginContext = createContext()
export const NavigateContext = createContext()
export const PrintContext = createContext(null)

const MainContent = () => {
    const { page } = useContext(NavigateContext)
    return page
}

const Conteudo = () => {

    const [openDialog, setOpenDialog] = useState(true);

    const handleClose = () => {
        setOpenDialog(false)
    }

    if (openDialog) return <Login open={openDialog} handleClose={handleClose} />

    return (
        <>
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
        </>
    )
}

const App = () => {

    return (
        <>
            <Box sx={{ display: "flex" }} >
                <CssBaseline />
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
            </Box>
        </>
    )
}

export default App



// '& > :not(style)': {  // '& .MuiTextField-root': {
//   m: 1,
//   flexGrow: 1,
// },