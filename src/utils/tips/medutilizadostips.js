import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import { IconButton } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../pages/atendimento';
import { DataMYYY } from '../tempo';


const MedicamentosUtilizadosTips = () => {

    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    const indices = [
        [lmeEdit.relatorio.medicamento1, lmeEdit.relatorio.inicio1, lmeEdit.relatorio.fim1, lmeEdit.relatorio.motivo1],
        [lmeEdit.relatorio.medicamento2, lmeEdit.relatorio.inicio2, lmeEdit.relatorio.fim2, lmeEdit.relatorio.motivo2],
        [lmeEdit.relatorio.medicamento3, lmeEdit.relatorio.inicio3, lmeEdit.relatorio.fim3, lmeEdit.relatorio.motivo3],
        [lmeEdit.relatorio.medicamento4, lmeEdit.relatorio.inicio4, lmeEdit.relatorio.fim4, lmeEdit.relatorio.motivo4],
        [lmeEdit.relatorio.medicamento5, lmeEdit.relatorio.inicio5, lmeEdit.relatorio.fim5, lmeEdit.relatorio.motivo5],
        [lmeEdit.relatorio.medicamento6, lmeEdit.relatorio.inicio6, lmeEdit.relatorio.fim6, lmeEdit.relatorio.motivo6],
        [lmeEdit.relatorio.medicamento7, lmeEdit.relatorio.inicio7, lmeEdit.relatorio.fim7, lmeEdit.relatorio.motivo7],
    ]

    const handleClick = () => {

        const texto = indices.map(m => m[0] + ' - ' + DataMYYY(m[1]) + ' - ' + DataMYYY(m[2]) + ' - ' + m[3] + '\n').join('')

        setLmeEdit({
            ...lmeEdit, relatorio: {
                ...lmeEdit.relatorio,
                utilizados: texto,
            }
        })
    }

    return (
        <>
            <IconButton
                onClick={handleClick}
                size="large"
            > 
                <AirlineStopsIcon />
            </IconButton>
        </>
    )
}

export default MedicamentosUtilizadosTips