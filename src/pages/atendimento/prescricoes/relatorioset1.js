import { Box, TextField } from '@mui/material';
import React, { useContext } from 'react';
import ReactInputMask from 'react-input-mask';
import { AtendimentoContext } from '..';

const RelatorioSet1 = () => {

    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        setLmeEdit({ ...lmeEdit, relatorio: { ...lmeEdit.relatorio, [event.target.name]: event.target.value } })
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'nowrap',
                    alignContent: 'flex-start',
                    gap: 1,
                }}
            >
                <ReactInputMask
                    mask="99"
                    maskChar=" "
                    value={lmeEdit.relatorio?.idadeinicio}
                    onChange={handleChange}
                >
                    {() => <TextField
                        fullWidth
                        variant='outlined'
                        name="idadeinicio"
                        label="Idade de início"
                    />}
                </ReactInputMask>
                <ReactInputMask
                    mask="999"
                    maskChar=" "
                    value={lmeEdit.relatorio?.vhs}
                    onChange={handleChange}
                >
                    {() => <TextField
                        fullWidth
                        variant='outlined'
                        name="vhs"
                        label="VHS"
                    />}
                </ReactInputMask>
                <ReactInputMask
                    mask="***"
                    maskChar=" "
                    value={lmeEdit.relatorio?.pcr}
                    onChange={handleChange}
                >
                    {() => <TextField
                        fullWidth
                        variant='outlined'
                        name="pcr"
                        label="PCR"
                    />}
                </ReactInputMask>
            </Box>
        </>
    )
}

export default RelatorioSet1