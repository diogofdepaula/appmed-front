import { Box, Typography } from '@material-ui/core'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { LMEPrintContext } from '../..'

const Linha7LME = () => {

    const lme = useContext(LMEPrintContext)

    const insideRef = useRef(null);
    const outsideRef = useRef(null);
    const [fontsize, setFontSize] = useState(10)

    const ChangeSize = useCallback((param) => {
        // a cada 2 de fontsize cresce 18-36px de insideRef.current?.offsetHeight
        // 24 x 2 + 2(de margem de erro)
        if ((insideRef.current?.offsetHeight + 50) < outsideRef.current?.offsetHeight && fontsize < 24) {
            setFontSize(fontsize + 2)
        }
    }, [fontsize])

    useEffect(() => {
        ChangeSize(insideRef.current.offsetHeight)
    }, [ChangeSize]);

    return (
        <>
            <Box mt={2} flexGrow={1} width={1} border={1} borderColor="black" component="span" display="block" >
                <Box mt={-1} ml={2} display="flex">
                    <Typography component={'span'} variant="caption" noWrap={true} >
                        <Box bgcolor="white" px={1}>11 e 12 - Relatório médico (Anamnese e tratamento prévio)</Box>
                    </Typography>
                </Box>
                <Box
                    p={1}
                    height={1}
                    style={{ whiteSpace: 'pre-wrap' }}
                    ref={outsideRef}
                >
                    <Box
                        fontSize={fontsize}
                        ref={insideRef}
                    >
                        {lme.anamnese}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Linha7LME