import { Box, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React, { useContext } from 'react';
import { ImpressaoContext } from '../../../..';

const LocalSet = () => {

    const { impressao, setImpressao } = useContext(ImpressaoContext)

    const handleChange = (event) => {
        setImpressao({ ...impressao, local: event.target.value })
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