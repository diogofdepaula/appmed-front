import React, { useContext } from 'react'
import { AtendimentoContext } from '..'
import LMEMain from '../pages/lmes/main'
import LMEInsert from '../pages/lmes/insert'
import LMEUpdate from '../pages/lmes/update'
import PrescricaoDelete from '../pages/prescricoes/delete'
import PrescricaoInsert from '../pages/prescricoes/insert'
import PrescricaoMain from '../pages/prescricoes/main'
import PrescricaoUpdate from '../pages/prescricoes/update'
import LMEDelete from '../pages/lmes/delete'
import Print from '../pages/print'

const Content = () => {

    const { page, update } = useContext(AtendimentoContext)

    /// se mudar aqui: não esquercer de atualizar a ThirdAppBar
    switch (page) {
        case 'prescricoesmain':
            return <PrescricaoMain key={update} />  // dá para fazer o prescricaoEdit usando um variável (com um nome fora do BD) com new Date()
        case 'prescricaoinsert':
            return <PrescricaoInsert key={update} />
        case 'prescricaoupdate':
            return <PrescricaoUpdate />
        case 'prescricaodelete':
            return <PrescricaoDelete />
        case 'lmesmain':
            return <LMEMain />
        case 'lmeinsert':
            return <LMEInsert />
        case 'lmeupdate':
            return <LMEUpdate />
        case 'lmedelete':
            return <LMEDelete />
        case 'print':
            return <Print />
        case 'teste':
            return <div>{update}</div>
        default:
            return <div>Atentdimento Content</div>
    }
}
export default Content