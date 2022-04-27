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
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                }}
            >
                <ReactInputMask
                    mask="99"
                    maskChar=" "
                    value={lmeEdit.relatorio?.tempodoencaanos}
                    onChange={handleChange}
                >
                    {() => <TextField
                        fullWidth
                        variant='outlined'
                        name="tempodoencaanos"
                        label="Anos"
                    />}
                </ReactInputMask>
                <ReactInputMask
                    mask="99"
                    maskChar=" "
                    value={lmeEdit.relatorio?.tempodoencameses}
                    onChange={handleChange}
                >
                    {() => <TextField
                        fullWidth
                        variant='outlined'
                        name="tempodoencameses"
                        label="Meses"
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
                <ReactInputMask
                    mask="***"
                    maskChar=" "
                    value={lmeEdit.relatorio?.pcrvn}
                    onChange={handleChange}
                >
                    {() => <TextField
                        fullWidth
                        variant='outlined'
                        name="pcrvn"
                        label="PCR NL"
                    />}
                </ReactInputMask>
            </Box>
        </>
    )
}

export default RelatorioSet1