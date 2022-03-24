import RefreshIcon from '@mui/icons-material/Refresh';
import { Box, IconButton, List, Paper } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ClienteContext, LoginContext, NavigateContext } from '../App';
import DataCharging from './datacharging';
import ListItemsClientes from './listitemsclientes';


const ClienteSet = () => {

    const { setClienteContext } = useContext(ClienteContext)
    const { setPageAtendimento } = useContext(NavigateContext)
    const { login } = useContext(LoginContext)

    const [clientes, setClientes] = useState([])
    // tem que ter o clientes, setClientes porque senào na hora que corrige o Formcontrol para reescrever ele não zera a lista
    // fica com um clientesinitial
    const [clientesfiltrados, setClientesFiltrados] = useState([])
    const [inputvalue, setInputValue] = useState('')
    const [dataCharging, setDataCharging] = useState(true)

    const fetchData = useCallback(async () => {
        setInputValue('')
        // deixar o allfat, pois usa os outros dados na hora de imprimir
        const res = await fetch(process.env.REACT_APP_API_URL + '/clientes/allfat')
        const json = await res.json()
        if (res.ok) {
            setDataCharging(false)
        }
        setClientes(json)
    }, [])

    useEffect(() => {
        if (login) {
            fetchData()
        }
    }, [login, fetchData])

    const filterClientes = (event) => {
        setInputValue(event.target.value)
        let filtro = [...clientes].filter(w =>
            w.nome
                .toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
            ||
            w.cpf?.replace('-', '').replace('.', '').replace('.', '').indexOf(event.target.value.replace('-', '').replace('.', '').replace('.', '')) !== -1
        )
        if (filtro.length === 0) {
            filtro.push({
                id: 0,
                nome: "nenhum cliente encontrado"
            })
        }
        if (event.target.value === "") {
            filtro.length = 0
        }
        setClientesFiltrados(filtro)
    }

    const FetchClienteOne = async (param) => {
        const res = await fetch(process.env.REACT_APP_API_URL + '/clientes/' + param)
        const json = await res.json()
        setClienteContext(json)
    }

    const handleListItem = (param) => {
        FetchClienteOne(param.id)
        setPageAtendimento()
        setClientesFiltrados([])
    }

    const handleRefresh = () => {
        setDataCharging(true)
        fetchData()
    }

    const handleMouseLeave = () => {
        setClientesFiltrados([])
        setInputValue('')
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    position: 'relative',
                    borderRadius: 2,
                    bgcolor: "rgba(255, 255, 255, .15)",
                    flexGrow: 1,
                }}
            >
                <IconButton
                    color="inherit"
                    onClick={() => handleRefresh()}
                >
                    <RefreshIcon />
                </IconButton>
                <InputBase
                    placeholder={dataCharging ? "Carregando listagem de clientes" : "Procurar cliente"}
                    sx={{
                        color: 'inherit',
                        flexGrow: 1,
                        padding: "0.15em 1em 0.15em 0.2rem",
                    }}
                    value={inputvalue}
                    onChange={(e) => filterClientes(e)}
                    onBlur={() => setInputValue('')}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: 40,
                        width: '100%',
                        flexGrow: 1,
                    }}
                >
                    <DataCharging charge={dataCharging} />
                    {clientesfiltrados.length > 0 &&
                        <Paper elevation={20} >
                            <List
                                component="nav"
                                sx={{
                                    width: '100%',
                                    backgroundColor: "#fff",
                                    borderRadius: 4,
                                }}
                                onMouseLeave={() => handleMouseLeave()}
                            >
                                <ListItemsClientes
                                    clientesfiltrados={clientesfiltrados}
                                    handleListItem={handleListItem}
                                />
                            </List>
                        </Paper>
                    }
                </Box>
            </Box>
        </>
    )
}
export default ClienteSet