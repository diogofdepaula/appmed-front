import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { PrintContext } from '../../../App';
import Reorder from '../../../pages/print/component/reorder';
import Prescricao from './component/prescricao';
import ReceitaA4 from './receitaa4';
import ReceitaA5 from './receitaa5';
import ReceitaDupla from './receitadupla';

const ReceitaPorTipo = ({ prescricoes, via, mes, tipo, dupla, last }) => {

    // variações conforme o local
    let receita = <ReceitaA4 prescricoes={prescricoes} via={via} mes={mes} tipo={tipo} last={last} />

    if (tipo === "consultorio") {
        receita = <ReceitaA5 prescricoes={prescricoes} via={via} mes={mes} tipo={tipo} last={last} />
    } else if (dupla) {
        let a = prescricoes.filter(p => p.medicamento.farmaco === "Leflunomida")
        receita = <ReceitaDupla prescricoes={a.length > 0 ? a : prescricoes} via={via} mes={mes} tipo={tipo} dupla={dupla} />
    }

    return receita
}

const FactoryReceitas = ({ listPresc, via, mes, tipo, dupla }) => {

    const { somaheighta5, somaheighta4, avulso } = useContext(PrintContext)

    const itemsRef = useRef([]);

    useEffect(() => {
        itemsRef.current = itemsRef.current.slice(0, listPresc.length);
    }, [listPresc]);

    const [listReceitas, setReceitas] = useState([])

    const divide = useCallback(() => {
        let soma = 0
        let listIndex = []
        let listOfListIndex = []
        itemsRef.current.forEach((w, index) => {
            if (soma <= (tipo === "consultorio" ? somaheighta5 : somaheighta4)) {  ///(a4size.height - 1000)  // fazer a definição em breve heightbloco no index.js do sus
                soma = soma + w.offsetHeight
                listIndex.push(index)
            } else {
                listOfListIndex.push(listIndex)
                listIndex = []
                soma = w.offsetHeight // recomeça a contagem
                listIndex.push(index)
            }
            if (index === itemsRef.current.length - 1 && listIndex.length > 0) {
                listOfListIndex.push(listIndex)
            }
        })

        let listReceitas = []

        listOfListIndex.forEach((r, i) => {
            let grupoprescricoes = listPresc.slice(r[0], r[r.length - 1] + 1)
            let grupoprescricoessort = avulso ? grupoprescricoes : Reorder(grupoprescricoes)

            listReceitas.push(
                <div key={r}>
                    <ReceitaPorTipo
                        prescricoes={grupoprescricoessort}
                        via={via} mes={mes} tipo={tipo} dupla={dupla}
                        last={(listOfListIndex.length === (i + 1))}
                    />
                </div>
            )
        })

        setReceitas(listReceitas)

    }, [somaheighta5, somaheighta4, listPresc, mes, tipo, via, dupla, avulso])

    useEffect(() => {
        if (itemsRef.current) {
            divide()
        }
    }, [divide])

    return (
        <>
            {itemsRef.current.length === 0 &&
                listPresc.map((p, i) =>
                    <div key={i} ref={el => itemsRef.current[i] = el} >
                        <Prescricao prescricao={p} />
                    </div>
                )
            }
            {listReceitas && listReceitas}
        </>
    )
}

export default FactoryReceitas