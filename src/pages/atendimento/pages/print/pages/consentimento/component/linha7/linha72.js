import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const Linha72Termo = () => {

    return <>
        <Grid container item spacing={1}>
            <Grid item xs>
                <Box mt={1} width={1} border={1} borderColor="black">
                    <Grid container direction="column" justifyContent="flex-end" alignItems="stretch">
                        <Grid item>
                            <Box mt={-1} ml={2} display="flex" >
                                <Typography component={'span'} variant="caption" noWrap={true} >
                                    <Box bgcolor="white" px={1}>5.5 - Nome do responsável legal</Box>
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
            <Grid item xs={5}>
                <Box mt={1} width={1} border={1} borderColor="black">
                    <Grid container direction="column" justifyContent="flex-end" alignItems="stretch">
                        <Grid item>
                            <Box mt={-1} ml={2} display="flex">
                                <Typography component={'span'} variant="caption" noWrap={true} >
                                    <Box bgcolor="white" px={1}>5.6 - Documento do responsável legal</Box>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box ml={1}>
                                <Typography component={'span'} variant={'h6'} align={'left'}>
                                    <Box style={{ color: "white" }}>-</Box>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    </>;
}

export default Linha72Termo