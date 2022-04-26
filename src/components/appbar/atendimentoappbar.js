import { Box, Divider } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoNavigateContext } from '../../pages/atendimento';
import { AnteriorBtn, AtestadosBtn, ImprimirNavBtn, LmeEditarBtn, LmeLinkRelatorioBtn, LmePararBtn, LmeReiniciarBtnEdito, LmeSalvarBtnEdito, NovaPrescricaoBtn, PrescricaoEditarBtn, PrescricaoPararBtn, PrescricaoSalvarBtn, PrescricaoSendForkBtn, PrescricaoToLmeBtn, PrincipalBtn, ProximoBtn, RequisicoesBtn } from './atendimento/buttons';

const ThirdAppBar = () => {
    const { appbar } = useContext(AtendimentoNavigateContext)
    return appbar
}

const AtendimentoAppBar = () => {

    // a logica de aparecer ou não aparecer deve estar em cada botão para que ele fique independente.
    // se tiver alguma lógica que falha para mais de um botão, então fazer uma função única separada
    // e deixar essa função em um lugar de comum acesso.

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                }}
            >
                <PrincipalBtn />
                <RequisicoesBtn />
                <AtestadosBtn />
                <ImprimirNavBtn />
                <Divider orientation="vertical" variant="middle" flexItem />
                <NovaPrescricaoBtn />
                <Divider orientation="vertical" variant="middle" flexItem />
                <PrescricaoEditarBtn />
                <LmeEditarBtn />
                <PrescricaoPararBtn />
                <AnteriorBtn />
                <ProximoBtn />
                <PrescricaoSalvarBtn />
                <PrescricaoToLmeBtn />
                <PrescricaoSendForkBtn />
                <LmePararBtn />
                <LmeReiniciarBtnEdito />
                <LmeSalvarBtnEdito />
                <LmeLinkRelatorioBtn />
                <Divider orientation="vertical" variant="middle" flexItem />
                <Divider orientation="vertical" variant="middle" flexItem />
                <Divider orientation="vertical" variant="middle" flexItem />
                <ThirdAppBar />
            </Box>
            <Divider />
        </>
    )
}

export default AtendimentoAppBar