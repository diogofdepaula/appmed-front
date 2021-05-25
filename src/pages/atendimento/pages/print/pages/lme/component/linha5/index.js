import { Box } from '@material-ui/core'
import React, { useContext } from 'react'
import { LMEPrintContext } from '../..'
import Reorder from '../../../../component/reorder'
import Linha51LME from './linha51'
import Linha5ExtraLME from './linha5extra'
import Linha5xLME from './linha5x'

const Linha5LME = () => {

    const lme = useContext(LMEPrintContext)

    let reorder = Reorder(lme.prescricoes)

    return (
        <>
            <Box mt={2} width={1} border={1} borderColor="black">
                <Linha51LME />
                {reorder.map((p, i) =>
                    <div key={p.id}>
                        <Linha5xLME prescricao={p} numero={i} />
                    </div>
                )}
                {lme.prescricoes.length === 1 ?
                    <div>
                        <Linha5ExtraLME numero={lme.prescricoes.length + 1} />
                        <Linha5ExtraLME numero={lme.prescricoes.length + 2} />
                        <Linha5ExtraLME numero={lme.prescricoes.length + 3} />
                    </div>
                    :
                    <div>
                        <Linha5ExtraLME numero={lme.prescricoes.length + 1} />
                        <Linha5ExtraLME numero={lme.prescricoes.length + 2} />
                    </div>
                }
            </Box>
        </>
    )
}

export default Linha5LME