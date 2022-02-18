import { Box, Divider } from '@mui/material';
import React from 'react';
import FirstAppBar from '../../../../components/appbar/atendimentofirstappbar';
import SecondAppBar from '../../../../components/appbar/atendimentosecondappbar';
import ThirdAppBar from '../../../../components/appbar/atendimentothirdappbar';

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