import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { LMEPrintContext } from '../../../../../pages/print/printjob'
import FitText from '../../../../../pages/print/component/fittext';
import Fence from '../../../fence';
import Linha5Relatorio from '../../../relatorio/component/linha5';
import { PrintContext } from '../../../../../App';
import { ProvasAtividadeInflamatoria } from '../../../relatorio/component/linha4';
import { DoençaCID, LmeComRelatorio } from '../../../../../utils/inquiries';

const Linha7LME = () => {

    const { renovacao } = useContext(PrintContext)
    const lme = useContext(LMEPrintContext)

    const Renovacao = () => {
        if (!(renovacao && LmeComRelatorio(lme))) return <></>
        if (DoençaCID(lme.cid10) === 'op' && renovacao) return <></>

        return (
            <>
                <Fence titulo="Dados pertinentes ao Relatório médico específico da doença solicitados na renovação" >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: 'row',
                            gap: 1,
                            width: 1,
                        }}
                    >
                        <Box
                            sx={{
                                flexGrow: 1
                            }}
                        >
                            <Linha5Relatorio />
                        </Box>
                        <Box
                            sx={{
                                flexGrow: 1
                            }}
                        >
                            <ProvasAtividadeInflamatoria />
                        </Box>
                    </Box>
                </Fence>
            </>
        )
    }

    return (
        <>
            <Fence titulo="11 e 12 - Relatório médico (Anamnese e tratamento prévio)" stretch={1}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        width: 1,
                    }}
                >
                    <FitText
                        texto={lme.anamnese}
                        inicial={8}
                        maxfont={24}
                        erro={50}
                        padding={1}
                        align='justify'
                    />
                    <Renovacao />
                </Box>
            </Fence>
        </>
    )
}

export default Linha7LME