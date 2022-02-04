import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import React, { useContext, useState } from 'react';
import { MedicamentosContext } from '../..';

const ApresentacaoDialog = ({ ap, open, handleClose }) => {

    const { medicamentoEdit, setMedicamentoEdit } = useContext(MedicamentosContext)
    const [apresentacao, setApresentacao] = useState(ap)

    const handleChange = event => {
        setApresentacao({ ...apresentacao, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {

        setMedicamentoEdit({
            ...medicamentoEdit,
            apresentacoes: [
                ...medicamentoEdit.apresentacoes.map(a => {
                    if (a.id === apresentacao.id) {
                        return apresentacao
                    } else {
                        return a
                    }
                })
            ]
        });
        handleClose()
    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Editar Apresentação</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        variant="outlined"
                        name="descricao"
                        label="Descrição"
                        value={apresentacao?.descricao}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        style={{ marginTop: 10 }}
                        variant="outlined"
                        name="uso"
                        label="Uso"
                        value={apresentacao?.uso}
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

export default ApresentacaoDialog

