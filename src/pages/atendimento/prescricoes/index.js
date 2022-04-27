import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { AtendimentoNavigateContext } from '..';

const Section = () => {
    const { section } = useContext(AtendimentoNavigateContext)
    return section
}

const PrescricoesMain = () => {



    return (
        <>
            <Box
                sx={{
                    mt: 2,
                    mx: 1,
                }}
            >
                PrescricoesMain
                <Section />
            </Box>
        </>
    )
}

export default PrescricoesMain