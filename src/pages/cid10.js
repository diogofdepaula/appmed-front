import { Box, TextField } from '@mui/material';
import React, { memo, useState } from 'react';
import Cid10 from "../utils/cid10";

const ItemsCID = memo(({ cid }) => {

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: 1,
                    '&:hover': {
                        border: 3,
                        borderRadius: 2,
                        borderColor: 'primary.light',
                    },
                }}
            >
                <Box
                    onClick={() => { navigator.clipboard.writeText("(" + cid.cid10 + ")") }}
                    sx={{
                        width: 50,
                        '&:hover': {
                            fontWeight: 'bold'
                        },
                    }}
                >
                    {cid.cid10}
                </Box>
                <Box
                    onClick={() => { navigator.clipboard.writeText(cid.descricao + " (" + cid.cid10 + ")") }}
                    sx={{
                        '&:hover': {
                            fontWeight: 'bold'
                        },
                    }}
                >
                    {cid.descricao}
                </Box>
            </Box>
        </>
    )
})

const ListItemsCID = ({ cidsfiltrados }) => {

    return (
        <>
            {cidsfiltrados.map((cid, i) => (
                <ItemsCID cid={cid} key={i} />
            ))}
        </>
    )
}

const CID10 = () => {

    const [cidsfiltrados, setCidsFiltrados] = useState([])
    const cids = Cid10()

    const filterCids = (event) => {

        if (event.target.value.length <= 2) return setCidsFiltrados([])

        let filtro = [...cids].filter(w =>
            w.cid10.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
            ||
            w.descricao.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
        )
        if (filtro.length === 0) {
            filtro.push({
                cid10: "nenhum cid encontrado"
            })
        }
        if (event.target.value === "") {
            filtro.length = 0
        }
        setCidsFiltrados(filtro)
    }

    return (
        <>
            <Box
                sx={{
                    display: 'block',
                    gap: 1,
                    p: 4
                }}
            >
                <TextField
                    autoFocus
                    fullWidth
                    onChange={(e) => filterCids(e)}
                />
                <Box
                    sx={{
                        display: 'block',
                        gap: 1,
                        mt: 3,
                    }}
                >
                    <ListItemsCID cidsfiltrados={cidsfiltrados} />
                </Box>
            </Box>

        </>
    )
}

export default CID10