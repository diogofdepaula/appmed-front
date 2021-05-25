import { Box, makeStyles, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { ImpressaoContext } from '../../../..';
import PorTipo from '../../../component/portipo';

const useStylesA4 = makeStyles((theme) => ({
    typo: {
        ...theme.typography.h5,
        textAlign: 'justify'
    },
}));

const useStylesA5 = makeStyles((theme) => ({
    typo: {
        ...theme.typography.h6,
        textAlign: 'justify'
    },
}));


const Comentario = ({ tipo }) => {

    const classesA4 = useStylesA4();
    const classesA5 = useStylesA5();
    const classes = PorTipo(tipo, classesA4, classesA5)

    const { impressao } = useContext(ImpressaoContext)

    return (
        <>
            <Box>
                <Typography className={classes.typo} >
                    {impressao.comentario}
                </Typography>
            </Box>
        </>
    )
}

export default Comentario