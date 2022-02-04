import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import PageSize from '../../../component/pagesize';
import { PrescricaoPrintContext } from './prescricao';

const Linha4 = ({ tipo }) => {

    const prescricao = useContext(PrescricaoPrintContext)

    const Typo = (prop) => {

        if (PageSize(tipo)) {
            return (
                <Typography
                    component='span'
                    variant='h6'
                    style={{
                        fontSize: 18,
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

    const Texto = () => {

        let texto = prescricao.usoposologiapadrao ? prescricao.posologia.posologia : prescricao.posologianaopadrao

        return (
            <Typo>
                {texto.split("\n").map((i, key) => {
                    return <div key={Math.random() * 1000}>{i}</div>;
                })}
            </Typo>
        )
    }

    return (
        <>
            <Box
                style={{
                    marginBlock: 2,
                }}
            >
                <Texto />
            </Box>
        </>
    )
}

export default Linha4