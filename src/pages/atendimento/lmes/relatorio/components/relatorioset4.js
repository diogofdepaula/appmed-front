import { Box, FormControlLabel, Grid, TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
//import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../..';

const RelatorioSet4 = () => {

    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        setLmeEdit({ ...lmeEdit, relatorio: { ...lmeEdit.relatorio, [event.target.name]: event.target.value } })
    }

    return (
        <div>
            <Box m={2}>
                <Grid container spacing={2} direction="column">
                    <Grid container item spacing={2} direction="row" justifyContent="flex-start" alignItems="center" alignContent="center" wrap="nowrap">
                        <Grid item >
                            <TextField
                                type="date"
                                name="ppddata"
                                variant='outlined'
                                autoFocus
                                label="PPD"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                // value={format(lmeEdit.relatorio?.ppddata, "dd-MM-yyyy") || ''}
                                value={lmeEdit.relatorio?.ppddata || ''}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid container item xs spacing={1} direction="row" justifyContent="flex-start" alignItems="center" alignContent="center" wrap="nowrap">
                            {/* <FormControl> */}
                            <Grid item>
                                <FormControlLabel
                                    name='ppdresultado'
                                    value="a"
                                    control={<Radio />}
                                    label="Até 5 mm"
                                    checked={lmeEdit.relatorio?.ppdresultado === "a" || false}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <FormControlLabel
                                    name='ppdresultado'
                                    value="b"
                                    control={<Radio />}
                                    label="Acima de 5 mm"
                                    checked={lmeEdit.relatorio?.ppdresultado === "b" || false}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <FormControlLabel
                                    name='ppdresultado'
                                    value="c"
                                    control={<Radio />}
                                    label="Não reator"
                                    checked={lmeEdit.relatorio?.ppdresultado === "c" || false}
                                    onChange={handleChange}
                                />
                            </Grid>
                            {/* </FormControl> */}
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1} direction="column">
                        <Grid container item spacing={2} direction="row" justifyContent="center" alignItems="center" alignContent="center" wrap="nowrap">
                            <Grid item >
                                <TextField
                                    type="date"
                                    name="rxtoraxdata"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant='outlined'
                                    label="Rx de Tórax"
                                    // value={format(lmeEdit.relatorio?.ppddata, "dd-MM-yyyy") || ''}
                                    value={lmeEdit.relatorio?.rxtoraxdata || ''}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid container item xs spacing={1} direction="row" justifyContent="flex-start" alignItems="center" alignContent="center" wrap="nowrap">
                                <FormControlLabel
                                    name='rxtoraxresultado'
                                    value="a"
                                    control={<Radio />}
                                    label="Rx Tórax normal"
                                    checked={lmeEdit.relatorio?.rxtoraxresultado === "a" || false}
                                    onChange={handleChange}
                                />
                                <FormControlLabel
                                    name='rxtoraxresultado'
                                    value="b"
                                    control={<Radio />}
                                    label="Rx Tórax alterada"
                                    checked={lmeEdit.relatorio?.rxtoraxresultado === "b" || false}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid item>
                            {lmeEdit.relatorio?.rxtoraxresultado === "b" &&
                                <TextField
                                    fullWidth
                                    variant='outlined'
                                    name='rxtoraxalteracao'
                                    label='Resultado do Rx'
                                    value={lmeEdit.relatorio.rxtoraxalteracao}
                                    onChange={handleChange}
                                />
                            }
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1} direction="row" justifyContent="center" alignItems="center" alignContent="center" wrap="nowrap">
                        <Grid item >
                            <TextField
                                type="date"
                                name="bhcgdata"
                                variant='outlined'
                                label="Beta-HCG"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                // value={format(lmeEdit.relatorio?.ppddata, "dd-MM-yyyy") || ''}
                                value={lmeEdit.relatorio?.bhcgdata || ''}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs>
                            <TextField
                                fullWidth
                                variant='outlined'
                                name='bhcgjustificativa'
                                label='Justificativa do Beta-HCG'
                                value={lmeEdit.relatorio?.bhcgjustificativa}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default RelatorioSet4