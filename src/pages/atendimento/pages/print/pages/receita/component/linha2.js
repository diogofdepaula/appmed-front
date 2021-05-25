import { Box, makeStyles, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import PorTipo from '../../../component/portipo';
import { PrescricaoPrintContext } from './prescricao';

const useStylesA4 = makeStyles((theme) => ({
    box: {
        display: 'flex'
    },
    typo: {
        ...theme.typography.h4,
        fontWeight: 'bold',
        textAlign: 'center'
    },
}));

const useStylesA5 = makeStyles((theme) => ({
    box: {
        display: 'flex'
    },
    typo: {
        ...theme.typography.h5,
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: 2
    },
}));

const Linha2 = ({ tipo }) => {

    const classesA4 = useStylesA4();
    const classesA5 = useStylesA5();
    const classes = PorTipo(tipo, classesA4, classesA5)

    const prescricao = useContext(PrescricaoPrintContext)

    return (
        <>
            <Box className={classes.box}>
                <Typography className={classes.typo}>
                    {prescricao.medicamento.farmaco}
                </Typography>
            </Box>
        </>
    )
}

export default Linha2