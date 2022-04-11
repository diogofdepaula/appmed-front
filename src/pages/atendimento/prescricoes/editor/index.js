import React, { useContext } from 'react';
import { AtendimentoNavigateContext } from '../..';

const Section = () => {
    const { section } = useContext(AtendimentoNavigateContext)
    return section
}

const PrescricaoEditor = () => {

    return (
        <>
            <Section />
        </>
    )
}

export default PrescricaoEditor