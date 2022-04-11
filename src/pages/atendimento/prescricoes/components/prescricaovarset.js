import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { Box, Button, Checkbox, FormControlLabel, TextField, Divider } from '@mui/material';
import { format, parseISO } from 'date-fns';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../..';

const PrescricaoVarSet = () => {

    const { prescricaoEdit, setPrescricaoEdit, medicamentoEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.name === 'continuo' ? target.checked : target.name === 'imprimirorientacoes' ? target.checked : target.value;
        setPrescricaoEdit({ ...prescricaoEdit, [name]: value })
    }

    const handleDataInicio = (event) => {
        setPrescricaoEdit({ ...prescricaoEdit, inicio: format(parseISO(event.target.value), "yyyy-MM-dd") })
    }

    const handleOrientacoes = param => () => {
        let orientacoes = medicamentoEdit.orientacoes
        let rename = 'Essa medicação não está listada no ' +
            'RENAME. Essa medicação deverá ser adquirida ' +
            'por recursos próprios, pois ela não é fornecida ' +
            'pelo SUS.'

        setPrescricaoEdit({
            ...prescricaoEdit,
            orientacoes: param === 'rename' ? rename : orientacoes,
            imprimirorientacoes: true
        })
    }


    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        mr: 1
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            mb: 1,
                        }}
                    >
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color='primary'
                                    name="continuo"
                                    checked={prescricaoEdit.continuo}
                                    onChange={handleChange}
                                />}
                            label='Contínuo'
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color='primary'
                                    name="imprimirorientacoes"
                                    checked={prescricaoEdit.imprimirorientacoes}
                                    onChange={handleChange}
                                />}
                            label='Imprimir orientações'
                        />
                        <TextField
                            type="date"
                            name="inicio"
                            value={prescricaoEdit.inicio}
                            onChange={(e) => handleDataInicio(e)}
                        />
                    </Box>
                    <TextField
                        fullWidth
                        multiline
                        variant='outlined'
                        rows={8}
                        name="orientacoes"
                        label="Orientações adicionais"
                        value={prescricaoEdit.orientacoes}
                        onChange={handleChange}
                    />
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        flexGrow: '1',
                        width: '10rem',
                        '& > :not(style)': {  // '& .MuiTextField-root': {
                            mb: 1,
                            mx: 1,
                        },
                    }}
                >
                    <Button
                        variant="outlined"
                        startIcon={<PostAddIcon />}
                        onClick={handleOrientacoes('orientacoes')}
                    >
                        {medicamentoEdit.orientacoes}
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<LocalAtmIcon />}
                        onClick={handleOrientacoes('rename')}
                    >
                        RENAME
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default PrescricaoVarSet