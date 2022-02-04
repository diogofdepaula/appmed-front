import { Box, Button, Checkbox, FormControlLabel, Grid, TextField } from '@mui/material';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { format, parseISO } from 'date-fns';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../..';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

const PrescricaoVarSet = () => {

    const { prescricaoEdit, setPrescricaoEdit, medicamentoEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.name === 'continuo' ? target.checked : target.name === 'imprimirorientacoes' ? target.checked : target.value;
        setPrescricaoEdit({ ...prescricaoEdit, [name]: value })
    }

    const handleDataInicio = (event) => {
        setPrescricaoEdit({ ...prescricaoEdit, inicio: format(parseISO(event.target.value), "yyyy-MM-dd") })
    }

    const handleOrientacoes = param => () => {
        let orientacoes = medicamentoEdit.orientacoes
        let rename = 'Essa medicação não está listada no ' +
            'RENAME. Essa medicação deverá ser adquirida ' +
            'por recursos próprios, pois ela não é fornecida ' +
            'pelo SUS.'

        setPrescricaoEdit({
            ...prescricaoEdit,
            orientacoes: param === 'rename' ? rename : orientacoes,
            imprimirorientacoes: true
        })
    }

    return (
        <div>
            <Box display='flex'>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color='primary'
                                    name="continuo"
                                    checked={prescricaoEdit.continuo}
                                    onChange={handleChange}
                                />}
                            label='Contínuo'
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color='primary'
                                    name="imprimirorientacoes"
                                    checked={prescricaoEdit.imprimirorientacoes}
                                    onChange={handleChange}
                                />}
                            label='Imprimir orientações'
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            type="date"
                            name="inicio"
                            value={prescricaoEdit.inicio}
                            onChange={(e) => handleDataInicio(e)}
                        />
                    </Grid>
                    <Grid container item xs={3} spacing={1}>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<PostAddIcon />}
                                onClick={handleOrientacoes('orientacoes')}
                            >
                                Padrão
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<LocalAtmIcon />}
                                onClick={handleOrientacoes('rename')}
                            >
                                RENAME
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box >
            <Box>
                <TextField
                    fullWidth
                    multiline
                    variant='outlined'
                    rows={4}
                    name="orientacoes"
                    label="Orientações adicionais"
                    value={prescricaoEdit.orientacoes}
                    onChange={handleChange}
                />
            </Box>
        </div>
    )
}

export default PrescricaoVarSet