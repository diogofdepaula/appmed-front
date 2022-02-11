import { Box, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { LMEPrintContext } from '../..'

const Linha5Relatorio = () => {

    const lme = useContext(LMEPrintContext)

    return <>
        <Box mt={2}>
            <Grid container spacing={1}>
                <Grid container item xs={2}>
                    <Box width={1} border={1} borderColor="black">
                        <Grid container direction="column" justifyContent="flex-end" alignItems="stretch">
                            <Grid item>
                                <Box mt={-1} ml={2} display="flex" >
                                    <Typography component={'span'} variant="caption" noWrap={true} >
                                        <Box bgcolor="white" px={1}>7 - CID10</Box>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box ml={1}>
                                    <Typography component={'span'} variant={'h6'} align={'center'}>
                                        {lme.cid10 ? <Box>{lme.cid10}</Box> : <Box style={{ color: "white" }}>-</Box>}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid container item xs={10}>
                    <Box width={1} border={1} borderColor="black">
                        <Grid container direction="column" justifyContent="flex-end" alignItems="stretch">
                            <Grid item>
                                <Box mt={-1} ml={2} display="flex">
                                    <Typography component={'span'} variant="caption" noWrap={true} >
                                        <Box bgcolor="white" px={1}>8 - Diagnóstico</Box>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box ml={1}>
                                    <Typography component={'span'} variant={'h6'} align={'left'}>
                                        <Box>{lme.diagnostico}</Box>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </>;
}

export default Linha5Relatorio