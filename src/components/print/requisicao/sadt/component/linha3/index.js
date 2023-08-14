import React, { useContext } from 'react';
import { ClienteContext } from '../../../../../../App';
import Fence from '../../../../fence';
import Field from '../../../../field';

const Linha3Sadt = () => {

    const { clienteContext } = useContext(ClienteContext)

    const dados = [
        {
            titulo: "8 - Número da Carteira",
            largura: "13rem",
            alinhamento: "center",
        },
        {
            titulo: "9 - Validade da Carteira",
            largura: "10rem",
            alinhamento: "center",
        },
        {
            titulo: "89 - Nome Social",
            alinhamento: "left",
            largura: "10rem",
            grow: "1",
        },
        {
            titulo: "12 - Atendimento a RN",
            largura: "10rem",
        },
        {
            titulo: "10 - Nome",
            texto: clienteContext.nome,
            alinhamento: "left",
            negrito: "bold",
            largura: "30rem",
            grow: "1",
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