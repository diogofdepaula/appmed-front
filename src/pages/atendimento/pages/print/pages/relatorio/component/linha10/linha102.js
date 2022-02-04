import { Box, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { LMEPrintContext } from '../..'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const Linha102Relatorio = () => {

    const lme = useContext(LMEPrintContext)

    const rxtoraxdata = lme.relatorio.rxtoraxdata ? format(parseISO(lme.relatorio.rxtoraxdata), "dd'/'MM'/'yyyy", { locale: ptBR }) : ''

    return <>
        <Box>
            <Grid container item direction="row" justifyContent="center" alignItems="stretch">
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
                            {lme.relatorio.rxtoraxdata ? <Box ml={1}>{rxtoraxdata}</Box> : <Box style={{ color: "white" }}>-</Box>}
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
    </>;
}

export default Linha102Relatorio