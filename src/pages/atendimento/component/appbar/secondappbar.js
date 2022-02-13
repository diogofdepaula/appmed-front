import PostAddIcon from '@mui/icons-material/PostAdd';
import PrintIcon from '@mui/icons-material/Print';
import SaveIcon from '@mui/icons-material/Save';
import { IconButton, Tooltip } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../..';
import { ClienteContext } from '../../../../App';
import InitialPrescricao from '../initialprescricao';

const SecondAppBar = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { setPage, setPrescricaoEdit, setMedicamentoEdit, setStep } = useContext(AtendimentoContext)

    const iniciar = () => {
        let newpresc = InitialPrescricao(clienteContext.id)
        setPrescricaoEdit(newpresc)
        setMedicamentoEdit(null)
        setStep(11)
        setPage('prescricaoinsert')
    }

    return (
        <>
            <Tooltip title="Nova Prescrição">
                <IconButton onClick={iniciar} size="large">
                    <PostAddIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Salvar">
                <IconButton onClick={() => setPage('prescricaosave')} size="large">
                    <SaveIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Imprimir">
                <IconButton onClick={() => setPage('print')} size="large">
                    <PrintIcon />
                </IconButton>
            </Tooltip>
        </>
    );
}

export default SecondAppBar