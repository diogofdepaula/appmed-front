import { Box } from '@mui/material';
import React, { createContext } from 'react';
import PageA4 from '../pagea4';
import Linha1Relatorio from './component/linha1';
import Linha10Relatorio from './component/linha10';
import Linha11Relatorio from './component/linha11';
import Linha12Relatorio from './component/linha12';
import Linha2Relatorio from './component/linha2';
import Linha3Relatorio from './component/linha3';
import Linha4Relatorio from './component/linha4';
import Linha5Relatorio from './component/linha5';
import Linha6Relatorio from './component/linha6';
import Linha7Relatorio from './component/linha7';
import Linha8Relatorio from './component/linha8';
import Linha9Relatorio from './component/linha9';

export const LMEPrintContext = createContext(null)

const FactoryRelatorio = (props) => {

    return (
        <>
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
                    <LMEPrintContext.Provider value={props.lme}>
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
                            <Linha1Relatorio />
                            <Linha2Relatorio />
                            <Linha3Relatorio />
                            <Linha4Relatorio />
                            <Linha5Relatorio />
                            <Linha6Relatorio />
                            <Linha7Relatorio />
                            <Linha8Relatorio />
                            <Linha9Relatorio />
                            <Linha10Relatorio />
                            <Linha11Relatorio />
                            <Linha12Relatorio />
                        </Box>
                    </LMEPrintContext.Provider>
                </Box>
            </PageA4>
        </>
    )
}

export default FactoryRelatorio