import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Linha8xRelatorio = (props) => {

    return <>
        <Box>
            <Grid container item direction="row" justifyContent="center" alignItems="stretch">
                <Grid item xs={3}>
                    <Box borderTop={1} borderRight={1} height={1}>
                        <Typography component={'span'} variant="body1" noWrap={true}>
                            <Box display="flex" alignItems="center" height={1}>
                                <Box ml={1}>{props.prescricao[0][1]}</Box>
                            </Box>
                        </Typography>
                    </Box>
                </Grid>
                <Grid container item xs={4}>
                    <Grid item xs={4}>
                        <Box borderTop={1} borderRight={1} height={1}>
                            <Typography component={'span'} variant="body1" noWrap={true}>
                                <Box display="flex" alignItems="center" justifyContent="center" height={1}>
                                    <Box>{props.prescricao[1][1]}</Box>
                                </Box>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box borderTop={1} borderRight={1} height={1}>
                            <Typography component={'span'} variant="body1" noWrap={true}>
                                <Box display="flex" alignItems="center" justifyContent="center" height={1}>
                                    <Box>{props.prescricao[2][1]}</Box>
                                </Box>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box borderTop={1} borderRight={1} height={1}>
                            <Typography component={'span'} variant="body1" noWrap={true}>
                                <Box display="flex" alignItems="center" justifyContent="center" height={1}>
                                    <Box>{props.prescricao[3][1]}</Box>
                                </Box>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={5}>
                    <Box borderTop={1} height={1}>
                        <Typography component={'span'} variant="body1" noWrap={false} >
                            <Box display="flex" alignItems="center" height={1}>
                                <Box ml={1}>{props.prescricao[4][1]}</Box>
                            </Box>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </>;
}

export default Linha8xRelatorio