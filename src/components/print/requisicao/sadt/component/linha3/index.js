import React, { useContext } from 'react'
import { ClienteContext } from '../../../../../../../../../App'
import Fence from '../../../../component/fence'
import Field from '../../../../component/field'

const Linha3Sadt = () => {

    const { clienteContext } = useContext(ClienteContext)

    const dados = [
        {
            titulo: "10 - Nome",
            texto: clienteContext.nome,
            alinhamento: "left",
            negrito: "bold",
            largura: "60rem",
            grow: "1",
        },
        {
            titulo: "8 - Número da Carteira",
            largura: "15rem",
            alinhamento: "center",
        },
        {
            titulo: "9 - Validade da Carteira",
            largura: "12rem",
        },
        {
            titulo: "11 - Cartão Nacional de Saúde",
            grow: "1",
        },
        {
            titulo: "12 - Atendimento a RN",
            largura: "9.5rem", 
        },
      ]

    return (
        <>
            <Fence titulo="Dados do beneficiário">
                {dados.map(c =>
                    <Field key={c.titulo} dados={c} />
                )}
            </Fence>
        </>
    )
}

export default Linha3Sadt