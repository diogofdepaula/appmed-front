import { Box, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { LMEPrintContext } from '../..'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const Linha104Relatorio = () => {

    const lme = useContext(LMEPrintContext)

    return (
        <>
            <Box>
                <Grid container direction="row">
                    <Grid item xs={2}>
                        <Box borderRight={1} pl={1} display="flex" justifyContent="center">
                            {lme.relatorio.infeccaoviral ?
                                <div> <CheckBoxOutlinedIcon /> Sim <CheckBoxOutlineBlankIcon />Não</div>
                                :
                                <div> <CheckBoxOutlineBlankIcon /> Sim <CheckBoxOutlinedIcon />Não</div>
                            }
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box height={1} borderRight={1}>
                            <Typography component={'span'} variant="body1" noWrap={true} >
                                <Box ml={1}>Infecção viral</Box>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box borderRight={1} pl={1} display="flex" justifyContent="center">
                            {lme.relatorio.neoplasia ?
                                <div> <CheckBoxOutlinedIcon /> Sim <CheckBoxOutlineBlankIcon />Não</div>
                                :
                                <div> <CheckBoxOutlineBlankIcon /> Sim <CheckBoxOutlinedIcon />Não</div>
                            }
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography component={'span'} variant="body1" noWrap={true} >
                            <Box ml={1}>Neoplasia</Box>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container direction="row">
                    <Grid item xs={2}>
                        <Box borderTop={1} borderRight={1} pl={1} display="flex" justifyContent="center">
                            {lme.relatorio.hepatite ?
                                <div> <CheckBoxOutlinedIcon /> Sim <CheckBoxOutlineBlankIcon />Não</div>
                                :
                                <div> <CheckBoxOutlineBlankIcon /> Sim <CheckBoxOutlinedIcon />Não</div>
                            }
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box height={1} borderTop={1} borderRight={1}>
                            <Typography component={'span'} variant="body1" noWrap={true} >
                                <Box ml={1}>Hepatite B ou C</Box>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box borderTop={1} borderRight={1} pl={1} display="flex" justifyContent="center">
                            {lme.relatorio.anemia ?
                                <div> <CheckBoxOutlinedIcon /> Sim <CheckBoxOutlineBlankIcon />Não</div>
                                :
                                <div> <CheckBoxOutlineBlankIcon /> Sim <CheckBoxOutlinedIcon />Não</div>
                            }
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box borderTop={1}>
                            <Typography component={'span'} variant="body1" noWrap={true} >
                                <Box ml={1}>Anemia/plaquetopenia/leucopenia</Box>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container direction="row">
                    <Grid item xs={2}>
                        <Box borderTop={1} borderRight={1} pl={1} display="flex" justifyContent="center">
                            {lme.relatorio.infeccaobacteriana ?
                                <div> <CheckBoxOutlinedIcon /> Sim <CheckBoxOutlineBlankIcon />Não</div>
                                :
                                <div> <CheckBoxOutlineBlankIcon /> Sim <CheckBoxOutlinedIcon />Não</div>
                            }
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box height={1} borderTop={1} borderRight={1}>
                            <Typography component={'span'} variant="body1" noWrap={true} >
                                <Box ml={1}>Infecção bacteriana</Box>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box borderTop={1} borderRight={1} pl={1} display="flex" justifyContent="center">
                            {lme.relatorio.alteracaohepatica ?
                                <div> <CheckBoxOutlinedIcon /> Sim <CheckBoxOutlineBlankIcon />Não</div>
                                :
                                <div> <CheckBoxOutlineBlankIcon /> Sim <CheckBoxOutlinedIcon />Não</div>
                            }
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box borderTop={1}>
                            <Typography component={'span'} variant="body1" noWrap={true} >
                                <Box ml={1}>Alteração da função hepática</Box>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha104Relatorio