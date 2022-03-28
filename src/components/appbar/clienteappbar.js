import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Divider, IconButton, Tooltip } from '@mui/material';
import React, { useContext } from 'react';
import { ClienteCadastroContext, ClienteNavigateContext } from '../../pages/cadastro/clientes';
import { InitialCliente } from '../../providers/cliente/cadastro';

const ClientesAppBar = () => {

    const {
        clienteOnDuty,
        setClienteOnDuty,
        clienteEdit,
        setClienteEdit,
    } = useContext(ClienteCadastroContext)

    const {
        page,
        setPageMain,
        setPageForm,
    } = useContext(ClienteNavigateContext)

    const handleBack = () => {
        setClienteEdit(null)
        setClienteOnDuty(null)
        setPageMain()
    }

    const handleInsert = () => {
        const newcliente = InitialCliente
        setClienteOnDuty(null)
        setClienteEdit(newcliente)
        setPageForm()
    }

    const handleUpdate = () => {
        setClienteEdit(clienteOnDuty)
        setClienteOnDuty(null)
        setPageForm()
    }

    const handleSubmit = event => {

        // submit do insert e update , da prescricoes e lme juntos

        if (clienteEdit.id) {
            // update
            event.preventDefault();
            fetch(process.env.REACT_APP_API_URL + `/clientes/${clienteEdit.id}`, {
                method: 'put',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(clienteEdit)
            }).then(data => {
                if (data.ok) {
                    setPageMain()
                    setClienteEdit(null)
                    setClienteOnDuty(null)
                }
            })

        } else {
            // insert
            event.preventDefault();
            fetch(process.env.REACT_APP_API_URL + `/clientes`, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(clienteEdit)
            }).then(data => {
                if (data.ok) {
                    setPageMain()
                    setClienteEdit(null)
                    setClienteOnDuty(null)
                }
            })

        }
    }

    const fetchDelete = () => {

        fetch(process.env.REACT_APP_API_URL + `/clientes/${clienteOnDuty.id}`, {
            method: 'delete'
        }).then(data => {
            if (data.ok) {
                handleBack()
            }
        })
    }

    const handleDelete = () => {
        fetchDelete()
    }

    return (
        <div>
            <Box>
                <Tooltip title="Voltar">
                    <span>
                        <IconButton
                            //disabled={!clienteOnDuty}
                            onClick={handleBack} 
                            size="large"
                            >
                            <ArrowUpwardIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Novo cliente">
                    <IconButton onClick={handleInsert} size="large">
                        <PersonAddIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Editar">
                    <span>
                        <IconButton disabled={!clienteOnDuty} onClick={handleUpdate} size="large">
                            <EditIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Salvar">
                    <span>
                        <IconButton
                            disabled={page === 'clienteinsert' ? (clienteEdit.nome !== "" ? false : true) : false}
                            onClick={handleSubmit}
                            size="large">
                            <SaveIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Excluir">
                    <span>
                        <IconButton disabled={!clienteOnDuty} onClick={handleDelete} size="large">
                            <DeleteIcon />
                        </IconButton>
                    </span>
                </Tooltip>
            </Box >
            <Divider />
        </div >
    )
}

export default ClientesAppBar