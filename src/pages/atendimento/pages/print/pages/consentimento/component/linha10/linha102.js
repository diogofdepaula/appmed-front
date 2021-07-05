import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';

const Linha102Termo = () => {

    return (
        <>
           <Grid container>
                <Grid container item xs>
                    <Box mt={1} width={1} border={1} borderColor="black">
                        <Grid container direction="column" justify="flex-end" alignItems="stretch">
                            <Grid item>
                                <Box mt={-1} ml={2} display="flex" >
                                    <Typography component={'span'} variant="caption" noWrap={true} >
                                        <Box bgcolor="white" px={1}>3 - Endereço</Box>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box ml={1}>
                                    <Typography component={'span'} variant={'h5'} align={'left'}>
                                        <Box style={{ color: "white" }}>-</Box>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Linha102Termo