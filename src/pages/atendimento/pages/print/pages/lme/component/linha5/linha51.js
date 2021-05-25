import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'

const Linha51LME = () => {

    return (
        <>
            <Box>
                <Grid container>
                    <Grid container item xs={8} direction="row" justify="center" alignItems="center" >
                        <Grid item>
                            <Typography component={'span'} variant="body1" noWrap={true} >
                                <Box>7 - Medicamentos</Box>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={4}>
                        <Box width={1} borderLeft={1}>
                            <Grid container item direction="column" justify="center" alignItems="center" >
                                <Grid item xs>
                                    <Typography component={'span'} variant="body1" noWrap={true} align="center">
                                        <Box>8 - Quantidade solicitada</Box>
                                    </Typography>
                                </Grid>
                                <Grid container item direction="row" justify="center" alignItems="center">
                                    <Grid item xs>
                                        <Box borderTop={1} borderRight={1}>
                                            <Typography component={'span'} variant="body1" noWrap={true} align="center"><Box>1º mês</Box></Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs>
                                        <Box borderTop={1} borderRight={1}>
                                            <Typography component={'span'} variant="body1" noWrap={true} align="center"><Box>2º mês</Box></Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs>
                                        <Box borderTop={1} borderRight={1}>
                                            <Typography component={'span'} variant="body1" noWrap={true} align="center"><Box>3º mês</Box></Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs>
                                        <Box borderTop={1} borderRight={1}>
                                            <Typography component={'span'} variant="body1" noWrap={true} align="center"><Box>4º mês</Box></Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs>
                                        <Box borderTop={1} borderRight={1}>
                                            <Typography component={'span'} variant="body1" noWrap={true} align="center"><Box>5º mês</Box></Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs>
                                        <Box borderTop={1}>
                                            <Typography component={'span'} variant="body1" noWrap={true} align="center"><Box>6º mês</Box></Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha51LME