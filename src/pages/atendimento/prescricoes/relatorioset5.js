import { Box, Checkbox, FormControlLabel, TextField } from '@mui/material';
import React, { useContext } from 'react';
import ReactInputMask from 'react-input-mask';
import { AtendimentoContext } from '..';

const RelatorioSet5 = () => {

    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        setLmeEdit({ ...lmeEdit, relatorio: { ...lmeEdit.relatorio, [event.target.name]: event.target.value } })
    }

    const handleChecked = event => {
        setLmeEdit({ ...lmeEdit, relatorio: { ...lmeEdit.relatorio, [event.target.name]: event.target.checked } })
    }


    return (
        <>
            <Box
                sx={{
                    display: 'column',
                    flexDirection: 'column',
                    gap: 1,
                }}
            >
                <ReactInputMask
                    mask="999"
                    maskChar=" "
                    value={lmeEdit.relatorio?.dose}
                    onChange={handleChange}
                >
                    {() => <TextField
                        fullWidth
                        variant='outlined'
                        name="dose"
                        label="Dose prescrita para MMCD biológicos (Infliximabe e Tocilizumabe)"
                    />}
                </ReactInputMask>
                <FormControlLabel
                    control={
                        <Checkbox
                            color='primary'
                            name="inducao"
                            checked={lmeEdit.relatorio?.inducao}
                            onChange={handleChecked}
                        />}
                    label='Realizou dose de indução'
                />
                <TextField
                    fullWidth
                    multiline
                    variant='outlined'
                    rows={8}
                    name="justificativa"
                    label="Justificativa para solicitação inicial ou mudança de tratamento"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={lmeEdit.relatorio?.justificativa}
                    onChange={handleChange}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            color='primary'
                            name="aine"
                            checked={lmeEdit.relatorio?.aine}
                            onChange={handleChecked}
                        />}
                    label='Paciente realizou tratamento com AINH por no mínimo 3 meses'
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            color='primary'
                            name="sqm"
                            checked={lmeEdit.relatorio?.sqm}
                            onChange={handleChecked}
                        />}
                    label='Para Secuquinumabe: paciente apresentou falha ou hipersensibilidade 
                    com Anti-TNF em dose adequada por 6 meses.'
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            color='primary'
                            name="rxt"
                            checked={lmeEdit.relatorio?.rxt}
                            onChange={handleChecked}
                        />}
                    label='Possui contraindicação absoluta, 
                    toxicidade ou falha terapêutica a todos os MMCD 
                    biológicos Anti-TNF e não Anti-TNF e MMCD alvo-específico'
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            color='primary'
                            name="ttopreviobiologico"
                            checked={lmeEdit.relatorio?.ttopreviobiologico}
                            onChange={handleChecked}
                        />}
                    label='Paciente já realizou tratamento com MMCD biológico de 1ª linha 
                    por 12 semanas ou teve perda da resposta'
                />
            </Box>
        </>
    )
}

export default RelatorioSet5