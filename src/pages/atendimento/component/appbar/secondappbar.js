import { IconButton, Tooltip } from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import PrintIcon from '@material-ui/icons/Print';
import SaveIcon from '@material-ui/icons/Save';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../..';
import { ClienteContext } from '../../../../App';
import InitialPrescricao from '../initialprescricao';

const SecondAppBar = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { page, setPage, setPrescricaoEdit, setMedicamentoEdit, setStep } = useContext(AtendimentoContext)

    const iniciar = () => {
        let newpresc = InitialPrescricao(clienteContext.id)
        setPrescricaoEdit(newpresc)
        setMedicamentoEdit(null)
        setStep(11)
        setPage('prescricaoinsert')
    }

    return (
        <div>
            {page ?
                <div>
                    <Tooltip title="Nova Prescrição">
                        <IconButton
                            onClick={iniciar}
                        >
                            <PostAddIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Salvar">
                        <IconButton
                            onClick={() => setPage('prescricaosave')}
                        >
                            <SaveIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Imprimir">
                        <IconButton
                            onClick={() => setPage('print')}
                        >
                            <PrintIcon />
                        </IconButton>
                    </Tooltip>
                </div>
                :
                <div />
            }
        </div>
    )
}

export default SecondAppBar