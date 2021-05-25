import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { ImpressaoContext } from '../../../..';
import Reorder from './../../component/reorder';
import Prescricao from './component/prescricao';
import ReceitaA5 from './receitaa5';
import ReceitaA4 from './receitaa4';

const ReceitaPorTipo = ({ prescricoes, via, mes, tipo }) => {

    // variações conforme o local
    let receita = <ReceitaA4 prescricoes={prescricoes} via={via} mes={mes} tipo={tipo} />

    if (tipo === "consultorio") {
        receita = <ReceitaA5 prescricoes={prescricoes} via={via} mes={mes} tipo={tipo} />
    }

    return receita
}

const FactoryReceitas = ({ listPresc, via, mes, tipo }) => {

    const { impressao } = useContext(ImpressaoContext)

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
            if (soma <= impressao.somaheighta4) {  ///(a4size.height - 1000)  // fazer a definição em breve heightbloco no index.js do sus
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

        listOfListIndex.forEach(r => {
            let grupoprescricoes = listPresc.slice(r[0], r[r.length - 1] + 1)

            let grupoprescricoessort = Reorder(grupoprescricoes)

            listReceitas.push(
                <div key={r}>
                    {/* <ReceitaSUS prescricoes={grupoprescricoessort} via={props.via} mes={props.mes} /> */}
                    <ReceitaPorTipo prescricoes={grupoprescricoessort} via={via} mes={mes} tipo={tipo} />
                </div>
            )
        })

        setReceitas(listReceitas)

    }, [impressao.somaheighta4, listPresc, mes, tipo, via])

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
                        {/* vai ter que mudar aqui depois */}
                        <Prescricao prescricao={p} />
                        {/* {impressao.local === 'consultorio' ? <PrescricaoSUS prescricao={p} /> : <PrescricaoConsultorio prescricao={p} />} */}
                    </div>
                )
            }
            {listReceitas && listReceitas}
        </>
    )
}

export default FactoryReceitas