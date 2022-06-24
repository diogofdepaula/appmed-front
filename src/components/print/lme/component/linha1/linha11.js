import { Box, CardMedia, Grid } from '@mui/material'
import React from 'react'
import LogoSUS from '../../../../../utils/imagens/logosus.webp'
import LogoMinisterio from '../../../../../utils/imagens/ministeriologo.webp'
import LogoSESA from '../../../../../utils/imagens/sesalogo.webp'

const Linha11LME = () => {

    return <>
        <Box mt={1}>
            <Grid container direction="row" justifyContent="center" alignItems="stretch">
                <Grid item xs>
                    <Box
                        height={"72px"} // se mudar aqui tem que mudar o width das outras figuras também.
                        width={1} display="flex" justifyContent="center">
                        <CardMedia
                            style={{ width: "141px", height: "100%" }}  // ajustado para 72px do 'h2' arredondar para cima  //width (em px) = heightdaimagemnatela/heightoriginal x widthoriginal
                            image={LogoSUS}
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

export default Linha11LME