import { Box, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { PrintContext } from '../../../../App';
import PageSize from '../../../../pages/print/component/pagesize';
import { PrescricaoPrintContext } from './prescricao';

const Linha1 = ({ tipo, previoususo }) => {

    const prescricao = useContext(PrescricaoPrintContext)
    const { continuo } = useContext(PrintContext)

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
                                    {!continuo && "uso contínuo"}
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