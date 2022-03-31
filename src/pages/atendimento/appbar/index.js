import { Box, Divider } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoNavigateContext } from '..';
import { AtestadosBtn, PrincipalBtn, RequisicoesBtn } from '../../../components/appbar/atendimento';
import SecondAppBar from '../../../components/appbar/atendimentosecondappbar';

const ThirdAppBar = () => {
    const { appbar } = useContext(AtendimentoNavigateContext)
    return appbar
}

const AtendimentoAppBar = () => {

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
                <Divider orientation="vertical" variant="middle" flexItem />
                <SecondAppBar />
                <Divider orientation="vertical" variant="middle" flexItem />
                <ThirdAppBar />
            </Box>
            <Divider />
        </>
    )
}
export default AtendimentoAppBar