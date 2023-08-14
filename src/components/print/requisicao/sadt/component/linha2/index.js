import React, { useContext } from 'react';
import { PrintContext } from '../../../../../../App';
import Fence from '../../../../fence';
import Field from '../../../../field';

const Linha2Sadt = () => {

    const { operadora } = useContext(PrintContext)

    const dados = [
        {
            titulo: "1 - Registro ANS",
            texto: operadora.registro,
            largura: "8rem",
            alinhamento: "center",
        },
        {
            titulo: "3 - Número da Guia Principal",
            largura: "13rem",
        },
        {
            titulo: "4 - Data da Autorização",
            largura: "10rem",
            alinhamento: "center",
        },
        {
            titulo: "5 - Senha",
            largura: "13rem",
            grow: 1,
        },
        {
            titulo: "6 - Data Validade da Senha",
            largura: "12rem",
        },
        {
            titulo: "7 - Número da Guia Atribuido pela Operadora",
            largura: "18rem",
        },
    ]

    return (
        <>
            <Fence>
                {dados.map(c =>
                    <Field key={c.titulo} dados={c} />
                )}
            </Fence>
        </>
    )
}

export default Linha2Sadt