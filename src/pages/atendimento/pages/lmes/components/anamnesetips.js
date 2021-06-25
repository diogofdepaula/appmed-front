import { Box, Chip, Divider, IconButton, Paper } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { AtendimentoContext } from '../../..';
import Criterios from './criterios';
import FormatTextdirectionLToRIcon from '@material-ui/icons/FormatTextdirectionLToR';

const AnamneseTips = () => {

    const { lmeEdit, setLmeEdit, medicamentoEdit } = useContext(AtendimentoContext)

    const handleClick = param => event => {
        setLmeEdit({ ...lmeEdit, anamnese: param })
    }

    const handleClickChip = param => event => {
        setLmeEdit({ ...lmeEdit, anamnese: lmeEdit.anamnese.concat('\n').concat(param) })
    }

    const handleClickChipVirgula = param => event => {
        setLmeEdit({ ...lmeEdit, anamnese: lmeEdit.anamnese.concat(param).concat(', ') })
    }

    const [inclusao, setInclusao] = useState([])

    const setDoenca = param => () => {
        setInclusao(param)
        setLmeEdit({ ...lmeEdit, anamnese: param[2] })
    }

    const Frases = () => {

        return (
            <Paper py={2} elevation={3}>
                {inclusao[1]?.map((p, i) =>
                    <Box pt={1} pl={2} key={i}>
                        <Chip
                            label={p}
                            variant="outlined"
                            onClick={handleClickChipVirgula(p)}
                        />
                         <IconButton
                         draggable
                            onDragEnd={handleClickChip(p)}
                            onClick={handleClickChip(p)}
                        >
                            <FormatTextdirectionLToRIcon />
                        </IconButton>
                    </Box>
                )}
            </Paper>
        )
    }

    return (
        <div>
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
                        onClick={handleClickChip("Solicito o fornecimento de " + medicamentoEdit.farmaco + " para o tratamento da doença.")}
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
            <Frases />
        </div>
    )
}

export default AnamneseTips