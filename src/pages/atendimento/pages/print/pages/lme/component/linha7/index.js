import { Box, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { LMEPrintContext } from '../..'
import FitText from '../../../../component/fittext'

const Linha7LME = () => {

    const lme = useContext(LMEPrintContext)

    return (
        <>
            <Box mt={2} flexGrow={1} width={1} border={1} borderColor="black" component="span" display="block" >
                <Box mt={-1} ml={2} display="flex">
                    <Typography component={'span'} variant="caption" noWrap={true} >
                        <Box bgcolor="white" px={1}>11 e 12 - Relatório médico (Anamnese e tratamento prévio)</Box>
                    </Typography>
                </Box>
                <FitText
                    texto={lme.anamnese}
                    inicial={8}
                    maxfont={24}
                    erro={50}
                    padding={1}
                    align='justify'
                />
            </Box>
        </>
    )
}

export default Linha7LME