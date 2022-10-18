import { Box, TextField } from '@mui/material';
import { format, parseISO } from 'date-fns';
import React, { useContext } from 'react';
import { AtendimentoContext } from '..';

const AtestadoSet = () => {

    const { atestadoEdit, setAtestadoEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        setAtestadoEdit({ ...atestadoEdit, [event.target.name]: event.target.value })
    }

    const handleData = (event) => {
        setAtestadoEdit({ ...atestadoEdit, data: format(parseISO(event.target.value), "yyyy-MM-dd") })
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    gap: 1,
                }}
            >
                <TextField
                    fullWidth
                    multiline
                    rows={3}
                    name="diagnostico"
                    label="Diagnóstico (não colocar ponto no final)"
                    value={atestadoEdit.diagnostico}
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    multiline
                    rows={3}
                    name="tratamento"
                    label="Tratamento (com ponto final)"
                    value={atestadoEdit.tratamento}
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    multiline
                    rows={3}
                    name="estado"
                    label="Estado atual (iniciar com letra minuscula e incluir exames)"
                    value={atestadoEdit.estado}
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    multiline
                    rows={3}
                    name="prognostico"
                    label="Prognóstico"
                    value={atestadoEdit.prognostico}
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    multiline
                    rows={3}
                    name="consequencia"
                    label="Consequência (com ponto final)"
                    value={atestadoEdit.consequencia}
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    name="prazo"
                    label="Prazo (em meses - em números ou por extenso)"
                    value={atestadoEdit.prazo}
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    name="comentario"
                    label="Comentário"
                    value={atestadoEdit.comentario}
                    onChange={handleChange}
                />
                <TextField
                    name="data"
                    label="Data"
                    type="date"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={atestadoEdit.data}
                    onChange={(e) => handleData(e)}
                />
            </Box>
        </>
    )
}

export default AtestadoSet







