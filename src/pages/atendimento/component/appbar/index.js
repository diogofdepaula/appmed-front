import { Box, Divider } from '@mui/material';
import React from 'react';
import FirstAppBar from './firstappbar';
import SecondAppBar from './secondappbar'
import ThirdAppBar from './thirdappbar';

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