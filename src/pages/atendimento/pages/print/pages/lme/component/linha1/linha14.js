import { Box, Typography } from '@mui/material'
import React from 'react'

const Linha14LME = () => {

    return (
        <>
            <Box width={1}>
                <Typography component={'span'} variant={'subtitle1'} align={'center'}>
                    <Box fontWeight="fontWeightBold" letterSpacing={2}>SOLICITAÇÃO DE MEDICAMENTO(S)</Box>
                </Typography>
            </Box>
        </>
    )
}

export default Linha14LME