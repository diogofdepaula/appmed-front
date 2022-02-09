import { Box, Toolbar } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import 'fontsource-roboto';
import React, { createContext, useState } from 'react';
import LeftDrawer from './components/leftdrawer';
import Login from './components/login';
import MainContent from './components/maincontent';
import PrimaryAppBar from './components/primaryappbar';
import ClienteProvider from './providers/cliente';
import LoginProvider from './providers/login';
import NavigateProvider from './providers/navegation';

export const ClienteContext = createContext()
// export const PageContentContext = createContext()
export const LoginContext = createContext()
export const NavigateContext = createContext()

const App = () => {

  const [openDialog, setOpenDialog] = useState(true);

  const handleClose = () => {
    setOpenDialog(false)
  }

  return (
    <>
      <Box sx={{ display: "flex", }} >
        <CssBaseline />
          <ClienteContext.Provider value={ClienteProvider()} >
            <NavigateContext.Provider value={NavigateProvider()} >
              <LoginContext.Provider value={LoginProvider()} >
                {openDialog ? <Login open={openDialog} handleClose={handleClose} /> : <></>}
                <Box>
                  <PrimaryAppBar />
                </Box>
                <LeftDrawer />
                <Box flexGrow={1}>
                  <Toolbar />
                  <MainContent />
                </Box>
              </LoginContext.Provider>
            </NavigateContext.Provider>
          </ClienteContext.Provider>
      </Box>
    </>
  )
}

export default App