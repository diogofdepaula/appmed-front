import { TextField, Divider } from '@mui/material'
import React, { useContext } from 'react'
import { AtendimentoContext } from '..'
import { AtendimentoLeft, AtendimentoOutside, AtendimentoRight } from '../../../components/atendimento/layout'
import MedicamentosUtilizadosTips from '../../../utils/tips/medutilizadostips'

const RelatorioSet3 = () => {

    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        setLmeEdit({ ...lmeEdit, relatorio: { ...lmeEdit.relatorio, [event.target.name]: event.target.value } })
    }
    
    return (
        <>
            <AtendimentoOutside>
                <AtendimentoLeft>
                    <TextField
                        fullWidth
                        multiline
                        variant='outlined'
                        rows={14}
                        name="utilizados"
                        label="Informar medicamentos utilizados anteriormente e tempo de uso"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={lmeEdit.relatorio?.utilizados || ''}
                        onChange={handleChange}
                    />
                </AtendimentoLeft>
                <Divider orientation='vertical' flexItem />
                <AtendimentoRight>
                    <MedicamentosUtilizadosTips />
                </AtendimentoRight>
            </AtendimentoOutside>
        </>
    )
}

export default RelatorioSet3