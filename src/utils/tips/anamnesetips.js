import { Box, Chip, Divider, Paper } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../pages/atendimento';
import { CriteriosLme } from '../criteriosdoencas';
import { DoençaCID, NumeroAleatorio } from '../inquiries';
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
                .concat(' ')
                .concat(
                    "Solicito o fornecimento de " +
                    medicamentoEdit?.farmaco +
                    " para o tratamento da doença."
                )
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
                    </Box>
                )}
            </>
        )

    }

    const Criterios = () => {

        if (DoençaCID(lmeEdit.cid10) === 'ar') return <CriteriosAR2020 />

        if (DoençaCID(lmeEdit.cid10) === 'outro') return <></>

        return (
            <>
                {CriteriosLme(lmeEdit)[0].map((p, i) =>
                    <Box key={i}>
                        <Chip
                            label={p[0]}
                            variant="outlined"
                            onClick={handleClickChipVirgula(p)}
                        />
                    </Box>
                )}
            </>
        )
    }

    const Dor = () => {

        if (DoençaCID(lmeEdit.cid10) !== 'dor') return <></>

        const Texto = (cid) => {

            const cid10 = cid = "M15" ? "M15" : "M79.7"

            const eva = ["4", "6", "8", "10"][NumeroAleatorio(4)]

            const med = ["analgésicos", "paracetamol", "antiinflamatórios", "opióides fracos"][NumeroAleatorio(4)]

            return "Paciente com a presença dos seguintes critérios: \n" +
                "Intensidade da dor (escala EVA) de " + eva + "; \n" +
                "Refratários de outros fármacos: " + med + "; \n" +
                "CID principal R52.2; \n" +
                "CID secundário (patologia que desencadeou a dor): " + cid10 + "; \n" +
                "Dor crônica (superior a 30 dias). \n" +
                "Solicito o fornecimento de Gabapentina."
        }

        const handleChip = (cid) => {
            setLmeEdit({ ...lmeEdit, anamnese: Texto(cid) })
        }

        return (
            <>
                <Box ml={1}>
                    <Chip
                        label="Dor M15"
                        variant="outlined"
                        onClick={() => handleChip('M15')}
                    />
                    <Chip
                        label="Dor M79.7"
                        variant="outlined"
                        onClick={() => handleChip('M79.7')}
                    />
                </Box>
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
                        onClick={handleClick("Continuidade de tratamento (renovação).")}
                    />
                </Box>
                <Box ml={1}>
                    <Chip
                        label="Critérios"
                        variant="outlined"
                        onClick={handleClick("Paciente com a presença dos seguintes critérios: ")}
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