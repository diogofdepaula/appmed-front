import { Box, Grid, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { LMEPrintContext } from '../..';

const Linha11Relatorio = () => {

    const lme = useContext(LMEPrintContext)

    const indices = [
        ['das28', lme.relatorio.das28],
        ['cdai', lme.relatorio.cdai],
        ['sdai', lme.relatorio.sdai],
        ['basdai', lme.relatorio.basdai],
        ['asdas', lme.relatorio.asdas],
        ['mda', lme.relatorio.mda],
        ['eva', lme.relatorio.eva],
    ]

    return (
        <>
            <Grid container item >
                <Box mt={2} width={1} border={1} borderColor="black">
                    <Grid container direction="column" justify="flex-start" alignItems="stretch" >
                        <Grid item>
                            <Box mt={-1} ml={2} display="flex">
                                <Typography component={'span'} variant="caption" noWrap={true} >
                                    <Box bgcolor="white" px={1}>17 - Índices combinados de atividade de doença</Box>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid container item xs direction="row" justify="center" alignItems="center">
                            {indices.map((w, i) =>
                                w[1] !== "" ?
                                    <div key={i}>
                                        <Grid item>
                                            <Box px={2} display="flex">
                                                <Typography component={'span'} variant={'body1'} align={'center'} >
                                                    <Box>{w[0].toLocaleUpperCase()}: {w[1]}</Box>
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </div>
                                    :
                                    <div key={i} ></div>
                            )}
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </>
    )
}

export default Linha11Relatorio