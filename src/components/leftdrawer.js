import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import AlarmAddIcon from '@material-ui/icons/AlarmAdd';
import AssistantIcon from '@material-ui/icons/Assistant';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import GroupIcon from '@material-ui/icons/Group';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import React, { useContext, useState } from 'react';
import { ClienteContext, PageContentContext } from '../App';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    offset: theme.mixins.toolbar,
}));

const LeftDrawer = () => {
    const classes = useStyles();
    const { pageContentContext, setPageContentContext, forceUpdate } = useContext(PageContentContext)
    const { clienteContext } = useContext(ClienteContext)

    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    }

    const handleAtendimento = () => {
        setPageContentContext('atendimento')
        forceUpdate()
    }

    const handleCliente = () => {
        setPageContentContext('clientes')
        forceUpdate()
    }

    const handleMedicamento = () => {
        setPageContentContext('medicamentos')
        forceUpdate()
    }


    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.offset} />
            <div className={classes.drawerContainer}>
                <List component="nav" >
                    <ListItem button onClick={handleClick}>
                        <ListItemIcon>
                            <MenuBookIcon />
                        </ListItemIcon>
                        <ListItemText primary="Cadastro" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem
                                button
                                className={classes.nested}
                                onClick={handleCliente}
                            >
                                <ListItemIcon>
                                    <GroupIcon />
                                </ListItemIcon>
                                <ListItemText primary="Clientes" />
                            </ListItem>
                            <ListItem
                                button
                                className={classes.nested}
                                onClick={handleMedicamento}
                            >
                                <ListItemIcon>
                                    <LocalHospitalIcon />
                                </ListItemIcon>
                                <ListItemText primary="Medicamentos" />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <AlarmAddIcon />
                                </ListItemIcon>
                                <ListItemText primary="Starred" />
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem
                        disabled={clienteContext ? false : true}
                        button
                        selected={pageContentContext === 'atendimento'}
                        onClick={handleAtendimento}
                    >
                        <ListItemIcon>
                            <AssistantIcon />
                        </ListItemIcon>
                        <ListItemText primary="Atendimento" />
                    </ListItem>

                </List>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <AssistantIcon />
                    </ListItemIcon>
                    <ListItemText primary="XXXXXX" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <AssistantIcon />
                    </ListItemIcon>
                    <ListItemText primary="ZZZZZ" />
                </ListItem>
            </div>
        </Drawer>
    )
}

export default LeftDrawer
