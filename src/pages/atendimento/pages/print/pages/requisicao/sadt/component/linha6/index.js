import React from 'react'
import Fence from '../../../../component/fence'
import Field from '../../../../component/field'

const Linha6Sadt = () => {

    const dados = [
        {
            titulo: "29 - Código na Operadora",
            largura: "15rem",
        },
        {
            titulo: "30 - Nome do Contratado",
            largura: "10.5rem",
            grow: "1",
        },
        {
            titulo: "31 - Código CNES",
            largura: "8rem",
        },
    ]

    return (
        <>
            <Fence titulo="Dados do contratado solicitante">
                {dados.map(c =>
                    <Field key={c.titulo} dados={c} />
                )}
            </Fence>
        </>
    )
}

export default Linha6Sadt