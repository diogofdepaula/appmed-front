import { Box, Grid } from '@material-ui/core'
import React from 'react'
import Linha11Termo from './linha11'
import Linha12Termo from './linha12'
import Linha13Termo from './linha13'

const Linha1Termo = () => {

    return (
        <>
            <Grid container item >
                <Box width={1}>
                    <Linha11Termo />
                    <Linha12Termo />
                    <Linha13Termo />
                </Box>
            </Grid>
        </>
    )
}

export default Linha1Termo