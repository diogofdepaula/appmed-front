import React from 'react'
import Fence from '../../../../fence'
import Field from '../../../../field'

const Linha5Sadt = () => {

    const dados = [
        {
            titulo: "21 - Caráter do Atendimento",
            largura: "20rem",
        },
        {
            titulo: "22 - Data da Solicitação",
            largura: "10rem",
        },
        {
            titulo: "90 - Indicador de Cobertura Especial",
            largura: "20rem",
            alinhamento: "center",
        },
        {
            titulo: "23 - Indicação Clínica",
            alinhamento: "left",
            largura: "30rem",
            grow: "1",
        },
        {
            titulo: "Procedimentos",
            texto: "Aqui vai os exames a serem pedidos",
            largura: "50rem",
            grow: 1,
            alinhamento: "center",
        },
        
    ]

    return (
        <>
            <Fence titulo="Dados da Solicitação / Procedimento ou Itens Assitenciais Solicitados">
                {dados.map(c =>
                    <Field key={c.titulo} dados={c} />
                )}
            </Fence>
        </>
    )
}

export default Linha5Sadt