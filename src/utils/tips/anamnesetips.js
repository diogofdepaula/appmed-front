import { Box, Chip, Divider, IconButton, Paper } from '@mui/material';
import FormatTextdirectionLToRIcon from '@mui/icons-material/FormatTextdirectionLToR';
import React, { useContext, useState } from 'react';
import { AtendimentoContext } from '..';
import Criterios from './criterios';
import ICAD from './das28';

const AnamneseTips = () => {

    const { lmeEdit, setLmeEdit, medicamentoEdit } = useContext(AtendimentoContext)

    const handleClick = param => event => {
        setLmeEdit({ ...lmeEdit, anamnese: param })
    }

    const handleSolMedicamento = param => event => {
        setLmeEdit({ ...lmeEdit, anamnese: lmeEdit.anamnese.concat('\n').concat(param) })
    }

    const handleClickChip = param => event => {
        setLmeEdit({
            ...lmeEdit,
            anamnese: lmeEdit.anamnese.concat('\n').concat(param[0]),
            relatorio: lmeEdit.relatorio === null ? null : param[2] !== undefined ? { ...lmeEdit.relatorio, [param[1]]: param[2] } : { ...lmeEdit.relatorio }
        })
    }

    const handleClickChipVirgula = param => event => {
        setLmeEdit({
            ...lmeEdit,
            anamnese: lmeEdit.anamnese.concat(param[0]).concat(', '),
            relatorio: lmeEdit.relatorio === null ? null : param[2] !== undefined ? { ...lmeEdit.relatorio, [param[1]]: param[2] } : { ...lmeEdit.relatorio }
        })
    }

    const [inclusao, setInclusao] = useState([])

    const setDoenca = param => () => {
        setInclusao(param)
        setLmeEdit({ ...lmeEdit, anamnese: param[2] })
    }

    const Frases = () => {

        return (
            <Paper elevation={3}>
                <Box p={1}>
                    {inclusao[1]?.map((p, i) =>
                        <div key={i}>
                            <Chip
                                label={p[0]}
                                variant="outlined"
                                onClick={handleClickChipVirgula(p)}
                            />
                            <IconButton
                                draggable
                                onDragEnd={handleClickChip(p)}
                                onClick={handleClickChip(p)}
                                size="large">
                                <FormatTextdirectionLToRIcon />
                            </IconButton>
                        </div>
                    )}
                </Box>
            </Paper>
        );
    }

    return (
        <>
            <Divider />
            <Box py={2} display='flex'>
                <Box ml={1}>
                    <Chip
                        label="Continuidade"
                        variant="outlined"
                        onClick={handleClick("Continuidade de tratamento.")}
                    />
                </Box>
                <Box ml={1}>
                    <Chip
                        label="Solicito..."
                        variant="outlined"
                        onClick={handleSolMedicamento("Solicito o fornecimento de " + medicamentoEdit?.farmaco + " para o tratamento da doença.")}
                    />
                </Box>
                {Criterios().map((c, i) => {
                    return (
                        <Box ml={1} key={i}>
                            <Chip
                                label={c[0]}
                                variant="outlined"
                                onClick={setDoenca(c)}
                            />
                        </Box>
                    )
                })}
            </Box>
            {inclusao[1] ? <Frases /> : <div />}
            <ICAD />
        </>
    )
}

export default AnamneseTips