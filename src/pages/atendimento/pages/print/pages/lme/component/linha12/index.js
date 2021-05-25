import { Box, Grid, Typography } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import React from 'react';

const Linha12LME = () => {

    return (
        <>
            <Box mt={2}>
                <Grid container spacing={1}>
                    <Grid item xs={7}>
                        <Box width={1} border={1} borderColor="black" display="block">
                            <Box mt={-1} ml={2} display="flex">
                                <Typography component={'span'} variant="caption" noWrap={true} >
                                    <Box bgcolor="white" px={1}>19 - Raça/Cor/Etnia informado pelo paciente ou responsável</Box>
                                </Typography>
                            </Box>
                            <Box>
                                <Grid container item direction="row" justify="flex-start" alignItems="flex-start" spacing={0}>
                                    <Grid item>
                                        <Box ml={1} display="flex">
                                            <CheckBoxOutlineBlankIcon />
                                            <Typography component={'span'} variant={'body1'} align={'left'} >
                                                <Box>Branca</Box>
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Box ml={1} display="flex">
                                            <CheckBoxOutlineBlankIcon />
                                            <Typography component={'span'} variant={'body1'} align={'left'} >
                                                <Box>Preta</Box>
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Box ml={1} display="flex">
                                            <CheckBoxOutlineBlankIcon />
                                            <Typography component={'span'} variant={'body1'} align={'left'} >
                                                <Box>Parda</Box>
                                            </Typography>
                                        </Box>
                                    </Grid>

                                    <Grid item>
                                        <Box ml={1} display="flex">
                                            <CheckBoxOutlineBlankIcon />
                                            <Typography component={'span'} variant={'body1'} align={'left'} >
                                                <Box>Amarela</Box>
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Box ml={1} display="flex">
                                            <CheckBoxOutlineBlankIcon />
                                            <Typography component={'span'} variant={'body1'} align={'left'} >
                                                <Box>Indigena</Box>
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Box ml={1} display="flex">
                                            <CheckBoxOutlineBlankIcon />
                                            <Typography component={'span'} variant={'body1'} align={'left'} >
                                                <Box></Box>
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Box height={1} width={1} border={1} borderColor="black" display="block" >
                            <Box mt={-1} display="flex" justifyContent="center">
                                <Typography component={'span'} variant="caption" noWrap={true} >
                                    <Box bgcolor="white" px={1}>20 - Telefone(s) para contato do paciente</Box>
                                </Typography>
                            </Box>
                            <Box ml={1}>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography component={'span'} variant={'body1'} align={'left'}>
                                            <Box>Fone:</Box>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography component={'span'} variant={'body1'} align={'left'}>
                                            <Box>Fone:</Box>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha12LME