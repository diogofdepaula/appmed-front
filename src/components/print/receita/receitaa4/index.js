import { Box } from '@mui/material'
import React from 'react'
import Page from '../../page'
import Cabecalho from '../component/cabecalho'
import Comentario from '../component/comentario'
import Data from '../component/data'
import Identificacao from '../component/identificacao'
import Prescricao from '../component/prescricao'
import Rodape from '../component/rodape'
import Via from '../component/via'
import Especial from '../component/especial'

const ReceitaA4 = ({ prescricoes, via, mes, tipo, last }) => {

    const controlado = prescricoes?.some(p => p.medicamento.controlado)

    return (
        <>
            <Page size="a4">
                <Box width={1} height={1} display="block">
                    <Cabecalho tipo={tipo} />
                    <Box
                        height='calc(100% - 110px)' // se mudar o Cabecalho tem que ajustar aqui depois
                        p={5} border={3}>
                        <Box display="block" height={1}>
                            <Box justifyContent="center">
                                <Box display="block">
                                    <Via via={via} tipo={tipo} />
                                    <Especial controlado={controlado} />
                                    <Identificacao tipo={tipo} />
                                    {prescricoes?.map((p, i) => <div key={i}><Prescricao prescricao={p} mes={mes} tipo={tipo} /></div>)}
                                </Box>
                            </Box>
                            {last && <Comentario />}
                        </Box>
                        <Data mes={mes} tipo={tipo} />
                    </Box>
                    <Rodape />
                </Box>
            </Page>
        </>
    )
}

export default ReceitaA4