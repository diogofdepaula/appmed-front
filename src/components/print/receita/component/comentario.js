import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { PrintContext } from '../../../../pages/atendimento';
import PageSize from '../../../component/pagesize';

const Comentario = ({ tipo }) => {

    const { comentario } = useContext(PrintContext)

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
                    {comentario}
                </Typo>
            </Box>
        </>
    )
}

export default Comentario