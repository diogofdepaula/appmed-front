import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Linha5ExtraLME = (props) => {

    return <>
        <Box>
            <Grid container>
                <Grid container item xs={8} direction="row" justifyContent="center"  >
                    <Grid item xs>
                        <Box display="flex">
                            <Box borderTop={1} borderRight={1} height={1} width={"5%"}>
                                <Typography component={'span'} variant="h6" noWrap={true} align="center">
                                    <Box>{props.numero}</Box>
                                </Typography>
                            </Box>
                            <Box borderTop={1} flexGrow={1}>
                                <Typography component={'span'} variant="h6" noWrap={true} >
                                    <Box style={{ color: "white" }}>-</Box>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container item xs={4}>
                    <Box width={1} borderLeft={1}>
                        <Grid container item direction="row" justifyContent="center" alignItems="stretch" style={{ height: "100%" }}>
                            <Grid item xs>
                                <Box borderTop={1} borderRight={1} height={1}>
                                    {/* <Typography component={'span'} variant="h6" noWrap={true} align="center"><Box></Box></Typography> */}
                                </Box>
                            </Grid>
                            <Grid item xs>
                                <Box borderTop={1} borderRight={1} height={1}>
                                    {/* <Typography component={'span'} variant="h6" noWrap={true} align="center"><Box></Box></Typography> */}
                                </Box>
                            </Grid>
                            <Grid item xs>
                                <Box borderTop={1} borderRight={1} height={1}>
                                    {/* <Typography component={'span'} variant="h6" noWrap={true} align="center"><Box></Box></Typography> */}
                                </Box>
                            </Grid>
                            <Grid item xs>
                                <Box borderTop={1} borderRight={1} height={1}>
                                    {/* <Typography component={'span'} variant="h6" noWrap={true} align="center"><Box></Box></Typography> */}
                                </Box>
                            </Grid>
                            <Grid item xs>
                                <Box borderTop={1} borderRight={1} height={1}>
                                    {/* <Typography component={'span'} variant="h6" noWrap={true} align="center"><Box></Box></Typography> */}
                                </Box>
                            </Grid>
                            <Grid item xs>
                                <Box borderTop={1} borderRight={0} height={1}>
                                    {/* <Typography component={'span'} variant="h6" noWrap={true} align="center"><Box></Box></Typography> */}
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </>;
}

export default Linha5ExtraLME