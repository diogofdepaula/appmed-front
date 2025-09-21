import { Box, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { LMEPrintContext } from '../../../../pages/print/printjob';

// essse arquivo foi baseado no const Linha4Termo = () => {
// depois dá um outro nome para que possa ser usado no termo de consentimento no lugar da Linha4Termo
const MedicamentoRelatorio = () => {

    const lme = useContext(LMEPrintContext)

    return (
        <>
            <Grid container>
                <Grid container item>
                    <Box mt={1} width={1} border={1} borderColor="black">
                        <Grid container direction="column" justifyContent="flex-end" alignItems="stretch">
                            <Grid item>
                                <Box mt={-1} ml={2} display="flex" >
                                    <Typography component={'span'} variant="caption" noWrap={true} >
                                        <Box bgcolor="white" px={1}>3 - Medicamento</Box>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box ml={1} display="flex" justifyContent="center">
                                    {lme.prescricoes.map((t, i) =>
                                        <Typography component={'span'} variant={'h6'} align={'center'} key={i}>
                                            <Box ml={2} fontWeight="fontWeightBold">{t.medicamento.farmaco}</Box>
                                        </Typography>
                                    )}
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default MedicamentoRelatorio