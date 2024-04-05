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
import EmBrancoA5 from '../../components/print/embranco';

export const LMEPrintContext = createContext(null)

const PrintJob = () => {

    const { atestadosSelecionados, termosSelecionados, lmesSelecionadas, prescricoesSelecionadas, renovacao, requisicoes, vacinacao, emBranco, operadora } = useContext(PrintContext)
    const { local } = useContext(LoginContext)

    const LMEs = () => {

        if (lmesSelecionadas?.length === 0) return <></>

        const LME = () => {
            if (local.cod === "cis5rs" && renovacao) return <><FactoryLME /><FactoryLME /></>
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
                if (renovacao || local.cod === "consultorio") return <></>
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
                        <FactoryReceitas listPresc={prescricoesSelecionadas.filter(p => p.medicamento.controlado)} mes={d} tipo={local.cod} />
                    </div>
                )
        }

        const Simples = () => {
            if (prescricoesSelecionadas.filter(p => !p.medicamento.controlado).length > 0) return <FactoryReceitas listPresc={prescricoesSelecionadas} tipo={local.cod} />
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
            if (operadora.registro !== '') {
                return <Sadt key={i} requisicao={r} tipo={local.cod} />
            } else {
                return <RequisicaoA5 key={i} requisicao={r} tipo={local.cod} />
            }
        })
    }

    const Vacinacao = () => {
        if (vacinacao.length === 0) return <></>
        return vacinacao?.map((r, i) => <VacinacaoA5 key={i} vacinacao={r} tipo={local.cod} />)
    }

    const Atestados = () => {
        if (atestadosSelecionados.length === 0) return <></>
        return <Atestado atestado={atestadosSelecionados[0]} tipo={local.cod} />
    }

    const EmBrancos = () => {
        if (emBranco.length === 0) return <></>
        return emBranco?.map((r, i) => <EmBrancoA5 key={i} embranco={r} tipo={local.cod} />)
    }

    return (
        <>
            <LMEs />
            <Consentimento />
            <Receitas />
            <Requisicao />
            <Vacinacao />
            <Atestados />
            <EmBrancos />
        </>
    )
}

export default PrintJob