import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { BackPain, CReactiveProtein, ErythrocyteSedimentationRate, Fatigue, MorningStiffness, PatientGlobalAssessment, PerifericalPain, SwollenJointCount, TenderJointCount, Tenderness, TimeMorningStiffness } from '../inputs';

export const CalcAPso = () => {

    const [index, setIndex] = useState({
        vhs: '',
        pcr: '',
        pga: '',
        bp: '', // Back Pain (BASDAI Question 2) [0-10]
        pp: '', // Peripheral Pain/Swelling (BASDAI Question 3) [0-10]
        ms: '', // Level of morning stiffness (BASDAI Question 6) [0-10]
        fg: '', // fadiga
        td: '', // tender touch
        tms: '', // Duration of morning stiffness
    })

    const [basdai, setBasdai] = useState(0)
    const [asdascrp, setAsdascrp] = useState(0)
    const [asdasesr, setAsdasesr] = useState(0)
    const [dapsa, setDapsa] = useState(0)

    const calcbasdai = (fg, bp, pp, td, ms, tms) => {
        return (((parseInt(fg) + parseInt(bp) + parseInt(pp) + parseInt(td)) + ((parseInt(ms) + (parseInt(tms) / 12)) / 2)) / 5)
    }

    const calcasdascrp = (bp, pp, ms, pga, pcr) => {
        return ((0.12 * parseInt(bp)) + (0.06 * parseInt(ms)) + (0.11 * parseInt((pga / 10))) + (0.07 * parseInt(pp) + (0.58 * Math.log((pcr + 1)))))
    }

    const calcasdasesr = (bp, pp, ms, pga, vhs) => {
        return ((0.08 * parseInt(bp)) + (0.07 * parseInt(ms)) + (0.11 * parseInt((pga / 10))) + (0.09 * parseInt(pp) + (0.29 * Math.sqrt(vhs))))
    }

    const calcdapsa = (dor, edema, pcr, pga, pp) => {
        return (parseInt(dor) + parseInt(edema) + parseInt(pcr) + parseInt(pga) + parseInt(pp))
    }

    useEffect(() => {
        setDapsa(calcdapsa(index.dor, index.edema, index.pcr, index.pga, index.pp))
        setAsdascrp(calcasdascrp(index.bp, index.pp, index.ms, index.pga, index.pcr).toFixed(1))
        setAsdasesr(calcasdasesr(index.bp, index.pp, index.ms, index.pga, index.vhs).toFixed(1))
        setBasdai(calcbasdai(index.fg, index.bp, index.pp, index.td, index.ms, index.tms).toFixed(1))
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
                    <Box>DAPSA {"de " + dapsa}</Box>
                    <Box>ASDAS-PCR {"de " + asdascrp}</Box>
                    <Box>ASDAS-VHS {"de " + asdasesr}</Box>
                    <Box>BASDAI {"de " + basdai}</Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        gap: 3,
                    }}
                >
                    <SwollenJointCount data={index.edema} handleChange={handleChange} />
                    <TenderJointCount data={index.dor} handleChange={handleChange} />
                    <CReactiveProtein data={index.pcr} handleChange={handleChange} />
                    <ErythrocyteSedimentationRate data={index.vhs} handleChange={handleChange} />
                    <PerifericalPain data={index.pp} handleChange={handleChange} />
                    <PatientGlobalAssessment data={index.pga} handleChange={handleChange} />
                    <Fatigue data={index.fg} handleChange={handleChange} />
                    <BackPain data={index.bp} handleChange={handleChange} />
                    <Tenderness data={index.td} handleChange={handleChange} />
                    <MorningStiffness data={index.ms} handleChange={handleChange} />
                    <TimeMorningStiffness data={index.tms} handleChange={handleChange} />
                </Box>
            </Box>
        </>
    )
}