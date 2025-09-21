import React, { useContext } from 'react';
import { LMEPrintContext } from '../../../../../pages/print/printjob'
import { ClienteContext } from '../../../../../App';
import Fence from '../../../fence';
import Field from '../../../field';

const Linha3Relatorio = () => {

    const { clienteContext } = useContext(ClienteContext)
    const lme = useContext(LMEPrintContext)

    const dados = [
        {
            titulo: "Nome",
            texto: clienteContext.nome,
            alinhamento: "left",
            negrito: "bold",
            largura: "30rem",
            grow: "1",
        },
        {
            titulo: "Peso",
            largura: "12rem",
            alinhamento: "center",
            texto: clienteContext.peso,
        },
                {
            titulo: "Altura",
            largura: "12rem",
            alinhamento: "center",
            texto: clienteContext.altura,
        },
        {
            titulo: "CNS",
            largura: "12rem",
            texto: clienteContext.cns,
            grow: "1",
        },
        {
            titulo: "Sexo",
            texto: clienteContext.sexo,
            alinhamento: "center",
            largura: "12rem",
        },
        {
            titulo: "Início da doença (anos)",
            largura: "12rem",
            alinhamento: "center",
            texto: lme.relatorio.idadeinicio,
        },
    ]

    return (
        <>
            <Fence titulo="1 - Dados pessoais">
                {dados.map(c =>
                    <Field key={c.titulo} dados={c} />
                )}
            </Fence>
        </>
    )
}

export default Linha3Relatorio