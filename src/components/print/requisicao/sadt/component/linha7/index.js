import React from 'react'
import Fence from '../../../../fence'
import Field from '../../../../field'

const Linha7Sadt = () => {

    const dados = [
        {
            titulo: "32 - Tipo de Atendimento",
            largura: "13rem",
        },
        {
            titulo: "33 - Indicação de acidente",
            largura: "13rem",
        },
        {
            titulo: "34 - Tipo de consulta",
            largura: "12rem",
        },
        {
            titulo: "35 - Motivo do encerramento do atendimento",
            largura: "20rem",
        },
        {
            titulo: "91 - Regime de atendimento",
            largura: "12rem",
        },
        {
            titulo: "92 - Saúde Ocupacional",
            largura: "12rem",
        },
    ]

    return (
        <>
            <Fence titulo="Dados do atendimento">
                {dados.map(c =>
                    <Field key={c.titulo} dados={c} />
                )}
            </Fence>
        </>
    )
}

export default Linha7Sadt