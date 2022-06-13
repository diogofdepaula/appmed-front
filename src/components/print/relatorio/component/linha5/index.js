import React, { useContext } from 'react';
import { LMEPrintContext } from '../..';
import { DoençaCID } from '../../../../../utils/inquiries';
import Fence from '../../../fence';
import Field from '../../../field';

const Linha5Relatorio = () => {

    const lme = useContext(LMEPrintContext)

    const ar = [
        {
            titulo: "DAS28",
            texto: lme.relatorio.das28,
            alinhamento: "center",
            grow: "1",
        },
        {
            titulo: "CDAI",
            texto: lme.relatorio.cdai,
            alinhamento: "center",
            grow: "1",
        },
        {
            titulo: "SDAI",
            texto: lme.relatorio.sdai,
            alinhamento: "center",
            grow: "1",
        },
    ]

    const ea = [
        {
            titulo: "BASDAI",
            texto: lme.relatorio.basdai,
            alinhamento: "center",
            grow: "1",
        },
        {
            titulo: "ASDAI",
            texto: lme.relatorio.asdas,
            alinhamento: "center",
            grow: "1",
        },
    ]
     
    const ap = [
        {
            titulo: "DASPAI (artrite periférica)",
            texto: lme.relatorio.sdai,
            alinhamento: "center",
            grow: "1",
        },
        {
            titulo: "ASDAI (artrite axial)",
            texto: lme.relatorio.asdas,
            alinhamento: "center",
            grow: "1",
        },
        {
            titulo: "LEI (entesite)",
            texto: lme.relatorio.lei,
            alinhamento: "center",
            grow: "1",
        },
    ]

    const SetIndices = () => {
        const Indices = {
            'ar': ar,
            'ea': ea,
            'ap': ap,
            // 'aij': aij,
            default: []
        }
        return Indices[DoençaCID(lme.cid10)] || Indices.default
    }

    return (
        <>
            <Fence titulo="2.2 - Índices de atividade de doença">
                {SetIndices().map(c =>
                    <Field key={c.titulo} dados={c} />
                )}
            </Fence>
        </>
    )
}

export default Linha5Relatorio