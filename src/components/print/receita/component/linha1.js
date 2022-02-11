import { Box, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { ImpressaoContext } from '../../../../pages/atendimento';
import PageSize from '../../../../pages/print/component/pagesize';
import { PrescricaoPrintContext } from './prescricao';

const Linha1 = ({ tipo, previoususo }) => {

    const prescricao = useContext(PrescricaoPrintContext)
    const { impressao } = useContext(ImpressaoContext)

    const Typo = (prop) => {

        if (PageSize(tipo)) {
            return (
                <Typography
                    style={{
                        fontSize: 16,
                        textAlign: 'center'
                    }}
                >
                    {prop.children}
                </Typography>
            )
        } else {
            return (
                <Typography
                    style={{
                        fontSize: 22,
                        textAlign: 'center'
                    }}
                >
                    {prop.children}
                </Typography>
            )
        }
    }

    return (
        <>
            {previoususo === prescricao.apresentaco.uso ?
                <div />
                :
                <Box>
                    <Grid container direction='row' spacing={3}>
                        <Grid item xs={6} />
                        <Grid item >
                            <Typo>
                                {prescricao.apresentaco.uso}
                            </Typo>
                        </Grid>
                        <Grid item >
                            {prescricao.continuo &&
                                <Typo>
                                    {!impressao.continuo && "uso contínuo"}
                                </Typo>
                            }
                        </Grid>
                    </Grid>
                </Box>
            }
        </>
    )
}

export default Linha1