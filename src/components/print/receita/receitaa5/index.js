import { Box } from '@mui/material';
import React from 'react';
import Page from '../../page';
import Comentario from '../component/comentario';
import Data from '../component/data';
import Identificacao from '../component/identificacao';
import Prescricao from '../component/prescricao';
import Especial from '../component/especial';

const ReceitaA5 = ({ prescricoes, via, mes, tipo, last }) => {

    const controlado = prescricoes?.some(p => p.medicamento.controlado)

    return (
        <>
            <Page size="a5">
                <Box 
                    sx={{
                        width: 1,
                        height: 1,
                        display: 'block',
                    }}
                >
                    <Box display="block" height={1}>
                        <Box justifyContent="center">
                            <Box display="block">
                                <Especial controlado={controlado} />
                                <Identificacao tipo={tipo} />
                                {prescricoes?.map((p, i) =>
                                    <Prescricao
                                        key={i}
                                        prescricao={p}
                                        mes={mes}
                                        tipo={tipo}
                                        previoususo={prescricoes[i - 1]?.apresentaco.uso}
                                    />
                                )}
                            </Box>
                            {last && <Comentario />}
                        </Box>
                    </Box>
                    <Data mes={mes} tipo={tipo} />
                </Box>
            </Page>
        </>
    )
}

export default ReceitaA5