import { Box, Grid, Typography } from '@material-ui/core';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React, { useContext } from 'react';
import { LMEPrintContext } from '../..';

const Linha103Relatorio = () => {

    const lme = useContext(LMEPrintContext)

    const bhcgdata = lme.relatorio.bhcgdata ? format(parseISO(lme.relatorio.bhcgdata), "dd'/'MM'/'yyyy", { locale: ptBR }) : ''

    return (
        <>
            <Box>
                <Grid container item direction="row" justify="center" alignItems="stretch">
                    <Grid item xs={2}>
                        <Box borderTop={1} borderRight={1}>
                            <Typography component={'span'} variant="body1" noWrap={true} align="center">
                                <Box>Beta-HCG</Box>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box borderTop={1} borderRight={1}>
                            <Typography component={'span'} variant="body1" noWrap={true} align="center">
                                {lme.relatorio.bhcgdata ? <Box ml={1}>{bhcgdata}</Box> : <Box style={{ color: "white" }}>-</Box>}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <Box borderTop={1} >
                            <Typography component={'span'} variant="body1" noWrap={false}>
                                <Box display="flex" alignItems="center">
                                    <Typography component={'span'} variant="body1" noWrap={true}>
                                        <Box ml={1}>Justificativa: {lme.relatorio.bhcgjustificativa}</Box>
                                    </Typography>
                                </Box>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha103Relatorio