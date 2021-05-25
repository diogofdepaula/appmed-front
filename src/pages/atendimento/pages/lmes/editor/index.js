import React, { useCallback, useContext } from 'react';
import { AtendimentoContext } from '../../..';
import LMECIDSet from '../components/lmecidset';
import LMEVarSet from '../components/lmevarset';
import RelatorioSet1 from '../relatorio/components/relatorioset1';
import RelatorioSet2 from '../relatorio/components/relatorioset2';
import RelatorioSet3 from '../relatorio/components/relatorioset3';
import RelatorioSet4 from '../relatorio/components/relatorioset4';
import RelatorioSet5 from '../relatorio/components/relatorioset5';
import RelatorioSet6 from '../relatorio/components/relatorioset6';

const LMEEditor = () => {

    const { step } = useContext(AtendimentoContext)

    const GetStep = useCallback(() => {
        switch (step) {
            case 11:
                return <LMECIDSet />
            case 21:
                return <LMEVarSet />
            case 31:
                return <RelatorioSet1 />
            case 41:
                return <RelatorioSet2 />
            case 51:
                return <RelatorioSet3 />
            case 61:
                return <RelatorioSet4 />
            case 71:
                return <RelatorioSet5 />
            case 81:
                return <RelatorioSet6 />
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

export default LMEEditor