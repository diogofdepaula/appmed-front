import { Divider, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoContext } from '..';
import { AtendimentoLeft, AtendimentoOutside, AtendimentoRight } from '../../../components/atendimento/layout';
import AnamneseTips from '../lmes/components/anamnesetips';

const LMEVarSet = () => {

    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        setLmeEdit({ ...lmeEdit, [event.target.name]: event.target.value })
    }

    return (
        <>
            <AtendimentoOutside>
                <AtendimentoLeft>
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
                </AtendimentoLeft>
                <Divider orientation='vertical' flexItem />
                <AtendimentoRight>
                    <AnamneseTips />
                </AtendimentoRight>
            </AtendimentoOutside>
        </>
    )
}

export default LMEVarSet