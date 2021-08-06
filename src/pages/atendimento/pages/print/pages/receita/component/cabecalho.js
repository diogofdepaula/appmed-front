import { Box, CardMedia, Typography } from '@material-ui/core'
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
                <Typography variant={'h3'}  align={'center'}>
                    <Box fontWeight="fontWeightBold" fontSize={40}>Receita Médica</Box>
                </Typography>
                <Typography variant={'h6'}  align={'center'}>
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

    return (
        <>
            <Box display="flex" justifyContent="center" border={3} borderColor={"black"} borderBottom={0}>
                <Box my={1} display="flex" flexWrap="nowrap">
                    <CardMedia
                        style={{ width: "108px", height: "100%" }}  // width (em px) = heightdaimagemnatela/heightoriginal x widthoriginal
                        image={impressao.local !== 'consultorio' ? LogoSUS : Branco1px}
                    />
                    <Box mx={20}>
                        <Titulo tipo={tipo} />
                    </Box>
                    {impressao.local === "" ?
                        <Box
                            style={{ width: "135px", height: "100%" }}  // width (em px) = heightdaimagemnatela/heightoriginal x widthoriginal
                        />
                        :
                        <CardMedia
                            style={{ width: "135px", height: "100%" }}  // width (em px) = heightdaimagemnatela/heightoriginal x widthoriginal
                            image={impressao.local === 'consultorio' ? Branco1px : (impressao.local === "cisgap" ? LogoCISGAP : LogoCISCO) }
                        />
                    }
                </Box>
            </Box>
        </>
    )
}

export default Cabecalho