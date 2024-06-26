import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { LoginContext, PrintContext } from '../../../../App';
import PageSize from '../../../../pages/print/component/pagesize';
import { PrescricaoPrintContext } from './prescricao';

const Linha2 = ({ tipo }) => {

    const prescricao = useContext(PrescricaoPrintContext)
    const { nomecomercial } = useContext(PrintContext)
    const { local } = useContext(LoginContext)

    const texto = () => {
        let texto = ""
        if (local.cod === 'consultorio' && tipo !== 'lme' && tipo !== undefined) {
            prescricao.medicamento.nomescomerciais?.sort().map((n, i) => {
                if (i === 0) {
                //if (n.id === prescricao.medicamento.nomescomerciais[0].id) {
                    return texto = texto.concat(n.nomefantasia)
                } else if (i === prescricao.medicamento.nomescomerciais.length - 1) {
                    return texto = texto.concat(' ou ', n.nomefantasia)
                } else {
                    return texto = texto.concat(', ', n.nomefantasia)
                }
            })
        } else {
            texto = prescricao.medicamento.farmaco
        }
        return texto
    }

    const Typo = (prop) => {

        if (PageSize(tipo)) {
            return (
                <Typography
                    variant='h5'
                    style={{
                        fontSize: 28,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        letterSpacing: 2
                    }}
                >
                    {prop.children}
                </Typography>
            )
        } else {
            return (
                <Typography
                    variant='h4'
                    style={{
                        fontWeight: 'bold',
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
            <Box display="flex">
                <Typo>
                    {nomecomercial ? texto() : prescricao.medicamento.farmaco}
                </Typo>
            </Box>
        </>
    )
}

export default Linha2