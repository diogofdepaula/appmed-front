import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { Box, IconButton, TextField } from '@mui/material';
import React, { useState } from 'react';

export const embrancoinicial = {
    titulo: "",
    texto: "",
}

const EmBranco = ({ handleAdicionarEmbranco }) => {

    const [emBranco, setEmBranco] = useState(embrancoinicial)

    const handleChange = event => {
        setEmBranco({
            ...emBranco,
            [event.target.name]: event.target.value
        })
    }
    
    const AddEmBranco = () => {
        handleAdicionarEmbranco(emBranco)
        setEmBranco(embrancoinicial)
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
                    label="Texto"
                    onChange={(e) => handleChange(e)}
                />
            </Box>
        </>
    )
}

export default EmBranco