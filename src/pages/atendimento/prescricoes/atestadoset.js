import { Box, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { format, parseISO } from 'date-fns';
import React, { useContext } from 'react';
import { AtendimentoContext } from '..';
import { Consequencia, Diagnostico, Estado, Prognostico, Tratamento } from '../../../components/print/atestado/textosatestado';
import { PadraoAtestado } from '../../../utils/listas';

const AtestadoSet = () => {

    const { atestadoEdit, setAtestadoEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        setAtestadoEdit({ ...atestadoEdit, [event.target.name]: event.target.value })
    }

    const handleData = (event) => {
        setAtestadoEdit({ ...atestadoEdit, data: format(parseISO(event.target.value), "yyyy-MM-dd") })
    }

    console.log(atestadoEdit);

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
                <Diagnostico />
                <TextField
                    fullWidth
                    multiline
                    rows={3}
                    name="diagnostico"
                    label="Diagnóstico"
                    value={atestadoEdit.diagnostico}
                    onChange={handleChange}
                />
                <Tratamento />
                <TextField
                    fullWidth
                    multiline
                    rows={3}
                    name="tratamento"
                    label="Tratamento (com ponto final)"
                    value={atestadoEdit.tratamento}
                    onChange={handleChange}
                />
                <Estado />
                <TextField
                    fullWidth
                    multiline
                    rows={3}
                    name="estado"
                    label="Estado atual (iniciar com letra minuscula e incluir exames)"
                    value={atestadoEdit.estado}
                    onChange={handleChange}
                />
                <Prognostico />
                <TextField
                    fullWidth
                    multiline
                    rows={3}
                    name="prognostico"
                    label="Prognóstico"
                    value={atestadoEdit.prognostico}
                    onChange={handleChange}
                />
                <Consequencia />
                <TextField
                    fullWidth
                    multiline
                    rows={3}
                    name="consequencia"
                    label="Consequência (com ponto final)"
                    value={atestadoEdit.consequencia}
                    onChange={handleChange}
                />
                <Box
                    sx={{
                        display: 'inline-flex',
                        gap: 1
                    }}
                >
                    <FormControl fullWidth >
                        <InputLabel id="label">Padrão</InputLabel>
                        <Select
                            labelId="label"
                            autoWidth
                            name='padrao'
                            value={atestadoEdit.padrao}
                            onChange={handleChange}
                            label="Padrão"
                        >
                            <MenuItem value=''></MenuItem>
                            {PadraoAtestado().map(p =>
                                <MenuItem
                                    key={p}
                                    value={p}
                                >{p}
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    {atestadoEdit.padrao === 'Determinado' &&
                        <TextField
                            fullWidth
                            name="prazo"
                            label="Prazo (em meses - em números ou por extenso)"
                            value={atestadoEdit.prazo}
                            onChange={handleChange}
                        />
                    }
                </Box>
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