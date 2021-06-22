import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
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
                <DialogTitle id="form-dialog-title">Editar Nome Comercial</DialogTitle>
                <DialogContent>
                    <Grid container xs direction="column" justify="center" alignItems="center">
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
                        <Grid container item xs direction="row" justify="space-between" alignItems="center" >
                            <Grid item>
                                <TextField
                                    variant="outlined"
                                    name="quantidade"
                                    label="Quantidade"
                                    value={posologia?.quantidade}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item>
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