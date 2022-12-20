import { Box } from '@mui/material';
import { useContext } from 'react';
import { LMEPrintContext } from '../../../../../pages/print/printjob'
import { BoxTitulo, Caixa } from '../../../components';

const CriteriosAIJ = () => {

    const lme = useContext(LMEPrintContext)

    const ProvaAtividadeInflamatoria = () => {
        return (
            <>
                <BoxTitulo titulo={'Provas de Atividade Inflamatória'} />
                <Box
                    sx={{
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <Box>
                        VHS: {lme.relatorio.vhs}
                    </Box>
                    <Box>
                        PCR: {lme.relatorio.pcr}
                    </Box>
                </Box>
            </>
        )
    }

    return (
        <>
            <Caixa>
                <Box
                    sx={{
                        p: 1,
                        textAlign: 'justify',
                        fontSize: 14,
                        width: '100%',
                    }}
                >
                    {lme.anamnese}
                </Box>
            </Caixa>
            <Caixa largura={'16rem'}>
                <ProvaAtividadeInflamatoria />
            </Caixa>
        </>
    )
}

export default CriteriosAIJ