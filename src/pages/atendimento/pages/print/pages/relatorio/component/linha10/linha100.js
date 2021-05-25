import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';

const Linha100Relatorio = () => {

    return (
        <>
            <Box>
                <Grid container item direction="row" justify="center" alignItems="stretch">
                    <Grid item xs={2}>
                        <Box borderRight={1}>
                            <Typography component={'span'} variant="body1" align="center">
                                <Box>Exame</Box>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box borderRight={1}>
                            <Typography component={'span'} variant="body1" align="center">
                                <Box>Data</Box>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <Box>
                            <Typography component={'span'} variant="body1" align="center">
                                <Box>
                                    <Typography component={'span'} variant="body1">
                                        <Box>Resultado</Box>
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

export default Linha100Relatorio