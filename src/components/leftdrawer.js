import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import GroupIcon from '@mui/icons-material/Group';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import StyleIcon from '@mui/icons-material/Style';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import { Box, Toolbar, Tooltip } from '@mui/material';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import React, { useContext } from 'react';
import { ClienteContext, NavigateContext } from '../App';

const LeftDrawer = () => {

    const { page, setPageAtendimento, setPageClientes, setPageMedicamentos, setPageCID, setPageProcedimentos, setPageEstatistica, setPageAvulso } = useContext(NavigateContext)
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
                            button
                            onClick={() => setPageProcedimentos()}
                        >
                            <Tooltip title="Procedimentos">
                                <ListItemIcon>
                                    <StyleIcon color="primary" fontSize="large" />
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
                    <ListItem
                        button
                        onClick={() => setPageEstatistica()}
                    >
                        <Tooltip title="Estatística">
                            <ListItemIcon>
                                <EqualizerIcon color="primary" fontSize="large" />
                            </ListItemIcon>
                        </Tooltip>
                    </ListItem>
                    <ListItem
                        button
                        onClick={() => setPageAvulso()}
                    >
                        <Tooltip title="Documentos Rápidos">
                            <ListItemIcon>
                                <FlashOnIcon color="primary" fontSize="large" />
                            </ListItemIcon>
                        </Tooltip>
                    </ListItem>
                </Box>
            </Drawer>
        </>
    )
}

export default LeftDrawer
