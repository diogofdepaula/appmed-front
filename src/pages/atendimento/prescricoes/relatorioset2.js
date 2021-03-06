import { Box, Checkbox, Divider, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React, { useContext } from 'react'
import { AtendimentoContext } from '..'
import { CriteriosLme } from '../../../utils/criteriosdoencas'
import { DoençaCID } from '../../../utils/inquiries'

const RelatorioSet2 = () => {

    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        setLmeEdit({ ...lmeEdit, relatorio: { ...lmeEdit.relatorio, [event.target.name]: event.target.checked } })
    }

    const handleChange2010 = (paramA, paramB) => event => {
        setLmeEdit({ ...lmeEdit, relatorio: { ...lmeEdit.relatorio, [paramA]: paramB } })
    }

    const list = CriteriosLme(lmeEdit)

    if (list === 'aij') return <>Na AIJ os critérios são descritivos</>

    const ArtriteReumatoide2010 = () => {

        const criterios = CriteriosLme(lmeEdit)[1]

        if (DoençaCID(lmeEdit.cid10) !== 'ar') return <></>

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
                <Box key={w[1]}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                color='primary'
                                name={w[1]}
                                checked={w[2] === true ? true : false}
                                onChange={handleChange}
                            />}
                        label={w[0]}
                    />
                </Box>
            )}
        </>
    )
}

export default RelatorioSet2