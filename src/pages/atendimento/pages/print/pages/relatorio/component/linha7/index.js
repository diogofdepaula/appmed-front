import { Box, Grid, Typography } from '@material-ui/core'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { LMEPrintContext } from '../..'
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const Linha7Relatorio = () => {

    const lme = useContext(LMEPrintContext)
    const [list, setList] = useState([])

    const getList = useCallback(() => {
        const ar = [
            ['ara', 'Rigidez articular', lme.relatorio.ara],
            ['arb', 'Artrite em três ou mais áreas', lme.relatorio.arb],
            ['arc', 'Artrite em articulações das mãos', lme.relatorio.arc],
            ['ard', 'Artrite simétrica', lme.relatorio.ard],
            ['are', 'Nódulos reumatóides', lme.relatorio.are],
            ['arf', 'Fator reumatóide sérico', lme.relatorio.arf],
            ['arg', 'Alterações radiológicas', lme.relatorio.arg],
        ]

        const eap = [
            ['eapa', 'Psoríase', lme.relatorio.eapa],
            ['eapb', 'Artrite', lme.relatorio.eapb],
            ['eapc', 'Entesite', lme.relatorio.eapc],
            ['eapd', 'Dactilite', lme.relatorio.eapd],
            ['eape', 'Alterações extrarticulares', lme.relatorio.eape],
            ['eapf', 'Distrofia ungueal', lme.relatorio.eapf],
            ['eapg', 'Proliferação óssea na radiografia', lme.relatorio.eapg],
        ]

        const eaa = [
            ['eaaa', 'Dor lombar inflamatória', lme.relatorio.eaaa],
            ['eaab', 'HLA-B27 detectado', lme.relatorio.eaab],
            ['eaac', 'Sacroileíte / Lesões Axiais', lme.relatorio.eaac],
            ['eaad', 'RM típica', lme.relatorio.eaad],
            ['eaae', 'Alterações Extrarticulares', lme.relatorio.eaae],
        ]

        const arcid = ['M050', 'M051', 'M052', 'M053', 'M058', 'M060', 'M068']
        const aijcid = ['M080']
        const eaicid = ['M460', 'M461', 'M468']
        const eapcid = ['M070', 'M073']
        const eaacid = ['M45']

        if (arcid.includes(lme.cid10)) {
            setList(ar)
        } else if (aijcid.includes(lme.cid10)) {
            setList(ar)
        } else if (eaicid.includes(lme.cid10)) {
            setList(eap)
        } else if (eapcid.includes(lme.cid10)) {
            setList(eap)
        } else if (eaacid.includes(lme.cid10)) {
            setList(eaa)
        }
        // não sei como tirar toda essa lógica aqui de dentro.
        // as const quando estão lá fora e são postas na lista de dependências dá loop infinito
    }, [lme])

    useEffect(() => {
        getList()
    }, [getList])


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
            return (
                <>
                    {list && list.map((w, i) =>
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