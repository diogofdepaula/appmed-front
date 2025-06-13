import { Box } from '@mui/material';
import AtestadosSet from './component/impressaoset/atestadoset';
import LMESet from './component/impressaoset/lmeset';
import PrescricoesSet from './component/impressaoset/prescricaoset';
import TempoSet from './component/impressaoset/temposet';
import TermoSet from './component/impressaoset/termoset';
import PrintJob from './printjob';

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
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        // width: 1,
                        gap: 2,
                    }}
                >
                    <TempoSet />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexShrink: 1,
                        width: '70%',
                        m: 4,
                        gap: 4,
                        zoom: "10%",
                        alignContent: 'flex-start',
                    }}
                >
                    {/* <PrintJob /> */}
                </Box>
            </Box>
        </>
    )
}

export default Print