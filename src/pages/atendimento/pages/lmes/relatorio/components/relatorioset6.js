import { Box, Grid, TextField } from '@material-ui/core'
import React, { useContext } from 'react'
import { AtendimentoContext } from '../../../..'
import ReactInputMask from 'react-input-mask';

const RelatorioSet6 = () => {

    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        setLmeEdit({ ...lmeEdit, relatorio: { ...lmeEdit.relatorio, [event.target.name]: event.target.value } })
    }

    const indices = [
        ['das28', lmeEdit.relatorio.das28, "9,9"],
        ['cdai', lmeEdit.relatorio.cdai, "99"],
        ['sdai', lmeEdit.relatorio.sdai, "99"],
        ['basdai', lmeEdit.relatorio.basdai, "99,9"],
        ['asdas', lmeEdit.relatorio.asdas, "9.9"],
        ['mda', lmeEdit.relatorio.mda, "9"],
        ['eva', lmeEdit.relatorio.eva, "999"],
    ]

    return (
        <div>
            <Box m={2}>
                <Grid container spacing={1}>
                    {indices?.map((w, i) =>
                        <Grid item xs key={i}>
                            <ReactInputMask
                            mask={w[2]}
                            maskChar="_"
                            value={w[1]}
                            onChange={handleChange}
                        >
                            {() => <TextField
                                fullWidth
                                variant='outlined'
                                name={w[0]}
                                label={w[0].toLocaleUpperCase()}
                            />}
                        </ReactInputMask>
                        </Grid>
                    )}
                </Grid>
            </Box>
        </div>
    )
}

export default RelatorioSet6
