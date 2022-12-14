import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useContext } from 'react';
import { ClienteContext, NavigateContext } from '../App';
import FormCliente from './formcliente';

const FastClienteEdit = ({ handleClose, open }) => {

    const { clienteContext, setClienteContext, setResetCliente } = useContext(ClienteContext)
    const { setPageAtendimento } = useContext(NavigateContext)

    const handleChange = event => {
        setClienteContext({ ...clienteContext, [event.target.name]: event.target.value })
    }

    const handleSubmit = async () => {
        await fetch(process.env.REACT_APP_API_URL + `/clientes/${clienteContext.id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(clienteContext)
        }).then(data => {
            if (data.ok) {
                setResetCliente()
            }
        }).finally(() => {
            setPageAtendimento()
            handleClose()
        })
    }

    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <FormCliente
                        clienteEdit={clienteContext}
                        handleChange={handleChange}
                        setClienteEdit={setClienteContext}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={() => handleSubmit()}>Salvar</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default FastClienteEdit