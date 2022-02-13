import { Box, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React, { useContext } from 'react';
import { PrintContext } from '../..';
import { ImpressaoContext } from '../../../atendimento';

const LocalSet = () => {

    const { impressao, setImpressao } = useContext(ImpressaoContext)
    const { teste, setTeste } = useContext(PrintContext)

    const handleChange = (event) => {
        setImpressao({ ...impressao, local: event.target.value })
        console.log('xxxx   ', teste);
        setTeste("bbbb")
    }

    return (
        <div>
            <Box mt={1}>
                <RadioGroup row value={impressao.local} onChange={handleChange}>
                    <FormControlLabel value="consultorio" defaultChecked control={<Radio />} label="Consultório" />
                    <FormControlLabel value="cisgap" control={<Radio />} label="CISGAP" />
                    <FormControlLabel value="cisco" control={<Radio />} label="CISCO" />
                </RadioGroup>
            </Box>
        </div>
    )
}

export default LocalSet