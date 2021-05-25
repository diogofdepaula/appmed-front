import { Box, Grid, TextField } from '@material-ui/core'
import React, { useContext } from 'react'
import { AtendimentoContext } from '../../../..'

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
                        <TextField
                            fullWidth
                            variant='outlined'
                            name="tempodoencaanos"
                            label="Anos"
                            value={lmeEdit.relatorio?.tempodoencaanos}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            fullWidth
                            variant='outlined'
                            name="tempodoencameses"
                            label="Meses"
                            value={lmeEdit.relatorio?.tempodoencameses}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            fullWidth
                            variant='outlined'
                            name="vhs"
                            label="VHS"
                            value={lmeEdit.relatorio?.vhs}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            fullWidth
                            variant='outlined'
                            name="pcr"
                            label="PCR"
                            value={lmeEdit.relatorio?.pcr}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            fullWidth
                            variant='outlined'
                            name="pcrvn"
                            label="PCR NL"
                            value={lmeEdit.relatorio?.pcrvn}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <Box>
                    {/* <Button
                    disabled
                    variant="outline-success"
                // onClick={props.passPrevious}
                > Anterior
                </Button>
                <Button
                    className="ml-1"
                    variant="outline-success"
                    onClick={() => {
                        setLmeEdit(lmeEdit.relatorio)
                        setStep(2)
                    }}
                > Próximo
                </Button> */}
                </Box>
            </Box>
        </div>
    )
}

export default RelatorioSet1