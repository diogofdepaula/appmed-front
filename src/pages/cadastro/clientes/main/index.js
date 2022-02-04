import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from '@mui/material';
import { useCallback, useContext, useEffect, useState } from 'react';
import { ClientesContext } from '..';
import ClienteData from '../components/clientedata';

const ClienteMain = () => {

  const { clienteOnDuty, setClienteOnDuty } = useContext(ClientesContext)
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

  return (
    <div>
      <Box m={1}>
        <Grid container spacing={1}>
          <Grid container item xs={4} direction="column" justifyContent="flex-start" alignItems="stretch">
            <Grid item>
              <Box m={2}>
                <TextField
                  fullWidth
                  label="Filtrar"
                  variant="outlined"
                  onChange={filterClientes}
                />
              </Box>
            </Grid>
            <Grid item>
              <Box ml={1} mt={1}>
                <TableContainer component={Paper} >
                  <Table>
                    <TableBody>
                      {clientesfiltrados?.map(cliente =>
                        <TableRow
                          key={cliente.id}
                          onClick={() => setClienteOnDuty(cliente)}
                        >
                          <TableCell component="th" scope="row">
                            <Box fontWeight={clienteOnDuty?.id === cliente.id ? "fontWeightBold" : ""}>
                              {cliente.nome}
                            </Box>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs>
            <Box mx={1}>
              {clienteOnDuty && <ClienteData />}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ClienteMain