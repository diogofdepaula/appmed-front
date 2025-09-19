import { Box, Divider } from '@mui/material';
import React from 'react';
import { ExecPrint } from '../../pages/print/component/execprint';
import { AddNovoAtestado, AddRelatorio, AnteriorBtn, AtestadoCopyBtn, AtestadoEditarBtn, AtestadoSalvarBtn, ImprimirNavBtn, LmeEditarBtn, LmePararBtn, NovaPrescricaoBtn, PrescricaoEditarBtn, PrescricaoPararBtn, PrescricaoSalvarBtn, PrescricaoSendForkBtn, PrescricaoToLmeBtn, PrincipalBtn, ProximoBtn, RequisicoesBtn, SendToRelatorio } from './atendimento/buttons';

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
                <ImprimirNavBtn />
                <Divider orientation="vertical" variant="middle" flexItem />
                <NovaPrescricaoBtn />
                <AddNovoAtestado />
                <Divider orientation="vertical" variant="middle" flexItem />
                <PrescricaoEditarBtn />
                <LmeEditarBtn />
                <AtestadoEditarBtn />
                <AtestadoCopyBtn />
                <PrescricaoPararBtn />
                <LmePararBtn />
                <AnteriorBtn />
                <ProximoBtn />
                <PrescricaoSalvarBtn />
                <AtestadoSalvarBtn />
                <PrescricaoToLmeBtn />
                <PrescricaoSendForkBtn />
                <SendToRelatorio />
                <Divider orientation="vertical" variant="middle" flexItem />
                <AddRelatorio />
                <Divider orientation="vertical" variant="middle" flexItem />
                <ExecPrint />
            </Box>
            <Divider />
        </>
    )
}

export default AtendimentoAppBar