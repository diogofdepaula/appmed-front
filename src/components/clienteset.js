import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import { differenceInYears, format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ClienteContext, PageContentContext } from '../App';

const ClienteSet = () => {

    const { setClienteContext } = useContext(ClienteContext)
    const { setPageContentContext } = useContext(PageContentContext)

    const [clientes, setClientes] = useState([])
    // tem que ter o clientes, setClientes porque senào na hora que corrige o Formcontrol para reescrever ele não zera a lista
    // fica com um clientesinitial
    const [clientesfiltrados, setClientesFiltrados] = useState([])

    const [inputvalue, setInputValue] = useState('')

    const fetchData = useCallback(async () => {
        setInputValue('')
        // deixar o allfat, pois usa os outros dados na hora de imprimir
        const res = await fetch(process.env.REACT_APP_API_URL + '/clientes/allfat')
        const json = await res.json()
        setClientes(json)
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    const filterClientes = (event) => {

        setInputValue(event.target.value)

        let filtro = [...clientes].filter(w =>
            w.nome.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 ||
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

    const handleListItem = (param) => {
        setClienteContext(param)
        setPageContentContext('atendimento')
        // deixei atendimento para desenvolver, mas depois que estiver pronto, voltar para clientehome
        //setPageContentContext('clientehome')
        setClientesFiltrados([])
    }

    return (
        <>
            <Box
                style={{
                    position: 'relative',
                    borderRadius: 4,
                    backgroundColor: "rgba(255, 255, 255, .15)",
                    // "&:hover": {
                    //     backgroundColor: "rgba(255, 255, 255, .45)",
                    // },
                    marginRight: 92,
                    marginLeft: 20,
                    width: '100%',
                    flexGrow: 1,
                }}
            >
                <Box
                    style={{
                        padding: "1em",
                        height: '100%',
                        position: 'absolute',
                        pointerEvents: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <SearchIcon />
                </Box>
                <InputBase
                    placeholder="Procurar cliente"
                    style={{
                        color: 'inherit',
                        width: '100%',
                        padding: "0.15em 1em 0.15em 3rem",
                    }}
                    value={inputvalue}
                    onChange={(e) => filterClientes(e)}
                    onFocus={(e) => fetchData()}
                    onBlur={() => setInputValue('')}
                />
                {clientesfiltrados.length > 0 &&
                    <Box
                        style={{
                            position: 'absolute',
                            top: 36,
                            width: '100%',
                            flexGrow: 1,
                        }}
                    >
                        <List
                            component="nav"
                            style={{
                                width: '100%',
                                backgroundColor: "#fff",
                                borderRadius: 4,
                            }}
                        >
                            {clientesfiltrados.map(cliente =>
                                <ListItem
                                    key={cliente.id}
                                    button
                                    onClick={() => handleListItem(cliente)}
                                >
                                    <ListItemIcon>
                                        <PersonIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <Typography
                                                variant="body1"
                                                style={{
                                                    color: 'black'
                                                }}
                                            >
                                                {cliente.nome}
                                            </Typography>
                                        }
                                        secondary={
                                            cliente.nascimento
                                                ?
                                                "DN " + format(parseISO(cliente.nascimento),
                                                    "dd'/'MM'/'yyyy", { locale: ptBR }) +
                                                "  (" + differenceInYears(new Date(),
                                                    parseISO(cliente.nascimento)).toString().concat(" anos)")
                                                :
                                                ''
                                        }
                                    />
                                </ListItem>
                            )}
                        </List>
                    </Box>
                }
            </Box>
        </>
    )
}
export default ClienteSet