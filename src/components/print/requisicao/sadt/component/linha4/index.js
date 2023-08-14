import React from 'react'
import Fence from '../../../../fence'
import Field from '../../../../field'

const Linha4Sadt = () => {

    const dados = [
        {
            titulo: "13 - Código na Operadora",
            largura: "11rem",
            alinhamento: "center",
        },
        {
            titulo: "14 - Nome do Contratado",
            texto: "Diogo Ferreira de Paula",
            largura: "12rem",
            alinhamento: "center",
        },
        {
            titulo: "15 - Nome do Profissional Solicitante",
            texto: "Dr. Diogo Ferreira de Paula",
            alinhamento: "center",
            negrito: "bold",
            grow: "1",
        },
        {
            titulo: "16 - Conselho",
            texto: "CRM",
            largura: "6.7rem",
            alinhamento: "center",
        },
        {
            titulo: "17 - Número no Conselho",
            texto: "23.838",
            largura: "11rem",
            alinhamento: "center",
        },
        {
            titulo: "18 - UF",
            texto: "PR",
            largura: "4.5rem",
            alinhamento: "center",
        },
        {
            titulo: "19 - Código CBO",
            texto: "225136",
            largura: "7.5rem",
            alinhamento: "center",
        },
        {
            titulo: "20 - Assinatura do Profissional Solicitante",
            largura: "20rem",
        },
    ]

    return (
        <>
            <Fence titulo="Dados do Solicitante">
                {dados.map(c =>
                    <Field key={c.titulo} dados={c} />
                )}
            </Fence>
        </>
    )
}

export default Linha4Sadt