import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import React, { useContext, useState } from 'react';
import { MedicamentosContext } from '../..';
 
const NomeComercialDialog = ({ nc, open, handleClose }) => {

    const { medicamentoEdit, setMedicamentoEdit} = useContext(MedicamentosContext)
    const [nomeComercial, setNomeComercial] = useState(nc)
 
    const handleChange = event => {
        setNomeComercial({ ...nomeComercial, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {

        setMedicamentoEdit({
            ...medicamentoEdit,
            nomescomerciais: [
                ...medicamentoEdit.nomescomerciais.map(n => {
                    if(n.id === nomeComercial.id){
                        return nomeComercial
                    } else {
                        return n
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
                    <TextField
                        autoFocus
                        variant="outlined"
                        name="nomefantasia"
                        label="Nome Fantasia"
                        value={nomeComercial?.nomefantasia}
                        onChange={handleChange}
                        fullWidth
                    />
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
 
export default NomeComercialDialog

