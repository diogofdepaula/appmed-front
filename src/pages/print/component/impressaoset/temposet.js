import { Slider, TextField, Typography } from '@mui/material';
import { parseISO } from 'date-fns';
import React, { useContext } from 'react';
import { PrintContext } from '../../../atendimento';

const TempoSet = () => {

    //const { impressao, setImpressao } = useContext(ImpressaoContext)

    const { setMeses, setDatabase } = useContext(PrintContext)

    const handleSliderChange = (event, newValue) => {
        //setImpressao({ ...impressao, meses: newValue })
        setMeses(newValue)
    }

    const handleDateChange = (event) => {
        // setImpressao({ ...impressao, [event.target.name]: parseISO(event.target.value) })
        setDatabase(parseISO(event.target.value))
    }

    return (
        <>
            <Typography gutterBottom >Meses</Typography>
            <Slider
                defaultValue={6}
                getAriaValueText={(value) => `${value} mês`}
                valueLabelDisplay="on"
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
        </>
    )
}

export default TempoSet