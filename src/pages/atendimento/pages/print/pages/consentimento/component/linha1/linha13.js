import { Box, Typography } from '@mui/material'
import React from 'react'

const Linha11Termo = () => {

    return (
        <>
            <Box
                border={5}
                borderColor="DarkGrey"
                width={1}
                bgcolor="LightGrey"
            >
                <Typography component={'span'} variant={'h6'} align={'center'}>
                    <Box fontWeight="fontWeightBold" letterSpacing={2}>TERMO DE ESCLARECIMENTO E RESPONSABILIDADE</Box>
                </Typography>
            </Box>
        </>
    )
}

export default Linha11Termo