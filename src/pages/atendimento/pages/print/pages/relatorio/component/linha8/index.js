import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { LMEPrintContext } from '../..'
import Linha8xRelatorio from './index8x'
import Linha81Relatorio from './linha81'

const Linha8Relatorio = () => {

    const lme = useContext(LMEPrintContext)

    const indices = [
        [

            ['medicamento1', lme.relatorio.medicamento1],
            ['dose1', lme.relatorio.dose1],
            ['inicio1', lme.relatorio.inicio1],
            ['fim1', lme.relatorio.fim1],
            ['motivo1', lme.relatorio.motivo1],
        ],
        [

            ['medicamento2', lme.relatorio.medicamento2],
            ['dose2', lme.relatorio.dose2],
            ['inicio2', lme.relatorio.inicio2],
            ['fim2', lme.relatorio.fim2],
            ['motivo2', lme.relatorio.motivo2],
        ],
        [

            ['medicamento3', lme.relatorio.medicamento3],
            ['dose3', lme.relatorio.dose3],
            ['inicio3', lme.relatorio.inicio3],
            ['fim3', lme.relatorio.fim3],
            ['motivo3', lme.relatorio.motivo3],
        ],
        [

            ['medicamento4', lme.relatorio.medicamento4],
            ['dose4', lme.relatorio.dose4],
            ['inicio4', lme.relatorio.inicio4],
            ['fim4', lme.relatorio.fim4],
            ['motivo4', lme.relatorio.motivo4],
        ],
        [

            ['medicamento5', lme.relatorio.medicamento5],
            ['dose5', lme.relatorio.dose5],
            ['inicio5', lme.relatorio.inicio5],
            ['fim5', lme.relatorio.fim5],
            ['motivo5', lme.relatorio.motivo5],
        ],
        [

            ['medicamento6', lme.relatorio.medicamento6],
            ['dose6', lme.relatorio.dose6],
            ['inicio6', lme.relatorio.inicio6],
            ['fim6', lme.relatorio.fim6],
            ['motivo6', lme.relatorio.motivo6],
        ],
        [

            ['medicamento7', lme.relatorio.medicamento7],
            ['dose7', lme.relatorio.dose7],
            ['inicio7', lme.relatorio.inicio7],
            ['fim7', lme.relatorio.fim7],
            ['motivo7', lme.relatorio.motivo7],
        ],
    ]

    return (
        <>
            <Grid container item >
                <Box mt={2} width={1} border={1} borderColor="black">
                    <Grid container direction="column" justify="flex-end" alignItems="stretch">
                        <Grid item>
                            <Box mt={-1} ml={2} display="flex">
                                <Typography component={'span'} variant="caption" noWrap={true} >
                                    <Box bgcolor="white" px={1}>14 - Avaliação farmacoterapêutica (histórico de uso anterior de medicamentos)</Box>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box p={1}>
                                <Box width={1} border={1} borderColor="black">
                                    <Linha81Relatorio />
                                    {indices.map((p, i) =>
                                        p[0][1] !== "" ?
                                            <div key={i}>
                                                <Linha8xRelatorio prescricao={p} />
                                            </div>
                                            :
                                            <div key={i}></div>
                                    )}
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </>
    )
}

export default Linha8Relatorio

