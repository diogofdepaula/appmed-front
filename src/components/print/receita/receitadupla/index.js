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
            <Box width={1} height={1} display="block">
                <Cabecalho tipo={tipo} dupla={dupla} />
                <Box
                    style={{
                        height: 'calc(100% - 118px)', // se mudar o Cabecalho tem que ajustar aqui depois
                        padding: 40,
                        border: "0.2rem solid",
                        borderColor: "black",
                    }}
                >
                    <Box
                        style={{
                            display: "block",
                            height: "100%",
                        }}
                    >
                        <Box justifyContent="center">
                            <Box display="block">
                                <Via via={via} tipo={tipo} />
                                <Identificacao tipo={tipo} />
                                {prescricoes?.map((p, i) => <div key={i}><Prescricao prescricao={p} mes={mes + mesmais} tipo={tipo} /></div>)}
                            </Box>
                        </Box>
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
                    style={{
                        width: '100%',
                        height: '100%',
                        display: "block",
                        // backgroundColor: 'yellow',
                    }}
                >
                    <Box
                        style={{
                            width: '72%',
                            height: '67.3%',
                            // backgroundColor: 'red',
                            transform: "rotate(270deg)",
                            WebkitTransformOrigin: "50.7% 36.3%"
                        }}
                    >
                        <Inside mesmais={1} />
                    </Box>
                    <Box
                        style={{
                            width: '72%',
                            height: '67.3%',
                            // backgroundColor: 'blue',
                            transform: "rotate(270deg)",
                            WebkitTransformOrigin: "33.4% 23.7%"
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