import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { PrintContext } from '../../../../App';
import PageSize from '../../../../pages/print/component/pagesize';

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
            <Box
                mt={2}
            >
                <Typo>
                    {comentario.split("\n").map((i, key) => {
                        return <div key={key}>{i}</div>;
                    })}
                </Typo>
            </Box>
        </>
    )
}

export default Comentario