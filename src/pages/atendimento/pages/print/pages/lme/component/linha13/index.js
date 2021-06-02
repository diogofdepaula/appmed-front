import { Box, Grid, Typography } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import React, { useContext } from 'react';
import { ClienteContext } from '../../../../../../../../App';

const Linha13LME = () => {

    const { clienteContext } = useContext(ClienteContext)

    return (
        <>
            <Box mt={2}>
                <Grid container spacing={1}>
                    <Grid container item xs={8}>
                        <Grid container item direction="column" justify="space-between" alignItems="stretch" spacing={1}>
                            <Grid item>
                                <Box width={1} border={1} borderColor="black" display="block">
                                    <Grid container direction="column" justify="flex-end" alignItems="stretch">
                                        <Grid item>
                                            <Box mt={-1} ml={2} display="flex">
                                                <Typography component={'span'} variant="caption" noWrap={true} >
                                                    <Box bgcolor="white" px={1}>21 - Número do documento do paciente</Box>
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid container item>
                                            <Grid item>
                                                <Box ml={1} display="flex">
                                                    {clienteContext.cns ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankIcon />}
                                                    <Typography component={'span'} variant={'body1'} align={'left'} >
                                                        <Box>CNS</Box>
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item>
                                                <Box ml={1} display="flex">
                                                    {clienteContext.cns === '' && clienteContext.cpf ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankIcon />}
                                                    <Typography component={'span'} variant={'body1'} align={'left'} >
                                                        <Box>CPF</Box>
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item>
                                                <Typography component={'span'} variant={'body1'} align={'left'}>
                                                    <Box ml={2}>{clienteContext.cns ? clienteContext.cns : (clienteContext.cpf ?? '') }</Box>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid container item direction="row" alignItems="stretch" spacing={1}>
                                <Grid item xs>
                                    <Box width={1} border={1} borderColor="black" display="block">
                                        <Grid container direction="column" justify="flex-end" alignItems="stretch">
                                            <Grid item>
                                                <Box mt={-1} ml={2} display="flex">
                                                    <Typography component={'span'} variant="caption" noWrap={true} >
                                                        <Box bgcolor="white" px={1}>22 - Correio eletrônico do paciente</Box>
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid>
                                                <Box ml={2}>
                                                    <Typography component={'span'} variant={'body1'} align={'left'}>
                                                        <Box style={{ color: "white" }}>-</Box>
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container item xs={4} alignItems="stretch">
                        <Grid item xs>
                            <Box height={1} width={1} border={1} borderColor="black">
                                <Grid container direction="column" justify="flex-end" alignItems="stretch">
                                    <Grid item>
                                        <Box mt={-1} display="flex" justifyContent="center">
                                            <Typography component={'span'} variant="caption" noWrap={true} >
                                                <Box bgcolor="white" px={1}>23 - Assinatura do responsável pelo preenchimento</Box>
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha13LME