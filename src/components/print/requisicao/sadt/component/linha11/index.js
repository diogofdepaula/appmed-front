import React from 'react'
import Fence from '../../../../fence'
import Field from '../../../../field'

const Linha11Sadt = () => {

    const dados = [
        {
            titulo: "66 - Assinatura do Responsável pela Autorização",
            largura: "13rem",
            grow: 1
        },
        {
            titulo: "67 - Assinatura do Beneficiário ou Responsável",
            largura: "14rem",
            grow: 1
        },
        {
            titulo: "68 - Assinatura do Contratado",
            largura: "12rem",
            grow: 1
        },
    ]

    return (
        <>
            <Fence titulo="Assinaturas">
                {dados.map(c =>
                    <Field key={c.titulo} dados={c} />
                )}
            </Fence>
        </>
    )
}

export default Linha11Sadt