import { Box, Typography } from '@material-ui/core'
import React from 'react'

const Linha12LME = () => {

    return (
        <>
            <Box
                mt={1}
                border={5}
                borderColor="LightGrey"
                width={1}
                bgcolor="text.primary"
                color="background.paper"
            >
                <Typography component={'span'} variant={'subtitle1'} align={'center'}>
                    <Box fontWeight="fontWeightBold" letterSpacing={2}>COMPONENTE ESPECIALIZADO DA ASSISTÊNCIA FARMACÊUTICA</Box>
                </Typography>
            </Box>
        </>
    )
}

export default Linha12LME