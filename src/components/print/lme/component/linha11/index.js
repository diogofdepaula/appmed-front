import { Box, Grid, Typography } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import React from 'react';

const Linha11LME = () => {

    return <>
        <Box mt={2} >
            <Box width={1} border={1} borderColor="black" display="block">
                <Grid container direction="column" justifyContent="flex-end" >
                    <Grid item>
                        <Box mt={-1} ml={2} display="flex">
                            <Typography component={'span'} variant="caption" noWrap={true} >
                                <Box bgcolor="white" px={1}>18 - Campos abaixo preenchidos por</Box>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid container item >
                        <Grid container item xs direction="row" justifyContent="flex-start" alignItems="flex-start">
                            <Grid item xs>
                                <Box ml={1} display="flex">
                                    <CheckBoxOutlinedIcon />
                                    <Typography component={'span'} variant={'body1'} align={'left'} >
                                        <Box>Paciente</Box>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs>
                                <Box ml={1} display="flex">
                                    <CheckBoxOutlineBlankIcon />
                                    <Typography component={'span'} variant={'body1'} align={'left'} noWrap={true}>
                                        <Box>Mãe do paciente</Box>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs>
                                <Box ml={1} display="flex">
                                    <CheckBoxOutlineBlankIcon />
                                    <Typography component={'span'} variant={'body1'} align={'left'} >
                                        <Box>Responsável</Box>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs>
                                <Box ml={1} display="flex">
                                    <CheckBoxOutlinedIcon />
                                    <Typography component={'span'} variant={'body1'} align={'left'} >
                                        <Box>Médico</Box>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <Box ml={1} display="flex">
                                <CheckBoxOutlineBlankIcon />
                                <Typography component={'span'} variant={'body1'} align={'left'} >
                                    <Box>Outro:</Box>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box ml={1} display="flex">
                                <Typography component={'span'} variant={'body1'} align={'left'} >
                                    <Box>e CPF:</Box>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </>;
}

export default Linha11LME