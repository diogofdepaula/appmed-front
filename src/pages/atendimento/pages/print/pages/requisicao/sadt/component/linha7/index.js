import React from 'react'
import Fence from '../../../../component/fence'
import Field from '../../../../component/field'

const Linha7Sadt = () => {

    const dados = [
        {
            titulo: "32 - Tipo de Atendimento",
            largura: "12rem",
        },
        {
            titulo: "33 - Indicação de acidente (acidente ou doença relacionada)",
            largura: "22rem",
        },
        {
            titulo: "34 - Tipo de doença",
            largura: "9rem",
            grow: "1"
        },
        {
            titulo: "35 - Motivo de encerramento do atendimento",
            largura: "17rem",
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