import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { CReactiveProtein, ErythrocyteSedimentationRate, EvaluatorGlobalAssessment, PatientGlobalAssessment, SwollenJointCount, TenderJointCount } from '../inputs';

export const CalcAR = () => {

    const [index, setIndex] = useState({
        dor: '',
        edema: '',
        vhs: '',
        pcr: '',
        pga: '',
        ega: '',
    })

    const [das28pcr, setDas28pcr] = useState(0)
    const [das28vhs, setDas28vhs] = useState(0)
    const [cdai, setCdai] = useState(0)
    const [sdai, setSdai] = useState(0)

    const calcdas28pcr = (dor, edema, pcr, pga) => {
        return ((0.56 * Math.sqrt(dor)) + (0.28 * Math.sqrt(edema)) + (0.36 * Math.log(pcr === 0 ? 0.001 : pcr)) + (0.014 * (pga * 10)) + 0.96)
    }

    const calcdas28vhs = (dor, edema, vhs, pga) => {
        return ((0.56 * Math.sqrt(dor)) + (0.28 * Math.sqrt(edema)) + (0.70 * Math.log(vhs)) + (0.014 * (pga * 10)))
    }

    const calccdai = (dor, edema, pga, ega) => {
        return (parseInt(dor) + parseInt(edema) + parseInt(pga) + parseInt(ega))
    }

    const calcsdai = (dor, edema, pcr, pga, ega) => {
        return (parseInt(dor) + parseInt(edema) + parseInt(pcr) + parseInt(pga) + parseInt(ega))
    }

    useEffect(() => {
        setDas28pcr(calcdas28pcr(index.dor, index.edema, index.pcr, index.pga).toFixed(1))
        setDas28vhs(calcdas28vhs(index.dor, index.edema, index.vhs, index.pga).toFixed(1))
        setCdai(calccdai(index.dor, index.edema, index.pga, index.ega))
        setSdai(calcsdai(index.dor, index.edema, index.pcr, index.pga, index.ega))
    }, [index])

    const handleChange = event => {
        setIndex({ ...index, [event.target.name]: event.target.value })
    }

    return (
        <>
            <Box
                sx={{
                    display: 'inline-flex',
                    flexDirection: 'column',
                    // bgcolor: "red",
                    gap: 3,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 3,
                        typography: 'body1'
                    }}
                >
                    <Box>DAS28-PCR {"de " + das28pcr}</Box>
                    <Box>DAS28-VHS {"de " + das28vhs}</Box>
                    <Box>CDAI {"de " + cdai}</Box>
                    <Box>SDAI {"de " + sdai}</Box>
                </Box>
                <Box
                    sx={{
                        display: 'inline-flex',
                        flexDirection: 'row',
                        gap: 3,
                    }}
                >
                    <SwollenJointCount data={index.edema} handleChange={handleChange} />
                    <TenderJointCount data={index.dor} handleChange={handleChange} />
                    <ErythrocyteSedimentationRate data={index.vhs} handleChange={handleChange} />
                    <CReactiveProtein data={index.pcr} handleChange={handleChange} />
                    <PatientGlobalAssessment data={index.pga} handleChange={handleChange} />
                    <EvaluatorGlobalAssessment data={index.ega} handleChange={handleChange} />
                </Box>
            </Box>
        </>
    )
}