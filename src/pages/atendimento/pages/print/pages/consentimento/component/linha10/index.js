import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'
import Linha100Termo from './linha100'
import Linha101Termo from './linha101'
import Linha102Termo from './linha102'
import Linha103Termo from './linha103'

const Linha10Termo = () => {

    return (
        <>
            <Grid container item >
                <Box mt={4} width={1} border={1} borderColor="black">
                    <Grid container direction="column" justify="center" alignItems="stretch">
                        <Grid item xs>
                            <Box mt={-1} ml={2} display="flex">
                                <Typography component={'span'} variant="caption" noWrap={true} >
                                    <Box bgcolor="white" px={1}>16 - Dados do paciente</Box>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid container item xs>
                            <Box width={1} p={1}>
                                <Linha100Termo />
                                <Linha101Termo />
                                <Linha102Termo />
                                <Linha103Termo />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </>
    )
}

export default Linha10Termo

