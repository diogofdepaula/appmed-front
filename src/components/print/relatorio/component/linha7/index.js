import { Box, Grid, Typography } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import React, { useContext } from 'react';
import { LMEPrintContext } from '../..';
import { CriteriosLme } from '../../../../../utils/criteriosdoencas';

const Linha7Relatorio = () => {

    const lme = useContext(LMEPrintContext)

    const OutrosCriterios = () => {

        const list = CriteriosLme(lme)
        return (
            <>
                {list[0].map((w, i) =>
                    <Grid key={i}>
                        <Box ml={2} display="flex">
                            {w[2] ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankIcon />}
                            <Typography component={'span'} variant={'body1'} align={'left'} >
                                <Box ml={1}>{w[1]}</Box>
                            </Typography>
                        </Box>
                    </Grid>
                )}
            </>
        )

    }

    const ArtriteReumatoide2010 = () => {

        const criterios = CriteriosLme(lme)[1].map(p => {
            return p[1].filter(x => p[0][0] === x[1]).map(y => { return y[0] })
        }).flat()

        return (
            <>
                {criterios.map((w, i) =>
                    <Grid key={i}>
                        <Box ml={2} display="flex">
                            <CheckBoxOutlinedIcon />
                            <Typography component={'span'} variant={'body1'} align={'left'} >
                                <Box ml={1}>{w}</Box>
                            </Typography>
                        </Box>
                    </Grid>
                )
                }
            </>
        )
    }


    const Conteudo = () => {

        const crit = [lme.relatorio.ar2010a, lme.relatorio.ar2010b, lme.relatorio.ar2010c, lme.relatorio.ar2010d].filter(x => x !== null).length

        if (crit === 4) {
            return <ArtriteReumatoide2010 />
        } else {
            return <OutrosCriterios />
        }
    }

    return (
        <>
            <Grid container item >
                <Box mt={2} width={1} border={1} borderColor="black">
                    <Grid container direction="column" justifyContent="flex-end" alignItems="stretch">
                        <Grid item>
                            <Box mt={-1} ml={2} display="flex">
                                <Typography component={'span'} variant="caption" noWrap={true} >
                                    <Box bgcolor="white" px={1}>13 - Critério de inclusão </Box>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box mt={1} mb={1}>
                                <Conteudo />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </>
    )
}

export default Linha7Relatorio