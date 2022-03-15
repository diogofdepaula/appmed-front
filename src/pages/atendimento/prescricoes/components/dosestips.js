import { Box, Chip, Divider } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../..';

const DosesTips = () => {

    const { prescricaoEdit, setPrescricaoEdit, medicamentoEdit } = useContext(AtendimentoContext)

    const handleClick = () => {

        let valor = medicamentoEdit.posologias.filter(p => p.id === prescricaoEdit.posologiaId)[0].quantidade
        setPrescricaoEdit({
            ...prescricaoEdit,
            lmemes1: valor,
            lmemes2: valor,
            lmemes3: valor,
            lmemes4: valor,
            lmemes5: valor,
            lmemes6: valor,
        })
    }


    return (
        <div>
            <Divider />
            <Box py={2} display='flex'>
                <Chip
                    label="Repetir doses"
                    variant="outlined"
                    onClick={() => handleClick()}
                />
            </Box>
        </div>
    )
}

export default DosesTips