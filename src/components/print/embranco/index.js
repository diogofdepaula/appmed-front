import { Box, Typography } from '@mui/material';
import React from 'react';
import PageSize from '../../../pages/print/component/pagesize';
import FitText from '../../../pages/print/component/fittext';
import Data from '../receita/component/data';
import Page from '../page';

const Titulo = ({ embranco, tipo }) => {

    const BoxExterno = (prop) => {

        if (PageSize(tipo)) {
            return (
                <Box style={{
                    // A5
                    display: 'block',
                    paddingTop: 3,
                    paddingBottom: 7,
                }}
                >
                    {prop.children}
                </Box>
            )
        } else {
            return (
                <Box style={{
                    // A4
                    display: 'block',
                    paddingTop: 20,
                    paddingBottom: 1,
                }}>
                    {prop.children}
                </Box>
            )
        }
    }

    const TypoNome = (prop) => {

        if (PageSize(tipo) && embranco.titulo.length <= 27) {
            return (
                <Typography
                    sx={{
                        fontSize: 38,
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}
                >
                    {prop.children}
                </Typography>
            )
        } else if (PageSize(tipo) && embranco.titulo.length > 27) {
            return (
                <Typography
                    style={{
                        fontSize: 32,
                        letterSpacing: '0px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}
                >
                    {prop.children}
                </Typography>
            )
        } else if (!PageSize(tipo) && embranco.titulo.length <= 27) {
            return (
                <Typography
                    style={{
                        fontSize: 48,
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}
                >
                    {prop.children}
                </Typography>
            )
        } else if (!PageSize(tipo) && embranco.titulo.length > 27) {
            return (
                <Typography
                    style={{
                        fontSize: 44,
                        fontWeight: 'bold',
                        letterSpacing: '0px',
                        textAlign: 'center',
                    }}
                >
                    {prop.children}
                </Typography>
            )
        }
    }

    return (
        <>
            <BoxExterno>
                <TypoNome>
                    {embranco.titulo}
                </TypoNome>
            </BoxExterno>
        </>
    )
}


const EmBrancoA5 = ({ embranco, tipo }) => {

    return (
        <>
            <Page size="a5">
                <Box
                    sx={{
                        width: 1,
                        height: 1,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Titulo
                        embranco={embranco}
                        tipo={tipo}
                    />

                    <FitText
                        texto={embranco.texto}
                        inicial={8}
                        maxfont={24}
                        erro={50}
                        padding={1}
                        align='justify'
                    />
                    <Data tipo={tipo} />
                </Box>
            </Page >
        </>
    )
}

export default EmBrancoA5