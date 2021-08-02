import { Box } from '@material-ui/core';
import React from 'react';
import PageA5 from '../../component/pagea5';
import Data from '../component/data';
import Identificacao from '../component/identificacao';
import Prescricao from '../component/prescricao';

const ReceitaA5 = ({ prescricoes, via, mes, tipo }) => {

    return (
        <>
            <PageA5>
                <Box width={1} height={1} display="block">
                    <Box display="block" height={1}>
                        <Box justifyContent="center">
                            <Box display="block">
                                <Identificacao tipo={tipo} />
                                {prescricoes?.map((p, i) =>
                                    <div key={i}>
                                        <Prescricao
                                            prescricao={p}
                                            mes={mes}
                                            tipo={tipo}
                                            previoususo={prescricoes[i -1]?.apresentaco.uso}
                                        />
                                    </div>
                                )}
                            </Box>
                        </Box>
                    </Box>
                    <Data mes={mes} tipo={tipo} />
                </Box>
            </PageA5>
        </>
    )
}

export default ReceitaA5