import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ClienteContext } from '../../../../../../../../App'

const Linha3LME = () => {

    const { clienteContext } = useContext(ClienteContext)

    return (
        <>
            <Box mt={1}>
                <Grid container spacing={1}>
                    <Grid container item xs={10}  >
                        <Box width={1} border={1} borderColor="black">
                            <Grid container direction="column" justify="flex-end" alignItems="stretch">
                                <Grid item>
                                    <Box mt={-1} ml={2} display="flex" >
                                        <Typography component={'span'} variant="caption" noWrap={true} >
                                            <Box bgcolor="white" px={1}>3 - Nome completo do paciente</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box ml={1}>
                                        <Typography component={'span'} variant={'h5'} align={'left'}>
                                            {clienteContext.nome ? <Box fontWeight="fontWeightBold">{clienteContext.nome}</Box> : <Box style={{ color: "white" }}>-</Box>}
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid container item xs={2}>
                        <Box width={1} border={1} borderColor="black">
                            <Grid container direction="column" justify="center" alignItems="center">
                                <Grid item>
                                    <Box mt={-1} display="flex">
                                        <Typography component={'span'} variant="caption" noWrap={true} >
                                            <Box bgcolor="white" px={1}>5 - Peso</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box>
                                        <Typography component={'span'} variant={'h6'} align={'center'}>
                                            <Box>{clienteContext.peso && clienteContext.peso +  " Kg"}</Box>
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

export default Linha3LME