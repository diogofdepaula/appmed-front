import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { Box, IconButton, TextField } from "@mui/material";
//import { useState } from "react";

const PrescricaoBanco = () => {
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
                    label="Medicamento cadastrado do bando de dados"
                    variant="outlined"
              //      onChange={e => handleChange(e)}
                 //   onKeyDown={handleKeyDown}
                //    value={procedimento.mod}
                    InputProps={{
                        startAdornment: (
                            <IconButton
                         //       onClick={() => enviarProcedimento()}
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

export default PrescricaoBanco