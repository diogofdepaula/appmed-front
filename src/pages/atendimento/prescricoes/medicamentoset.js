import { Box, Button, Divider, TextField } from '@mui/material'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AtendimentoContext, AtendimentoNavigateContext } from '..'
import { AtendimentoLeft, AtendimentoOutside, AtendimentoRight } from '../../../components/atendimento/layout'
import ListMedicamentos from '../../../components/listmedicamento'
import { TextClean } from '../../../utils/textclean'

const MedicamentoSet = () => {

    const { prescricaoEdit, setPrescricaoEdit } = useContext(AtendimentoContext)
    const { setStep } = useContext(AtendimentoNavigateContext)

    const [medicamentos, setMedicamentos] = useState([])
    const [medicamentosfiltrados, setmedicamentosfiltrados] = useState([])

    const fetchData = useCallback(async () => {
        const res = await fetch(process.env.REACT_APP_API_URL + '/medicamentos/short')
        const json = await res.json()
        setMedicamentos(json)
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    const filterMedicamento = event => {

        if (event.target.value.length >= 2) {
            let filtro = [...medicamentos].filter(w =>
                TextClean(w.farmaco.toLowerCase()).indexOf(TextClean(event.target.value.toLowerCase())) !== -1 ||
                                
                // w.farmaco.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 ||
                w.abreviatura.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
            )
            if (filtro.length === 0) {
                filtro.push({
                    id: 0,
                    farmaco: "nenhum medicamento encontrado"
                })
            }
            setmedicamentosfiltrados(filtro)
        } else {
            setmedicamentosfiltrados([])
        }
    }

    const handleTableRow = param => () => {
        setPrescricaoEdit({ ...prescricaoEdit, medicamentoId: param.id })
        setStep(121)
    }

    return (
        <>
            <AtendimentoOutside>
                <AtendimentoLeft>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <TextField
                            fullWidth
                            autoFocus
                            variant='outlined'
                            label='Digite o nome do fármaco'
                            onChange={filterMedicamento}
                        />
                        <ListMedicamentos
                            medicamentosfiltrados={medicamentosfiltrados}
                            handleTableRow={handleTableRow}
                        />
                    </Box>
                </AtendimentoLeft>
                <Divider orientation="vertical" flexItem />
                <AtendimentoRight>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignContent: 'flex-start',
                            flexGrow: 1,
                            gap: 0.5,
                        }}

                    >
                        {medicamentos.filter(m => m.favorito).map(x =>
                            <Button
                                variant="outlined"
                                size="small"
                                key={x.id}
                                onClick={handleTableRow(x)}
                            >
                                {x.abreviatura ?? x.farmaco}
                            </Button>
                        )}
                    </Box>
                </AtendimentoRight>
            </AtendimentoOutside>
        </>
    )
}

export default MedicamentoSet