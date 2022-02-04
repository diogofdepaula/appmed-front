import { Box, Button, Grid, TextField } from '@mui/material';
import TextRotationNoneIcon from '@mui/icons-material/TextRotationNone';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../..';

const PosologiaNaoPadraoSet = () => {

    const { prescricaoEdit, setPrescricaoEdit, setStep } = useContext(AtendimentoContext)

    const handleChange = event => {
        setPrescricaoEdit({
            ...prescricaoEdit,
            usoposologiapadrao: false,
            posologiaId: null,
            [event.target.name]: event.target.value
        })
    }

    const handleButton = () => {
        setPrescricaoEdit(prescricaoEdit)
        setStep(41)
    }

    return (
        <div>
            <Box>
                <TextField
                    fullWidth
                    multiline
                    variant='outlined'
                    rows={4}
                    name="posologianaopadrao"
                    label='Posologia não padronizada'
                    value={prescricaoEdit.posologianaopadrao}
                    onChange={handleChange}
                />
            </Box>
            <Box mt={1}>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            variant='outlined'
                            name="quantidadenaopadrao"
                            label="Quantidade"
                            value={prescricaoEdit.quantidadenaopadrao}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            variant='outlined'
                            name="formanaopadrao"
                            label="Forma"
                            value={prescricaoEdit.formanaopadrao}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box mt={1}>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<TextRotationNoneIcon />}
                    onClick={handleButton}
                >
                    Usar posologia não padronizada
                </Button>
            </Box>
        </div>
    )
}

export default PosologiaNaoPadraoSet