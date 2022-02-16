import { Box, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { ImpressaoContext, PrintContext } from '../../../../pages/atendimento';
import PageSize from '../../../../pages/print/component/pagesize';
import { PrescricaoPrintContext } from './prescricao';

const Linha3 = ({ mes, tipo }) => {

    const prescricao = useContext(PrescricaoPrintContext)

    const { impressao } = useContext(ImpressaoContext)

    const { meses } = useContext(PrintContext)

    const quantLME = () => {

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

    const TypoFarmPoso = (prop) => {

        if (PageSize(tipo)) {
            return (
                <Typography
                    variant='subtitle1'
                    style={{
                        fontSize: 14,
                    }}
                >
                    {prop.children}
                </Typography>
            )
        } else {
            return (
                <Typography
                    variant='subtitle1'
                >
                    {prop.children}
                </Typography>
            )
        }
    }

    const TypoQuant = (prop) => {

        if (PageSize(tipo)) {
            return (
                <Typography
                    component={'span'}
                    variant='subtitle1'
                >
                    {prop.children}
                </Typography>
            )
        } else {
            return (
                <Typography
                    component={'span'}
                    variant='h5'
                    style={{
                        fontWeight: 'bold',
                    }}
                >
                    {prop.children}
                </Typography>
            )
        }
    }

    const TypoForm = (prop) => {

        if (PageSize(tipo)) {
            return (
                <Typography
                    component={'span'}
                    variant='subtitle1'
                    style={{
                        fontSize: 14,
                    }}
                >
                    {prop.children}
                </Typography>
            )
        } else {
            return (
                <Typography
                    component={'span'}
                    variant='h6'
                >
                    {prop.children}
                </Typography>
            )
        }
    }

    //Farmaco + Apresentacao + Quantidade + Forma

    const Padrao = () => {

        return (
            <Box
                style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                }}
            >
                <TypoQuant>
                    {tipo === 'lme' ? quantLME() : (prescricao.posologia.quantidade * (prescricao.medicamento.controlado ? 1 : meses))}
                </TypoQuant>
                <TypoForm>
                    <Box ml={1}>{prescricao.posologia.forma}</Box>
                </TypoForm>
            </Box>
        )
    }

    const NaoPadrao = () => {

        return (
            <Box
                style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                }}
            >
                <TypoQuant>
                    {tipo === 'lme' ? quantLME() : prescricao.quantidadenaopadrao}
                </TypoQuant>
                <TypoForm>
                    <Box ml={1}>{prescricao.formanaopadrao}</Box>
                </TypoForm>
            </Box>
        )
    }

    const Continuo = () => {
        return (
            <Box
                style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                }}
            >
                <TypoQuant>
                    <Box fontWeight="fontWeightBold" >uso contínuo</Box>
                </TypoQuant>
            </Box>
        )
    }

    return <>
        <Box>
            <Grid container direction="row" justifyContent="space-between" alignItems="flex-end">
                <Grid item xs={9}>
                    <TypoFarmPoso>
                        {prescricao.medicamento.farmaco + ' (' + prescricao.apresentaco.descricao + ')'}
                    </TypoFarmPoso>
                </Grid>
                <Grid item container xs={3} justifyContent="flex-end">
                    {impressao.continuo ?
                        <Continuo /> :
                        prescricao.usoposologiapadrao ? <Padrao /> : <NaoPadrao />
                    }
                </Grid>
            </Grid>
        </Box>
    </>;
}

export default Linha3