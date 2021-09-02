import { Box, Grid } from '@material-ui/core';
import React, { createContext } from 'react';
import PageA4 from '../component/pagea4';
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

export const LMEPrintContext = createContext(null)

const FactoryLME = (props) => {

    return (
        <>
            <PageA4>
                <Box height={1} width={1} p={1} border={5} borderColor={"black"}>
                    <LMEPrintContext.Provider value={props.lme}>
                        <Grid container direction="column" justify="space-between" style={{ height: "100%" }}>
                            <Grid item>
                                <Linha1LME />
                                <Linha2LME />
                                <Linha3LME />
                                <Linha4LME />
                            </Grid>
                            <Grid container item xs direction="column" alignItems="stretch">
                                <Linha5LME />
                                <Linha6LME />
                                {/* <Grid container direction="row" alignItems="stretch" item xs> */}
                                    <Linha7LME />
                                {/* </Grid> */}
                            </Grid>
                            <Grid item >
                                <Linha9LME />
                                <Linha10LME />
                                <Linha11LME />
                                <Linha12LME />
                                <Linha13LME />
                                <Linha14LME />
                            </Grid>
                        </Grid>
                    </LMEPrintContext.Provider>
                </Box>
            </PageA4>
        </>
    )
}

export default FactoryLME