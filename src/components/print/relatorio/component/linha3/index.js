import { Box, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { LMEPrintContext } from '../..';
import { ClienteContext } from '../../../../../App';
import Fence from '../../../fence';
import Field from '../../../field';

const Linha3Relatorio = () => {

    const { clienteContext } = useContext(ClienteContext)
    const lme = useContext(LMEPrintContext)

    const dados = [
        {
            titulo: "Nome",
            texto: clienteContext.nome,
            alinhamento: "left",
            negrito: "bold",
            largura: "50rem",
            grow: "1",
        },
        {
            titulo: "Peso",
            largura: "12rem",
            alinhamento: "center",
            texto: clienteContext.peso,
        },
        {
            titulo: "CNS",
            largura: "12rem", 
            texto: clienteContext.cns,
            grow: "1",
        },
        {
            titulo: "Sexo",
            texto: clienteContext.sexo,
            alinhamento: "center",
            largura: "12rem",
        },
        {
            titulo: "Início da doença (anos)",
            largura: "12rem",
            alinhamento: "center",
            texto: lme.idadeinicio,
        },
    ]

    return (
        <>
            <>
                <Fence titulo="1 - Dados pessoais">
                    {dados.map(c =>
                        <Field key={c.titulo} dados={c} />
                    )}
                </Fence>
            </>
{/* 
            <Grid container spacing={1}>
                <Grid container item xs={10}  >
                    <Box mt={1} width={1} border={1} borderColor="black">
                        <Grid container direction="column" justifyContent="flex-end" alignItems="stretch">
                            <Grid item>
                                <Box mt={-1} ml={2} display="flex" >
                                    <Typography component={'span'} variant="caption" noWrap={true} >
                                        <Box bgcolor="white" px={1}>1 - Nome completo do paciente</Box>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box ml={1}>
                                    <Typography component={'span'} variant={'h5'} align={'left'}>
                                        {clienteContext.nome ? <Box fontWeight="fontWeightBold">{clienteContext.nome}</Box> : <Box style={{ color: "white" }}>-</Box>}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid container item xs={2}>
                    <Box mt={1} width={1} border={1} borderColor="black">
                        <Grid container direction="column" justifyContent="center" alignItems="center">
                            <Grid item>
                                <Box mt={-1} display="flex">
                                    <Typography component={'span'} variant="caption" noWrap={true} >
                                        <Box bgcolor="white" px={1}>2 - Sexo</Box>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box>
                                    <Typography component={'span'} variant={'h6'} align={'center'}>
                                        <Box>{clienteContext.sexo}</Box>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid> */}
        </>
    )
}

export default Linha3Relatorio