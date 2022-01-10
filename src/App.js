import { Box, Toolbar } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'fontsource-roboto';
import React, { createContext, useReducer, useState } from 'react';
import LeftDrawer from './components/leftdrawer';
import MainContent from './components/maincontent';
import PrimaryAppBar from './components/primaryappbar';

export const ClienteContext = createContext(null)
export const PageContentContext = createContext(null)

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
            <Box>
              <PrimaryAppBar />
            </Box>
            <LeftDrawer />
            <Box flexGrow={1}>
              <Toolbar />
              <MainContent />
            </Box>
          </PageContentContext.Provider>
        </ClienteContext.Provider>
      </Box>
    </>
  )
}

export default App