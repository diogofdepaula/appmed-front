import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import { IconButton } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../pages/atendimento';


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

        const texto = indices.map(m => m[0] === '' ? '' : (m[0] + ' - ' + m[1] + ' - ' + m[2] + ' - ' + m[3] + '\n')).join('')

        setLmeEdit({
            ...lmeEdit, relatorio: {
                ...lmeEdit.relatorio,
                utilizados: texto,
            }
        })
    }

    const handleClickChange = () => {

       const texto = lmeEdit.relatorio.utilizados
        .replace('\t', '') // isso mudará o primeiro
        .replace(/['\t']/g, ' - ') // isso mudará os outros
        .replace(/ - MTX/g, 'Metotrexato')
        .replace(/ - LFN/g, 'Leflunomida')
        .replace(/ - HCLQ/g, 'Hidroxicloroquina')
        .replace(/ - SSZ/g, 'Sulfassalazina')
        .replace(/ - ADA/g, 'Adalimumabe')
        .replace(/ - IFX/g, 'Infliximabe')
        .replace(/ - CTZ/g, 'Certolizumabe')
        .replace(/ - GLM/g, 'Golimumabe')
        .replace(/ - ETN/g, 'Etanercepte')
        .replace(/ - TCZ/g, 'Tocilizumabe')
        .replace(/ - ABT/g, 'Abatacepte')
        .replace(/ - Tofa/g, 'Tofacitinibe')
        .replace(/ - RXT/g, 'Rituximabe')
        .replace(/eficacia/g, 'eficácia')
        .replace(/GI/g, 'gastrointestinal')
        
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
            <IconButton
                onClick={handleClickChange}
                size="large"
            > 
                <PublishedWithChangesIcon />
            </IconButton>
        </>
    )
}

export default MedicamentosUtilizadosTips