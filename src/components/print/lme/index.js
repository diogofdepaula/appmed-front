import { Box } from '@mui/material';
import React from 'react';
import PageA4 from '../pagea4';
import Linha1LME from './component/linha1';
import Linha10LME from './component/linha10';
import Linha11LME from './component/linha11';
import Linha12LME from './component/linha12';
import Linha13LME from './component/linha13';
import Linha14LME from './component/linha14';
import Linha2LME from './component/linha2';
import Linha3LME from './component/linha3';
import Linha4LME from './component/linha4';
import Linha5LME from './component/linha5';
import Linha6LME from './component/linha6';
import Linha7LME from './component/linha7';
import Linha9LME from './component/linha9';

const FactoryLME = () => {

    return <>
        <PageA4>
            <Box
                sx={{
                    display: 'flex',
                    borderBlockColor: "black",
                    borderStyle: "solid",
                    borderWidth: "5px",
                    p: 1,
                    height: "100%",
                    width: "100%",
                }}
            >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: "100%",
                            width: "100%",
                            gap: 0.2,
                        }}
                    >
                        <Linha1LME />
                        <Linha2LME />
                        <Linha3LME />
                        <Linha4LME />
                        <Linha5LME />
                        <Linha6LME />
                        <Linha7LME />
                        <Linha9LME />
                        <Linha10LME />
                        <Linha11LME />
                        <Linha12LME />
                        <Linha13LME />
                        <Linha14LME />
                    </Box>
            </Box>
        </PageA4>
    </>
}

export default FactoryLME