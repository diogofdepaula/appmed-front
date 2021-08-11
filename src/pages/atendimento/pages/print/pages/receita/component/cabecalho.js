import { Box, CardMedia, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ImpressaoContext } from '../../../../..'
import LogoCISCO from '../../../component/imagens/ciscologo.png'
import LogoCISGAP from '../../../component/imagens/cisgaplogo.png'
import LogoSUS from '../../../component/imagens/logosus.png'
import Branco1px from '../../../component/imagens/branco1px.png'

const Titulo = ({ tipo }) => {

    let titulo = <div />

    if (tipo === 'lme') {
        titulo =
            <Box display={"block"} justifyContent="center">
                <Typography variant={'h3'} align={'center'}>
                    <Box fontWeight="fontWeightBold" fontSize={38}>Receita Médica</Box>
                </Typography>
                <Typography variant={'h6'} align={'center'} noWrap>
                    <Box fontSize={18}>Componente Especializado da Assistência Farmacêutica</Box>
                </Typography>
            </Box >
    } else {
        titulo =
            <Typography variant={'h3'} >
                <Box fontWeight="fontWeightBold" >Receita Médica</Box>
            </Typography>
    }

    return titulo
}

const Cabecalho = ({ tipo }) => {

    const { impressao } = useContext(ImpressaoContext)

    let direita = "70%"

    return (
        <>
            <Box display="flex" justifyContent="center" border={3} borderColor={"black"} borderBottom={0}>
                <Box my={1} style={{ width: '100%' }}>
                    <Grid container>
                        <Grid container item xs direction="column" justifyContent="center" alignItems="center">
                            <CardMedia
                                style={{ width: "56%", height: "100%" }}  
                                image={impressao.local !== 'consultorio' ? LogoSUS : Branco1px}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Titulo tipo={tipo} />
                        </Grid>
                        <Grid container item xs direction="column" justifyContent="center" alignItems="center">
                            {impressao.local === "" ?
                                <Box
                                    style={{ width: direita, height: "100%" }} 
                                />
                                :
                                <CardMedia
                                    style={{ width: direita, height: "100%" }}  
                                    image={impressao.local === 'consultorio' ? Branco1px : (impressao.local === "cisgap" ? LogoCISGAP : LogoCISCO)}
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