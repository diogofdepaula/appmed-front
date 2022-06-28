import FormatTextdirectionLToRIcon from '@mui/icons-material/FormatTextdirectionLToR';
import { Box, Chip, Divider, IconButton, Paper } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../pages/atendimento';
import { CriteriosLme } from '../criteriosdoencas';
import { DoençaCID } from '../inquiries';
import ICAD from './das28';

const AnamneseTips = () => {

    const { lmeEdit, setLmeEdit, medicamentoEdit } = useContext(AtendimentoContext)

    const handleClick = param => () => {
        setLmeEdit({ ...lmeEdit, anamnese: param })
    }

    const handleSolMedicamento = () => {
        setLmeEdit({
            ...lmeEdit,
            anamnese: lmeEdit.anamnese
                .concat('\n')
                .concat(
                    "Solicito o fornecimento de " +
                    medicamentoEdit?.farmaco +
                    " para o tratamento da doença."
                )
        })
    }

    const handleClickChip = param => () => {
        setLmeEdit({
            ...lmeEdit,
            anamnese: lmeEdit.anamnese.concat('\n').concat(param[0]),
            relatorio:
                lmeEdit.relatorio === null
                    ?
                    null
                    :
                    param[2] !== undefined
                        ?
                        { ...lmeEdit.relatorio, [param[1]]: true }
                        :
                        { ...lmeEdit.relatorio }
        })
    }

    const handleClickChipVirgula = param => () => {
        setLmeEdit({
            ...lmeEdit,
            anamnese: lmeEdit.anamnese.concat(param[0]).concat(', '),
            relatorio:
                lmeEdit.relatorio === null
                    ?
                    null
                    :
                    param[2] === undefined
                        ?
                        { ...lmeEdit.relatorio, [param[1]]: true }
                        :
                        { ...lmeEdit.relatorio }
        })
    }

    const CriteriosAR2020 = () => {

        const handleClickChip2020 = (paramA, paramB) => () => {
            setLmeEdit({
                ...lmeEdit,
                anamnese: lmeEdit.anamnese.concat('\n').concat(paramB[0]),
                relatorio: lmeEdit.relatorio === null
                    ?
                    null
                    :
                    { ...lmeEdit.relatorio, [paramA]: paramB[1] }
            })
        }

        const handleClickChipVirgula2020 = (paramA, paramB) => () => {
            setLmeEdit({
                ...lmeEdit,
                anamnese: lmeEdit.anamnese.concat(paramB[0]).concat(', '),
                relatorio: lmeEdit.relatorio === null
                    ?
                    null
                    :
                    { ...lmeEdit.relatorio, [paramA]: paramB[1] }
            })
        }

        return (
            <>
                {CriteriosLme(lmeEdit)[1].map(x =>
                    x[1].map(y =>
                        <Box key={y[0]}>
                            <Chip
                                label={y[0]}
                                variant="outlined"
                                onClick={handleClickChipVirgula2020(x[0][1], y)}
                            />
                            <IconButton
                                draggable
                                onClick={handleClickChip2020(x[0][1], y)}
                                size="small">
                                <FormatTextdirectionLToRIcon />
                            </IconButton>
                        </Box>
                    ))
                }
                {CriteriosLme(lmeEdit)[0].map((p, i) =>
                    <Box key={i}>
                        <Chip
                            label={p[0]}
                            variant="outlined"
                            onClick={handleClickChipVirgula(p)}
                        />
                        <IconButton
                            draggable
                            onClick={handleClickChip(p)}
                            size="small">
                            <FormatTextdirectionLToRIcon />
                        </IconButton>
                    </Box>
                )}
            </>
        )

    }

    const Criterios = () => {

        if (DoençaCID(lmeEdit.cid10) === 'ar') return <CriteriosAR2020 />

        return (
            <>
                {CriteriosLme(lmeEdit)[0].map((p, i) =>
                    <Box key={i}>
                        <Chip
                            label={p[0]}
                            variant="outlined"
                            onClick={handleClickChipVirgula(p)}
                        />
                        <IconButton
                            draggable
                            onClick={handleClickChip(p)}
                            size="small">
                            <FormatTextdirectionLToRIcon />
                        </IconButton>
                    </Box>
                )}
            </>
        )
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
                        label="Critérios"
                        variant="outlined"
                        onClick={handleClick("Paciente com a presença dos seguintes critérios:")}
                    />
                </Box>
                <Box ml={1}>
                    <Chip
                        label="Nova Medicação"
                        variant="outlined"
                        onClick={() => handleSolMedicamento()}
                    />
                </Box>
            </Box>
            <Paper elevation={3}>
                <Box
                    sx={{
                        p: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0.5
                    }}
                >
                    <Criterios />
                </Box>
            </Paper>
            <ICAD />
        </>
    )
}

export default AnamneseTips