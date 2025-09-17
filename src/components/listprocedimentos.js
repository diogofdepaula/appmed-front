import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Box, IconButton, List, ListItem, ListItemText, TextField, ListItemButton } from "@mui/material";
import { memo, useMemo, useRef, useState } from "react";
import Tuss from "../utils/tuss";
import EditIcon from '@mui/icons-material/Edit';
import { procedimentoinicial } from '../pages/avulso/requisicao/requisicaolivre';
import { TextClean } from '../utils/textclean';

const ListItemProcedimento = memo(({ proced, handle, setProcedimentoEdited }) => {

    return (
        <>
            <ListItem
                secondaryAction={
                    <IconButton
                        edge="end"
                        onClick={() => setProcedimentoEdited(proced)}
                        size="small"
                    >
                        <EditIcon />
                    </IconButton>
                }
            >
                <ListItemButton
                    onClick={() => handle(proced)}
                    dense
                >
                    <ListItemText primary={proced.mod} />
                </ListItemButton>
            </ListItem>
        </>
    )
})

const ListProcedimentos = ({ handleProcedimentoPush }) => {

    const tuss = useRef(Tuss())
    const [search, setSearch] = useState("")
    const [procedimentoEdited, setProcedimentoEdited] = useState(procedimentoinicial)

    const filterProcedimentos = useMemo(() => {
        if (!search || search.length <= 2) return []
        return tuss.current.filter(w =>
            // w.original.toString().toLowerCase().includes(search.toLowerCase())
            TextClean(w.original.toLowerCase()).indexOf(TextClean(search.toLowerCase()).trim().toLowerCase()) !== -1
        )
        
}, [search])

const handleApagar = () => {
    setSearch("")
}

const enviarProcedimento = () => {
    handleProcedimentoPush(procedimentoEdited)
    setProcedimentoEdited(procedimentoinicial)
}

const handleChange = event => {
    setProcedimentoEdited({
        ...procedimentoEdited,
        mod: event.target.value,
    })
}

const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        enviarProcedimento()
    }
}

return (
    <>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                border: 1,
                borderRadius: 1,
                borderColor: "#42a5f5",
                p: 1
            }}
        >
            {procedimentoEdited.mod !== "" &&
                <TextField
                    fullWidth
                    label="Editar descrição do procedimento"
                    variant="outlined"
                    onChange={e => handleChange(e)}
                    onKeyDown={handleKeyDown}
                    value={procedimentoEdited.mod}
                    InputProps={{
                        startAdornment: (
                            <IconButton
                                onClick={() => enviarProcedimento()}
                            >
                                <PlaylistAddIcon />
                            </IconButton>
                        ),
                    }}
                />
            }
            <TextField
                fullWidth
                label="Filtrar procedimentos"
                variant="outlined"
                value={search}
                onChange={e => setSearch(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <IconButton
                            onClick={() => handleApagar()}
                        >
                            <RefreshIcon />
                        </IconButton>
                    ),
                }}
            />
            <List
                dense={true}
            >
                {filterProcedimentos?.map((p, i) =>
                    <ListItemProcedimento
                        key={i}
                        proced={p}
                        handle={handleProcedimentoPush}
                        setProcedimentoEdited={setProcedimentoEdited}
                    />
                )}
            </List>
        </Box>
    </>
)
}

export default ListProcedimentos