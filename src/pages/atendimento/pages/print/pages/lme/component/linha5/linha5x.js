import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'

const Linha5xLME = (props) => {

    return (
        <>
            <Box>
                <Grid container>
                    <Grid container item xs={8} direction="row" justify="center" alignItems="center">
                        <Grid item xs>
                            <Box display="flex">
                                <Box borderTop={1} borderRight={1} height={1} width={"5%"}>
                                    <Typography component={'span'} variant="h6" noWrap={true} align="center">
                                        <Box>{props.numero + 1}</Box>
                                    </Typography>
                                </Box>
                                <Box borderTop={1} flexGrow={1}>
                                    <Typography component={'span'} variant="h6" noWrap={true} >
                                        <Box ml={1} fontWeight="fontWeightBold" >{props.prescricao.medicamento.farmaco} - {props.prescricao.apresentaco.descricao}</Box>
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container item xs={4}>
                        <Box width={1} borderLeft={1}>
                            <Grid container item direction="row" justify="center" alignItems="stretch">
                                <Grid item xs>
                                    <Box borderTop={1} borderRight={1} height={1}>
                                        <Typography component={'span'} variant="h6" noWrap={true} align="center">
                                            {props.prescricao.lmemes1 ? <Box>{props.prescricao.lmemes1}</Box> : <Box style={{ color: "white" }}>-</Box>}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs>
                                    <Box borderTop={1} borderRight={1} height={1}>
                                        <Typography component={'span'} variant="h6" noWrap={true} align="center">
                                            {props.prescricao.lmemes2 ? <Box>{props.prescricao.lmemes2}</Box> : <Box style={{ color: "white" }}>-</Box>}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs>
                                    <Box borderTop={1} borderRight={1} height={1}>
                                        <Typography component={'span'} variant="h6" noWrap={true} align="center">
                                            {props.prescricao.lmemes3 ? <Box>{props.prescricao.lmemes3}</Box> : <Box style={{ color: "white" }}>-</Box>}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs>
                                    <Box borderTop={1} borderRight={1} height={1}>
                                        <Typography component={'span'} variant="h6" noWrap={true} align="center">
                                            {props.prescricao.lmemes4 ? <Box>{props.prescricao.lmemes4}</Box> : <Box style={{ color: "white" }}>-</Box>}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs>
                                    <Box borderTop={1} borderRight={1} height={1}>
                                        <Typography component={'span'} variant="h6" noWrap={true} align="center">
                                            {props.prescricao.lmemes5 ? <Box>{props.prescricao.lmemes5}</Box> : <Box style={{ color: "white" }}>-</Box>}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs>
                                    <Box borderTop={1} height={1}>
                                        <Typography component={'span'} variant="h6" noWrap={true} align="center">
                                            {props.prescricao.lmemes6 ? <Box>{props.prescricao.lmemes6}</Box> : <Box style={{ color: "white" }}>-</Box>}
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha5xLME