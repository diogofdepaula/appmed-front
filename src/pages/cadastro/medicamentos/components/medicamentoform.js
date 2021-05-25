import { Divider, FormControl, FormControlLabel, FormGroup, Grid, InputLabel, Select, Switch, TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import { MedicamentosContext } from '..';
import ApresentacaoForm from './apresentacaoform';
import Classes from './classes';
import NomeComercialForm from './nomecomercialform';
import PosologiaForm from './posologiaform';

const MedicamentoForm = () => {

    const { medicamentoEdit, setMedicamentoEdit } = useContext(MedicamentosContext)

    const handleChange = event => {
        setMedicamentoEdit({ ...medicamentoEdit, [event.target.name]: event.target.value })
    }

    const handleChangeCheck = event => {
        setMedicamentoEdit({ ...medicamentoEdit, [event.target.name]: event.target.checked })
    }

    const classes = Classes()

    return (
        <div>
            <Grid container spacing={2} >
                <Grid container item spacing={2} >
                    <Grid item xs={10} >
                        <TextField
                            autoFocus
                            fullWidth
                            name="farmaco"
                            label="Nome do fármaco"
                            variant="outlined"
                            value={medicamentoEdit.farmaco}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            fullWidth
                            name="abreviatura"
                            label="Abrev."
                            variant="outlined"
                            value={medicamentoEdit.abreviatura}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <Grid container item spacing={2} >
                    <Grid item xs={6}>
                        <FormGroup row>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={medicamentoEdit.lme}
                                        onChange={handleChangeCheck}
                                        name="lme"
                                        color="primary"
                                    />
                                }
                                label="LME"
                            />
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={medicamentoEdit.controlado}
                                        onChange={handleChangeCheck}
                                        name="controlado"
                                        color="primary"
                                    />
                                }
                                label="Controlado"
                            />
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={medicamentoEdit.favorito}
                                        onChange={handleChangeCheck}
                                        name="favorito"
                                        color="primary"
                                    />
                                }
                                label="Favorito"
                            />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-age-native-simple">Classe</InputLabel>
                            <Select
                                native
                                value={medicamentoEdit.classes}
                                onChange={handleChange}
                                label="Classe"
                                inputProps={{
                                    name: 'classe',
                                    id: 'outlined-age-native-simple',
                                }}
                            >
                                <option aria-label="None" value="" />
                                {classes.map((c, i) =>
                                    <option key={i} value={c}>{c}</option>
                                )}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs>
                        <TextField
                            fullWidth
                            multiline
                            variant='outlined'
                            rows={2}
                            name="orientacoes"
                            label="Orientações sobre a medicação"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={medicamentoEdit.orientacoes}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <Grid container item direction="column" justify="flex-start" alignItems="stretch" spacing={2}>
                    <Divider />
                    <Grid item xs>
                        <NomeComercialForm />
                    </Grid>
                    <Divider />
                    <Grid item xs>
                        <ApresentacaoForm />
                    </Grid>
                    <Divider />
                    <Grid item xs>
                        <PosologiaForm />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default MedicamentoForm