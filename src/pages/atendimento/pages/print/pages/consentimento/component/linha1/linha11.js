import { Box, CardMedia, Grid } from '@material-ui/core'
import React from 'react'
import LogoSUS from '../../../../component/imagens/logosus.png'
import LogoMinisterio from '../../../../component/imagens/ministeriologo.png'
import LogoSESA from '../../../../component/imagens/sesalogo.png'

const Linha11Termo = () => {

    return (
        <>
          <Box mt={1}>
                <Grid container direction="row" justify="center" alignItems="stretch">
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
        </>
    )
}

export default Linha11Termo