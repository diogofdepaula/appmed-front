import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Divider } from '@mui/material';
import React, { useContext } from 'react';
import { ClienteCadastroContext, ClienteNavigateContext } from '../../pages/cadastro/clientes';
import { InitialCliente } from '../../providers/cliente/cadastro';
import { DefaultButton } from './atendimento/buttons';
import { ClienteContext, NavigateContext, PrintContext } from '../../App';

const ClientesAppBar = () => {

    const { setClienteContext } = useContext(ClienteContext)
    const { setPageAtendimento, setPageReset } = useContext(NavigateContext)
    const { printReset } = useContext(PrintContext)
    const { clienteOnDuty, setClienteOnDuty, clienteEdit, setClienteEdit } = useContext(ClienteCadastroContext)
    const { page, setPageMain, setPageForm } = useContext(ClienteNavigateContext)

    const handleBack = () => {
        setClienteEdit(null)
        setClienteOnDuty(null)
        setPageMain()
    }

    const handleInsert = () => {
        setClienteEdit(InitialCliente())
        setClienteOnDuty(null)
        setPageForm()
    }

    const handleUpdate = () => {
        setClienteEdit(clienteOnDuty)
        setClienteOnDuty(null)
        setPageForm()
    }

    const handleSubmit = async () => {

        // submit do insert e update , da prescricoes e lme juntos

        if (clienteEdit.id) {
            // update
            //event.preventDefault();
            // não quiz mudar aqui, pois é só edit o que mas se convir então mudar
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
            const result = await fetch(process.env.REACT_APP_API_URL + `/clientes`, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(clienteEdit)
            })
            const data = await result.json()

            // não faz sentido fazer uma busca de um paciente que acabou de cadastrar
            // ele não tem atestado, lme ou prescricao
            // mas se não tiver essas classes, dá erro lá na frente.
            await setClienteContext({
                ...data,
                atestados: [],
                lmes: [],
                prescricoes: [],
            })
            setClienteEdit(null)
            setClienteOnDuty(null)
            setPageReset()
            printReset()
            setPageAtendimento()
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
        <>
            <Box>
                <DefaultButton
                    title={'Voltar'}
                    click={handleBack}
                    icon={<ArrowUpwardIcon />}
                />
                <DefaultButton
                    title={'Novo cliente'}
                    click={handleInsert}
                    icon={<PersonAddIcon />}
                />
                <DefaultButton
                    title={"Editar"}
                    disabled={!clienteOnDuty}
                    click={handleUpdate}
                    icon={<EditIcon />}
                />
                <DefaultButton
                    title={"Salvar"}
                    disabled={page === 'clienteinsert' ? (clienteEdit.nome !== "" ? false : true) : false}
                    click={handleSubmit}
                    icon={<SaveIcon />}
                />
                <DefaultButton
                    title={"Excluir"}
                    disabled={!clienteOnDuty}
                    click={handleDelete}
                    icon={<DeleteIcon />}
                />
            </Box >
            <Divider />
        </>
    )
}

export default ClientesAppBar