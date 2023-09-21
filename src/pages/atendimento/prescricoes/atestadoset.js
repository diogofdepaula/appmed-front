import { Box, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { format, parseISO } from 'date-fns';
import React, { useContext } from 'react';
import { AtendimentoContext } from '..';
import { Consequencia, Diagnostico, Estado, Prognostico, Tratamento } from '../../../components/print/atestado/textosatestado';
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
            [event?.target.name ?? name] : event?.target.value ?? tips
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
                <TextTips
                    handleChange={handleChangeText}
                    // é o estado que será alterado
                    state={atestadoEdit}
                    // nome (Object.key) do estado que será alterado
                    name='tratamento'
                    label="Tratamento (com ponto final)"
                    rows={3}
                />
                <Estado />
                <TextTips
                    handleChange={handleChangeText}
                    // é o estado que será alterado
                    state={atestadoEdit}
                    // nome (Object.key) do estado que será alterado
                    name='estado'
                    label="Estado atual (iniciar com letra minuscula e incluir exames)"
                    rows={3}
                />
                <Prognostico />
                <TextTips
                    handleChange={handleChangeText}
                    // é o estado que será alterado
                    state={atestadoEdit}
                    // nome (Object.key) do estado que será alterado
                    name='prognostico'
                    label="Prognóstico"
                    rows={3}
                />
                <Consequencia />
                <TextTips
                    handleChange={handleChangeText}
                    // é o estado que será alterado
                    state={atestadoEdit}
                    // nome (Object.key) do estado que será alterado
                    name='consequencia'
                    label="Consequência (com ponto final)"
                    rows={3}
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