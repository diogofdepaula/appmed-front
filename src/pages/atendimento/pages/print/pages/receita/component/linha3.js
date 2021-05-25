import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import PorTipo from '../../../component/portipo';
import { PrescricaoPrintContext } from './prescricao'

const useStylesA4 = makeStyles((theme) => ({
    box: {
        display: 'flex',
        alignItems: 'flex-end',
    },
    typofarmposo: theme.typography.subtitle1,
    typoquant: {
        ...theme.typography.h5,
        fontWeight: 'bold',
    },
    typoform: theme.typography.h6,
}));

const useStylesA5 = makeStyles((theme) => ({
    box: {
        display: 'flex',
        alignItems: 'flex-end',
    },
    typofarmposo: {
        ...theme.typography.subtitle1,
        fontSize: 14,
    },
    typoquant: {
        ...theme.typography.subtitle1,

    },
    typoform: {
        ...theme.typography.subtitle1,
        fontSize: 14,
    },
}));

const Linha3 = ({ mes, tipo }) => {

    const classesA4 = useStylesA4();
    const classesA5 = useStylesA5();
    const classes = PorTipo(tipo, classesA4, classesA5)

    const prescricao = useContext(PrescricaoPrintContext)

    const quant = () => {

        let final = ''

        let lmes = [prescricao.lmemes1, prescricao.lmemes2, prescricao.lmemes3, prescricao.lmemes4, prescricao.lmemes5, prescricao.lmemes6]

        if (mes >= 0) {
            // vem pela via Estado e cada mês corresponde ao mês
            final = lmes[mes]
        } else {
            // quando a receita é via paciente o mês vem como undefined
            final = lmes.map(p => isNaN(parseInt(p)) ? 0 : parseInt(p)).reduce((a, b) => a + b, 0)
        }
        return final
    }

    //Farmaco + Apresentacao + Quantidade + Forma

    return (
        <>
            <Box>
                <Grid container direction="row" justify="space-between" alignItems="flex-end">
                    <Grid item xs={9}>
                        <Typography className={classes.typofarmposo}>
                            {prescricao.medicamento.farmaco + ' (' + prescricao.apresentaco.descricao + ')'}
                        </Typography>
                    </Grid>
                    <Grid item container xs={3} justify="flex-end">
                        <Box className={classes.box}>
                            <Typography component={'span'} className={classes.typoquant} >
                                <Box>{quant}</Box>
                            </Typography>
                            <Typography component={'span'} className={classes.typoform}>
                                <Box ml={1}>{prescricao.posologia.forma}</Box>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha3