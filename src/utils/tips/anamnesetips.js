import FormatTextdirectionLToRIcon from '@mui/icons-material/FormatTextdirectionLToR';
import { Box, Chip, Divider, IconButton, Paper } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../pages/atendimento';
import { CriteriosLme } from '../criteriosdoencas';
import { DoençaCID } from '../inquiries';
import ICAD from './Icad';

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
                    { ...lmeEdit.relatorio, [param[1]]: true }
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
                    { ...lmeEdit.relatorio, [param[1]]: true }
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
                    x[1].map((y, i) =>
                        <Box key={i}>
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

    const Dor = () => {

        if (DoençaCID(lmeEdit.cid10) !== 'dor') return <></>

        const texto =
            "Paciente com a presença dos seguintes critérios: \n" +
            "Intensidade da dor (escala EVA) de 8; \n" +
            "Refratários de outros fármacos: paracetamol e AINH; \n" +
            "CID principal R52.2'; \n " +
            "CID secundário (patologia que desencadeou a dor): M15; \n" +
            "Dor crônica (superior a 30 dias). \n" +
            "Solicito o fornecimento de Gabapentina."

        return (
            <>
                <Box ml={1}>
                    <Chip
                        label="Dor !!!"
                        variant="outlined"
                        onClick={handleClick(texto)}
                    />
                </Box>
            </>
        )
    }

    console.log(lmeEdit);

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
                        onClick={handleClick("Paciente com a presença dos seguintes critérios:   ")}
                    />
                </Box>
                <Box ml={1}>
                    <Chip
                        label="Nova Medicação"
                        variant="outlined"
                        onClick={() => handleSolMedicamento()}
                    />
                </Box>
                <Dor />
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