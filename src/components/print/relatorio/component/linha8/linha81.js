import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Linha81Relatorio = () => {

    return <>
        <Box>
            <Grid container item direction="row" justifyContent="center" alignItems="stretch">
                <Grid item xs={3}>
                    <Box borderRight={1} height={1}>
                        <Typography component={'span'} variant="body1" noWrap={true}>
                            <Box display="flex" alignItems="center" justifyContent="center" height={1}>
                                <Box>Fármacos</Box>
                            </Box>
                        </Typography>
                    </Box>
                </Grid>
                <Grid container item xs={4}>
                    <Grid item xs={4}>
                        <Box borderRight={1} height={1}>
                            <Typography component={'span'} variant="body1" noWrap={true}>
                                <Box display="flex" alignItems="center" justifyContent="center" height={1}>
                                    <Box>Dose máxima</Box>
                                </Box>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box borderRight={1} height={1}>
                            <Typography component={'span'} variant="body1" noWrap={true}>
                                <Box display="flex" alignItems="center" justifyContent="center" height={1}>
                                    <Box>Início</Box>
                                </Box>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box borderRight={1} height={1}>
                            <Typography component={'span'} variant="body1" noWrap={true}>
                                <Box display="flex" alignItems="center" justifyContent="center" height={1}>
                                    <Box>Fim</Box>
                                </Box>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={5}>
                    <Box height={1}>
                        <Typography component={'span'} variant="body1" noWrap={false} >
                            <Box display="flex" alignItems="center" justifyContent="center" height={1}>
                                <Box>Motivo da suspensão</Box>
                            </Box>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </>;
}

export default Linha81Relatorio