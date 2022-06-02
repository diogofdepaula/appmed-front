import { Box } from '@mui/material'
import React, { useContext } from 'react'
import { LMEPrintContext } from '../..'

const Linha2Relatorio = () => {

    const lme = useContext(LMEPrintContext)

    return (
        <>
            <Box
                sx={{
                    mt: 1,
                    p: 1,
                    width: "100%",
                    borderBlockColor: "black",
                    borderStyle: "solid",
                    borderWidth: "thin",
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    {lme.cid10} - {lme.diagnostico}
                </Box>
            </Box>
        </>
    )
}

export default Linha2Relatorio