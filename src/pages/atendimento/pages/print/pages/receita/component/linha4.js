import { Box, makeStyles, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import PorTipo from '../../../component/portipo';
import { PrescricaoPrintContext } from './prescricao';

const useStylesA4 = makeStyles((theme) => ({
    box: {
        marginBlock: 2,
    },
    typo: {
        ...theme.typography.h6,
        textAlign: 'justify'
    },
}));

const useStylesA5 = makeStyles((theme) => ({
    box: {
        marginBlock: 2,
    },
    typo: {
        ...theme.typography.h6,
        fontSize: 18,
        textAlign: 'justify'
    },
}));




const Linha4 = ({ tipo }) => {

    const classesA4 = useStylesA4();
    const classesA5 = useStylesA5();
    const classes = PorTipo(tipo, classesA4, classesA5)

    const prescricao = useContext(PrescricaoPrintContext)

    const Texto = () => {

        let texto = prescricao.usoposologiapadrao ? prescricao.posologia.posologia : prescricao.posologianaopadrao

        return (
            <Typography component='span' className={classes.typo}>
                {texto.split("\n").map((i, key) => {
                    return <div key={Math.random() * 1000}>{i}</div>;
                })}
            </Typography>
        )
    }

    return (
        <>
            <Box className={classes.box}>
                <Texto />
            </Box>
        </>
    )
}

export default Linha4