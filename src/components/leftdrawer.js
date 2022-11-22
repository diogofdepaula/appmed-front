import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import GroupIcon from '@mui/icons-material/Group';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import StyleIcon from '@mui/icons-material/Style';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import { Toolbar, Tooltip } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import React, { useContext } from 'react';
import { ClienteContext, NavigateContext } from '../App';

const Item = ({ pagina, titulo, icone }) => {
    return (
        <>
            <ListItem
                disablePadding
                button
                onClick={() => pagina()}
            >
                <ListItemButton>
                    <Tooltip title={titulo}>
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                justifyContent: 'center',
                            }}
                        >
                            {icone}
                        </ListItemIcon>
                    </Tooltip>
                </ListItemButton>
            </ListItem>
        </>
    )
}


const LeftDrawer = () => {

    const { setPageAtendimento, setPageClientes, setPageMedicamentos, setPageCID, setPageProcedimentos, setPageEstatistica, setPageAvulso } = useContext(NavigateContext)
    const { clienteContext } = useContext(ClienteContext)

    const itens = [
        {
            pagina: setPageClientes,
            titulo: "Clientes",
            icone: <GroupIcon fontSize="large" />,
        },
        {
            pagina: setPageMedicamentos,
            titulo: "Medicamentos",
            icone: <LocalHospitalIcon fontSize="large" />,
        },
        {
            pagina: setPageCID,
            titulo: "CID10",
            icone: <AutoStoriesIcon fontSize="large" />,
        },
        {
            pagina: setPageProcedimentos,
            titulo: "Procedimentos",
            icone: <StyleIcon fontSize="large" />,
        },
        {
            pagina: setPageEstatistica,
            titulo: "Estatística",
            icone: <EqualizerIcon fontSize="large" />,
        },
        {
            pagina: setPageAvulso,
            titulo: "Documentos Rápidos",
            icone: <FlashOnIcon fontSize="large" />,
        },
    ]

    return (
        <>
            <Drawer
                variant="permanent"
                style={{
                    width: 67,
                    flexShrink: 0,
                }}
            >
                <Toolbar />
                <List component="nav" >
                    {itens.map((item, i) =>
                        <Item
                            key={i}
                            pagina={item.pagina}
                            titulo={item.titulo}
                            icone={item.icone}
                        />
                    )}
                    <ListItem
                        disabled={clienteContext ? false : true}
                        disablePadding
                        button
                        onClick={() => setPageAtendimento()}
                    >
                        <ListItemButton>
                            <Tooltip title={"Atendimento"}>
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        justifyContent: 'center',
                                    }}
                                >
                                    <SystemUpdateAltIcon fontSize="large" />
                                </ListItemIcon>
                            </Tooltip>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}

export default LeftDrawer