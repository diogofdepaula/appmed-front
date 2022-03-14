import React, { useCallback, useContext } from 'react';
import { AtendimentoContext } from '../..';
import ApresentacaoSet from '../components/apresentacaoset';
import LMEDoses from '../components/lmedoses';
import LMEForkSet from '../components/lmeforkset';
import MedicamentoSet from '../components/medicamentoset';
import PosologiaNaoPadraoSet from '../components/posologianaopadraoset';
import PosologiaSet from '../components/posologiaset';
import PrescricaoVarSet from '../components/prescricaovarset';

const PrescricaoEditor = () => {

    const { step } = useContext(AtendimentoContext)

    const GetStep = useCallback(() => {
        switch (step) {
            case 11:
                return <MedicamentoSet />
            case 21:
                return <ApresentacaoSet />
            case 31:
                return <PosologiaSet />
            case 32:
                return <PosologiaNaoPadraoSet />
            case 41:
                return <PrescricaoVarSet />
            case 51:
                return <LMEDoses />
            case 61:
                return <LMEForkSet />
            default:
                return <div />
        }
    }, [step]
    )

    return (
        <div>
            {step !== 0 ? <GetStep /> : <div />}
        </div>
    )
}

export default PrescricaoEditor