import { Box, Grid, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../..';
import ReactInputMask from 'react-input-mask';
import DosesTips from './dosestips';

const LMEDoses = () => {

    const { prescricaoEdit, setPrescricaoEdit } = useContext(AtendimentoContext)

    const indica = [
        ['lmemes1', '1º mês', prescricaoEdit.lmemes1],
        ['lmemes2', '2º mês', prescricaoEdit.lmemes2],
        ['lmemes3', '3º mês', prescricaoEdit.lmemes3],
        ['lmemes4', '4º mês', prescricaoEdit.lmemes4],
        ['lmemes5', '5º mês', prescricaoEdit.lmemes5],
        ['lmemes6', '6º mês', prescricaoEdit.lmemes6]
    ]

    const handleChange = event => {
        setPrescricaoEdit({ ...prescricaoEdit, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <Box>
                <Grid container spacing={1} >
                    {indica?.map((w, i) =>
                        <Grid item xs key={i}>
                            <ReactInputMask
                                mask="999"
                                value={w[2]}
                                maskChar=" "
                                onChange={(e) => handleChange(e)}
                            >
                                {() => <TextField
                                    fullWidth
                                    variant='outlined'
                                    key={w[0]}
                                    name={w[0]}
                                    label={w[1]}
                                />}
                            </ReactInputMask>
                        </Grid>
                    )}
                </Grid>
            </Box>
            <DosesTips />
        </div>
    )
}

export default LMEDoses

