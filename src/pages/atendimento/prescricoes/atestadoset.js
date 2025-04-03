import { Box, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { format, parseISO } from 'date-fns';
import React, { useContext } from 'react';
import { AtendimentoContext } from '..';
import { PadraoAtestado } from '../../../utils/listas';
import TextTips from '../../../utils/tips/texttips';

const AtestadoSet = () => {

    const { atestadoEdit, setAtestadoEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        setAtestadoEdit({ ...atestadoEdit, [event.target.name]: event.target.value })
    }

    const handleData = (event) => {
        setAtestadoEdit({ ...atestadoEdit, data: format(parseISO(event.target.value), "yyyy-MM-dd") })
    }

    const handleChangeText = (event, tips, name) => {
        setAtestadoEdit({
            ...atestadoEdit,
            [event?.target.name ?? name]: event?.target.value ?? tips
        })
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
                    rows={2}
                    name="diagnostico"
                    label="possui (Diagnóstico)"
                    value={atestadoEdit.diagnostico}
                    onChange={handleChange}
                />
                <TextTips
                    handleChange={handleChangeText}
                    state={atestadoEdit}
                    name='tratamento'
                    label="No que tange a conduta terapêutica atual (Tratamento - com ponto final)"
                    rows={2}
                />
                <TextTips
                    handleChange={handleChangeText}
                    // é o estado que será alterado
                    state={atestadoEdit}
                    // nome (Object.key) do estado que será alterado
                    name='estado'
                    label="Na última consulta paciente se apresentava (Estado atual (iniciar com letra minuscula))"
                    rows={10}
                />
                <TextTips
                    handleChange={handleChangeText}
                    state={atestadoEdit}
                    name='prognostico'
                    label="Em relação ao prognóstico (Prognóstico)"
                    rows={2}
                />
                <TextTips
                    handleChange={handleChangeText}
                    state={atestadoEdit}
                    name='consequencia'
                    label="As consequências à saúde são (com ponto final)"
                    rows={2}
                />
                <Box
                    sx={{
                        display: 'inline-flex',
                        gap: 1
                    }}
                >
                    <FormControl fullWidth >
                        <InputLabel id="label">Prazo de afastamento</InputLabel>
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
                <Box
                    sx={{
                        display: 'flex',
                        gap: 1,
                        flexDirection: 'row',
                        flexGrow: 1,
                    }}
                >
                    <TextField
                        fullWidth
                        multiline
                        rows={1}
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
            </Box>
        </>
    )
}

export default AtestadoSet