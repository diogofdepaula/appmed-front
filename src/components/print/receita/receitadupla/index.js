import { Box } from '@mui/material';
import React from 'react';
import PageA4 from '../../pagea4';
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
            <PageA4>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: 1,
                        alignItems: 'center',
                        gap: 5,
                    }}
                >
                    <Box
                        sx={{
                            width: '760px',
                            transform: "rotate(270deg) translate(140px, 0px)",
                        }}
                    >
                        <Inside mesmais={1} />
                    </Box>
                    <Box
                        sx={{
                            width: '760px',
                            transform: "rotate(270deg) translate(448px, 0px)",
                        }}
                    >
                        <Inside mesmais={0} />
                    </Box>
                </Box>
            </PageA4>
        </>
    )
}

export default ReceitaDupla