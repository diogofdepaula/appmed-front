import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Linha1Sadt = ({ requisicao }) => {

    return <>
        <Box mt={1}>
            <Grid container direction="row" justifyContent="center" alignItems="stretch">
                <Grid item xs={3}>
                    {/* <Box
                        height={"72px"} // se mudar aqui tem que mudar o width das outras figuras também.
                        width={1} display="flex" justifyContent="center">
                        <CardMedia
                            style={{ width: "107px", height: "100%" }}  // fazer regra de 3 com 72px de height
//                                image={LogoCEMEPAR}
                        />
                    </Box> */}
                    <Typography
                        variant="h5"
                        style={{
                            fontSize: 36,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            //letterSpacing: 2,
                        }}>
                        {requisicao.convenio}
                    </Typography>

                </Grid>
                <Grid item xs={6}>
                    <Typography
                        variant="h5"
                        style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            //letterSpacing: 2,
                        }}>
                        GUIA DE SERVIÇO PROFISSIONAL / SERVIÇO AUXILIAR DE
                        DIAGNÓSTICO E TERAPIA - SP/SADT
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography
                        variant="h5"
                        style={{
                            fontSize: 12,
                            textAlign: 'left',
                            //letterSpacing: 2,
                        }}>
                        2- Nº Guia no Prestador
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    </>;
}


export default Linha1Sadt