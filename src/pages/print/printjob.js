import React, { useContext, createContext } from 'react';
import { LoginContext, PrintContext } from '../../App';
import Atestado from '../../components/print/atestado/index.js';
import TermoConsentimento from '../../components/print/consentimento';
import FactoryLME from '../../components/print/lme';
import FactoryReceitas from '../../components/print/receita';
import FactoryRelatorio from '../../components/print/relatorio';

export const LMEPrintContext = createContext(null)

const PrintJob = () => {

    const { atestadosSelecionados, termosSelecionados, lmesSelecionadas, prescricoesSelecionadas, renovacao } = useContext(PrintContext)
    const { local } = useContext(LoginContext)

    const Factory = () => {

        let jobs = []

        //        print lmes
        lmesSelecionadas?.map(l => {

            return jobs.push(
                <div key={l.id} >
                    <LMEPrintContext.Provider value={l}>
                        <FactoryLME />
                        {(local === "cisgap" && renovacao) && <FactoryLME />}
                        {(l.relatorio && !renovacao) && <FactoryRelatorio />}

                        {/* Receitas */}
                        {/* if para situação em que a LFN (ou GBP) esteja sozinha na LME, então não sairá a Receita (via) do Estado */}
                        {!l.prescricoes.filter((p, i) => (p.medicamento.controlado || p.medicamento.farmaco === "Leflunomida") && i === 0).length > 0 &&
                            <FactoryReceitas listPresc={l.prescricoes} via={"Estado"} tipo={"lme"} dupla={false} />
                        }

                        {l.prescricoes.filter(p => p.medicamento.controlado || p.medicamento.farmaco === "Leflunomida").length > 0 &&
                            [...Array(6).keys()].filter(e => e % 2 === 0).map(d =>
                                <div key={d}>
                                    {/* tem que passar o valor de cada mes da prescricao para cada receita de cada mês se não sai somente a soma */}
                                    <FactoryReceitas listPresc={l.prescricoes} via={"Estado"} mes={d} tipo={"lme"} dupla={true} />
                                </div>
                            )
                        }

                        {/* Medicamentos não controlados */}
                        {/* não passar a variável mês, para dar undifined lá nos componentes internos e saber, saber que é via paciente (aí não precisa passar o via paciente) */}
                        {!renovacao && <FactoryReceitas listPresc={l.prescricoes} via={"paciente"} tipo={"lme"} />}
                    </LMEPrintContext.Provider>
                </div>
            )
        })

        termosSelecionados.length > 0 && jobs.push(<TermoConsentimento />)

        //print prescricoesSelecionadas
        if (prescricoesSelecionadas.length > 0) {

            if (prescricoesSelecionadas.filter(p => p.medicamento.controlado).length > 0) {
                jobs.push(
                    [...Array(6).keys()].map(d =>
                        <div key={d} >
                            {/* tem que passar o valor de cada mes da prescricao para cada receita de cada mês se não sai somente a soma */}
                            <FactoryReceitas listPresc={prescricoesSelecionadas.filter(p => p.medicamento.controlado)} mes={d} tipo={local} />
                        </div>
                    )
                )
            }
            // fiz assim para que se tiver somente controlado, não crie mais uma receita
            // se tiver alguém medicamento não controlado, que imprema junto.
            // fazer um adendo depois dizendo "só para constar -- receita do controlado (ou mensais) em anexo."
            if (prescricoesSelecionadas.filter(p => !p.medicamento.controlado).length > 0) {
                jobs.push(
                    <FactoryReceitas listPresc={prescricoesSelecionadas} tipo={local} />
                )
            }
        }

        // if (requisicao) {
        //     requisicoes?.map((r, i) => 
        //         jobs.push(
        //             // deixei comentado só para saber com usar depois.
        //             // <Sadt requisicao={r} tipo={local} />
        //              <RequisicaoA5 key={i} requisicao={r} tipo={local} />
        //         )
        //     )
        // }

        if (atestadosSelecionados.length > 0) {
            jobs.push(
                <Atestado atestado={atestadosSelecionados[0]} tipo={local} />
            )
        }

        return jobs

    }

    return <Factory />

}

export default PrintJob