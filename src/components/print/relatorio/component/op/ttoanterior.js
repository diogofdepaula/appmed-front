import React, { useContext } from 'react';
import { LMEPrintContext } from '../../../../../pages/print/printjob';
import Fence from '../../../fence';

const TtoAnterior = () => {

    const lme = useContext(LMEPrintContext)

    return (
        <>
            <Fence
                titulo={'8 - Tratamentos anteriores (informar medicamentos, tempo de uso e efeito)'}
                stretch={1}
            >
                {lme.relatorio.ttoanterior}
            </Fence>
        </>
    )
}

export default TtoAnterior