import { Slider, TextField, Typography } from '@material-ui/core';
import { parseISO } from 'date-fns';
import React, { useContext } from 'react';
import { ImpressaoContext } from '../../../..';

const TempoSet = () => {

    const { impressao, setImpressao } = useContext(ImpressaoContext)

    const handleSliderChange = (event, newValue) => {
        setImpressao({ ...impressao, meses: newValue })
    }

    const handleDateChange = (event) => {
        setImpressao({ ...impressao, [event.target.name]: parseISO(event.target.value) })
    }

    return (
        <div>
            <Typography gutterBottom >Meses</Typography>
            <Slider
                defaultValue={6}
                getAriaValueText={(value) => `${value} mês`}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1}
                max={6}
                onChange={handleSliderChange}
            />
            <TextField
                mt={1}
                type='date'
                name='database'
                label="Data base"
                InputLabelProps={{
                    shrink: true,
                }}
                onBlur={handleDateChange} //Não deixei onchange se não ele fica travando
            />
        </div>
    )
}

export default TempoSet