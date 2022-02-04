import { Box, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { format } from 'date-fns';
import { ptBR } from "date-fns/locale";
import { ImpressaoContext } from '../../../../../..';

const Linha8Termo = () => {

    const { impressao } = useContext(ImpressaoContext)

    const date = format(impressao.database, "dd '/' MM '/' yyyy", { locale: ptBR })

    return <>
        <Grid container item >
            <Grid container item xs={8}>
                <Grid container item direction="column" justifyContent="space-between" alignItems="stretch" spacing={1}>
                    <Grid item>
                        <Box mt={2} width={1} border={1} borderColor="black" display="block">
                            <Grid container direction="column" justifyContent="flex-end" alignItems="stretch">
                                <Grid item>
                                    <Box mt={-1} ml={2} display="flex">
                                        <Typography component={'span'} variant="caption" noWrap={true} >
                                            <Box bgcolor="white" px={1}>18 - Nome do médico solicitante</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid>
                                    <Box ml={2}>
                                        <Typography component={'span'} variant={'h6'} align={'left'}>
                                            <Box>Dr. Diogo F. de Paula</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid container item direction="row" alignItems="stretch" spacing={1}>
                        <Grid item xs={7}>
                            <Box width={1} border={1} borderColor="black" display="block">
                                <Grid container direction="column" justifyContent="flex-end" alignItems="stretch">
                                    <Grid item>
                                        <Box mt={-1} ml={2} display="flex">
                                            <Typography component={'span'} variant="caption" noWrap={true} >
                                                <Box bgcolor="white" px={1}>20 - Conselho Regional de Medicina</Box>
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid>
                                        <Box ml={2}>
                                            <Typography component={'span'} variant={'h6'} align={'left'}>
                                                {/* // se tiver que deixar em branco então deixa "-" de cor branca */}
                                                <Box>23.838</Box>
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box height={1} width={1} border={1} borderColor="black" display="block">
                                <Grid container direction="column" justifyContent="flex-end" alignItems="stretch">
                                    <Grid item>
                                        <Box mt={-1} display="flex" justifyContent="center">
                                            <Typography component={'span'} variant="caption" noWrap={true} >
                                                <Box bgcolor="white" px={1}>21 - UF</Box>
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid>
                                        <Box>
                                            <Typography component={'span'} variant={'h6'} align={'center'}>
                                                <Box>PR</Box>
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box height={1} width={1} border={1} borderColor="black" display="block">
                                <Grid container direction="column" justifyContent="flex-end" alignItems="stretch">
                                    <Grid item>
                                        <Box mt={-1} display="flex" justifyContent="center">
                                            <Typography component={'span'} variant="caption" noWrap={true} >
                                                <Box bgcolor="white" px={1}>22 - Data da solicitação</Box>
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid>
                                        <Box>
                                            <Typography component={'span'} variant={'h6'} align={'center'}>
                                                {date ? <Box>{date}</Box> : <Box style={{ color: "white" }}>-</Box>}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item xs={4} alignItems="stretch">
                <Grid container item xs>
                    <Box mt={2} ml={1} width={1} border={1} borderColor="black">
                        <Box mt={-1} display="flex" justifyContent="center">
                            <Typography component={'span'} variant="caption" noWrap={true} >
                                <Box bgcolor="white" px={1}>19 - Assinatura e carimbo do médico</Box>
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    </>;
}

export default Linha8Termo