import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { IconButton, Tooltip } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoContext, AtendimentoNavigateContext } from '../../pages/atendimento';

const ReiniciarBtn = () => {

    const { prescricaoOnDuty } = useContext(AtendimentoContext)

    return (
        <>
            <Tooltip title="Voltar">
                <IconButton
                    component="span"
                    disabled={!prescricaoOnDuty}
                    size="large"
                >
                    <ArrowUpwardIcon />
                </IconButton>
            </Tooltip>
        </>
    )
}

const EditarBtn = () => {

    const { prescricaoOnDuty, setPrescricaoEdit } = useContext(AtendimentoContext)
    const { setArticlePrescricaoUpdate, setStep } = useContext(AtendimentoNavigateContext)

    const handleEditar = () => {
        setPrescricaoEdit(prescricaoOnDuty)
        setStep(21)
        setArticlePrescricaoUpdate()
    }

    return (
        <>
            <Tooltip title="Editar">
                <IconButton
                    component="span"
                    disabled={!prescricaoOnDuty}
                    onClick={() => handleEditar()}
                    size="large"
                >
                    <EditIcon />
                </IconButton>
            </Tooltip>
        </>
    )
}


const PararBtn = () => {

    const { prescricaoOnDuty, setPrescricaoEdit } = useContext(AtendimentoContext)
    const { setArticlePrescricaoDelete } = useContext(AtendimentoNavigateContext)

    const handleParar = () => {
        setPrescricaoEdit(prescricaoOnDuty)
        setArticlePrescricaoDelete()
    }
    return (
        <>
            <Tooltip title="Parar">
                <span>
                    <IconButton
                        component="span"
                        disabled={!prescricaoOnDuty}
                        onClick={handleParar}
                        size="large"
                    >
                        <HighlightOffIcon />
                    </IconButton>
                </span>
            </Tooltip>
        </>
    )
}

const PrescricoesMainAppBar = () => {

    return (
        <>
            <ReiniciarBtn />
            <EditarBtn />
            <PararBtn />
        </>
    )
}

export default PrescricoesMainAppBar