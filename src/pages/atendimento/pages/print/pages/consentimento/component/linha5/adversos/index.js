import { Box } from '@material-ui/core'
import React from 'react'

const Adverso = ({ medicamentos }) => {

    const Conteudo = ({ medicamento }) => {

        let b =
            "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW"


        switch (medicamento) {
            case 'Infliximabe':
            case 'Etanercepte':
            case 'Adalimumabe':
            case 'Golimumabe':
            case 'Certolizumabe':
                return <Box>{b}</Box>
            case 'Baricitinibe':
            case 'Cloroquina':
            case 'Hidroxicloroquina':
            case 'Ciclosporina':
            case 'Metilprednisolona':
            case 'Abatacepte':
            case 'Rituximabe':
            case 'Tocilizumabe':
            case 'Tofacitinibe':
            case 'Sulfassalazina':
            case 'Ciclofosfamida':
            case 'Azatioprina':
            case 'Naproxeno':
            case 'Leflunomida':
            case 'Metotrexato':
            case 'teste':
                return <div>Teste</div>
            default:
                return <div />
        }
    }

    return (
        <>
            {medicamentos.map((m, i) =>
                <div key={i} >
                    <Conteudo medicamento={m} />
                </div>
            )}
        </>
    )

}

export default Adverso
