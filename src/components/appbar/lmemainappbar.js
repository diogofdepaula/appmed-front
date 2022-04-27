import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { IconButton, Tooltip } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoContext, AtendimentoNavigateContext } from '../../pages/atendimento';

const LmeReiniciarBtn = () => {

    const { lmeOnDuty } = useContext(AtendimentoContext)

    return (
        <>
            <Tooltip title="Voltar">
                <IconButton
                    component="span"
                    disabled={!lmeOnDuty}
                    size="large"
                >
                    <ArrowUpwardIcon />
                </IconButton>
            </Tooltip>
        </>
    )
}

const LmeEditarBtn = () => {


    const { lmeOnDuty, setLmeEdit } = useContext(AtendimentoContext)
    const { setArticlePrescricoesMain, setStep } = useContext(AtendimentoNavigateContext)


    const handleEditar = () => {
        setLmeEdit(lmeOnDuty)
        setStep(321)
        setArticlePrescricoesMain()
    }

    return (
        <>
            <Tooltip title="Editar">
                <IconButton
                    component="span"
                    onClick={handleEditar}
                    size="large"
                >
                    <EditIcon />
                </IconButton>
            </Tooltip>
        </>
    )
}

const LmePararBtn = () => {

    const { lmeOnDuty } = useContext(AtendimentoContext)
    const { setArticleLMEDelete } = useContext(AtendimentoNavigateContext)


    const handleParar = () => {
        setArticleLMEDelete()
    }

    return (
        <>
            <Tooltip title="Parar">
                <IconButton
                    component="span"
                    disabled={!lmeOnDuty}
                    onClick={handleParar}
                    size="large"
                >
                    <HighlightOffIcon />
                </IconButton>
            </Tooltip>
        </>
    )
}


const LmesMainAppBar = () => {

    return (
        <>
            <LmeReiniciarBtn />
            <LmeEditarBtn />
            <LmePararBtn />
        </>
    )
}

export default LmesMainAppBar