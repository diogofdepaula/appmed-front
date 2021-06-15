import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { LMEPrintContext } from '../..'

const Linha9Relatorio = () => {

    const lme = useContext(LMEPrintContext)

    const Texto = () => {

        let texto = <div />

        if (lme.anamnese) {
            texto =
                <Typography>
                    {lme.anamnese.split("\n").map((i, key) => {
                        return <div key={Math.random() * 1000}>{i}</div>;
                    })}
                </Typography>
        } else {
            texto = <Box style={{ color: "white" }}>-</Box>
        }
        return texto
    }

    return (
        <>
            <Grid container item >
                <Box mt={2} width={1} border={1} borderColor="black">
                    <Grid container direction="column" justify="flex-end" alignItems="stretch">
                        <Grid item>
                            <Box mt={-1} ml={2} display="flex">
                                <Typography component={'span'} variant="caption" noWrap={true} >
                                    <Box bgcolor="white" px={1}>15 - Avaliação farmacoterapêutica (histórico de uso anterior de medicamentos)</Box>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box>
                                <Typography component={'span'} variant={'h6'} align={'justify'}>
                                    <Texto />
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </>
    )
}

export default Linha9Relatorio

