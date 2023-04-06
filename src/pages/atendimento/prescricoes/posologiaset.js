import TextRotationNoneIcon from '@mui/icons-material/TextRotationNone';
import { Box, Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoContext, AtendimentoNavigateContext } from '..';
import ListPosologia from '../../../components/listposologia';

const PosologiaSet = () => {

    const { prescricaoEdit, setPrescricaoEdit, medicamentoEdit } = useContext(AtendimentoContext)
    const { setStep } = useContext(AtendimentoNavigateContext)

    const handleButton = () => {
        setPrescricaoEdit(prescricaoEdit)
        setStep(132)
    }

    const handleClickTable = (param) => {
        setPrescricaoEdit({
            ...prescricaoEdit,
            usoposologiapadrao: true,
            posologiaId: param.id
        })
        setStep(141)
    }

    return (
        <>
            <ListPosologia
                medicamentoEdit={medicamentoEdit}
                handleClickTable={handleClickTable}
                prescricaoEdit={prescricaoEdit}
            />
            <Box mt={1}>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<TextRotationNoneIcon />}
                    onClick={handleButton}
                >
                    Usar posologia não padronizada
                    <div>
                        {prescricaoEdit.posologiaId === null && <Typography>  (opção atual)</Typography>}
                    </div>
                </Button>
            </Box>
        </>
    )
}

export default PosologiaSet