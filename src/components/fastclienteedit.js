import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useCallback, useContext, useState } from 'react';
import { ClienteContext } from '../App';
import FormCliente from './formcliente';

const FastClienteEdit = ({ clienteContext, handleClose, open }) => {

    const { setClienteContext, setPageAtendimento } = useContext(ClienteContext)

    // deixei o estado do cliente aqui  e por atravez do clienteContext pois
    // fluiu melhor o formulário
    const [cliente, setCliente] = useState(clienteContext)

    const handleChange = event => {
        setCliente({ ...cliente, [event.target.name]: event.target.value })
    }

    const fetchClienteIncludes = useCallback(async (param) => {
        const res = await fetch(process.env.REACT_APP_API_URL + '/clientes/' + param)
        const json = await res.json()
        if (res.ok) {
            setClienteContext(json)
            setPageAtendimento()
            handleClose()
        }
    }, [setClienteContext, setPageAtendimento, handleClose])

    const handleSubmit = () => {
        fetch(process.env.REACT_APP_API_URL + `/clientes/${cliente.id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cliente)
        }).then(data => {
            if (data.ok) {

                // TIRAR O ASYNC AWAYS E FAZER O FETCH AQUI MESMO
                fetchClienteIncludes()
            }
        })
    }

    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <FormCliente
                        clienteEdit={cliente}
                        handleChange={handleChange}
                        setClienteEdit={setCliente}
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