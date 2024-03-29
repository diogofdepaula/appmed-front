import { Box } from '@mui/material';
import React from 'react';
import Page from '../../page';
import Cabecalho from '../component/cabecalho';
import Data from '../component/data';
import Identificacao from '../component/identificacao';
import Prescricao from '../component/prescricao';
import Rodape from '../component/rodape';
import Via from '../component/via';

const ReceitaDupla = ({ prescricoes, via, mes, tipo, dupla }) => {

    const Inside = ({ mesmais }) => {

        return (
            <>
                <Cabecalho tipo={tipo} dupla={dupla} />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '915px',
                        border: 3,
                        p: 4,
                    }}
                >
                    <Box
                        sx={{
                            height: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            typography: 'body1',
                            fontSize: 22,
                            p: 2,
                        }}
                    >
                        <Via via={via} tipo={tipo} />
                        <Identificacao tipo={tipo} />
                        {prescricoes?.map((p, i) => <div key={i}><Prescricao prescricao={p} mes={mes + mesmais} tipo={tipo} /></div>)}
                    </Box>
                    <Data mes={mes + mesmais} tipo={tipo} />
                </Box>
                <Rodape />
            </>
        )
    }

    return (
        <>
            <Page size="a4">
                <Box
                    sx={{
                        display: 'inline-flex',
                        height: '1535px',
                        gap: 5,
                    }}
                >
                    <Box
                        sx={{
                            width: '760px',
                           transform: "rotate(270deg) translate(385px, 390px)",
                        }}
                    >
                        <Inside mesmais={1} />
                    </Box>
                    <Box
                        sx={{
                            width: '760px',
                            transform: "rotate(270deg) translate(-385px, -410px)",
                        }}
                    >
                        <Inside mesmais={0} />
                    </Box>
                </Box>
            </Page>
        </>
    )
}

export default ReceitaDupla