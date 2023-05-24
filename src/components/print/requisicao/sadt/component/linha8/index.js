import React from 'react'
import Fence from '../../../../fence'
import Field from '../../../../field'

const Linha8Sadt = () => {

    const dado = {
        titulo: "36 - Data \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
            "37 - Hora inicial \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
            "38 - Hora Final \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
            "39 - Tabela \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
            "40 - Código do Procedimento \xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
            "41 - Descrição \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
            "42 - Quant \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
            "43 - Via \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
            "44 - Tec \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
            "45 - Fator Red/Acresc. \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
            "46 - Valor unitário (R$) \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
            "47 - Valor Total (R$)",
        largura: "12rem",
        grow: "1",
    }

    return (
        <>
            <Fence titulo="Dados da Execução / Procedimentos e Exames Realizados">
                <Field dados={dado} />
            </Fence>
        </>
    )
}

export default Linha8Sadt