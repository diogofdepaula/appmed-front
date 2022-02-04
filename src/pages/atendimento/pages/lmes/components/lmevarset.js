import { Box, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../..';
import AnamneseTips from './anamnesetips';

const LMEVarSet = () => {

    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        setLmeEdit({ ...lmeEdit, [event.target.name]: event.target.value })
    }

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
                <AnamneseTips />
            </Box>
        </div>
    )
}

export default LMEVarSet