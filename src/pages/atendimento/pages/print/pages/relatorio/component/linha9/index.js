import { Box, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { LMEPrintContext } from '../..'
import FitText from '../../../../component/fittext'

const Linha9Relatorio = () => {

    const lme = useContext(LMEPrintContext)

    return (
        <>
            <Box
                mt={2}
                flexGrow={1}
                width={1}
                border={1}
                borderColor="black"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "stretch",
                }}
            >

                <Box mt={-1} ml={2} display="flex">
                    <Typography component={'span'} variant="caption" noWrap={true} >
                        <Box bgcolor="white" px={1}>15 - Relatório Médico (justificativa para solicitação ou mudança e eventos adversos)</Box>
                    </Typography>
                </Box>
                <FitText
                    texto={lme.anamnese}
                    inicial={4}
                    maxfont={20}
                    erro={64}
                    padding={1}
                />
            </Box>
        </>
    )
}

export default Linha9Relatorio

