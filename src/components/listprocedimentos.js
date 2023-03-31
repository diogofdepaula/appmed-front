import RefreshIcon from '@mui/icons-material/Refresh';
import { Box, IconButton, List, ListItem, ListItemText, TextField } from "@mui/material";
import { memo, useMemo, useRef, useState } from "react";
import Tuss from "../utils/tuss";

const ListItemProcedimento = memo(({ proced, handle }) => {

    return (
        <>
            <ListItem
                button
                onClick={() => handle(proced)}
            >
                <ListItemText primary={proced.mod} />
            </ListItem>
        </>
    )
})

const ListProcedimentos = ({ handleProcedimentoPush }) => {

    const tuss = useRef(Tuss())
    const [search, setSearch] = useState("")
    //  const [procedimentos] = useState(tuss.current)

    const filterProcedimentos = useMemo(() => {
        if (!search || search.length <= 2) return []
        return tuss.current.filter(w =>
            w.original.toString().toLowerCase().includes(search.toLowerCase())
        )
        //}, [search, procedimentos])
    }, [search])

    const handleApagar = () => {
        setSearch("")
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
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
                        />
                    )}
                </List>
            </Box>
        </>
    )
}

export default ListProcedimentos