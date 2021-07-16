import { Box, IconButton, makeStyles, Paper, TextField } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import { AtendimentoContext } from '../..';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '10ch',
        },
    },
}));

const ICAD = () => {

    const classes = useStyles();

    const { lmeEdit, setLmeEdit, step } = useContext(AtendimentoContext)

    const [index, setIndex] = useState({
        dor: '',
        edema: '',
        vhs: '',
        pcr: '',
        eva: '',
        pga: '',
        ega: '',
    })

    const calcvhs = (dor, edema, vhs, eva) => {
        return ((0.56 * Math.sqrt(dor)) + (0.28 * Math.sqrt(edema)) + (0.70 * Math.log(vhs)) + (0.014 * eva))
    }
    const [das28vhs, setDas28vhs] = useState(0)

    const calcpcr = (dor, edema, pcr, eva) => {
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

    const handleChange = event => {
        setIndex({ ...index, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        setDas28vhs(calcvhs(index.dor, index.edema, index.vhs, index.eva))
        setDas28pcr(calcpcr(index.dor, index.edema, index.pcr, index.eva))
        setCdai(calccdai(index.dor, index.edema, index.pga, index.ega))
        setSdai(calcsdai(index.dor, index.edema, index.pcr, index.pga, index.ega))
    }, [index])

    const handleClickAnamnese = () => {

        let texto1 = das28vhs > 0 ? "DAS28-VHS de " + das28vhs.toFixed(2) + " (" + index.dor + " + " + index.edema + " + " + index.vhs + " + " + index.eva + "); " : ''
        let texto2 = das28pcr > 0 ? "DAS28-PCR de " + das28pcr.toFixed(2) + " (" + index.dor + " + " + index.edema + " + " + index.pcr + " + " + index.eva + "); " : ''
        let texto3 = cdai > 0 ? "CDAI de " + cdai + " (" + index.dor + " + " + index.edema + " + " + index.pga + " + " + index.ega + "); " : ''
        let texto4 = sdai > 0 ? "SDAI de " + sdai + " (" + index.dor + " + " + index.edema + " + " + index.pcr + " + " + index.pga + " + " + index.ega + "); " : ''
        let texto5 = index.eva > 0 ? "EVA de " + index.eva + "." : ''

        let textofinal = texto1 + texto2 + texto3 + texto4 + texto5
        setLmeEdit({
            ...lmeEdit,
            anamnese: lmeEdit.anamnese.concat('\n').concat(textofinal),
            relatorio: { ...lmeEdit.relatorio, 
                das28: das28vhs.toFixed(1),
                cdai: cdai,
                sdai: sdai,
                basdai: '',
                asdas: '',
                sledai: '',
                essdai: '',
                mda: '',
                eva: index.eva,
            }
        })
    }

    const handleClickICAD = () => {

        setLmeEdit({
            ...lmeEdit,
            relatorio: { ...lmeEdit.relatorio, 
                das28: das28vhs.toFixed(1),
                cdai: cdai,
                sdai: sdai,
                basdai: '',
                asdas: '',
                sledai: '',
                essdai: '',
                mda: '',
                eva: index.eva,
            }
        })
    }

    return (
        <Paper>
            <Box p={2} className={classes.root} display='flex' >
                <TextField
                    variant='outlined'
                    name="edema"
                    label="Edema"
                    value={index.edema}
                    helperText="0 a 28"
                    onChange={handleChange}
                />
                <TextField
                    variant='outlined'
                    name="dor"
                    label="Dor"
                    value={index.dor}
                    helperText="0 a 28"
                    onChange={handleChange}
                />
                <TextField
                    variant='outlined'
                    name="vhs"
                    label="VHS"
                    value={index.vhs}
                    helperText="1 a 300"
                    onChange={handleChange}
                />
                <TextField
                    variant='outlined'
                    name="pcr"
                    label="PCR"
                    helperText="0 a 150"
                    value={index.pcr}
                    onChange={handleChange}
                />
                <TextField
                    variant='outlined'
                    name="eva"
                    label="EVA"
                    helperText="0 a 100"
                    value={index.eva}
                    onChange={handleChange}
                />
                <TextField
                    variant='outlined'
                    name="pga"
                    label="PGA"
                    helperText="0 a 10"
                    value={index.pga}
                    onChange={handleChange}
                />
                <TextField
                    variant='outlined'
                    name="ega"
                    label="EGA"
                    helperText="0 a 10"
                    value={index.ega}
                    onChange={handleChange}
                />
                {step === 21 &&
                    <IconButton
                        draggable
                        onDragEnd={() => handleClickAnamnese()}
                        onClick={() => handleClickAnamnese()}
                    >
                        <LocalCafeIcon />
                    </IconButton>
                }
                {step === 81 &&
                    <IconButton
                        draggable
                        onDragEnd={() => handleClickICAD()}
                        onClick={() => handleClickICAD()}
                    >
                        <CallSplitIcon />
                    </IconButton>
                }
            </Box>
        </Paper>
    )
}

export default ICAD