import { Box, makeStyles, Typography } from '@material-ui/core';
import { format } from 'date-fns';
import addMonths from 'date-fns/addMonths';
import { ptBR } from "date-fns/locale";
import React, { useContext } from 'react';
import { ImpressaoContext } from '../../../../..';
import PorTipo from '../../../component/portipo';

const useStylesA4 = makeStyles((theme) => ({
    typo: {
        ...theme.typography.h5,
    },
}));

const useStylesA5 = makeStyles((theme) => ({
    typo: {
        ...theme.typography.h6,
        fontSize: 16,
    },
}));

const Data = ({ mes, tipo }) => {

    const classesA4 = useStylesA4();
    const classesA5 = useStylesA5();
    const classes = PorTipo(tipo, classesA4, classesA5)

    const { impressao } = useContext(ImpressaoContext)

    const date = format(addMonths(impressao.database, mes ? mes : 0), "dd ' de ' MMMM ' de ' yyyy", { locale: ptBR })

    return (
        <>
            <Box>
                <Typography className={classes.typo}>
                    Guarapuava, {date}.
                    </Typography>
            </Box>
        </>
    )
}

export default Data