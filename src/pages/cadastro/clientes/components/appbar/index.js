import { Box, Divider, IconButton, Tooltip } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import HealingIcon from '@mui/icons-material/Healing';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SaveIcon from '@mui/icons-material/Save';
import React, { useContext } from 'react';
import { ClientesContext } from '../..';
import InitialCliente from '../initialcliente';

const ClientesAppBar = () => {

    const { clienteOnDuty, setClienteOnDuty, clienteEdit, setClienteEdit, page, setPage } = useContext(ClientesContext)

    const handleBack = () => {
        setClienteEdit(null)
        setClienteOnDuty(null)
        setPage('clientemain')
    }

    const handleInsert = () => {
        const newcliente = InitialCliente()
        setClienteOnDuty(null)
        setClienteEdit(newcliente)
        setPage('clienteinsert')
    }

    const handleUpdate = () => {
        setClienteEdit(clienteOnDuty)
        setClienteOnDuty(null)
        setPage('clienteupdate')
    }

    const handleSubmit = event => {

        // submit do insert e update , da prescricoes e lme juntos

        let clipost = [process.env.REACT_APP_API_URL + `/clientes`, 'post', clienteEdit]
        let cliput = [process.env.REACT_APP_API_URL + `/clientes/${clienteEdit.id}`, 'put', clienteEdit]

        let submitvar

        switch (page) {
            case 'clienteinsert':
                submitvar = clipost
                break;
            case 'clienteupdate':
                submitvar = cliput
                break;
            default:
                break;
        }

        event.preventDefault();
        fetch(submitvar[0], {
            method: submitvar[1],
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(submitvar[2])
        }).then(data => {
            if (data.ok) {
                //tem que inventar um refresh
                setPage('clientemain')
                setClienteEdit(null)
                setClienteOnDuty(null)
            }
        })
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
                        <IconButton disabled={!clienteOnDuty} onClick={handleBack} size="large">
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
                <Tooltip title="Parar">
                    <span>
                        <//  disabled={!prescricaoOnDuty}
                        //onClick={handleParar}
                        IconButton size="large">
                            <HighlightOffIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Outros">
                    <span>
                        <// disabled={!prescricaoOnDuty}
                        //                        onClick={() => setPage('teste')}
                        IconButton size="large">
                            <HealingIcon />
                        </IconButton>
                    </span>
                </Tooltip>
            </Box>
            <Divider />
        </div>
    );
}

export default ClientesAppBar