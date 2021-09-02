import { Box, Grid, Typography } from '@material-ui/core'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { LMEPrintContext } from '../..'

const Linha7LME = () => {

    const lme = useContext(LMEPrintContext)

    const inputRef = useRef(null);
    const [fontsize, setFontSize] = useState(10)
    const [conter, setConter] = useState(0)

    const ChangeSize = useCallback((param) => {
        //366  a progressão do tamanho conforme aumenta a fonte  208-244-280-316-352
        console.log('dentro do callback', inputRef.current?.offsetHeight, '  ', fontsize);
        if (param < 316 && fontsize < 22) {
            setFontSize(fontsize + 4)
        }

    }, [fontsize])

    useEffect(() => {
        // ChangeSize(inputRef.current.offsetHeight)
        if (conter !== 4) {
            setConter(prev => prev + 1)
        }
    }, [ChangeSize, conter]);

    console.log('fora do callback', inputRef.current?.offsetHeight, '  ', fontsize, '  ', conter);

    return (
        <>
            {/* <Grid container item xs> */}
                <Box mt={2} flexGrow={1} width={1} border={1} borderColor="black" component="span" display="block" >
                    {/* <Grid container item xs direction="column" justify="flex-end" alignItems="stretch">
                        <Grid item> */}


                            <Box mt={-1} ml={2} display="flex">
                                <Typography component={'span'} variant="caption" noWrap={true} >
                                    <Box bgcolor="white" px={1}>11 e 12 - Relatório médico (Anamnese e tratamento prévio)</Box>
                                </Typography>
                            </Box>
                        {/* </Grid>
                        <Grid item xs> */}
                            <Box p={1} height={1} style={{ whiteSpace: 'pre-wrap' }} ref={inputRef} >
                                {lme.anamnese}
                            </Box>
                        {/* </Grid>
                    </Grid> */}
                </Box>
            {/* </Grid> */}
        </>
    )
}

export default Linha7LME