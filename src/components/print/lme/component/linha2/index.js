import { Box, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { LoginContext } from '../../../../../App'

const Linha2LME = () => {

    const { local } = useContext(LoginContext)

    const estabelecimento = {
        cnes: local === "cisgap" ? "3634949" : local === "cisco" ? "2741687" : "7275714",
        nome: local === "cisgap" ? "Consórcio Intermunicipal de Saúde - CISGAP" : local === "cisco" ? "Consórcio Intermunicipal de Saúde Centro Oeste - CISCO" : "CLINICA MEDICA DIEGUEZ DE PAULA",
    }

    return (
        <>
            <Box mt={2}>
                <Grid container spacing={1}>
                    <Grid container item xs={2} >
                        <Box width={1} border={1} borderColor="black">
                            <Grid container direction="column" justifyContent="flex-end" alignItems="stretch">
                                <Grid item>
                                    <Box mt={-1} ml={2} display="flex" >
                                        <Typography component={'span'} variant="caption" noWrap={true} >
                                            <Box bgcolor="white" px={1}>1 - Número do CNES</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box ml={1}>
                                        <Typography component={'span'} variant={'h6'} align={'center'}>
                                            {estabelecimento.cnes ? <Box>{estabelecimento.cnes}</Box> : <Box style={{ color: "white" }}>-</Box>}
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid container item xs={10}>
                        <Box width={1} border={1} borderColor="black">
                            <Grid container direction="column" justifyContent="flex-end" alignItems="stretch">
                                <Grid item>
                                    <Box mt={-1} ml={2} display="flex">
                                        <Typography component={'span'} variant="caption" noWrap={true} >
                                            <Box bgcolor="white" px={1}>2 - Nome do estabelecimento de saúde solicitante</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box ml={1}>
                                        <Typography component={'span'} variant={'h6'} align={'left'}>
                                            <Box>{estabelecimento.nome}</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha2LME