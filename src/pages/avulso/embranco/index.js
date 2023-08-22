import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { Box, IconButton, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

export const embrancoinicial = {
    indice: 0,
    titulo: "",
    texto: "",
}

const EmBranco = ({ handleAdicionarEmBranco, itemEdit, ind }) => {

    const [emBranco, setEmBranco] = useState(itemEdit || embrancoinicial)

    useEffect(() => {
        if (itemEdit) {
            setEmBranco(itemEdit)
        }
    }, [itemEdit])

    const handleChange = event => {
        setEmBranco({
            ...emBranco,
            indice: ind.current,
            [event.target.name]: event.target.value
        })
    }

    const AddEmBranco = () => {
        handleAdicionarEmBranco(emBranco)
        setEmBranco({
            indice: ind.current + 1,
            titulo: "",
            texto: "",
        })
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 1,
                    gap: 1,
                }}
            >
                <TextField
                    fullWidth
                    multiline
                    variant='outlined'
                    name='titulo'
                    label="Título"
                    value={emBranco.titulo}
                    InputProps={{
                        startAdornment: (
                            <IconButton
                                onClick={() => AddEmBranco()}
                            >
                                <PlaylistAddIcon />
                            </IconButton>
                        ),
                    }}
                    onChange={(e) => handleChange(e)}
                />
                <TextField
                    fullWidth
                    multiline
                    rows={15}
                    variant='outlined'
                    name='texto'
                    value={emBranco.texto}
                    label="Texto"
                    onChange={(e) => handleChange(e)}
                />
            </Box>
        </>
    )
}

export default EmBranco