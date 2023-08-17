import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { Box, IconButton, TextField } from "@mui/material";
import { useState } from "react";

export const procedimentoinicial = {
    codigo: "0000000",
    original: "",
    mod: "",
    favorito: false,
    aspecto: "",
}

const RequisicaoLivre = ({ handleProcedimentoPush }) => {

    const [procedimento, setProcedimento] = useState(procedimentoinicial)

    const enviarProcedimento = () => {
        handleProcedimentoPush(procedimento)
        setProcedimento(procedimentoinicial)
    }

    const handleChange = event => {
        setProcedimento({
            ...procedimento,
            original: event.target.value,
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
                    flexDirection: 'row',
                    gap: 1
                }}
            >
                <TextField
                    fullWidth
                    label="Procedimentos a ser adicionado"
                    variant="outlined"
                    onChange={e => handleChange(e)}
                    onKeyDown={handleKeyDown} 
                    value={procedimento.mod}
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
            </Box>
        </>
    )
}

export default RequisicaoLivre