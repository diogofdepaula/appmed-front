//import FlashOnIcon from '@mui/icons-material/FlashOn';
import GroupIcon from '@mui/icons-material/Group';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import { Box, Toolbar, Tooltip } from '@mui/material';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import React, { useContext } from 'react';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { ClienteContext, NavigateContext } from '../App';

const LeftDrawer = () => {

    const { page, setPageAtendimento, setPageClientes, setPageMedicamentos, setPageCID } = useContext(NavigateContext)
    const { clienteContext } = useContext(ClienteContext)

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
                            onClick={() => setPageClientes()}
                        >
                            <Tooltip title="Cadastro de Clientes">
                                <ListItemIcon>
                                    <GroupIcon color="primary" fontSize="large" />
                                </ListItemIcon>
                            </Tooltip>
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => setPageMedicamentos()}
                        >
                            <Tooltip title="Cadastro de Medicamentos">
                                <ListItemIcon>
                                    <LocalHospitalIcon color="primary" fontSize="large" />
                                </ListItemIcon>
                            </Tooltip>
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => setPageCID()}
                        >
                            <Tooltip title="CID10">
                                <ListItemIcon>
                                    <AutoStoriesIcon color="primary" fontSize="large" />
                                </ListItemIcon>
                            </Tooltip>
                        </ListItem>
                        <ListItem
                            disabled={clienteContext ? false : true}
                            button
                            selected={page === 'atendimento'}
                            onClick={() => setPageAtendimento()}
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
