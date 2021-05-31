
import React, { useContext } from 'react';
import { ImpressaoContext } from '../../..';
import FactoryLME from './lme';
import FactoryReceitas from './receita';
import FactoryRelatorio from './relatorio';

const PrintJob = () => {

    const { impressao } = useContext(ImpressaoContext)

    const Factory = () => {

        let jobs = []

        //        print lmes
        impressao.lmesSelecionadas?.map(l =>
            jobs.push(
                <div key={l.id} >
                    <FactoryLME lme={l} />
                    {l.relatorio && <FactoryRelatorio lme={l} />}

                    {/* Receitas */}
                    {l.prescricoes.filter(p => p.medicamento.controlado).length > 0 ?
                        [...Array(6).keys()].map(d =>
                            <div key={d}>
                                {/* tem que passar o valor de cada mes da prescricao para cada receita de cada mês se não sai somente a soma */}
                                <FactoryReceitas listPresc={l.prescricoes} via={"Estado"} mes={d} tipo={"lme"} />
                            </div>
                        )
                        :
                        <FactoryReceitas listPresc={l.prescricoes} via={"Estado"} tipo={"lme"} />
                    }
                    {/* Medicamentos não controlados */}
                    {/* não passar a variável mês, para dar undifined lá nos componentes internos e saber, saber que é via paciente (aí não precisa passar o via paciente) */}
                    <FactoryReceitas listPresc={l.prescricoes} via={"paciente"} tipo={"lme"} />
                </div>
            )
        )

        //print prescricoesSelecionadas
        if (impressao.prescricoesSelecionadas.length > 0) {

            if (impressao.prescricoesSelecionadas.filter(p => p.medicamento.controlado).length > 0) {
                jobs.push(
                    [...Array(6).keys()].map(d =>
                        <div key={d}>
                            {/* tem que passar o valor de cada mes da prescricao para cada receita de cada mês se não sai somente a soma */}
                            <FactoryReceitas listPresc={impressao.prescricoesSelecionadas.filter(p => p.medicamento.controlado)} mes={d} tipo={impressao.local} />
                        </div>
                    )
                )
            }
            jobs.push(
                <FactoryReceitas listPresc={impressao.prescricoesSelecionadas} tipo={impressao.local} />
            )
        }

        return jobs

    }

    return <Factory />

}

export default PrintJob