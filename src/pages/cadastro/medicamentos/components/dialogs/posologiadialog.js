import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import React, { useContext, useState } from 'react';
import { MedicamentosContext } from '../..';

const PosologiaDialog = ({ pp, open, handleClose }) => {

    const { medicamentoEdit, setMedicamentoEdit } = useContext(MedicamentosContext)
    const [posologia, setPosologia] = useState(pp)

    const handleChange = event => {
        setPosologia({ ...posologia, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {

        setMedicamentoEdit({
            ...medicamentoEdit,
            posologias: [
                ...medicamentoEdit.posologias.map(p => {
                    if (p.id === posologia.id) {
                        return posologia
                    } else {
                        return p
                    }
                })
            ]
        });
        handleClose()
    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Editar Posologia</DialogTitle>
                <DialogContent>
                    <Grid container xs spacing={1} direction="column" justifyContent="center" alignItems="center">
                        <Grid container item xs>
                            <TextField
                                autoFocus
                                multiline
                                rows={6}
                                variant="outlined"
                                name="posologia"
                                label="Posologia"
                                value={posologia?.posologia}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid container item xs spacing={1} direction="row" justifyContent="space-between" alignItems="center" >
                            <Grid item xs>
                                <TextField
                                    variant="outlined"
                                    name="quantidade"
                                    label="Quantidade"
                                    value={posologia?.quantidade}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs>
                                <TextField
                                    variant="outlined"
                                    name="forma"
                                    label="Forma"
                                    value={posologia?.forma}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit} color="primary">
                        Editar
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default PosologiaDialog