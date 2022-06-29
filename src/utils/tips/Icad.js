import { Box, IconButton, Paper, TextField } from '@mui/material';
import CallSplitIcon from '@mui/icons-material/CallSplit';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import React, { useContext, useEffect, useState } from 'react';
import { AtendimentoContext } from '../../pages/atendimento';

const ICAD = () => {

    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    const [index, setIndex] = useState({
        dor: '',
        edema: '',
        vhs: '',
        pcr: '',
        eva: '',
        pga: '',
        ega: '',
        bp: '', // Back Pain (BASDAI Question 2) [0-10]
        pp: '', // Peripheral Pain/Swelling (BASDAI Question 3) [0-10]
        ms: '', // Duration Morning Stiffness (BASDAI Question 6) [0-10]
    })

    const calcdas28vhs = (dor, edema, vhs, eva) => {
        return ((0.56 * Math.sqrt(dor)) + (0.28 * Math.sqrt(edema)) + (0.70 * Math.log(vhs)) + (0.014 * eva))
    }
    const [das28vhs, setDas28vhs] = useState(0)

    const calcdas28pcr = (dor, edema, pcr, eva) => {
        return ((0.56 * Math.sqrt(dor)) + (0.28 * Math.sqrt(edema)) + (0.36 * Math.log(pcr + 1)) + (0.014 * eva))
    }
    const [das28pcr, setDas28pcr] = useState(0)

    const calccdai = (dor, edema, pga, ega) => {
        return (parseInt(dor) + parseInt(edema) + parseInt(pga) + parseInt(ega))
    }
    const [cdai, setCdai] = useState(0)

    const calcsdai = (dor, edema, pcr, pga, ega) => {
        return (parseInt(dor) + parseInt(edema) + parseInt(pcr) + parseInt(pga) + parseInt(ega))
    }
    const [sdai, setSdai] = useState(0)

    const calcasdascrp = (bp, pp, ms, eva, pcr) => {
        return ((0.12 * parseInt(bp)) + (0.06 * parseInt(ms)) + (0.11 * parseInt((eva / 10))) + (0.07 * parseInt(pp) + (0.58 * Math.log((pcr + 1)))))
    }
    const [asdascrp, setAsdascrp] = useState(0)

    const calcasdasesr = (bp, pp, ms, eva, vhs) => {
        return ((0.08 * parseInt(bp)) + (0.07 * parseInt(ms)) + (0.11 * parseInt((eva / 10))) + (0.09 * parseInt(pp) + (0.29 * Math.sqrt(vhs))))
    }
    const [asdasesr, setAsdasesr] = useState(0)

    const handleChange = event => {
        setIndex({ ...index, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        setDas28vhs(calcdas28vhs(index.dor, index.edema, index.vhs, index.eva))
        setDas28pcr(calcdas28pcr(index.dor, index.edema, index.pcr, index.eva))
        setCdai(calccdai(index.dor, index.edema, index.pga, index.ega))
        setSdai(calcsdai(index.dor, index.edema, index.pcr, index.pga, index.ega))
        setAsdascrp(calcasdascrp(index.bp, index.pp, index.ms, index.eva, index.pcr))
        setAsdasesr(calcasdasesr(index.bp, index.pp, index.ms, index.eva, index.pcr))
    }, [index])

    const handleClickAnamnese = () => {

        let texto1 = das28vhs > 0 ? "DAS28-VHS de " + das28vhs.toFixed(2) + " (" + index.dor + " + " + index.edema + " + " + index.vhs + " + " + index.eva + "); " : ''
        let texto2 = das28pcr > 0 ? "DAS28-PCR de " + das28pcr.toFixed(2) + " (" + index.dor + " + " + index.edema + " + " + index.pcr + " + " + index.eva + "); " : ''
        let texto3 = cdai > 0 ? "CDAI de " + cdai + " (" + index.dor + " + " + index.edema + " + " + index.pga + " + " + index.ega + "); " : ''
        let texto4 = sdai > 0 ? "SDAI de " + sdai + " (" + index.dor + " + " + index.edema + " + " + index.pcr + " + " + index.pga + " + " + index.ega + "); " : ''
        let texto5 = index.eva > 0 ? "EVA de " + index.eva + "; " : ''
        let texto6 = asdascrp > 0 ? "ASDAS-PCR de " + asdascrp.toFixed(1) + " (" + index.bp + " + " + index.pp + " + " + index.ms + " + " + parseInt((index.eva / 10)) + " + " + index.pcr + "); " : ''
        let texto7 = asdasesr > 0 ? "ASDAS-VHS de " + asdasesr.toFixed(1) + " (" + index.bp + " + " + index.pp + " + " + index.ms + " + " + parseInt((index.eva / 10)) + " + " + index.vhs + "). " : '.'
        let textofinal = texto1 + texto2 + texto3 + texto4 + texto5 + texto6 + texto7

        setLmeEdit({
            ...lmeEdit,
            anamnese: lmeEdit.anamnese.concat('\n').concat(textofinal),
            relatorio: {
                ...lmeEdit.relatorio,
                das28: das28vhs.toFixed(1),
                cdai: cdai,
                sdai: sdai,
                // basdai: '',
                asdascrp: asdascrp.toFixed(1),
                asdasesr: asdasesr.toFixed(1),
                // sledai: '',
                // essdai: '',
                // mda: '',
                vhs: index.vhs !== "" ? index.vhs : lmeEdit.relatorio.vhs,
                pcr: index.pcr !== "" ? index.pcr : lmeEdit.relatorio.pcr,
                eva: index.eva,
            }
        })
    }

    const handleClickICAD = () => {
        setLmeEdit({
            ...lmeEdit,
            relatorio: {
                ...lmeEdit.relatorio,
                das28: das28vhs.toFixed(1),
                cdai: cdai,
                sdai: sdai,
                // basdai: '',
                asdascrp: asdascrp.toFixed(1),
                asdasesr: asdasesr.toFixed(1),
                vhs: index.vhs !== "" ? index.vhs : lmeEdit.relatorio.vhs,
                pcr: index.pcr !== "" ? index.pcr : lmeEdit.relatorio.pcr,
                eva: index.eva,
            }
        })
    }

    return <>
        <Paper>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 1,
                }}
            >
                <Box>
                    <IconButton
                        draggable
                        onDragEnd={() => handleClickAnamnese()}
                        onClick={() => handleClickAnamnese()}
                        size="large">
                        <LocalCafeIcon />
                    </IconButton>
                    <IconButton
                        draggable
                        onDragEnd={() => handleClickICAD()}
                        onClick={() => handleClickICAD()}
                        size="large">
                        <CallSplitIcon />
                    </IconButton>
                </Box>
                <Box>
                    <TextField
                        variant='outlined'
                        size= 'small'
                        name="edema"
                        label="Edema"
                        value={index.edema}
                        helperText="0 a 28"
                        onChange={handleChange}
                    />
                    <TextField
                        variant='outlined'
                        size= 'small'
                        name="dor"
                        label="Dor"
                        value={index.dor}
                        helperText="0 a 28"
                        onChange={handleChange}
                    />
                </Box>
                <Box>
                    <TextField
                        variant='outlined'
                        size= 'small'
                        name="vhs"
                        label="VHS"
                        value={index.vhs}
                        helperText="1 a 300"
                        onChange={handleChange}
                    />
                    <TextField
                        variant='outlined'
                        size= 'small'
                        name="pcr"
                        label="PCR"
                        helperText="0 a 150"
                        value={index.pcr}
                        onChange={handleChange}
                    />
                </Box>
                <Box>
                    <TextField
                        variant='outlined'
                        size= 'small'
                        name="eva"
                        label="EVA"
                        helperText="0 a 100"
                        value={index.eva}
                        onChange={handleChange}
                    />
                    <TextField
                        variant='outlined'
                        size= 'small'
                        name="pga"
                        label="PGA"
                        helperText="0 a 10"
                        value={index.pga}
                        onChange={handleChange}
                    />
                    <TextField
                        variant='outlined'
                        size= 'small'
                        name="ega"
                        label="EGA"
                        helperText="0 a 10"
                        value={index.ega}
                        onChange={handleChange}
                    />
                </Box>
                <Box>
                    <TextField
                        variant='outlined'
                        size= 'small'
                        name="bp"
                        label="Back Pain"
                        helperText="0 a 10"
                        value={index.bp}
                        onChange={handleChange}
                    />
                    <TextField
                        variant='outlined'
                        size= 'small'
                        name="pp"
                        label="Peripheral Pain"
                        helperText="0 a 10"
                        value={index.pp}
                        onChange={handleChange}
                    />
                    <TextField
                        variant='outlined'
                        size= 'small'
                        name="ms"
                        label="Morning Stiffness"
                        helperText="0 a 10"
                        value={index.ms}
                        onChange={handleChange}
                    />
                </Box>
            </Box>
        </Paper>
    </>
}

export default ICAD
