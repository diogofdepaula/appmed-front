import PostAddIcon from '@mui/icons-material/PostAdd';
import PrintIcon from '@mui/icons-material/Print';
import SaveIcon from '@mui/icons-material/Save';
import { IconButton, Tooltip } from '@mui/material';
import React, { useContext } from 'react';
import { ClienteContext } from '../../App';
import { AtendimentoContext, AtendimentoNavigateContext } from '../../pages/atendimento';
import InitialPrescricao from '../../pages/atendimento/component/initialprescricao';

const SecondAppBar = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { setPrescricaoEdit, setMedicamentoEdit } = useContext(AtendimentoContext)
    const { setArticlePrescricaoInsert, setPagePrint, setStep } = useContext(AtendimentoNavigateContext)

    const iniciar = () => {
        let newpresc = InitialPrescricao(clienteContext.id)
        setPrescricaoEdit(newpresc)
        setMedicamentoEdit(null)
        setStep(11)
        setArticlePrescricaoInsert()
    }

    return (
        <>
            <Tooltip title="Nova Prescrição">
                <IconButton onClick={() => iniciar()} size="large">
                    <PostAddIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Salvar">
                <IconButton
                    size="large"
                >
                    <SaveIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Imprimir">
                <IconButton
                    onClick={() => setPagePrint()}
                    size="large"
                >
                    <PrintIcon />
                </IconButton>
            </Tooltip>
        </>
    );
}

export default SecondAppBar