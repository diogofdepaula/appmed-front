import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import React, { useCallback, useContext, useState } from 'react';
import { MedicamentosContext } from '../..';
 
const DialogNomeComercial = ({ nc, open, handleClose }) => {

    const { medicamentoEdit, setMedicamentoOnDuty} = useContext(MedicamentosContext)
    const [nomeComercial, setNomeComercial] = useState(nc)
 
    const handleChange = event => {
        setNomeComercial({ ...nomeComercial, [event.target.name]: event.target.value })
    }

    const fetchRefreshedMedicamento = useCallback(async () => {
        const res = await fetch(process.env.REACT_APP_API_URL + `/medicamentos/${medicamentoEdit.id}`)
        const json = await res.json();
        setMedicamentoOnDuty(json[0]);
      }, [setMedicamentoOnDuty, medicamentoEdit])
 
    const handleSubmit = event => {

        event.preventDefault();
        fetch(process.env.REACT_APP_API_URL + `/medicamentos/nc/${nomeComercial.id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nomeComercial)
        }).then(data => {
            if (data.ok) {
                handleClose()
                fetchRefreshedMedicamento()
            }
        })
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
                        Salvar
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
 
export default DialogNomeComercial

