import { Box, Grid, Typography } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import React, { useContext } from 'react';
import { LMEPrintContext } from '../..';
import Criterios from '../../../../../../component/criterios';

const Linha7Relatorio = () => {

    const lme = useContext(LMEPrintContext)

    const OutrosCriterios = () => {

        const list = Criterios(lme)
        return (
            <>
                {list.map((w, i) =>
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

        const art = [lme.relatorio.ar2010a, [
            ['1 grande articulação', 0],
            ['2 - 10 grandes articulações', 1],
            ['1 - 3 pequenas articulações', 2],
            ['4 - 10 pequenas articulações', 3],
            ['Mais que 10 articulações', 5]
        ]]

        const soro = [lme.relatorio.ar2010b, [
            ['Fator reumatoide e anticorpos antipeptídeos citrulinados cíclicos (anti-CCP) não reagentes', 0],
            ['Fator reumatoide ou anticorpos antipeptídeos citrulinados cíclicos (anti-CCP) em baixos títulos', 2],
            ['Fator reumatoide em altos títulos ou anticorpos antipeptídeos citrulinados cíclicos (anti-CCP) em altos títulos', 3]
        ]]

        const pai = [lme.relatorio.ar2010c, [
            ['VHS ou PCR normais', 0],
            ['VHS ou PCR alterado', 1]
        ]]

        const tempo = [lme.relatorio.ar2010d, [
            ['Duração dos sintomas menor que 6 semanas', 0],
            ['Duração dos sintomas maior que 6 semanas', 1],
        ]]

        const criterios = [art, soro, pai, tempo].map(p => {
            return p[1].filter(x => p[0] === x[1]).map(y => { return y[0] })
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
                    <Grid container direction="column" justify="flex-end" alignItems="stretch">
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