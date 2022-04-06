import { Box, Divider } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoNavigateContext } from '..';
import { AtestadosBtn, ImprimirNavBtn, NovaPrescricaoBtn, PrincipalBtn, RequisicoesBtn } from '../../../components/appbar/atendimento';

const ThirdAppBar = () => {
    const { appbar } = useContext(AtendimentoNavigateContext)
    return appbar
}

const AtendimentoAppBar = () => {

    const { prescricaoEdit, lmeEdit, medicamentoEdit  } = useContext(AtendimentoNavigateContext)
    const { step } = useContext(AtendimentoNavigateContext)

    console.log('prescricaoEdit ', prescricaoEdit);
    console.log('lmeEdit ', lmeEdit);
    console.log('medicamentoEdit ', medicamentoEdit);
    console.log('step ', step);

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: 'nowrap',
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
                <ThirdAppBar />
            </Box>
            <Divider />
        </>
    )
}

export default AtendimentoAppBar