import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { LMEPrintContext } from '../..'
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const Linha102Relatorio = () => {

    const lme = useContext(LMEPrintContext)

    return (
        <>
            <Box>
                <Grid container item direction="row" justify="center" alignItems="stretch">
                    <Grid item xs={2}>
                        <Box borderTop={1} borderRight={1}>
                            <Typography component={'span'} variant="body1" noWrap={true} align="center">
                                <Box>Rx de Tórax</Box>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box borderTop={1} borderRight={1}>
                            <Typography component={'span'} variant="body1" noWrap={true} align="center">
                                <Box ml={1}>{lme.relatorio.rxtoraxdata}</Box>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <Box borderTop={1}>
                            <Typography component={'span'} variant="body1" noWrap={false}>
                                <Box ml={1} display="flex" alignItems="center">
                                    {lme.relatorio.rxtoraxresultado === "a" ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankIcon />} Normal
                                        {lme.relatorio.rxtoraxresultado === "b" ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankIcon />} Alterado:
                                        <Box ml={1}>
                                        {lme.relatorio.rxtoraxalteracao}
                                    </Box>
                                </Box>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha102Relatorio