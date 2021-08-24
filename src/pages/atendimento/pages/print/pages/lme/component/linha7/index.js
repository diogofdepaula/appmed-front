import { Box, Grid, Typography } from '@material-ui/core'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { LMEPrintContext } from '../..'

const Linha7LME = () => {

    const lme = useContext(LMEPrintContext)

    const Texto = () => {

        let texto = <div />

        if (lme.anamnese) {
            texto =
                <Typography component={'span'} variant={fontsize} align={'justify'}>
                    {lme.anamnese.split("\n").map((i, key) => {
                        return <div key={Math.random() * 1000}>{i}</div>;
                    })}
                </Typography>
        } else {
            texto = <Box style={{ color: "white" }}>-</Box>
        }
        return texto
    }

    const inputRef = useRef(null);
    const [fontsize, setFontSize] = useState('h6')

    const ChangeSize = useCallback((param) => {
        if (param > 366) {
            setFontSize('body2')
        }
    }, [])

    useEffect(() => {
        ChangeSize(inputRef.current.offsetHeight)
    }, [ChangeSize]);

    return (
        <>
            <Grid container item style={{ height: "100%" }}>
                <Grid container item >
                    <Box mt={2} width={1} border={1} borderColor="black">
                        <Grid container direction="column" justify="flex-end" alignItems="stretch">
                            <Grid item>
                                <Box mt={-1} ml={2} display="flex">
                                    <Typography component={'span'} variant="caption" noWrap={true} >
                                        <Box bgcolor="white" px={1}>11 e 12 - História clínica (Anamnese e tratamento prévio)</Box>
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