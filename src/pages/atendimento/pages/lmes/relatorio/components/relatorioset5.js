import { Box, FormControlLabel, Radio } from '@material-ui/core'
import React, { useContext } from 'react'
import { AtendimentoContext } from '../../../..'

const RelatorioSet5 = () => {

    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        setLmeEdit({ ...lmeEdit, relatorio: { ...lmeEdit.relatorio, [event.target.name]: event.target.checked } })
    }

    const comorb = [
        ['infeccaoviral', 'Infecção viral', lmeEdit.relatorio.infeccaoviral],
        ['hepatite', 'Hepatite', lmeEdit.relatorio.hepatite],
        ['infeccaobacteriana', 'Infecção bacteriana', lmeEdit.relatorio.infeccaobacteriana],
        ['neoplasia', 'Neoplasia', lmeEdit.relatorio.neoplasia],
        ['anemia', 'Anemia', lmeEdit.relatorio.anemia],
        ['alteracaohepatica', 'Alterações hepáticas', lmeEdit.relatorio.alteracaohepatica],
    ]

    return (
        <div>
            <Box m={2}>
                {comorb && comorb.map((w) =>
                    <FormControlLabel
                        key={w[0]}
                        name={w[0]}
                        value="a"
                        // deixei desabilitado, pois sempre será tudo negativo
                        // se algum for positivo, já nem deve fazer imunobiológico
                        disabled
                        control={<Radio />}
                        label={w[1]}
                        checked={w[2] || false}
                        onChange={handleChange}
                    />
                )}
            </Box>
        </div>
    )
}

export default RelatorioSet5