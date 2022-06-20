import { Box } from '@mui/material';
import { useContext } from 'react';
import { LMEPrintContext } from '../..';
import { DoençaCID } from '../../../../../utils/inquiries';
import Fence from '../../../fence';
import Field from '../../../field';
import CriteriosAIJ from './aij';
import CriteriosAP from './ap';
import CriteriosAR from './ar';
import CriteriosEA from './ea';

export const ProvasAtividadeInflamatoria = () => {
    const lme = useContext(LMEPrintContext)
    if (DoençaCID(lme.cid10) !== 'ea') return <></>

    return (
        <>
            <Fence titulo="2.1 - Provas de atividade inflamatória">
                <Field
                    dados={{
                        titulo: "VHS",
                        texto: lme.relatorio.vhs,
                        alinhamento: "center",
                        negrito: "bold",
                        grow: "1",
                    }}
                />
                <Field
                    dados={{
                        titulo: "PCR",
                        texto: lme.relatorio.pcr,
                        alinhamento: "center",
                        negrito: "bold",
                        grow: "1",
                    }}
                />
            </Fence>
        </>
    )
}

const Linha4Relatorio = () => {

    const lme = useContext(LMEPrintContext)

    const SetSection = () => {
        const Section = {
            'ar': <CriteriosAR />,
            'ea': <CriteriosEA />,
            'ap': <CriteriosAP />,
            'aij': <CriteriosAIJ />,
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
            <ProvasAtividadeInflamatoria />
        </>
    )
}

export default Linha4Relatorio