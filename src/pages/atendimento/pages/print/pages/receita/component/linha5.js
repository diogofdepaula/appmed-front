import { Box, makeStyles, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import PorTipo from '../../../component/portipo';
import { PrescricaoPrintContext } from './prescricao';

const useStylesA4 = makeStyles((theme) => ({
    box: {
        marginTop: 5
    },
    typo: {
        ...theme.typography.h6,
        textAlign: 'justify'
    },
}));

const useStylesA5 = makeStyles((theme) => ({
    box: {
        marginTop: 5
    },
    typo: {
        ...theme.typography.h6,
        fontSize: 16,
        textAlign: 'justify'
    },
}));

const Linha5 = ({ tipo }) => {

    const classesA4 = useStylesA4();
    const classesA5 = useStylesA5();
    const classes = PorTipo(tipo, classesA4, classesA5)

    const prescricao = useContext(PrescricaoPrintContext)

    return (
        <>
            <Box className={classes.box}>
                <Typography component='span' className={classes.typo}>
                    {prescricao.orientacoes.split("\n").map((i, key) => {
                        return <div key={key}>{i}</div>;
                    })}
                </Typography>
            </Box>
        </>
    )
}

export default Linha5