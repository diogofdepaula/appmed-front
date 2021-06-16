import { Box, TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../..';

const LMEVarSet = () => {

    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        setLmeEdit({ ...lmeEdit, [event.target.name]: event.target.value })
    }

    // const handleChangeCheckBox = event => {
    //     setLmeEdit({ ...lmeEdit, [event.target.name]: event.target.checked })
    // }

    return (
        <div>
            <Box m={2}>
                <Box mb={2}>
                    <TextField
                        fullWidth
                        multiline
                        variant='outlined'
                        rows={12}
                        name="anamnese"
                        label="História clínica (Anamnese e tratamento prévio)"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={lmeEdit.anamnese}
                        onChange={handleChange}
                    />
                </Box>
                {/* <Box display="block">
                    <Box>
                        <FormGroup row>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color='primary'
                                        name="tratamentoprevio"
                                        checked={lmeEdit.tratamentoprevio}
                                        onChange={handleChangeCheckBox}
                                    />}
                                label='Tratamento Prévio'
                            />
                        </FormGroup>
                        <TextField
                            fullWidth
                            variant='outlined'
                            name="tratamentopreviotexto"
                            label="Descrever tratamentos prévios"
                            value={lmeEdit.tratamentopreviotexto}
                            onChange={handleChange}
                        />
                    </Box>
                    <Box>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color='primary'
                                    name="atestadocapacidade"
                                    value={lmeEdit.atestadocapacidade}
                                    onChange={handleChangeCheckBox}
                                />}
                            label='Atestado de capacidade'
                        />
                    </Box>
                    <Box>
                        <TextField
                            variant='outlined'
                            name="preenchidopor"
                            label="Preenchido por"
                            value={lmeEdit.preenchidopor}
                            onChange={handleChange}
                        />
                        <ReactInputMask
                            mask="999.999.999-99"
                            value={lmeEdit.preenchidoporCPF}
                            maskChar="_"
                            onChange={handleChange}
                        >
                            {() => <TextField
                                variant='outlined'
                                name="preenchidoporCPF"
                                label="CPF do preenchedor"
                            />}
                        </ReactInputMask>
                        <TextField
                            variant='outlined'
                            name="raca"
                            label="Raça"
                            value={lmeEdit.raca}
                            onChange={handleChange}
                        />
                    </Box>
                </Box> */}
            </Box>
        </div>
    )
}

export default LMEVarSet