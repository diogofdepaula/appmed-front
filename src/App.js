import { Box, Toolbar } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import 'fontsource-roboto';
import React, { createContext, useReducer, useState } from 'react';
import LeftDrawer from './components/leftdrawer';
import MainContent from './components/maincontent';
import PrimaryAppBar from './components/primaryappbar';
import Login from './contexts/login';

export const ClienteContext = createContext()
export const PageContentContext = createContext()
export const LoginContext = createContext()

const App = () => {

  const [clienteContext, setClienteContext] = useState()
  const [pageContentContext, setPageContentContext] = useState()
  const [, forceUpdate] = useReducer((x) => x + 1, 0)

  return (
    <>
      <Box
        style={{
          display: "flex",
          backgroundColor: "white"
        }}
      >
        <CssBaseline />
        <ClienteContext.Provider value={{ clienteContext, setClienteContext }} >
          <PageContentContext.Provider value={{ pageContentContext, setPageContentContext, forceUpdate }} >
            <LoginContext.Provider value={{ login: Login() }} >
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