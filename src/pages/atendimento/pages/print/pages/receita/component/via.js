import { Box, Typography } from '@mui/material'
import React from 'react'

const Via = ({ via, tipo }) => {

    let comp = <div />

    if (tipo === "lme") {
        comp =
            <Box display="flex" justifyContent="center">
                <Typography variant={'h5'}>{"via do " + via}</Typography>
            </Box>
    }
    return comp
}

export default Via