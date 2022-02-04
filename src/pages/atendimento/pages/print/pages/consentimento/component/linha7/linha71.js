import { Box, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { ClienteContext } from '../../../../../../../../App';

const Linha71Termo = () => {

    const { clienteContext } = useContext(ClienteContext)

    return <>
       <Grid container item spacing={1}>
            <Grid container item xs>
                <Box mt={1} width={1} border={1} borderColor="black">
                    <Grid container direction="column" justifyContent="flex-end" alignItems="stretch">
                        <Grid item>
                            <Box mt={-1} ml={2} display="flex" >
                                <Typography component={'span'} variant="caption" noWrap={true} >
                                    <Box bgcolor="white" px={1}>5.3 - Nome do paciente</Box>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box ml={1}>
                                <Typography component={'span'} variant={'h5'} align={'left'}>
                                {clienteContext.nome ? <Box >{clienteContext.nome}</Box> : <Box style={{ color: "white" }}>-</Box>}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid container item xs={5}>
                <Box mt={1} width={1} border={1} borderColor="black">
                    <Grid container direction="column" justifyContent="flex-end" alignItems="stretch">
                        <Grid item>
                            <Box mt={-1} ml={2} display="flex" >
                                <Typography component={'span'} variant="caption" noWrap={true} >
                                    <Box bgcolor="white" px={1}>5.4 - Cartão Nacional de Saúde</Box>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box ml={1}>
                                <Typography component={'span'} variant={'h5'} align={'left'}>
                                {clienteContext.cns ? <Box >{clienteContext.cns}</Box> : <Box style={{ color: "white" }}>-</Box>}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    </>;
}

export default Linha71Termo