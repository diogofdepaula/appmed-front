import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { IconButton, Tooltip } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoContext, AtendimentoNavigateContext } from '../../pages/atendimento';

const ReiniciarBtn = () => {

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

const EditarBtn = () => {


    const { lmeOnDuty, setLmeEdit } = useContext(AtendimentoContext)
    const { setArticleLMEUpdate, setStep } = useContext(AtendimentoNavigateContext)


    const handleEditar = () => {
        setLmeEdit(lmeOnDuty)
        setStep(21)
        setArticleLMEUpdate()
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

const PararBtn = () => {

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
            <ReiniciarBtn />
            <EditarBtn />
            <PararBtn />
        </>
    )
}

export default LmesMainAppBar