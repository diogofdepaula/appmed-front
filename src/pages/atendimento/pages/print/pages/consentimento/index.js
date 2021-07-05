import { Box, Grid } from '@material-ui/core';
import React, { createContext } from 'react';
import PageA4 from '../component/pagea4';
import Linha1Termo from './component/linha1';
import Linha10Termo from './component/linha10';
import Linha12Termo from './component/linha12';
import Linha2Termo from './component/linha2';
import Linha3Termo from './component/linha3';
import Linha4Termo from './component/linha4';
import Linha5Termo from './component/linha5';

export const LMEPrintContext = createContext(null)

const TermoConsentimento = (props) => {

    return (
        <>
            <PageA4>
                <Box height={1} width={1} p={1} border={5} borderColor={"black"}>
                    <LMEPrintContext.Provider value={props.lme}>
                        <Grid container direction="column" justify="space-between" style={{ height: "100%" }}>
                            <Grid container item>
                                <Linha1Termo />
                                <Linha2Termo />
                                <Linha3Termo />
                                <Linha4Termo />
                            </Grid>
                            <Grid container item xs>
                                <Linha5Termo />
                            </Grid>
                            <Grid container item >
                                <Linha10Termo />
                                {/* <Linha11Termo /> */}
                                <Linha12Termo />
                                {/* <Linha13Relatorio /> */}
                            </Grid>
                        </Grid>
                    </LMEPrintContext.Provider>
                </Box>
            </PageA4>
        </>
    )
}

export default TermoConsentimento