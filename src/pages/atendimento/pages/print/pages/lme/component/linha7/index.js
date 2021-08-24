import { Box, Grid, Typography } from '@material-ui/core'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { LMEPrintContext } from '../..'

const Linha7LME = () => {

    const lme = useContext(LMEPrintContext)

    
    const inputRef = useRef(null);
    const [fontsize, setFontSize] = useState(10)
    
    const ChangeSize = useCallback((param) => {
        //366  a progressão do tamanho conforme aumenta a fonte  208-244-280-316-352
        if (param < 316 && fontsize < 22)  {      
            setFontSize(fontsize + 4)
        }
    }, [fontsize])
    
    useEffect(() => {
        ChangeSize(inputRef.current.offsetHeight)
    }, [ChangeSize]);

    const Texto = () => {

        let texto = <div />

        if (lme.anamnese) {
            texto =
                <Typography component={'span'} variant={'h6'} align={'justify'}>
                    <Box fontSize={fontsize} >
                    {lme.anamnese.split("\n").map((i, key) => {
                        return <div key={Math.random() * 1000}>{i}</div>;
                    })}
                    </Box>
                </Typography>
        } else {
            texto = <Box style={{ color: "white" }}>-</Box>
        }
        return texto
    }

    return (
        <>
            <Grid container item style={{ height: "100%" }}>
                <Grid container item >
                    <Box mt={2} width={1} border={1} borderColor="black">
                        <Grid container direction="column" justify="flex-end" alignItems="stretch">
                            <Grid item>
                                <Box mt={-1} ml={2} display="flex">
                                    <Typography component={'span'} variant="caption" noWrap={true} >
                                        <Box bgcolor="white" px={1}>11 e 12 - Relatório médico (Anamnese e tratamento prévio)</Box>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item>
                                <div ref={inputRef} >
                                    <Box p={1}>
                                        <Texto />
                                    </Box>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Linha7LME