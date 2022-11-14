import { Box, TextField } from '@mui/material';
import React, { memo, useState } from 'react';
import Tuss from '../utils/tuss';

const ItemsProcedimentos = memo(({ procedimento }) => {

    return (
        <>
            <Box
                onClick={() => { navigator.clipboard.writeText("(" + procedimento.codigo + ") " + procedimento.mod  + "; " ) }}
                sx={{
                    display: "flex",
                    p: 1,
                    gap: 1,
                    '&:hover': {
                        border: 3,
                        borderRadius: 2,
                        borderColor: 'primary.light',
                    },
                }}
            >
                <Box
                    sx={{
                        width: '4 rem'
                    }}
                >
                    {procedimento.codigo}
                </Box>
                <Box>{procedimento.mod}</Box>
            </Box>
        </>
    )
})

const ListItemsProcedimentos = ({ procedimentosfiltrados }) => {

    return (
        <>
            {procedimentosfiltrados.map((procedimento, i) => (
                <ItemsProcedimentos procedimento={procedimento} key={i} />
            ))}
        </>
    )
}

const Procedimentos = () => {

    const [procedimentosfiltrados, setProcedimentosFiltrados] = useState([])
    const procedimentos = Tuss()

    const filterProcedimentos = (event) => {

        if (event.target.value.length <= 2) return setProcedimentosFiltrados([])

        let filtro = [...procedimentos].filter(w =>
            w.original.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
            // ||
            // w.mod.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
        )
        if (filtro.length === 0) {
            filtro.push({
                mod: "nenhum cid encontrado"
            })
        }
        if (event.target.value === "") {
            filtro.length = 0
        }
        setProcedimentosFiltrados(filtro)
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
                    onChange={(e) => filterProcedimentos(e)}
                />
                <Box
                    sx={{
                        display: 'block',
                        gap: 1,
                        mt: 3,
                    }}
                >
                    <ListItemsProcedimentos procedimentosfiltrados={procedimentosfiltrados} />
                </Box>
            </Box>

        </>
    )
}

export default Procedimentos