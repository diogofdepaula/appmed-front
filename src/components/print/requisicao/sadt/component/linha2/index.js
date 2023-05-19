import React from 'react'
import Fence from '../../../../fence'
import Field from '../../../../field'
//import Operadoras from '../../../../../../utils/operadoras'

const Linha2Sadt = ({ requisicao }) => {

  //  const registro = Operadoras().filter(o => o[2] === requisicao.convenio)[0][0]

    const dados = [
        {
            titulo: "1 - Registro ANS",
            texto: "322571", 
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