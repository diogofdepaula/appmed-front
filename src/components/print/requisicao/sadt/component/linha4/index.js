import React from 'react'
import Fence from '../../../../fence'
import Field from '../../../../field'

const Linha4Sadt = () => {

    const dados = [
        {
            titulo: "13 - Código na Operadora",
            largura: "19rem",
        },
        {
            titulo: "14 - Nome do Contratado",
            texto: "Clinica Médica Diéguez de Paula (Diogo Ferreira de Paula)",
            largura: "40rem",
            grow: "1",
        },
        {
            titulo: "15 - Nome do Profissional Solicitante",
            texto: "Dr. Diogo Ferreira de Paula",
            alinhamento: "left",
            negrito: "bold",
            grow: "1",
        },
        {
            titulo: "16 - Conselho Prof",
            texto: "CRM",
            largura: "10.5rem",
            alinhamento: "center",
        },
        {
            titulo: "17 - Número no Conselho",
            texto: "23.838",
            largura: "10.5rem",
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
            largura: "16rem",
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