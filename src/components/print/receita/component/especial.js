import { Box } from '@mui/material';
import PageSize from '../../../../pages/print/component/pagesize';

const Especial = ({ controlado, tipo }) => {
    if (!controlado) return null;

    const isA5 = !!PageSize(tipo);

    const boxSx = isA5
        ? { display: 'block', pt: 0, pb: 4 }
        : { display: 'block', pt: 0, pb: 1 };

    const titleSx = isA5
        ? { fontSize: 32, fontWeight: 'bold', textAlign: 'center' }
        : { fontSize: 38, fontWeight: 'bold', letterSpacing: '0px', textAlign: 'center' };

    const identSx = isA5
        ? { textAlign: 'center', fontSize: 12, letterSpacing: '0px' }
        : { textAlign: 'center' };

    return (
        <Box sx={boxSx}>
            <Box component="div" sx={titleSx}>
                RECEITA DE CONTROLE ESPECIAL
            </Box>

            <Box
                component="div"
                sx={{
                    ...identSx,
                    typography: 'subtitle2'
                }}
            >
                Clínica Médica Diéguez de Paula - 17.749.297/0001-95 - 7275714
            </Box>

            <Box component="div" sx={{ ...identSx, typography: 'subtitle2' }}>
                Rua Presidente Getúlio Vargas, n. 1070, 85010-280, Guarapuava - PR
            </Box>

            <Box component="div" sx={{ ...identSx, typography: 'subtitle2' }}>
                Dr. Diogo Ferreira de Paula - CRM 23838/PR
            </Box>
        </Box>
    );
};

export default Especial;