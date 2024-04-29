import { FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { Box } from "@mui/system";

const width = '5rem'

export const SwollenJointCount = ({ data, handleChange }) => {

    return (
        <>
            <TextField
                sx={{
                    width: { width }
                }}
                // size='small'
                name="edema"
                label="Edema"
                value={data}
                helperText="0 a 28"
                onChange={(e) => handleChange(e)}
            />
        </>
    )
}

export const TenderJointCount = ({ data, handleChange }) => {

    return (
        <>
            <TextField
                sx={{
                    width: { width }
                }}
                // size='small'
                name="dor"
                label="Dor"
                value={data}
                helperText="0 a 28"
                onChange={(e) => handleChange(e)}
            />
        </>
    )
}

export const ErythrocyteSedimentationRate = ({ data, handleChange }) => {

    return (
        <>
            <TextField
                sx={{
                    width: { width }
                }}
                // size='small'
                name="vhs"
                label="VHS"
                value={data}
                helperText="1 a 300"
                onChange={(e) => handleChange(e)}
            />
        </>
    )
}

export const CReactiveProtein = ({ data, handleChange }) => {

    return (
        <>
            <TextField
                sx={{
                    width: { width }
                }}
                // size='small'
                name="pcr"
                label="PCR"
                helperText="0 a 150"
                value={data}
                onChange={(e) => handleChange(e)}
            />
        </>
    )
}

export const PatientGlobalAssessment = ({ data, handleChange }) => {

    return (
        <>
            <TextField
                sx={{
                    width: { width }
                }}
                // size='small'
                name="pga"
                label="PGA"
                helperText="0 a 10"
                value={data}
                onChange={(e) => handleChange(e)}
            />
        </>
    )
}

export const EvaluatorGlobalAssessment = ({ data, handleChange }) => {

    return (
        <>
            <TextField
                sx={{
                    width: { width }
                }}
                // size='small'
                name="ega"
                label="EGA"
                helperText="0 a 10"
                value={data}
                onChange={(e) => handleChange(e)}
            />
        </>
    )
}

export const BackPain = ({ data, handleChange }) => {

    return (
        <>
            <TextField
                sx={{
                    width: { width }
                }}
                // size='small'
                name="bp"
                label="Back Pain"
                helperText="0 a 10"
                value={data}
                onChange={(e) => handleChange(e)}
            />
        </>
    )
}

export const PerifericalPain = ({ data, handleChange }) => {

    return (
        <>
            <TextField
                sx={{
                    width: { width }
                }}
                // size='small'
                name="pp"
                label="Peripheral Pain"
                helperText="0 a 10"
                value={data}
                onChange={(e) => handleChange(e)}
            />
        </>
    )
}

export const Fatigue = ({ data, handleChange }) => {

    return (
        <>
            <TextField
                sx={{
                    width: { width }
                }}
                // size='small'
                name="fg"
                label="Fadiga"
                helperText="0 a 10"
                value={data}
                onChange={(e) => handleChange(e)}
            />
        </>
    )
}

export const Tenderness = ({ data, handleChange }) => {

    return (
        <>
            <TextField
                sx={{
                    width: { width }
                }}
                // size='small'
                name="td"
                label="Toque"
                helperText="0 a 10"
                value={data}
                onChange={(e) => handleChange(e)}
            />
        </>
    )
}

export const MorningStiffness = ({ data, handleChange }) => {

    return (
        <>
            <TextField
                sx={{
                    width: { width }
                }}
                // size='small'
                name="ms"
                label="Intensidade RM"
                helperText="0 a 10"
                value={data}
                onChange={(e) => handleChange(e)}
            />
        </>
    )
}

export const TimeMorningStiffness = ({ data, handleChange }) => {

    return (
        <>
            <TextField
                sx={{
                    width: { width }
                }}
                // size='small'
                name="tms"
                label="Tempo RM"
                helperText="0 a 120min"
                value={data}
                onChange={(e) => handleChange(e)}
            />
        </>
    )
}

export const DlqiTf = ({ quest, sete, handleChange }) => {

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {(quest.nome === "dlqi7b" && parseInt(sete) === 3)
                    ?
                    <></>
                    :
                    <>
                        <Box
                            sx={{
                                typography: 'body1',
                            }}
                        >
                            {quest.pergunta}
                        </Box>
                        <RadioGroup
                            name={quest.nome}
                            onChange={handleChange}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    width: 1,
                                    justifyContent: 'center',
                                }}
                            >
                                {quest.resposta.map((r, i) =>
                                    <FormControlLabel
                                        key={i}
                                        value={r.valor}
                                        control={<Radio />}
                                        label={r.label}
                                    />
                                )}
                            </Box>
                        </RadioGroup>
                    </>
                }
            </Box>
        </>
    )
}