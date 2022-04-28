import { Box, FormControlLabel, TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
import React, { useContext } from 'react';
import { AtendimentoContext } from '..';

const RelatorioSet4 = () => {

    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        setLmeEdit({ ...lmeEdit, relatorio: { ...lmeEdit.relatorio, [event.target.name]: event.target.value } })
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
                    <TextField
                        type="date"
                        name="ppddata"
                        variant='outlined'
                        autoFocus
                        label="PPD"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={lmeEdit.relatorio?.ppddata || ''}
                        onChange={handleChange}
                    />
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
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 1,
                    }}
                >
                    <TextField
                        type="date"
                        name="rxtoraxdata"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant='outlined'
                        label="Rx de Tórax"
                        value={lmeEdit.relatorio?.rxtoraxdata || ''}
                        onChange={handleChange}
                    />
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
                    <TextField
                        type="date"
                        name="bhcgdata"
                        variant='outlined'
                        label="Beta-HCG"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={lmeEdit.relatorio?.bhcgdata || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        variant='outlined'
                        name='bhcgjustificativa'
                        label='Justificativa do Beta-HCG'
                        value={lmeEdit.relatorio?.bhcgjustificativa}
                        onChange={handleChange}
                    />
                </Box>
            </Box >
        </>
    );
}

export default RelatorioSet4