import RefreshIcon from '@mui/icons-material/Refresh';
import { Box, IconButton, List, Paper } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import React, { useContext, useEffect, useState, useCallback } from 'react';
import { ClienteContext, DataContext, NavigateContext, PrintContext } from '../App';
import DataCharging from './datacharging';
import ListItemsClientes from './listitemsclientes';
import { TextClean } from '../utils/textclean';

const ClienteSet = () => {

    const { setResetCliente } = useContext(ClienteContext)
    const { setPageAtendimento, setPageReset } = useContext(NavigateContext)
    const { printReset } = useContext(PrintContext)
    const { dataMedUpdate, allClientes, setFetchAllMedicamentos, setFetchAllClientes } = useContext(DataContext)
    const [selectedIndex, setSelectedIndex] = useState(0);

    const [clientesfiltrados, setClientesFiltrados] = useState([])
    const [inputvalue, setInputValue] = useState('')
    const [dataCharging, setDataCharging] = useState(true)

    const fetchData = useCallback(async () => {
        await setFetchAllMedicamentos()
        await setFetchAllClientes()
        setDataCharging(false)
    }, [setFetchAllMedicamentos, setFetchAllClientes])

    useEffect(() => {
        if (!dataMedUpdate) {
            fetchData()
        }
    }, [dataMedUpdate, fetchData])

    const filterClientes = (event) => {
        setInputValue(event.target.value)
        let filtro = [...allClientes].filter(w =>
            TextClean(w.nome).toLowerCase().indexOf(TextClean(event.target.value).trim().toLowerCase()) !== -1
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
        setSelectedIndex(0)
    }

    const handleRefresh = async () => {
        setDataCharging(true)
        setFetchAllClientes()
            .then(() => {
                setDataCharging(false)
            })
    }

    const handleLeave = () => {
        setClientesFiltrados([])
        setInputValue('')
        setSelectedIndex(-1)
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
        setInputValue('')
    }

    const handleKeyDown = (event) => {
        if (event.key === "ArrowDown") {
            setSelectedIndex(prev => prev === clientesfiltrados.length - 1 ? 0 : prev + 1)
        }
        if (event.key === "ArrowUp") {
            setSelectedIndex(prev => prev === 0 ? clientesfiltrados.length - 1 : prev - 1)
        }
        if (event.key === "Enter") {
            handleListItem(clientesfiltrados[selectedIndex])
        }
        if (event.key === "Escape") {
            handleLeave()
        }
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
                    onKeyDown={(e) => handleKeyDown(e)}
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
                                    bgcolor: 'background.paper',
                                    borderRadius: 4,
                                }}
                            >
                                <ListItemsClientes
                                    selectedIndex={selectedIndex}
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