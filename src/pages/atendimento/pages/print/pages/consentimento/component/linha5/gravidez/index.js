import { Box } from '@material-ui/core'
import React from 'react'

const Gravidez = ({ medicamentos }) => {

    const Inicio = () => {
        return (
            <Box>
                Fui também claramente informado(a) a respeito das seguintes contraindicações, potenciais efeitos
                colaterais e riscos na gestação e na amamentação já são conhecidos; portanto, caso engravide, devo avisar
                imediatamente o médico.
            </Box>
        )
    }

    const Texto = ({ med, cat }) => {

        return (
            <Box>
                Estou ciente que o medicamento {med} é classificado na gestação como {cat}
            </Box>
        )
    }

    const Conteudo = ({ medicamento }) => {

        let b =
            "categoria B (estudos em animais não mostraram anormalidades" +
            "nos descendentes, porém não há estudos em humanos; risco " +
            "para o bebê muito improvável)."

        let c =
            "categoria C (estudos em animais mostraram anormalidades nos " +
            "descendentes, porém não há estudos em humanos; o risco para o " +
            "bebê não pode ser descartado, mas um benefício potencial pode " +
            "ser maior do que os riscos)."

        let d =
            "categoria D (há evidências de riscos ao feto, mas um benefício " +
            "potencial pode ser maior do que os riscos)."

        let x =
            "categoria X (estudos em animais ou em humanos claramente " +
            "mostraram risco para o bebê que suplantam quaisquer potenciais " +
            "benefícios, sendo contraindicados na gestação)."

        switch (medicamento) {
            case 'Infliximabe':
            case 'Etanercepte':
            case 'Adalimumabe':
            case 'Golimumabe':
            case 'Certolizumabe':
                return <Texto med={medicamento} cat={b} />
            case 'Baricitinibe':
            case 'Cloroquina':
            case 'Hidroxicloroquina':
            case 'Ciclosporina':
            case 'Metilprednisolona':
            case 'Abatacepte':
            case 'Rituximabe':
            case 'Tocilizumabe':
            case 'Tofacitinibe':
                return <Texto med={medicamento} cat={c} />
            case 'Sulfassalazina':
            case 'Ciclofosfamida':
            case 'Azatioprina':
            case 'Naproxeno':
                return <Texto med={medicamento} cat={d} />
            case 'Leflunomida':
            case 'Metotrexato':
                return <Texto med={medicamento} cat={x} />
            case 'teste':
                return <div>Teste</div>
            default:
                return <div />
        }
    }

    return (
        <>
            <Inicio />
            {medicamentos.map((m, i) =>
                <div key={i} >
                    <Conteudo medicamento={m} />
                </div>
            )}
        </>
    )

}

export default Gravidez
