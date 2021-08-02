import { Box, Typography, Grid, makeStyles } from '@material-ui/core'
import React, { useContext } from 'react'
import { ImpressaoContext } from '../../../../..';
import PorTipo from '../../../component/portipo';
import { PrescricaoPrintContext } from './prescricao'

const useStylesA4 = makeStyles((theme) => ({
    typo: {
        fontSize: 22,
        textAlign: 'center'
    },
}));

const useStylesA5 = makeStyles((theme) => ({
    typo: {
        fontSize: 16,
        textAlign: 'center'
    },
}));

const Linha1 = ({ tipo, previoususo }) => {

    const classesA4 = useStylesA4();
    const classesA5 = useStylesA5();
    const classes = PorTipo(tipo, classesA4, classesA5)

    const prescricao = useContext(PrescricaoPrintContext)
    const { impressao } = useContext(ImpressaoContext)

    return (
        <>
            {previoususo === prescricao.apresentaco.uso ?
                <div />
                :
                <Box>
                    <Grid container direction='row' spacing={3}>
                        <Grid item xs={6} />
                        <Grid item >
                            <Typography className={classes.typo}>
                                {prescricao.apresentaco.uso}
                            </Typography>
                        </Grid>
                        <Grid item >
                            {prescricao.continuo &&
                                <Typography className={classes.typo}>
                                    {!impressao.continuo && "uso contínuo"}
                                </Typography>
                            }
                        </Grid>
                    </Grid>
                </Box>
            }
        </>
    )
}

export default Linha1