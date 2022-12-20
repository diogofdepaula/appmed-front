import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { ClienteContext } from '../../../../../App';
import { LMEPrintContext } from '../../../../../pages/print/printjob';
import { BoxCheckBox } from '../../../components';

const Linha10Relatorio = () => {

    const { clienteContext } = useContext(ClienteContext)
    const lme = useContext(LMEPrintContext)

    return (
        <>
            <Box
                sx={{
                    flexGrown: 1,
                    border: 1,
                    px: 1,
                }}
            >
                <BoxCheckBox
                    item={true}
                >
                    Declaro que {clienteContext.sexo === 'feminino' ? ' a ' : ' o '}
                    paciente foi avaliado e não possui contraindicação
                    absolutas ao uso
                    {lme.prescricoes.length > 1 ?
                        ' dos medicamentos solicitados.' :
                        ' do medicamento solicitado.'
                    }
                </BoxCheckBox>
            </Box>
        </>
    )
}

export default Linha10Relatorio

