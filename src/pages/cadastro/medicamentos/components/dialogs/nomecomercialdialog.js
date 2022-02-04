import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
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

