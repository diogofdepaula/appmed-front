import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { LMEPrintContext } from '../../../../pages/print/printjob';

// Sugestão de novo nome futuro: MedicamentoTermoConsentimento (conforme comentário original)
const MedicamentoRelatorio = () => {
    const lme = useContext(LMEPrintContext);

    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%'
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    mt: 1,
                    border: 1,
                    borderColor: 'black',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'stretch'
                }}
            >
                {/* Título da Seção */}
                <Box sx={{ mt: -1, ml: 2, display: 'flex' }}>
                    <Typography component="span" variant="caption" noWrap>
                        <Box component="span" sx={{ bgcolor: 'white', px: 1 }}>
                            2 - Medicamento
                        </Box>
                    </Typography>
                </Box>

                {/* Lista de Medicamentos */}
                <Box sx={{ ml: 1, display: 'flex', justifyContent: 'center' }}>
                    {lme.prescricoes.map((t, i) => (
                        <Typography component="span" variant="h6" align="center" key={i}>
                            <Box component="span" sx={{ ml: 2, fontWeight: 'bold' }}>
                                {t.medicamento.farmaco}
                            </Box>
                        </Typography>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default MedicamentoRelatorio;