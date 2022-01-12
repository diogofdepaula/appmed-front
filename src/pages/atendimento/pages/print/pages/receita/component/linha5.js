import { Box, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import PageSize from '../../../component/pagesize';
import { PrescricaoPrintContext } from './prescricao';

const Linha5 = ({ tipo }) => {

    const prescricao = useContext(PrescricaoPrintContext)

    const Typo = (prop) => {

        if (PageSize(tipo)) {
            return (
                <Typography
                    component='span'
                    variant='h6'
                    style={{
                        fontSize: 16,
                        textAlign: 'justify'
                    }}
                >
                    {prop.children}
                </Typography>
            )
        } else {
            return (
                <Typography
                    component='span'
                    variant='h6'
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
                style={{
                    marginTop: 5
                }}
            >
                <Typo>
                    {prescricao.orientacoes.split("\n").map((i, key) => {
                        return <div key={key}>{i}</div>;
                    })}
                </Typo>
            </Box>
        </>
    )
}

export default Linha5