import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from '@material-ui/core';
import { useCallback, useContext, useEffect, useState } from 'react';
import { MedicamentosContext } from '..';
import MedicamentoData from '../components/medicamentodata';

const MedicamentoMain = () => {

  const { medicamentoOnDuty, setMedicamentoOnDuty } = useContext(MedicamentosContext)
  const [medicamentos, setMedicamentos] = useState([])
  const [medicamentosFiltrados, setMedicamentosFiltrados] = useState([])

  const fetchData = useCallback(async () => {
    //const res = await fetch(`http://localhost:4001/api.appmed/medicamentos/short`)
    const res = await fetch(process.env.REACT_APP_API_URL + `/medicamentos/short`)
    const json = await res.json();

    json.sort((a, b) => a.farmaco.localeCompare(b.farmaco))

    setMedicamentos(json);
    setMedicamentosFiltrados(json)
  }, [setMedicamentos])

  useEffect(() => {
    fetchData();
  }, [fetchData])

  const filterMedicamentos = event => {

    let filtro = [...medicamentos].filter(w =>
      w.farmaco.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 ||
      w.abreviatura.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    )

    if (filtro.length === 0) {
      filtro.push({
        id: 0,
        nome: "nenhum medicamento encontrado"
      })
    }
    setMedicamentosFiltrados(filtro)
  }

  return (
    <div>
      <Box m={1}>
        <Grid container spacing={1}>
          <Grid container item xs={4} direction="column" justify="flex-start" alignItems="stretch">
            <Grid item>
              <Box m={2}>
                <TextField
                  fullWidth
                  label="Filtrar"
                  variant="outlined"
                  onChange={filterMedicamentos}
                />
              </Box>
            </Grid>
            <Grid item>
              <Box ml={1} mt={1}>
                <TableContainer component={Paper} >
                  <Table>
                    <TableBody>
                      {medicamentosFiltrados?.map(medicamento =>
                        <TableRow
                          key={medicamento.id}
                          onClick={() => setMedicamentoOnDuty(medicamento)}
                        >
                          <TableCell component="th" scope="row">
                            <Box fontWeight={medicamentoOnDuty?.id === medicamento.id ? "fontWeightBold" : ""}>
                              {medicamento.farmaco}
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
              {medicamentoOnDuty && <MedicamentoData />}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default MedicamentoMain