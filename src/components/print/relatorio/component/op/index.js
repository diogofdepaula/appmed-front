import { Box } from '@mui/material';
import Page from '../../../page';
import Linha1Relatorio from '../linha1';
import Linha2Relatorio from '../linha2';
import Linha3Relatorio from '../linha3';
import MedicamentoRelatorio from '../medicamento';
import RiscoFratura from './risco';
import HxFratura from './hxfraturas';
import Dxa from './dxa';
import Frax from './frax';
import Condicoes from './condicoes';
import TtoAnterior from './ttoanterior';
import Linha10Relatorio from '../linha10';
import Linha11Relatorio from '../linha11';
import Linha12Relatorio from '../linha12';

const RelatorioOp = () => {

    return (
        <>
            <Page size="a4">
                <Box
                    sx={{
                        display: 'flex',
                        borderBlockColor: "black",
                        borderStyle: "solid",
                        borderWidth: "5px",
                        p: 1,
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: "100%",
                            width: "100%",
                            gap: 1,
                        }}
                    >
                        <Linha1Relatorio />
                        <Linha3Relatorio />
                        <Linha2Relatorio />
                        <MedicamentoRelatorio />
                        <HxFratura />
                        <Dxa />
                        <RiscoFratura />
                        <Frax />
                        <Condicoes />
                        <TtoAnterior />
                        <Linha10Relatorio />
                        <Linha11Relatorio />
                        <Linha12Relatorio />
                    </Box>
                </Box>
            </Page>
        </>
    )
}

export default RelatorioOp