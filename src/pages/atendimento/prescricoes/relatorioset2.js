import { Box, Checkbox, Divider, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React, { useContext } from 'react'
import { AtendimentoContext } from '..'
import { DoençaCID } from '../../../utils/ inquiries'
import { CriteriosAP, CriteriosAR1987, CriteriosAR2010, CriteriosEA } from '../../../utils/criteriosdoencas'

const CriteriosLme = (lme) => {
    const doencapelocid = DoençaCID(lme.cid10)
    if (doencapelocid === 'ar') return [CriteriosAR1987(lme), CriteriosAR2010(lme)]
    if (doencapelocid === 'ap') return [CriteriosAP(lme)]
    if (doencapelocid === 'ea') return [CriteriosEA(lme)]
    return "aij"
}

const RelatorioSet2 = () => {

    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        setLmeEdit({ ...lmeEdit, relatorio: { ...lmeEdit.relatorio, [event.target.name]: event.target.checked } })
    }

    const handleChange2010 = (paramA, paramB) => event => {
        setLmeEdit({ ...lmeEdit, relatorio: { ...lmeEdit.relatorio, [paramA]: paramB } })
    }

    const list = CriteriosLme(lmeEdit)

    const ArtriteReumatoide2010 = () => {

        const criterios = CriteriosLme(lmeEdit)[1]

        const ind = ['M050', 'M051', 'M052', 'M053', 'M058', 'M060', 'M068'].includes(lmeEdit.cid10)

        if (!ind) return <div />

        return (
            <>
                <FormControl component="fieldset">
                    {criterios.map(w =>
                        w[1].map((y, i) =>
                            <RadioGroup
                                key={i}
                                name={w[0][1]}
                                onChange={handleChange2010(w[0][1], y[1])}
                            >
                                <FormControlLabel
                                    key={y[1]}
                                    value={y[1]}  // tem que fazer um If
                                    control={<Radio />}
                                    label={y[0]}
                                    checked={w[0][0] === y[1] || false}
                                />
                            </RadioGroup>
                        ))}
                </FormControl>
                <Divider />
            </>
        )
    }

    return (
        <>
            <ArtriteReumatoide2010 />
            {list[0].map((w) =>
                <Box key={w[0]}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                color='primary'
                                name={w[0]}
                                checked={w[2] === true ? true : false}
                                onChange={handleChange}
                            />}
                        label={w[1]}
                    />
                </Box>
            )}
        </>
    )
}

export default RelatorioSet2