import { Box, Grid } from '@mui/material'
import React from 'react'
import Linha11Relatorio from './linha11'
import Linha12Relatorio from './linha12'
import Linha13Relatorio from './linha13'

const Linha1Relatorio = () => {

    return (
        <>
            <Grid container item >
                <Box width={1}>
                    <Linha11Relatorio />
                    <Linha12Relatorio />
                    <Linha13Relatorio />
                </Box>
            </Grid>
        </>
    )
}

export default Linha1Relatorio