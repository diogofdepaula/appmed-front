import { Box, CardMedia, Grid } from '@mui/material'
import React from 'react'
import LogoCEMEPAR from '../../../../../utils/imagens/cemeparlogo.png'
import LogoMinisterio from '../../../../../utils/imagens/ministeriologo.png'
import LogoSESA from '../../../../../utils/imagens/sesalogo.png'

const Linha11Relatorio = () => {

    return <>
        <Box mt={1}>
            <Grid container direction="row" justifyContent="center" alignItems="stretch">
                <Grid item xs>
                    <Box
                        height={"72px"} // se mudar aqui tem que mudar o width das outras figuras também.
                        width={1} display="flex" justifyContent="center">
                        <CardMedia
                            style={{ width: "107px", height: "100%" }}  // fazer regra de 3 com 72px de height
                            image={LogoCEMEPAR}
                        />
                    </Box>
                </Grid>
                <Grid item xs>
                    <Box height={"72px"} width={1} display="flex" justifyContent="center">
                        <CardMedia
                            style={{ width: "160px", height: "100%" }}
                            image={LogoMinisterio}
                        />
                    </Box>
                </Grid>
                <Grid item xs>
                    <Box height={"72px"} width={1} display="flex" justifyContent="center">
                        <CardMedia
                            style={{ width: "141px", height: "100%" }}  // width (em px) = heightdaimagemnatela/heightoriginal x widthoriginal
                            image={LogoSESA}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </>;
}

export default Linha11Relatorio