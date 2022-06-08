import { Box, Divider } from '@mui/material';
import React from 'react';
import { AddRelatorio, AnteriorBtn, AtestadosBtn, ImprimirNavBtn, LmeEditarBtn, LmePararBtn, NovaPrescricaoBtn, PrescricaoEditarBtn, PrescricaoPararBtn, PrescricaoSalvarBtn, PrescricaoSendForkBtn, PrescricaoToLmeBtn, PrincipalBtn, PrintBtn, ProximoBtn, RequisicoesBtn, SendToRelatorio } from './atendimento/buttons';

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
                <LmePararBtn />
                <AnteriorBtn />
                <ProximoBtn />
                <PrescricaoSalvarBtn />
                <PrescricaoToLmeBtn />
                <PrescricaoSendForkBtn />
                <SendToRelatorio />
                <Divider orientation="vertical" variant="middle" flexItem />
                <AddRelatorio />
                <Divider orientation="vertical" variant="middle" flexItem />
                <PrintBtn />
            </Box>
            <Divider />
        </>
    )
}

export default AtendimentoAppBar