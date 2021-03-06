import { Box, FormControlLabel, TextField, Checkbox } from '@mui/material';
import Radio from '@mui/material/Radio';
import React, { useContext } from 'react';
import { AtendimentoContext } from '..';

const RelatorioSet4 = () => {

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
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        gap: 1,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignContent: 'flex-start',
                        }}
                    >
                        <FormControlLabel
                            name='ppdresultado'
                            value="a"
                            control={<Radio />}
                            label="Até 5 mm"
                            checked={lmeEdit.relatorio?.ppdresultado === "a" || false}
                            onChange={handleChange}
                        />
                        <FormControlLabel
                            name='ppdresultado'
                            value="b"
                            control={<Radio />}
                            label="Acima de 5 mm"
                            checked={lmeEdit.relatorio?.ppdresultado === "b" || false}
                            onChange={handleChange}
                        />
                        <FormControlLabel
                            name='ppdresultado'
                            value="c"
                            control={<Radio />}
                            label="Não reator"
                            checked={lmeEdit.relatorio?.ppdresultado === "c" || false}
                            onChange={handleChange}
                        />
                    </Box>
                    <FormControlLabel
                        control={
                            <Checkbox
                                color='primary'
                                name="ppdtratamento"
                                checked={lmeEdit.relatorio?.ppdtratamento}
                                onChange={handleChecked}
                            />}
                        label='Tratamento para TB latente'
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 1,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignContent: 'flex-start',
                        }}
                    >
                        <FormControlLabel
                            name='rxtoraxresultado'
                            value="a"
                            control={<Radio />}
                            label="Rx Tórax normal"
                            checked={lmeEdit.relatorio?.rxtoraxresultado === "a" || false}
                            onChange={handleChange}
                        />
                        <FormControlLabel
                            name='rxtoraxresultado'
                            value="b"
                            control={<Radio />}
                            label="Rx Tórax alterada"
                            checked={lmeEdit.relatorio?.rxtoraxresultado === "b" || false}
                            onChange={handleChange}
                        />
                    </Box>
                    {lmeEdit.relatorio?.rxtoraxresultado === "b" &&
                        <TextField
                            variant='outlined'
                            name='rxtoraxalteracao'
                            label='Resultado do Rx'
                            value={lmeEdit.relatorio.rxtoraxalteracao}
                            onChange={handleChange}
                        />
                    }
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 1,
                    }}
                >
                    <FormControlLabel
                        control={
                            <Checkbox
                                color='primary'
                                name="hepatiteimunidade"
                                checked={lmeEdit.relatorio?.hepatiteimunidade}
                                onChange={handleChecked}
                            />}
                        label='Possui imunidade para hepatite B'
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                color='primary'
                                name="hepatitevacina"
                                checked={lmeEdit.relatorio?.hepatitevacina}
                                onChange={handleChecked}
                            />}
                        label='Se não, foi vacinado'
                    />
                </Box>
            </Box >
        </>
    );
}

export default RelatorioSet4


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// <TextField
// type="date"
// name="ppddata"
// variant='outlined'
// autoFocus
// label="PPD"
// InputLabelProps={{
//     shrink: true,
// }}
// value={lmeEdit.relatorio?.ppddata || ''}
// onChange={handleChange}
// />