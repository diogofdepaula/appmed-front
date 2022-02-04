import { Box, Grid, Typography } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import React from 'react';

const Linha9LME = () => {

    return <>
        <Box mt={2} >
            <Grid container spacing={1}>
                <Grid item xs>
                    <Box width={1} border={1} borderColor="black" display="block" >
                        <Box mt={-1} ml={2} display="flex">
                            <Typography component={'span'} variant="caption" noWrap={true} >
                                <Box bgcolor="white" px={1}>13 - Atestado de capacidade</Box>
                            </Typography>
                        </Box>
                        <Box px={1}>
                            <Typography component={'span'} variant={'body1'} align={'center'} >
                                <Box>A solicitação do medicamento deverá ser realizada pelo paciente. Entretanto, fica dispensada a obrigatoriedade da presença física do paciente considerado incapaz de acordo com os artigos 3º e 4º do Código Civil. O paciente é considerado incapaz?</Box>
                            </Typography>
                        </Box>
                        <Box>
                            <Grid container direction="row" justifyContent="space-around" alignItems="center">
                                <Grid container item xs direction="row" justifyContent="flex-start" alignItems="flex-start">
                                    <Grid item xs={3}>
                                        <Box ml={1} display="flex">
                                            <CheckBoxOutlineBlankIcon />
                                            <Typography component={'span'} variant={'body1'} align={'left'} >
                                                <Box>Não</Box>
                                            </Typography>
                                            <CheckBoxOutlineBlankIcon />
                                            <Typography component={'span'} variant={'body1'} align={'left'} >
                                                <Box>Sim</Box>
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Typography component={'span'} variant={'body1'} align={'justify'} >
                                            <Box>Indicar o nome do responsável pelo paciente, o qual poderá realizar a solicitação do medicamento</Box>
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container item xs direction="column" justifyContent="center" alignItems="center">
                                    <Grid item>
                                        <Typography component={'span'} variant={'body1'} align={'center'} >
                                            <Box>__________________________________________</Box>
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography component={'span'} variant={'body1'} align={'center'} >
                                            <Box>Nome do responsável</Box>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </>;
}

export default Linha9LME