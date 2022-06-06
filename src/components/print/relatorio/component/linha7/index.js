import { Box, Grid, Typography } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import React, { useContext } from 'react';
import { LMEPrintContext } from '../..';
import { CriteriosLme } from '../../../../../utils/criteriosdoencas';
import Fence from '../../../fence';

const Linha7Relatorio = () => {

    const lme = useContext(LMEPrintContext)
    return (
        <>
            <Fence titulo={"Obrigatório para MMCD Biológico"}>
                <Box>
                    DOSE PRESCRITA________________mg/Kg PARA MMCD BIOLÓGICOS
                </Box>
                <Box>
                    JÁ REALIZOU DOSE DE INDUÇÃO ( )SIM ( )NÃO ( )Não SE APLICA
                </Box>
                <Box>
                Paciente já realizou tratamento com MMCD biológico de 1ª linha por 12 semanas ou teve perda de resposta. 
                </Box>
                <Box>
                PACIENTE REALIZOU TRATAMENTO COM AINE POR NO MÍNIMO 3 MESES? ( ) SIM ( ) NÃO
                </Box>
                <Box>
                OBRIGATÓRIO PARA SECUQUINUMABE: PACIENTE APRESENTOU FALHA OU HIPERSENSIBILIDADE COM Anti-TNF EM DOSE ADEQUADA POR 6
MESES? ( )SIM ( )NÃO
                </Box>
            </Fence>
        </>
    )
}

export default Linha7Relatorio