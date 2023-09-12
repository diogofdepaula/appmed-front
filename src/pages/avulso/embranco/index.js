import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { Box, IconButton, TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { SuperTips } from '../../../utils/tips/supertips';

export const embrancoinicial = {
    indice: 0,
    titulo: "",
    texto: "",
}

const EmBranco = ({ handleAdicionarEmBranco, itemEdit, ind }) => {

    const [emBranco, setEmBranco] = useState(itemEdit || embrancoinicial)
    const [open, setOpen] = useState(false)
    const ref = useRef()

    useEffect(() => {
        if (itemEdit) {
            setEmBranco(itemEdit)
        }
    }, [itemEdit, emBranco.texto])

    const handleChange = (event) => {
        setEmBranco({
            ...emBranco,
            indice: ind.current,
            [event.target.name]: event.target.value
        })
    }

    const handleKeyDown = (event) => {
        if (event.key === 'F9') {
            setOpen(true)
        }
        // ele não registra o # no texto
        // ele abre o menu antes
        // if (event.key === '#') {
        //     setOpen(true)
        // }
        if (event.key === 'Escape') {
            setOpen(false)
        }
    }

    const handleChangeTips = (param, start) => {
        setEmBranco({
            ...emBranco,
            indice: ind.current,
            texto:
                emBranco.texto
                    // separa o que tem antes
                    .slice(0, 
                        (
                            emBranco.texto.includes("#") 
                            ? (start - param.remove.length - 1)
                            : start
                        )
                        )
                    // adiciona o texto selecionado
                    .concat(param.texto)
                    // uni com o que vem depois.
                    .concat(emBranco.texto.slice(start))
        })
        setOpen(false)
        ref.current.focus()
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
                <Box>
                    <SuperTips
                        input={ref.current}
                        open={open}
                        handleChangeTips={handleChangeTips}
                    />
                    <TextField
                        inputRef={ref}
                        fullWidth
                        multiline
                        rows={15}
                        variant='outlined'
                        name='texto'
                        value={emBranco.texto}
                        label="Texto"
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    />
                </Box>
            </Box>
        </>
    )
}

export default EmBranco