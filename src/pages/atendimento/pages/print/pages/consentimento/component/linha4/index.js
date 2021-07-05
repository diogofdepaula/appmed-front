import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ImpressaoContext } from '../../../../../..'

const Linha4Termo = () => {

    const { impressao } = useContext(ImpressaoContext)

    return (
        <>
            <Grid container>
                <Grid container item>
                    <Box mt={1} width={1} border={1} borderColor="black">
                        <Grid container direction="column" justify="flex-end" alignItems="stretch">
                            <Grid item>
                                <Box mt={-1} ml={2} display="flex" >
                                    <Typography component={'span'} variant="caption" noWrap={true} >
                                        <Box bgcolor="white" px={1}>3 - Medicamento</Box>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box ml={1} display="flex" justifyContent="center">
                                    {impressao.termosSelecionados.map((t, i) =>
                                        <Typography component={'span'} variant={'h6'} align={'center'} key={i}>
                                            <Box ml={2} fontWeight="fontWeightBold">{t}</Box>
                                        </Typography>
                                    )}
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Linha4Termo