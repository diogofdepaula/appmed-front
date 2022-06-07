import { Box } from '@mui/material'
import React, { useContext } from 'react'
import { LMEPrintContext } from '../..'
import Fence from '../../../fence'

const Linha2Relatorio = () => {

    const lme = useContext(LMEPrintContext)

    return (
        <>
            <Fence titulo={'CID10'}>


                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    {lme.cid10} - {lme.diagnostico}
                </Box>
            </Fence>
        </>
    )
}

export default Linha2Relatorio