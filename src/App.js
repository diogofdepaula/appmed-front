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

export const ClienteContext = createContext()
export const LoginContext = createContext()
export const NavigateContext = createContext()
export const PrintContext = createContext(null)

const MainContent = () => {
    const { page } = useContext(NavigateContext)
    return page
}

const App = () => {

    const [openDialog, setOpenDialog] = useState(true);

    const handleClose = () => {
        setOpenDialog(false)
    }

    // comentário para fazer rebuild 3

    return (
        <>
            <Box sx={{ display: "flex", }} >
                <CssBaseline />
                <ClienteContext.Provider value={ClienteProvider()} >
                    <NavigateContext.Provider value={NavigateProvider()} >
                        <LoginContext.Provider value={LoginProvider()} >
                            <PrintContext.Provider value={PrintProvider()}>
                                {openDialog
                                    ?
                                    <Login open={openDialog} handleClose={handleClose} />
                                    :
                                    <>
                                        <Box>
                                            <PrimaryAppBar />
                                        </Box>
                                        <LeftDrawer />
                                        <Box flexGrow={1}>
                                            <Toolbar />
                                            <MainContent />
                                        </Box>
                                    </>
                                }
                            </PrintContext.Provider>
                        </LoginContext.Provider>
                    </NavigateContext.Provider>
                </ClienteContext.Provider>
            </Box>
        </>
    )
}

export default App



// '& > :not(style)': {  // '& .MuiTextField-root': {
//   m: 1,
//   flexGrow: 1,
// },