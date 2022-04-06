import React, { useContext } from 'react';
import { AtendimentoNavigateContext } from '../..';

const Section = () => {
    const { section } = useContext(AtendimentoNavigateContext)
    return section
}

const PrescricaoEditor = () => {

    // const { step } = useContext(AtendimentoNavigateContext)

    // const GetStep = useCallback(() => {
    //     switch (step) {
    //         case 11:
    //             return <MedicamentoSet />
    //         case 21:
    //             return <ApresentacaoSet />
    //         case 31:
    //             return <PosologiaSet />
    //         case 32:
    //             return <PosologiaNaoPadraoSet />
    //         case 41:
    //             return <PrescricaoVarSet />
    //         case 51:
    //             return <LMEDoses />
    //         case 61:
    //             return <LMEForkSet />
    //         default:
    //             return <div>{step}</div>
    //     }
    // }, [step]
    // )

    return (
        <>
            <Section />
        </>
    )
}

export default PrescricaoEditor