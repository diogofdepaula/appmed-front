import { Tooltip } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { makeStyles } from '@material-ui/core/styles';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import GroupIcon from '@material-ui/icons/Group';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import React, { useContext } from 'react';
import { ClienteContext, PageContentContext } from '../App';

const drawerWidth = 80;

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
        // paddingLeft: theme.spacing(4),
    },
    offset: theme.mixins.toolbar,
}));

const LeftDrawer = () => {
    const classes = useStyles();
    const { pageContentContext, setPageContentContext, forceUpdate } = useContext(PageContentContext)
    const { clienteContext } = useContext(ClienteContext)

    // const [open, setOpen] = useState(true);

    // const handleClick = () => {
    //     setOpen(!open);
    // }

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
                    {/* <ListItem button onClick={handleClick}>
                        <ListItemIcon>
                            <MenuBookIcon />
                        </ListItemIcon>
                         <ListItemText primary="Cadastro" /> 
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem> 
                    */}
                    {/* <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding> */}
                    <ListItem
                        button
                        className={classes.nested}
                        onClick={handleCliente}
                    >
                        <Tooltip title="Cadastro de Clientes">
                            <ListItemIcon>
                                <GroupIcon color="primary" fontSize="large" />
                            </ListItemIcon>
                            {/* <ListItemText primary="Clientes" /> */}
                        </Tooltip>
                    </ListItem>
                    <ListItem
                        button
                        className={classes.nested}
                        onClick={handleMedicamento}
                    >
                        <Tooltip title="Cadastro de Medicamentos">
                            <ListItemIcon>
                                <LocalHospitalIcon color="primary" fontSize="large" />
                            </ListItemIcon>
                            {/* <ListItemText primary="Medicamentos" /> */}
                        </Tooltip>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <FlashOnIcon color="primary" fontSize="large" />
                        </ListItemIcon>
                        {/* <ListItemText primary="Starred" /> */}
                    </ListItem>
                    {/* </List>
                    </Collapse> */}
                    <ListItem
                        disabled={clienteContext ? false : true}
                        button
                        selected={pageContentContext === 'atendimento'}
                        onClick={handleAtendimento}
                    >
                        <Tooltip title="Atendimento">
                            <ListItemIcon>
                                <SystemUpdateAltIcon color="primary" fontSize="large" />
                            </ListItemIcon>
                            {/* <ListItemText primary="Atendimento" /> */}
                        </Tooltip>
                    </ListItem>

                </List>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <SettingsEthernetIcon color="primary" fontSize="large" />
                    </ListItemIcon>
                    {/* <ListItemText primary="XXXXXX" /> */}
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <SettingsEthernetIcon color="primary" fontSize="large" />
                    </ListItemIcon>
                    {/* <ListItemText primary="ZZZZZ" /> */}
                </ListItem>
            </div>
        </Drawer>
    )
}

export default LeftDrawer
