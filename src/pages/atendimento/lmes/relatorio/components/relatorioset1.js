import { Box, Grid, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { AtendimentoContext } from '../../..'
import ReactInputMask from 'react-input-mask';

const RelatorioSet1 = () => {

    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        setLmeEdit({ ...lmeEdit, relatorio: { ...lmeEdit.relatorio, [event.target.name]: event.target.value } })
    }

    return (
        <div>
            <Box m={2}>
                <Grid container spacing={1}>
                    <Grid item xs>
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
                    </Grid>
                    <Grid item xs>
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
                    </Grid>
                    <Grid item xs>
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
                    </Grid>
                    <Grid item xs>
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
                    </Grid>
                    <Grid item xs>
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
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default RelatorioSet1