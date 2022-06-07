import React, { useContext } from 'react';
import { LMEPrintContext } from '../..';
import Fence from '../../../fence';

const Linha8Relatorio = () => {

    const lme = useContext(LMEPrintContext)

    return (
        <>
            <Fence
                titulo={'4 - Justificativa para solicitação inicial ou mudança de tratamento'}
                stretch={1}
            >
                {lme.relatorio.justificativa}
            </Fence>
        </>
    )
}

export default Linha8Relatorio

