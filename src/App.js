import { Box, Toolbar } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import 'fontsource-roboto';
import React, { createContext, useReducer, useState } from 'react';
import LeftDrawer from './components/leftdrawer';
import Login from './components/login';
import MainContent from './components/maincontent';
import PrimaryAppBar from './components/primaryappbar';
import LoginProvider from './providers/login';

export const ClienteContext = createContext()
export const PageContentContext = createContext()
export const LoginContext = createContext()

const App = () => {

  const [clienteContext, setClienteContext] = useState()
  const [pageContentContext, setPageContentContext] = useState()
  const [, forceUpdate] = useReducer((x) => x + 1, 0)

  const [openDialog, setOpenDialog] = useState(true);

  const handleClose = () => {
    setOpenDialog(false)
  }

  return (
    <>
      <Box
        style={{
          display: "flex",
        }}
      >
        <CssBaseline />
        <ClienteContext.Provider value={{ clienteContext, setClienteContext }} >
          <PageContentContext.Provider value={{ pageContentContext, setPageContentContext, forceUpdate }} >
            <LoginContext.Provider value={ LoginProvider() } >
              {!openDialog ? <></> : <Login open={openDialog} handleClose={handleClose} />}
              <Box>
                <PrimaryAppBar />
              </Box>
              <LeftDrawer />
              <Box flexGrow={1}>
                <Toolbar />
                <MainContent />
              </Box>
            </LoginContext.Provider>
          </PageContentContext.Provider>
        </ClienteContext.Provider>
      </Box>
    </>
  )
}

export default App