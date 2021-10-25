import { Grid } from '@material-ui/core';
import React from 'react';
import LMESet from './component/impressaoset/lmeset';
import LocalSet from './component/impressaoset/localset';
import PrescricoesSet from './component/impressaoset/prescricaoset';
import RequisicaoSet from './component/impressaoset/requisicaoset';
import TempoSet from './component/impressaoset/temposet';
import TermoSet from './component/impressaoset/termoset';

const ImpressaoSet = () => {

    return (
        <>
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item>
                    <LocalSet />
                </Grid>
                <Grid container item direction="row" justify="space-between" alignItems="flex-start">
                    <Grid container item xs={3}>
                        <PrescricoesSet />
                    </Grid>
                    <Grid container item xs={3} direction="column" justify="center" alignItems="center" >
                        <LMESet />
                        <TermoSet />
                    </Grid>
                    <Grid container item xs={3}>
                        <RequisicaoSet />
                    </Grid>
                    <Grid container item xs={3}>
                        <Grid item>
                            <TempoSet />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default ImpressaoSet