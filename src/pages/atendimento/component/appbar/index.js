import { Box, Divider } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoNavigateContext } from '../..';
import FirstAppBar from '../../../../components/appbar/atendimentofirstappbar';
import SecondAppBar from '../../../../components/appbar/atendimentosecondappbar';

const AtendimentoAppBar = () => {

    const ThirdAppBar = () => {
        const { appbar } = useContext(AtendimentoNavigateContext)
        return appbar
    }
    
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: 'nowrap',
                    flexDirection: 'row',
                }}
            >
                <FirstAppBar />
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