import { Box, Checkbox, FormControlLabel } from '@material-ui/core'
import React, { useContext } from 'react'
import { AtendimentoContext } from '../../../..'
import Criterios from '../../../../component/criterios'

const RelatorioSet2 = () => {

    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        setLmeEdit({ ...lmeEdit, relatorio: { ...lmeEdit.relatorio, [event.target.name]: event.target.checked } })
    }

    const list = Criterios(lmeEdit)

    return (
        <div>
            <Box m={2}>
                {list.map((w) =>
                    <Box key={w[0]}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color='primary'
                                    name={w[0]}
                                    checked={w[2] === true ? true : false}
                                    onChange={handleChange}
                                />}
                            label={w[1]}
                        />
                    </Box>
                )}
            </Box>
        </div>
    )
}

export default RelatorioSet2