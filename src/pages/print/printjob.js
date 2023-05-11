import React, { useContext, createContext } from 'react';
import { LoginContext, PrintContext } from '../../App';
import Atestado from '../../components/print/atestado/index.js';
import TermoConsentimento from '../../components/print/consentimento';
import FactoryLME from '../../components/print/lme';
import FactoryReceitas from '../../components/print/receita';
import FactoryRelatorio from '../../components/print/relatorio';
import RequisicaoA5 from '../../components/print/requisicao/requisicaoa5';
import VacinacaoA5 from '../../components/print/vacinacao/folhaa5';
import { MedicacaoInterropida } from '../../utils/inquiries';
import Sadt from '../../components/print/requisicao/sadt';

export const LMEPrintContext = createContext(null)



const PrintJob = () => {

    const { atestadosSelecionados, termosSelecionados, lmesSelecionadas, prescricoesSelecionadas, renovacao, requisicoes, vacinacao, convenio } = useContext(PrintContext)
    const { local } = useContext(LoginContext)

    const LMEs = () => {

        if (lmesSelecionadas?.length === 0) return <></>

        const LME = () => {
            if (local === "cisgap" && renovacao) return <><FactoryLME /><FactoryLME /></>
            return <FactoryLME />
        }

        const Relatorio = ({ l }) => {
            if (l.relatorio && !renovacao) return <FactoryRelatorio />
            return <></>
        }

        const ReceitaLME = ({ l }) => {

            const ReceitaEstado = () => {
                // Se tiver uma LME somente com LFN ou com controlado, então não imprime a receita Estado
                if (l.prescricoes.filter(p => p.medicamento.controlado || p.medicamento.farmaco === "Leflunomida").length !== l.prescricoes.length)
                    return <FactoryReceitas listPresc={l.prescricoes} via={"Estado"} tipo={"lme"} dupla={false} />
            }

            const ReceitaControlados = () => {

                if (l.prescricoes.filter(p => p.medicamento.farmaco === "Leflunomida")[0]?.posologianaopadrao
                    === MedicacaoInterropida)
                    return <></>

                if (l.prescricoes.filter(p => p.medicamento.controlado || p.medicamento.farmaco === "Leflunomida").length > 0)
                    return [...Array(6).keys()].filter(e => e % 2 === 0).map((d, i) =>
                        <div key={i}>
                            {/* tem que passar o valor de cada mes da prescricao para cada receita de cada mês se não sai somente a soma */}
                            <FactoryReceitas listPresc={l.prescricoes} via={"Estado"} mes={d} tipo={"lme"} dupla={true} />
                        </div>
                    )
            }

            const ReceitaNaoControlado = () => {
                if (renovacao || local === "consultorio") return <></>
                return <FactoryReceitas listPresc={l.prescricoes} via={"paciente"} tipo={"lme"} />
            }

            return (
                <>
                    <ReceitaEstado />
                    <ReceitaControlados />
                    <ReceitaNaoControlado />
                </>
            )
        }

        return lmesSelecionadas?.map(l =>
            <React.Fragment key={l.id} >
                <LMEPrintContext.Provider value={l}>
                    <LME />
                    <Relatorio l={l} />
                    <ReceitaLME l={l} />
                </LMEPrintContext.Provider>
            </React.Fragment>
        )
    }

    const Consentimento = () => {
        if (termosSelecionados.length === 0) return <></>
        return <TermoConsentimento />
    }

    const Receitas = () => {
        if (prescricoesSelecionadas.length === 0) return <></>

        const Controlados = () => {
            if (prescricoesSelecionadas.filter(p => p.medicamento.controlado).length > 0)
                return [...Array(6).keys()].map((d, i) =>
                    <div key={i + 1000} >
                        {/* tem que passar o valor de cada mes da prescricao para cada receita de cada mês se não sai somente a soma */}
                        <FactoryReceitas listPresc={prescricoesSelecionadas.filter(p => p.medicamento.controlado)} mes={d} tipo={local} />
                    </div>
                )
        }

        const Simples = () => {
            if (prescricoesSelecionadas.filter(p => !p.medicamento.controlado).length > 0) return <FactoryReceitas listPresc={prescricoesSelecionadas} tipo={local} />
        }

        return (
            <>
                <Controlados />
                <Simples />
            </>
        )
    }

    const Requisicao = () => {
        if (requisicoes.length === 0) return <></>
        return requisicoes?.map((r, i) => {
            if (convenio) {
                return <Sadt key={i} requisicao={r} tipo={local} />
            } else {
                return <RequisicaoA5 key={i} requisicao={r} tipo={local} />
            }
        })
    }

    const Vacinacao = () => {
        if (vacinacao.length === 0) return <></>
        return vacinacao?.map((r, i) => <VacinacaoA5 key={i} vacinacao={r} tipo={local} />)
    }

    const Atestados = () => {
        if (atestadosSelecionados.length === 0) return <></>
        return <Atestado atestado={atestadosSelecionados[0]} tipo={local} />
    }

    return (
        <>
            <LMEs />
            <Consentimento />
            <Receitas />
            <Requisicao />
            <Vacinacao />
            <Atestados />
        </>
    )
}

export default PrintJob
















// const Factory = () => {

//     let jobs = []

//     //        print lmes
//     lmesSelecionadas?.map(l => {

//         return jobs.push(
//             <div key={l.id} >
//                 <LMEPrintContext.Provider value={l}>
//                     <FactoryLME />
//                     {(local === "cisgap" && renovacao) && <FactoryLME />}
//                     {(l.relatorio && !renovacao) && <FactoryRelatorio />}

//                     {/* Receitas */}
//                     {/* if para situação em que a LFN (ou GBP) esteja sozinha na LME, então não sairá a Receita (via) do Estado */}

//                     {/* JÇLKSAJDFÇLKADSJFÇL  TEM QUE REVER AQUI, POIS EM ALGUNS CASOS NÃO ESTÁ IMPRIMINDO A RECEITA QUANDO TEM LFN COM MAIS UM BIOLÓGICO */}
//                     {!l.prescricoes.filter((p, i) => (p.medicamento.controlado || p.medicamento.farmaco === "Leflunomida") && i === 0).length > 0 &&
//                         <FactoryReceitas listPresc={l.prescricoes} via={"Estado"} tipo={"lme"} dupla={false} />
//                     }

//                     {l.prescricoes.filter(p => p.medicamento.controlado || p.medicamento.farmaco === "Leflunomida").length > 0 &&
//                         [...Array(6).keys()].filter(e => e % 2 === 0).map(d =>
//                             <div key={d}>
//                                 {/* tem que passar o valor de cada mes da prescricao para cada receita de cada mês se não sai somente a soma */}
//                                 <FactoryReceitas listPresc={l.prescricoes} via={"Estado"} mes={d} tipo={"lme"} dupla={true} />
//                             </div>
//                         )
//                     }

//                     {/* Medicamentos não controlados */}
//                     {/* não passar a variável mês, para dar undifined lá nos componentes internos e saber, saber que é via paciente (aí não precisa passar o via paciente) */}
//                     {!renovacao && <FactoryReceitas listPresc={l.prescricoes} via={"paciente"} tipo={"lme"} />}
//                 </LMEPrintContext.Provider>
//             </div>
//         )
//     })

//     termosSelecionados.length > 0 && jobs.push(<TermoConsentimento />)

//     //print prescricoesSelecionadas
//     if (prescricoesSelecionadas.length > 0) {

//         if (prescricoesSelecionadas.filter(p => p.medicamento.controlado).length > 0) {
//             jobs.push(
//                 [...Array(6).keys()].map(d =>
//                     <div key={d} >
//                         {/* tem que passar o valor de cada mes da prescricao para cada receita de cada mês se não sai somente a soma */}
//                         <FactoryReceitas listPresc={prescricoesSelecionadas.filter(p => p.medicamento.controlado)} mes={d} tipo={local} />
//                     </div>
//                 )
//             )
//         }
//         // fiz assim para que se tiver somente controlado, não crie mais uma receita
//         // se tiver alguém medicamento não controlado, que imprema junto.
//         // fazer um adendo depois dizendo "só para constar -- receita do controlado (ou mensais) em anexo."
//         if (prescricoesSelecionadas.filter(p => !p.medicamento.controlado).length > 0) {
//             jobs.push(
//                 <FactoryReceitas listPresc={prescricoesSelecionadas} tipo={local} />
//             )
//         }
//     }

//     if (requisicoes.length > 0) {
//         requisicoes?.map((r, i) =>
//             jobs.push(
//                 // deixei comentado só para saber com usar depois.
//                 // <Sadt requisicao={r} tipo={local} />
//                 <RequisicaoA5 key={i} requisicao={r} tipo={local} />
//             )
//         )
//     }

//     if (vacinacao.length > 0) {
//         vacinacao?.map((r, i) =>
//             jobs.push(
//                 <VacinacaoA5 key={i} vacinacao={r} tipo={local} />
//             )
//         )
//     }

//     if (atestadosSelecionados.length > 0) {
//         jobs.push(
//             <Atestado atestado={atestadosSelecionados[0]} tipo={local} />
//         )
//     }

//     return jobs

// }

// return <Factory />

// }