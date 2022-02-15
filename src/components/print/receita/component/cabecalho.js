import { Box, CardMedia, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { LoginContext } from '../../../../App'
import Branco1px from '../../../../utils/imagens/branco1px.png'
import LogoCISCO from '../../../../utils/imagens/ciscologo.png'
import LogoCISGAP from '../../../../utils/imagens/cisgaplogo.png'
import LogoSUS from '../../../../utils/imagens/logosus.png'

const Cabecalho = ({ tipo, dupla }) => {

    const { local } = useContext(LoginContext)

    let direita = dupla ? "98%" : "70%"

    return (
        <>
            <Box display="flex" justifyContent="center" border={3} borderColor={"black"} borderBottom={0}>
                <Box my={1} style={{ width: '100%' }}>
                    <Grid container>
                        <Grid container item xs direction="column" justifyContent="center" alignItems="center">
                            <CardMedia
                                style={{ width: dupla ? "76%" : "54%", height: "100%" }}
                                image={local !== 'consultorio' ? LogoSUS : Branco1px}
                            />
                        </Grid>
                        <Grid item container xs={6} style={{ height: "72px" }} direction="row" justifyContent="center" alignItems="center"  >
                            <Grid item xs>
                                <Typography variant={'h3'} align={'center'}>
                                    <Box fontWeight="fontWeightBold" fontSize={38} >Receita Médica</Box>
                                </Typography>
                            </Grid>
                            {tipo === 'lme' &&
                                <Grid item xs>
                                    <Typography variant={'h6'} align={'center'} noWrap>
                                        <Box fontSize={dupla ? 14 : 18}>Componente Especializado da Assistência Farmacêutica</Box>
                                    </Typography>
                                </Grid>
                            }
                        </Grid>
                        <Grid container item xs direction="column" justifyContent="center" alignItems="center">
                            {local === "" ?
                                <Box
                                    style={{ width: direita, height: "100%" }}
                                />
                                :
                                <CardMedia
                                    style={{ width: direita, height: "100%" }}
                                    image={local === 'consultorio' ? Branco1px : (local === "cisgap" ? LogoCISGAP : LogoCISCO)}
                                />
                            }
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Cabecalho