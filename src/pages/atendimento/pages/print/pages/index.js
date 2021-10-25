import React, { useContext } from 'react';
import { ImpressaoContext } from '../../..';
import TermoConsentimento from './consentimento';
import FactoryLME from './lme';
import FactoryReceitas from './receita';
import FactoryRelatorio from './relatorio';
import RequisicaoA5 from './requisicao/requisicaoa5';

const PrintJob = () => {

    const { impressao } = useContext(ImpressaoContext)

    const Factory = () => {

        let jobs = []

        //        print lmes
        impressao.lmesSelecionadas?.map(l => {

         return   jobs.push(
                <div key={l.id} >
                    <FactoryLME lme={l} />
                    {l.relatorio && <FactoryRelatorio lme={l} />}

                    {/* Receitas */}
                    {/* if para situação em que a LFN (ou GBP) esteja sozinha na LME, então não sairá a Receita (via) do Estado */}
                    {!l.prescricoes.filter((p, i) => (p.medicamento.controlado || p.medicamento.farmaco === "Leflunomida") && i === 0).length > 0  &&
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
                    <FactoryReceitas listPresc={l.prescricoes} via={"paciente"} tipo={"lme"} />

                </div>
            )
        })

        impressao.termosSelecionados.length > 0 && jobs.push(<TermoConsentimento />)

        //print prescricoesSelecionadas
        if (impressao.prescricoesSelecionadas.length > 0) {

            if (impressao.prescricoesSelecionadas.filter(p => p.medicamento.controlado).length > 0) {
                jobs.push(
                    [...Array(6).keys()].map(d =>
                        <div key={d} >
                            {/* tem que passar o valor de cada mes da prescricao para cada receita de cada mês se não sai somente a soma */}
                            <FactoryReceitas listPresc={impressao.prescricoesSelecionadas.filter(p => p.medicamento.controlado)} mes={d} tipo={impressao.local} />
                        </div>
                    )
                )
            }
            // fiz assim para que se tiver somente controlado, não crie mais uma receita
            // se tiver alguém medicamento não controlado, que imprema junto.
            // fazer um adendo depois dizendo "só para constar -- receita do controlado (ou mensais) em anexo."
            if (impressao.prescricoesSelecionadas.filter(p => !p.medicamento.controlado).length > 0) {
                jobs.push(
                    <FactoryReceitas listPresc={impressao.prescricoesSelecionadas} tipo={impressao.local} />
                )
            }
        }

        if (impressao.requisicao) {
            impressao.requisicoes?.map(r => 
                jobs.push(
                    <RequisicaoA5 procedimentos={r} tipo={impressao.local} />
                )
            )
        }

        return jobs

    }

    return <Factory />

}

export default PrintJob