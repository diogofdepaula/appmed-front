import { Box, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { LMEPrintContext } from '../..'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const Linha101Relatorio = () => {

    const lme = useContext(LMEPrintContext)

    const ppddata = lme.relatorio.ppddata ? format(parseISO(lme.relatorio.ppddata), "dd'/'MM'/'yyyy", { locale: ptBR }) : ''

    return <>
        <Box>
            <Grid container item direction="row" justifyContent="center" alignItems="stretch">
                <Grid item xs={2}>
                    <Box borderTop={1} borderRight={1}>
                        <Typography component={'span'} variant="body1" noWrap={true} align="center">
                            <Box>PPD</Box>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box borderTop={1} borderRight={1}>
                        <Typography component={'span'} variant="body1" noWrap={true} align="center">
                            {lme.relatorio.ppddata ? <Box ml={1}>{ppddata}</Box> : <Box style={{ color: "white" }}>-</Box> }
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Box borderTop={1} >
                        <Typography component={'span'} variant="body1" noWrap={false}>
                            <Box ml={1} display="flex" alignItems="center">
                                {lme.relatorio.ppdresultado === "a" ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankIcon />} Até 5 mm
                                {lme.relatorio.ppdresultado === "b" ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankIcon />} Acima de 5 mm
                                {lme.relatorio.ppdresultado === "c" ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankIcon />} Não reator
                            </Box>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </>;
}

export default Linha101Relatorio