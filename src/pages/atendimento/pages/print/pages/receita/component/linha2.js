import { Box, makeStyles, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { ImpressaoContext } from '../../../../..';
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

    const { impressao } = useContext(ImpressaoContext)

    const texto = () => {

        let texto = ""

        console.log(prescricao.medicamento.nomescomerciais);

        if (impressao.local === 'consultorio' && tipo !== 'lme' && tipo !== undefined) {
            prescricao.medicamento.nomescomerciais?.sort().map((n, i) => {
                if (n.id === prescricao.medicamento.nomescomerciais[0].id) {
                    return texto = texto.concat(n.nomefantasia)
                } else if (i === prescricao.medicamento.nomescomerciais.length - 1) {
                    return texto = texto.concat(' ou ', n.nomefantasia)
                } else {
                    return texto = texto.concat(', ', n.nomefantasia)
                }
            })
        } else {
            texto = prescricao.medicamento.farmaco
        }
    return texto
}

return (
    <>
        <Box className={classes.box}>
            <Typography className={classes.typo}>
                {impressao?.nomecomercial ? texto() : prescricao.medicamento.farmaco}
            </Typography>
        </Box>
    </>
)
}

export default Linha2