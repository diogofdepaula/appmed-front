import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ReactFitty } from 'react-fitty'
import { LMEPrintContext } from '../..'

const Linha9Relatorio = () => {

    const lme = useContext(LMEPrintContext)

    return (
        <>
            <Grid container item xs >
                <Box mt={2} width={1} border={1} borderColor="black">
                    <Grid container direction="column" justify="flex-end" alignItems="stretch">
                        <Grid item>
                            <Box mt={-1} ml={2} display="flex">
                                <Typography component={'span'} variant="caption" noWrap={true} >
                                    <Box bgcolor="white" px={1}>15 - Relatório Medico (justificativa para solicitação ou mudança e eventos adversos)</Box>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs>
                            <Box p={1} style={{ height: '100%' }}>
                                <Typography component={ReactFitty} maxSize={16} wrapText>
                                    {lme.anamnese}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </>
    )
}

export default Linha9Relatorio

