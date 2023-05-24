import React from 'react'
import Fence from '../../../../fence'
import Field from '../../../../field'

const Linha10Sadt = () => {

    const dados = [
        {
            titulo: "59 - Total de Procedimento (R$)",
            largura: "13rem",
        },
        {
            titulo: "60 - Total de Taxa e Alugueis (R$)",
            largura: "14rem",
        },
        {
            titulo: "61 - Total de Materiais (R$)",
            largura: "12rem",
        },
        {
            titulo: "62 - Total de OPME (R$)",
            largura: "11rem",
        },
        {
            titulo: "63 - Total de Medicamentos (R$)",
            largura: "14rem",
        },
        {
            titulo: "64 - Total de Gases Medicinais (R$)",
            largura: "15rem",
        },
        {
            titulo: "65 - Total Geral (R$)",
            largura: "9rem",
            grow: 1
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

export default Linha10Sadt