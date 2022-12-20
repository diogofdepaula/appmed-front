import React, { useContext } from 'react';
import { LMEPrintContext } from '../../../../../pages/print/printjob'
import FitText from '../../../../../pages/print/component/fittext';
import Fence from '../../../fence';

const Linha7LME = () => {

    const lme = useContext(LMEPrintContext)

    return (
        <>
            <Fence titulo="11 e 12 - Relatório médico (Anamnese e tratamento prévio" stretch={1}>
                <FitText
                    texto={lme.anamnese}
                    inicial={8}
                    maxfont={24}
                    erro={50}
                    padding={1}
                    align='justify'
                />
            </Fence>
        </>
    )
}

export default Linha7LME