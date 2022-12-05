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
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "50%",
                    width: '72%',
                    transform: "rotate(270deg) translate(0px, 146px) scale(1, 1.355)",
                    // WebkitTransformOrigin: "50.7% 36.3%"
                }}
            >
                <Cabecalho tipo={tipo} dupla={dupla} />
                <Box
                    sx={{
                        height: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        border: 3,
                        p: 4,
                    }}
                >
                    <Box
                        sx={{
                            height: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'justify',
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
            </Box>
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
                    }}
                >
                    <Inside mesmais={1} />
                    <Inside mesmais={0} />
                </Box>
            </PageA4>
        </>
    )
}

export default ReceitaDupla