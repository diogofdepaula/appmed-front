import React from 'react'
import Operadoras from '../../../../../../requisicao/operadoras'
import Fence from '../../../../component/fence'
import Field from '../../../../component/field'

const Linha2Sadt = ({ requisicao }) => {

    const registro = Operadoras().filter(o => o[2] === requisicao.convenio)[0][0]

    const dados = [
        {
            titulo: "1 - Registro ANS",
            texto: registro, 
            largura: "8rem", 
            alinhamento: "center",
        },
        {
            titulo: "2 - Nº Guia no Prestador",
            largura: "20rem", 
        },
        {
            titulo: "3 - Número da Guia Principal",
            largura: "30rem", 
            grow: "1",
        },
        {
            titulo: "4 - Data da Autorização",
            largura: "9.7rem", 
        },
        {
            titulo: "5 - Senha",
            grow: "1",
        },
        {
            titulo: "6 - Data Validade da Senha",
            largura: "11rem", 
        },
        {
            titulo: "7 - Número da Guia Atribuido pela Operadora",
            largura: "17rem", 
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