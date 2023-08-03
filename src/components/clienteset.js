import RefreshIcon from '@mui/icons-material/Refresh';
import { Box, IconButton, List, Paper } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ClienteContext, DataContext, NavigateContext, PrintContext } from '../App';
import DataCharging from './datacharging';
import ListItemsClientes from './listitemsclientes';

const ClienteSet = () => {

    const { setResetCliente } = useContext(ClienteContext)
    const { setPageAtendimento, setPageReset } = useContext(NavigateContext)
    const { printReset } = useContext(PrintContext)
    const { setFetchAllMedicamentos } = useContext(DataContext)

    const [clientes, setClientes] = useState([])
    const [clientesfiltrados, setClientesFiltrados] = useState([])
    const [inputvalue, setInputValue] = useState('')
    const [dataCharging, setDataCharging] = useState(true)

    const fetchData = useCallback(async () => {
        setInputValue('')
        await fetch(process.env.REACT_APP_API_URL + '/clientes/allfit')
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            }).then(data => {
                setClientes(data)
            }).then(() => {
                setDataCharging(false)
            })
    }, [])

    useEffect(() => {
        fetchData()
        setFetchAllMedicamentos()
    }, [fetchData])

    const filterClientes = (event) => {
        setInputValue(event.target.value)
        let filtro = [...clientes].filter(w =>
            w.nome.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
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

    const handleRefresh = () => {
        setDataCharging(true)
        fetchData()
    }

    const handleMouseLeave = () => {
        setClientesFiltrados([])
        setInputValue('')
    }

    const handleListItem = (param) => {
        setDataCharging(true)
        setResetCliente(param.id)
            .then(() => {
                setPageReset()
                printReset()
                setPageAtendimento()
                setClientesFiltrados([])
                setDataCharging(false)
            })
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
                    placeholder={dataCharging ? "Carregando dados" : "Procurar cliente"}
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