import { Box, Typography } from '@mui/material';
import PageSize from '../../../../pages/print/component/pagesize';

const Especial = ({ controlado, tipo }) => {

    if (!controlado) return <></>

    const BoxExterno = (prop) => {

        if (PageSize(tipo)) {
            return (
                <Box style={{
                    // A5
                    display: 'block',
                    paddingTop: 3,
                    paddingBottom: 10,
                }}
                >
                    {prop.children}
                </Box>
            )
        } else {
            return (
                <Box style={{
                    // A4
                    display: 'block',
                    paddingTop: 20,
                    paddingBottom: 1,
                }}>
                    {prop.children}
                </Box>
            )
        }
    }

    const TypoEspecial = (prop) => {

        if (PageSize(tipo)) {
            // A5
            return (
                <Typography
                    style={{
                        fontSize: 32,
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}
                >
                    {prop.children}
                </Typography>
            )
        } else {
            return (
                <Typography
                    style={{
                        fontSize: 44,
                        fontWeight: 'bold',
                        letterSpacing: '0px',
                        textAlign: 'center',
                    }}
                >
                    {prop.children}
                </Typography>
            )
        }
    }

    const TypoIdentif = (prop) => {

        if (PageSize(tipo)) {
            // A5
            return (
                <Typography
                    style={{
                        fontVariant: 'subtitle2',
                        fontSize: 12,
                        letterSpacing: '0px',
                        textAlign: 'center'
                    }}
                >
                    {prop.children}
                </Typography>
            )
        } else {
            return (
                <Typography
                    style={{
                        fontVariant: 'subtitle2',
                        textAlign: 'center'
                    }}
                >
                    {prop.children}
                </Typography>
            )
        }
    }

    return (
        <>
            <BoxExterno>
                <TypoEspecial>
                    RECEITA DE CONTROLE ESPECIAL
                </TypoEspecial>
                <TypoIdentif>
                    Clínica Médica Diéguez de Paula - 17.749.297/0001-95 - 7275714
                </TypoIdentif>
                <TypoIdentif>
                    Rua Presidente Getúlio Vargas, n. 1070, 85010-280, Guarapuava - PR
                </TypoIdentif>
                <TypoIdentif>
                    Dr. Diogo Ferreira de Paula - CRM 23838/PR
                </TypoIdentif>
            </BoxExterno>
        </>
    )
}

export default Especial