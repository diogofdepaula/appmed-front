import { Box } from "@mui/material"
import React from 'react'
import Fence from '../../../../fence'
import Field from '../../../../field'

const Linha9Sadt = () => {

    const dadoA = {
        titulo: "48 - Seq. Ref \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
            "49 - Frau Part \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
            "50 - Códido na Operadora/CPF \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
            "51 - Nome do Profissional \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
            "52 - Conselho Profissional \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
            "53 - Número no Conselho \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
            "54 - UF \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
            "55 - Código CBO",
        grow: "1",
    }

    const dadoB = {
        titulo: "58 - Data de Realização de Procedimento em Série \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
            "57 - Assinatura do Beneficiário ou Responsável \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",
        grow: "1",
    }

    return (
        <>
            <Fence titulo="Indicação do(s) Profissional(is) Executante(s)">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: 1,
                        gap: 0.5,
                    }}
                >
                    <Field dados={dadoA} />
                    <Field dados={dadoB} />
                </Box>
            </Fence>
        </>
    )
}

export default Linha9Sadt