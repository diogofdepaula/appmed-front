import { Box, Typography } from '@material-ui/core'
import React from 'react'

const Linha13Relatorio = () => {

    return (
        <>
            <Box
                border={5}
                borderColor="DarkGrey"
                width={1}
                bgcolor="LightGrey"
            >
                <Typography component={'span'} variant={'subtitle1'} align={'center'}>
                    <Box fontWeight="fontWeightBold" letterSpacing={2}>RELATÓRIO MÉDICO ESPECÍFICO PARA SOLICITAÇÃO DE MEDICAMENTOS</Box>
                </Typography>
            </Box>
        </>
    )
}

export default Linha13Relatorio