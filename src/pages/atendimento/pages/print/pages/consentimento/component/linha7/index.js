import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'
import Linha70Termo from './linha70'
import Linha71Termo from './linha71'
import Linha72Termo from './linha72'
import Linha73Termo from './linha73'

const Linha7Termo = () => {

    return (
        <>
            <Grid container item xs >
                <Box mt={5} width={1} border={1} borderColor="black" >
                    <Grid container direction="column" justify="center" alignItems="stretch">
                        <Grid item xs>
                            <Box mt={-1} ml={2} display="flex">
                                <Typography component={'span'} variant="caption" noWrap={true} >
                                    <Box bgcolor="white" px={1}>5 - Dados do paciente</Box>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs>
                            <Box width={1} p={1} >
                                <Grid container>
                                    <Linha70Termo />
                                    <Linha71Termo />
                                    <Linha72Termo />
                                    <Linha73Termo />
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </>
    )
}

export default Linha7Termo

