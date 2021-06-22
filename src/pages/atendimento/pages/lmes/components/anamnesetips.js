import { Divider, Chip, Box } from '@material-ui/core';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../..';

const AnamneseTips = () => {

    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    const handleClick = param => event => {
        setLmeEdit({ ...lmeEdit, anamnese: param })
    }

    return (
        <div>
            <Divider />
            <Box pt={2}>
                <Chip
                    label="Continuidade"
                    variant="outlined"
                    onClick={handleClick("Continuidade de tratamento.")}
                />
            </Box>
        </div>
    )
}

export default AnamneseTips