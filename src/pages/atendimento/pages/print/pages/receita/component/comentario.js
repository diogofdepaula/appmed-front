import { Box, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { ImpressaoContext } from '../../../..';
import PageSize from '../../../component/pagesize';

const Comentario = ({ tipo }) => {

    const { impressao } = useContext(ImpressaoContext)

    const Typo = (prop) => {

        if (PageSize(tipo)) {
            return (
                <Typography
                variant='h6'
                    style={{
                        textAlign: 'justify'
                    }}
                >
                    {prop.children}
                </Typography>
            )
        } else {
            return (
                <Typography
                variant='h5'
                    style={{
                        textAlign: 'justify'
                    }}
                >
                    {prop.children}
                </Typography>
            )
        }
    }

    return (
        <>
            <Box>
                <Typo>
                    {impressao.comentario}
                </Typo>
            </Box>
        </>
    )
}

export default Comentario