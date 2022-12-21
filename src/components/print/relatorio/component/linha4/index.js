import { Box } from '@mui/material';
import { useContext } from 'react';
import { PrintContext } from '../../../../../App';
import { LMEPrintContext } from '../../../../../pages/print/printjob'
import { DoençaCID } from '../../../../../utils/inquiries';
import Fence from '../../../fence';
import Field from '../../../field';
import CriteriosAIJ from './aij';
import CriteriosAP from './ap';
import CriteriosAR from './ar';
import CriteriosEA from './ea';

export const ProvasAtividadeInflamatoria = () => {

    const { renovacao } = useContext(PrintContext)
    const lme = useContext(LMEPrintContext)

    if (DoençaCID(lme.cid10) !== 'ea' && !renovacao) return <></>

    const titulo = renovacao ? "Últimas provas de atividade inflamatório disponíveis" : "2.1 - Provas de atividade inflamatória"

    return (
        <>
            <Fence
                titulo={titulo}
                stretch={1}
            >
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