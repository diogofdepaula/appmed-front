import { List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import { differenceInYears, format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ClienteContext, PageContentContext } from '../App';

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
        flexGrow: 1,
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    overlay: {
        position: 'absolute',
        top: 36,
        width: '100%',
        flexGrow: 1,
    },
    list: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        borderRadius: theme.shape.borderRadius,
    },
    itemtext: {
        color: 'black'
    }
}))

const ClienteSet = () => {

    const classes = useStyles();
    const { setClienteContext } = useContext(ClienteContext)
    const { setPageContentContext } = useContext(PageContentContext)

    const [clientes, setClientes] = useState([])
    // tem que ter o clientes, setClientes porque senào na hora que corrige o Formcontrol para reescrever ele não zera a lista
    // fica com um clientesinitial
    const [clientesfiltrados, setClientesFiltrados] = useState([])


    const fetchData = useCallback(async () => {
        // deixar o allfat, pois usa os outros dados na hora de imprimir
        const res = await fetch(process.env.REACT_APP_API_URL + '/clientes/allfat')
        //const res = await fetch('http://localhost:4001/api.appmed/clientes/allfat')
        const json = await res.json()
        setClientes(json)
        //setClientesFiltrados(json)
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    const filterClientes = (event) => {

        let filtro = [...clientes].filter(w =>
            w.nome.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 ||
            w.nascimento?.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
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
        <div>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Procurar cliente"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => filterClientes(e)}
                    onFocus={(e) => fetchData()}
                />
                {clientesfiltrados.length > 0 &&
                    <div className={classes.overlay}>
                        <List component="nav" className={classes.list} >
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
                                        primary={<Typography variant="body1" className={classes.itemtext}>{cliente.nome}</Typography>}
                                        secondary={cliente.nascimento ? "DN " + format(parseISO(cliente.nascimento), "dd'/'MM'/'yyyy", { locale: ptBR })   + "  (" + differenceInYears(new Date(), parseISO(cliente.nascimento)).toString().concat(" anos)") : ''} />
                                </ListItem>
                            )}
                        </List>
                    </div>
                }
            </div>


        </div>
    )
}
export default ClienteSet