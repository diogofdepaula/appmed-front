import { Box } from '@mui/material';
import AtestadosSet from './component/impressaoset/atestadoset';
import LMESet from './component/impressaoset/lmeset';
import PrescricoesSet from './component/impressaoset/prescricaoset';
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
                    <AtestadosSet />
                </Box>
                <Box>
                    <TempoSet />
                </Box>
            </Box>
        </>
    )
}

export default Print