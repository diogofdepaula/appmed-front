import { Box } from "@mui/material"
import React from 'react'
import Fence from '../../../../fence'
import Field from '../../../../field'

const Linha9Sadt = () => {

    const dadoA = {
        titulo: "48 - Seq. Ref " +
            "49 - Frau Part " +
            "50 - Códido na Operadora/CPF " +
            "51 - Nome do Profissional " +
            "52 - Conselho Profissional " +
            "53 - Número no Conselho " +
            "54 - UF " +
            "55 - Código CBO",
        grow: "1",
    }

    const dadoB = {
        titulo: "58 - Data de Realização de Procedimento em Série " +
            "57 - Assinatura do Beneficiário ou Responsável ",
        grow: "1",
    }

    return (
        <>
            <Fence titulo="Indicação do(s) Profissional(is) Executante(s)">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
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