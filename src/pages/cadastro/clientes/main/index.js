import { Box, List, TextField } from '@mui/material';
import { useCallback, useContext, useEffect, useState } from 'react';
import { ClienteCadastroContext, ClienteNavigateContext } from '..';
import ListItemsClientes from '../../../../components/listitemsclientes';
import ClienteData from '../components/clientedata';

const ClienteMain = () => {

  const { clienteOnDuty, setClienteOnDuty } = useContext(ClienteCadastroContext)
  const { setPageUpdate } = useContext(ClienteNavigateContext)
  const [clientes, setClientes] = useState([])
  const [clientesfiltrados, setClientesFiltrados] = useState([])

  const fetchData = useCallback(async () => {
    const res = await fetch(process.env.REACT_APP_API_URL + `/clientes/allfat`)
    const json = await res.json();

    json.sort((a, b) => a.nome.localeCompare(b.nome))

    setClientes(json);
    setClientesFiltrados(json)
  }, [setClientes])

  useEffect(() => {
    fetchData();
  }, [fetchData])

  const filterClientes = event => {

    let filtro = [...clientes].filter(w =>
      w.nome.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 ||
      w.nascimento.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    )
    if (filtro.length === 0) {
      filtro.push({
        id: 0,
        nome: "nenhum cliente encontrado"
      })
    }
    setClientesFiltrados(filtro)
  }

  const handleListItem = (param) => {
    setClienteOnDuty(param)
    setPageUpdate()
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >
          <TextField
            fullWidth
            label="Filtrar"
            variant="outlined"
            onChange={filterClientes}
          />
          <List
            component="nav"
            sx={{
              width: '100%',
              backgroundColor: "#fff",
              borderRadius: 4,
            }}
          >
            <ListItemsClientes
              clientesfiltrados={clientesfiltrados}
              handleListItem={handleListItem}
            />
          </List>
        </Box>
        <Box>
          {clienteOnDuty && <ClienteData />}
        </Box>
      </Box>
    </>
  );
}

export default ClienteMain