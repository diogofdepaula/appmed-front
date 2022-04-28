import { Divider, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import ReactInputMask from 'react-input-mask';
import { AtendimentoContext } from '..';
import { AtendimentoLeft, AtendimentoOutside, AtendimentoRight } from '../../../components/atendimento/layout';
import DosesTips from './dosestips';

const LMEDoses = () => {

    const { prescricaoEdit, setPrescricaoEdit } = useContext(AtendimentoContext)

    const indices = [
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
        <>
            <AtendimentoOutside>
                <AtendimentoLeft>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'nowrap',
                            flexGrow: 1,
                            gap: 1,
                        }}
                    >
                        {indices?.map((w, i) =>
                            <ReactInputMask
                                key={i}
                                mask="999"
                                value={w[2]}
                                maskChar=" "
                                onChange={(e) => handleChange(e)}
                            >
                                {() =>
                                    <TextField
                                        fullWidth
                                        variant='outlined'
                                        key={w[0]}
                                        name={w[0]}
                                        label={w[1]}
                                    />
                                }
                            </ReactInputMask>
                        )}
                    </Box>
                </AtendimentoLeft>
                <Divider orientation="vertical" flexItem />
                <AtendimentoRight>
                    <DosesTips />
                </AtendimentoRight>
            </AtendimentoOutside>
        </>
    )
}

export default LMEDoses

