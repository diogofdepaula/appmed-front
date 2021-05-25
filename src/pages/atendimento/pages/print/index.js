import { Grid } from '@material-ui/core';
import React from 'react';
import LMESet from './component/impressaoset/lmeset';
import LocalSet from './component/impressaoset/localset';
import PrescricoesSet from './component/impressaoset/prescricaoset';
import TempoSet from './component/impressaoset/temposet';

const ImpressaoSet = () => {

    return (
        <>
            <Grid container direction="row" justify="space-between" alignItems="flex-start">
                <Grid container item xs={4}>
                    <PrescricoesSet />
                </Grid>
                <Grid container item xs={4} >
                    <LMESet />
                </Grid>
                <Grid container item xs={4}>
                    <Grid item>
                        <TempoSet />
                    </Grid>
                    <LocalSet />
                </Grid>
            </Grid>
        </>
    )
}

export default ImpressaoSet