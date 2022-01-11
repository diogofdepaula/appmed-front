import { Box, Toolbar, Tooltip } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import GroupIcon from '@material-ui/icons/Group';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import React, { useContext } from 'react';
import { ClienteContext, PageContentContext } from '../App';

const LeftDrawer = () => {

    const { pageContentContext, setPageContentContext, forceUpdate } = useContext(PageContentContext)
    const { clienteContext } = useContext(ClienteContext)

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
        <>
            <Drawer
                variant="permanent"
                style={{
                    width: 92,
                    flexShrink: 0,
                }}
            >
                <Toolbar />
                <Box
                    style={{
                        overflow: "auto"
                    }}
                >
                    <List component="nav" >
                        <ListItem
                            button
                            onClick={handleCliente}
                        >
                            <Tooltip title="Cadastro de Clientes">
                                <ListItemIcon>
                                    <GroupIcon color="primary" fontSize="large" />
                                </ListItemIcon>
                            </Tooltip>
                        </ListItem>
                        <ListItem
                            button
                            onClick={handleMedicamento}
                        >
                            <Tooltip title="Cadastro de Medicamentos">
                                <ListItemIcon>
                                    <LocalHospitalIcon color="primary" fontSize="large" />
                                </ListItemIcon>
                            </Tooltip>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <FlashOnIcon color="primary" fontSize="large" />
                            </ListItemIcon>
                        </ListItem>
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
                            </Tooltip>
                        </ListItem>

                    </List>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <SettingsEthernetIcon color="primary" fontSize="large" />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <SettingsEthernetIcon color="primary" fontSize="large" />
                        </ListItemIcon>
                    </ListItem>
                </Box>
            </Drawer>
        </>
    )
}

export default LeftDrawer
