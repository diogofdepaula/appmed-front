import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ClienteContext } from '../../../../../../../../App'

const Linha3Relatorio = () => {

    const { clienteContext } = useContext(ClienteContext)

    return (
        <>
            <Grid container spacing={1}>
                <Grid container item xs={2}>
                    <Box mt={1} width={1} border={1} borderColor="black">
                        <Grid container direction="column" justify="flex-end" alignItems="stretch">
                            <Grid item>
                                <Box mt={-1} ml={2} display="flex" >
                                    <Typography component={'span'} variant="caption" noWrap={true} >
                                        <Box bgcolor="white" px={1}>3 - Data de nascimento</Box>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box ml={1}>
                                    <Typography component={'span'} variant={'h6'} align={'left'}>
                                        {clienteContext.nascimento ? <Box>{clienteContext.nascimento}</Box> : <Box style={{ color: "white" }}>-</Box>}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid container item xs={2}>
                    <Box mt={1} width={1} border={1} borderColor="black">
                        <Grid container direction="column" justify="center" alignItems="center">
                            <Grid item>
                                <Box mt={-1} display="flex">
                                    <Typography component={'span'} variant="caption" noWrap={true} >
                                        <Box bgcolor="white" px={1}>4 - Peso</Box>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box>
                                    <Typography component={'span'} variant={'h6'} align={'center'}>
                                        <Box>{clienteContext.peso} Kg</Box>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid container item xs={8}>
                    <Box mt={1} width={1} border={1} borderColor="black">
                        <Grid container direction="column" justify="flex-end" alignItems="stretch">
                            <Grid item>
                                <Box mt={-1} ml={2} display="flex" >
                                    <Typography component={'span'} variant="caption" noWrap={true} >
                                        <Box bgcolor="white" px={1}>5 - CNS (cartão SUS)</Box>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box ml={1}>
                                    <Typography component={'span'} variant={'h6'} align={'left'}>
                                        {clienteContext.cns ? <Box>{clienteContext.cns}</Box> : <Box style={{ color: "white" }}>-</Box>}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Linha3Relatorio