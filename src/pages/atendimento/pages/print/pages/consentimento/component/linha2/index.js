import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ClienteContext } from '../../../../../../../../App'

const Linha2Termo = () => {

    const { clienteContext } = useContext(ClienteContext)

    return (
        <>
            <Grid container item xs>
                <Box mt={1} width={1} border={1} borderColor="black">
                    <Grid container direction="column" justify="flex-end" alignItems="stretch">
                        <Grid item>
                            <Box mt={-1} ml={2} display="flex" >
                                <Typography component={'span'} variant="caption" noWrap={true} >
                                    <Box bgcolor="white" px={1}>1 - Nome completo do paciente</Box>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box ml={1}>
                                <Typography component={'span'} variant={'h5'} align={'center'}>
                                    {clienteContext.nome ? <Box fontWeight="fontWeightBold">{clienteContext.nome}</Box> : <Box style={{ color: "white" }}>-</Box>}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </>
    )
}

export default Linha2Termo