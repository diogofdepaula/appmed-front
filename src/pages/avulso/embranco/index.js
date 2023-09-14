import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { Box, IconButton, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TextTips from '../../../utils/tips/texttips';

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
    }, [itemEdit, emBranco.texto])

    const handleChange = (event, tips, name) => {
        // tem que deixar o método handleChange aqui por causa das adaptações 
        // da mudanda do Objeto.
        setEmBranco({
            ...emBranco,
            // esse indice está aqui só por causa do EmBranco
            indice: ind.current,
            [event?.target.name ?? name] : event?.target.value ?? tips
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
                <TextTips
                    handleChange={handleChange}
                    // é o estado que será alterado
                    state={emBranco}
                    // nome (Object.key) do estado que será alterado
                    name='texto'
                    label="Texto"
                    rows={15}
                />
            </Box>
        </>
    )
}

export default EmBranco