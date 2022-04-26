import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { IconButton, Tooltip } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoContext, AtendimentoNavigateContext } from '../../pages/atendimento';

const PrescricaoReiniciarBtn = () => {

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

const PrescricaoEditarBtn = () => {

    const { prescricaoOnDuty, setPrescricaoEdit } = useContext(AtendimentoContext)
    const { setArticlePrescricaoUpdate, setStep } = useContext(AtendimentoNavigateContext)

    const handleEditar = () => {
        setPrescricaoEdit(prescricaoOnDuty)
        setStep(121)
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


const PrescricaoPararBtn = () => {

    const { prescricaoOnDuty, setPrescricaoEdit } = useContext(AtendimentoContext)
    const { setArticlePrescricaoDelete } = useContext(AtendimentoNavigateContext)

    const handleParar = () => {
        setPrescricaoEdit(prescricaoOnDuty)
        setArticlePrescricaoDelete()
    }
    return (
        <>
            <Tooltip title="Parar">
                <IconButton
                    component="span"
                    disabled={!prescricaoOnDuty}
                    onClick={handleParar}
                    size="large"
                >
                    <HighlightOffIcon />
                </IconButton>
            </Tooltip>
        </>
    )
}

const PrescricoesMainAppBar = () => {

    return (
        <>
            <PrescricaoReiniciarBtn />
            <PrescricaoEditarBtn />
            <PrescricaoPararBtn />
        </>
    )
}

export default PrescricoesMainAppBar