import { Box } from '@mui/material';
import LMESet from './component/impressaoset/lmeset';
import PrescricoesSet from './component/impressaoset/prescricaoset';
import RequisicaoSet from './component/impressaoset/requisicaoset';
import TempoSet from './component/impressaoset/temposet';
import TermoSet from './component/impressaoset/termoset';

const Print = () => {

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 1,
                }}
            >
                <Box>
                    <PrescricoesSet />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <LMESet />
                    <TermoSet />
                </Box>
                <Box>
                    <RequisicaoSet />
                </Box>
                <Box>
                    <TempoSet />
                </Box>
            </Box>
        </>
    )
}

export default Print