import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { LMEPrintContext } from '../..';
import { DoençaCID } from '../../../../../utils/inquiries';
import Fence from '../../../fence';
import CriteriosAP from './ap';
import CriteriosAR from './ar';
import CriteriosEA, { ProvasAtividadeInflamatoriaEA } from './ea';

const Linha4Relatorio = () => {

    const lme = useContext(LMEPrintContext)

    const SetSection = () => {
        const Section = {
            'ar': <CriteriosAR />,
            'ea': <CriteriosEA />,
            'ap': <CriteriosAP />,
            // 'aij': <CriteriosAIJ />,
            default: <div />
        }
        return Section[DoençaCID(lme.cid10)] || Section.default
    }

    return (
        <>
            <Fence titulo="2 - Critérios clínicos e laboratoriais">
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        display: 'flex',
                        flexDirection: 'row',
                        alignContent: 'stretch',
                        gap: 1,
                        fontSize: 13
                    }}
                >
                    <SetSection />
                </Box>
            </Fence>
            <ProvasAtividadeInflamatoriaEA />
        </>
    )
}

export default Linha4Relatorio