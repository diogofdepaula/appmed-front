import React, { useContext } from 'react';
import { LMEPrintContext } from '../../../../../pages/print/printjob'
import { ClienteContext } from '../../../../../App';
import Fence from '../../../fence';
import Field from '../../../field';
import { DoençaCID } from '../../../../../utils/inquiries'

const Linha3Relatorio = () => {

    const { clienteContext } = useContext(ClienteContext)
    const lme = useContext(LMEPrintContext)

    const osteop = DoençaCID(lme.cid10) === 'op'

    const dados = [
        {
            titulo: "Nome",
            texto: clienteContext.nome,
            alinhamento: "left",
            negrito: "bold",
            largura: "30rem",
            grow: "1",
            op: true,
        },
        {
            titulo: "Peso",
            largura: "12rem",
            alinhamento: "center",
            texto: clienteContext.peso,
            op: false,
        },
                {
            titulo: "Altura",
            largura: "12rem",
            alinhamento: "center",
            texto: clienteContext.altura,
            op: false,
        },
        {
            titulo: "CNS",
            largura: "12rem",
            texto: clienteContext.cns,
            grow: "1",
            op: false,
        },
        {
            titulo: "Sexo",
            texto: clienteContext.sexo,
            alinhamento: "center",
            largura: "12rem",
            op: true,
        },
        {
            titulo: "Início da doença (anos)",
            largura: "12rem",
            alinhamento: "center",
            texto: lme.relatorio.idadeinicio,
            op: false,
        },
    ]

    return (
        <>
            <Fence titulo="1 - Dados pessoais">
                {dados.map(c => (
                    (c.op || c.op === osteop) ? (<Field key={c.titulo} dados={c} />) : <></>
                ))}
            </Fence>
        </>
    )
}

export default Linha3Relatorio