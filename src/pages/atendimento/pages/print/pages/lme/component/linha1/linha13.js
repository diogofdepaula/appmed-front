import { Box, Typography } from '@mui/material'
import React from 'react'

const Linha13LME = () => {

    return (
        <>
            <Box
                border={5}
                borderColor="DarkGrey"
                width={1}
                bgcolor="LightGrey"
            >
                <Typography component={'span'} variant={'subtitle1'} align={'center'}>
                    <Box fontWeight="fontWeightBold" letterSpacing={2}>LAUDO DE SOLICITAÇÃO, AVALIAÇÃO E AUTORIZAÇÃO DE MEDICAMENTO(S)</Box>
                </Typography>
            </Box>
        </>
    )
}

export default Linha13LME