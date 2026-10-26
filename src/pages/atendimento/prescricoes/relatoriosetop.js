import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import LinkIcon from '@mui/icons-material/Link';
import { Box, Divider, FormControlLabel, IconButton, Radio, TextField, Checkbox } from '@mui/material';
import { useContext } from 'react';
import { AtendimentoContext } from '..';

const FenceStyle = (props) => {

    const Titulo = () => {

        if (!props.titulo) return <></>

        return (
            <>
                <Box
                    sx={{
                        margin: "0 0 -0.8rem 0",
                    }}
                >
                    <Box
                        component="span"
                        sx={{
                            position: "relative",
                            top: "-0.1rem",
                            margin: "0 0 0 1rem",
                            padding: "0 0.3rem 0 0.3rem",
                            backgroundColor: 'white',
                            fontSize: 16,
                            fontWeight: 500
                        }}
                    >
                        {props.titulo}
                    </Box>
                </Box>
            </>
        )
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: props.stretch,
                }}
            >
                <Titulo />
                <Box
                    sx={{
                        padding: "0.5rem 0.5rem 0.5rem 0.5rem",
                        borderColor: "#42a5f5",
                        borderStyle: "solid",
                        borderRadius: '4px', 
                        borderWidth: "1px",
                        height: props.stretch,
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 1,
                            height: props.stretch,
                        }}
                    >
                        {props.children}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

const BoxStyle = (props) => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'flex-start',
                    border: 1,
                    borderRadius: 1,
                    borderColor: "#42a5f5",
                    p: 0.5
                }}
            >
                {props.children}
            </Box>
        </>
    )
}

const RelatorioSetOp = () => {

    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        setLmeEdit({ ...lmeEdit, relatorio: { ...lmeEdit.relatorio, [event.target.name]: event.target.value } })
    }

    const handleClick = () => {
        setLmeEdit({
            ...lmeEdit, relatorio: {
                ...lmeEdit.relatorio,
                ttoanterior: 'Nenhum tratamento anterior relatado.',
            }
        })
    }

    const handleChecked = event => {
        setLmeEdit({ ...lmeEdit, relatorio: { ...lmeEdit.relatorio, [event.target.name]: event.target.checked } })
    }

    const handleClickLink = () => {
        window.open('https://fraxplus.org/calculation-tool/', '_blank');
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 1,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: 1,
                            }}
                        >
                            <TextField
                                fullWidth
                                variant='outlined'
                                name='fxmaiores'
                                label='Fraturas maiores'
                                value={lmeEdit.relatorio.fxmaiores}
                                onChange={handleChange}
                            />
                            <TextField
                                fullWidth
                                variant='outlined'
                                name='fxmenores'
                                label='Fraturas menores'
                                value={lmeEdit.relatorio.fxmenores}
                                onChange={handleChange}
                            />

                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: 1,
                            }}
                        >
                            <TextField
                                variant='outlined'
                                name='l2l4'
                                label='L2-L4'
                                value={lmeEdit.relatorio.l2l4}
                                onChange={handleChange}
                            />
                            <TextField
                                variant='outlined'
                                name='cf'
                                label='CF'
                                value={lmeEdit.relatorio.cf}
                                onChange={handleChange}
                            />
                            <TextField
                                variant='outlined'
                                name='ft'
                                label='FT'
                                value={lmeEdit.relatorio.ft}
                                onChange={handleChange}
                            />
                            <TextField
                                variant='outlined'
                                name='rd'
                                label='Rd33'
                                value={lmeEdit.relatorio.rd}
                                onChange={handleChange}
                            />
                            <TextField
                                variant='outlined'
                                name='fraxm'
                                label='FRAX Maiores'
                                value={lmeEdit.relatorio.fraxm}
                                onChange={handleChange}
                            />
                            <TextField
                                variant='outlined'
                                name='fraxq'
                                label='FRAX Quadril'
                                value={lmeEdit.relatorio.fraxq}
                                onChange={handleChange}
                            />
                            {/* Deixei aqui só para caso bole uma solução depois para o problema do sinal de positivo (+)
                            ou negativo (-), pois o ReactInputMask não tem essa opção de caracter que não seja letra de A a Z */}
                            {/* <ReactInputMask
                            key='l2l4'
                            mask="**9,9"
                            maskChar=" "
                            value={lmeEdit.relatorio.l2l4}
                            onChange={handleChange}
                        >
                            {() => <TextField
                                variant='outlined'
                                name='l2l4'
                                label='L2-L4'
                                onChange={handleChange}
                            />}
                        </ReactInputMask>
                        */}
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: 1,
                                }}
                            >

                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            color='primary'
                                            name="menopausa"
                                            checked={lmeEdit.relatorio?.menopausa}
                                            onChange={handleChecked}
                                        />}
                                    label='Menopausa'
                                />
                                <Divider orientation='vertical' flexItem />
                                <IconButton
                                    onClick={handleClick}
                                    size="large"
                                >
                                    <AirlineStopsIcon />
                                </IconButton>
                                <IconButton
                                    onClick={handleClickLink}
                                    size="large"
                                >
                                    <LinkIcon />
                                </IconButton>
                            </Box>
                            <TextField
                                fullWidth
                                multiline
                                variant='outlined'
                                rows={4}
                                name="ttoanterior"
                                label="Tratamento anterior"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={lmeEdit.relatorio?.ttoanterior || ''}
                                onChange={handleChange}
                            />
                            <TextField
                                fullWidth
                                multiline
                                variant='outlined'
                                rows={2}
                                name="justifmenopausa"
                                label="Justificativa de não realizar a DXA"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={lmeEdit.relatorio?.justifmenopausa || ''}
                                onChange={handleChange}
                            />


                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignContent: 'flex-start',
                            gap: 0.5,
                        }}
                    >
                        <BoxStyle>
                            <FormControlLabel
                                name='riscofx'
                                value="a"
                                control={<Radio />}
                                label="Paciente sem diagnóstico de osteoporose (T-escore maior que -2,5 DP) e baixo risco de fratura no FRAX e sem fraturas prévias"
                                checked={lmeEdit.relatorio?.riscofx === "a" || false}
                                onChange={handleChange}
                            />
                        </BoxStyle>
                        <BoxStyle>
                            <FormControlLabel
                                name='riscofx'
                                value="c"
                                control={<Radio />}
                                label="T-escore igual ou inferior a -2,5 DP"
                                checked={lmeEdit.relatorio?.riscofx === "c" || false}
                                onChange={handleChange}
                            />
                            <FormControlLabel
                                name='riscofx'
                                value="d"
                                control={<Radio />}
                                label="T-escore entre -1,0 e -2,49 DP e alto risco de fratura no FRAX"
                                checked={lmeEdit.relatorio?.riscofx === "d" || false}
                                onChange={handleChange}
                            />
                            <FormControlLabel
                                name='riscofx'
                                value="e"
                                control={<Radio />}
                                label="Fratura osteoporótica prévia"
                                checked={lmeEdit.relatorio?.riscofx === "e" || false}
                                onChange={handleChange}
                            />
                        </BoxStyle>
                        <BoxStyle>
                            <FormControlLabel
                                name='riscofx'
                                value="f"
                                control={<Radio />}
                                label="Fratura osteoporótica nos últimos 12 meses"
                                checked={lmeEdit.relatorio?.riscofx === "f" || false}
                                onChange={handleChange}
                            />
                            <FormControlLabel
                                name='riscofx'
                                value="g"
                                control={<Radio />}
                                label="Múltiplas fraturas osteoporóticas"
                                checked={lmeEdit.relatorio?.riscofx === "g" || false}
                                onChange={handleChange}
                            />
                            <FormControlLabel
                                name='riscofx'
                                value="h"
                                control={<Radio />}
                                label="Fraturas osteoporóticas durante o tratamento"
                                checked={lmeEdit.relatorio?.riscofx === "h" || false}
                                onChange={handleChange}
                            />
                            <FormControlLabel
                                name='riscofx'
                                value="i"
                                control={<Radio />}
                                label="Fraturas osteoporóticas em uso de medicamento que altera o metabolismo ósseo"
                                checked={lmeEdit.relatorio?.riscofx === "i" || false}
                                onChange={handleChange}
                            />
                            <FormControlLabel
                                name='riscofx'
                                value="j"
                                control={<Radio />}
                                label="T-escore inferior a -3,0 DP"
                                checked={lmeEdit.relatorio?.riscofx === "j" || false}
                                onChange={handleChange}
                            />
                            <FormControlLabel
                                name='riscofx'
                                value="k"
                                control={<Radio />}
                                label="Muito alto risco de fratura no FRAX"
                                checked={lmeEdit.relatorio?.riscofx === "k" || false}
                                onChange={handleChange}
                            />
                            <FormControlLabel
                                name='riscofx'
                                value="l"
                                control={<Radio />}
                                label="Risco de queda aumentada"
                                checked={lmeEdit.relatorio?.riscofx === "l" || false}
                                onChange={handleChange}
                            />
                        </BoxStyle>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignContent: 'flex-start',
                        gap: 0.5,
                    }}
                >
                    <FenceStyle titulo={'Ácido Zoledrônico'}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignContent: 'flex-start',
                                gap: 0.5,
                            }}
                        >
                            <FormControlLabel
                                name='clinicaop'
                                value="b"
                                control={<Radio />}
                                label="Dificuldade de deglutição dos bisfosfonatos orais (risedronato e alendronato)."
                                checked={lmeEdit.relatorio?.clinicaop === "b" || false}
                                onChange={handleChange}
                            />
                        </Box>
                    </FenceStyle>
                    <BoxStyle>
                        <Box>
                            Calcitonina
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignContent: 'flex-start',
                                gap: 0.5,
                            }}
                        >
                            <FormControlLabel
                                name='clinicaop'
                                value="e"
                                control={<Radio />}
                                label="'Osteonecrose de mandíbula."
                                checked={lmeEdit.relatorio?.clinicaop === "e" || false}
                                onChange={handleChange}
                            />
                            <FormControlLabel
                                name='clinicaop'
                                value="f"
                                control={<Radio />}
                                label="Fratura atípica."
                                checked={lmeEdit.relatorio?.clinicaop === "f" || false}
                                onChange={handleChange}
                            />
                            <FormControlLabel
                                name='clinicaop'
                                value="g"
                                control={<Radio />}
                                label="Contraindicação absoluta aos demais medicamentos."
                                checked={lmeEdit.relatorio?.clinicaop === "g" || false}
                                onChange={handleChange}
                            />
                        </Box>
                    </BoxStyle>
                    <BoxStyle>
                        <Box>
                            Calcitriol
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignContent: 'flex-start',
                                gap: 0.5,
                            }}
                        >
                            <FormControlLabel
                                name='clinicaop'
                                value="a"
                                control={<Radio />}
                                label="Pacientes renais crônicos com depuração de creatinina endógena (DCE) menor ou igual a 30 mL/min, com osteomalácia hipofosfatêmica ou por deficiência de 1-alfa-hidroxilase, com insuficiência hepática ou hipoparatireoidismo."
                                checked={lmeEdit.relatorio?.clinicaop === "a" || false}
                                onChange={handleChange}
                            />
                        </Box>
                    </BoxStyle>
                    <BoxStyle>
                        <Box>
                            Raloxifeno
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignContent: 'flex-start',
                                gap: 0.5,
                            }}
                        >
                            <FormControlLabel
                                name='clinicaop'
                                value="h"
                                control={<Radio />}
                                label="Período pós menopausa, com baixo risco de tromboembolismo venoso e não estar em uso concomitante de estrógenos."
                                checked={lmeEdit.relatorio?.clinicaop === "h" || false}
                                onChange={handleChange}
                            />
                            <FormControlLabel
                                name='clinicaop'
                                value="c"
                                control={<Radio />}
                                label="Intolerância ou contraindicação aos bisfosfonatos (risedronato, alendronato, pamidronato e ácido zoledrônico)."
                                checked={lmeEdit.relatorio?.clinicaop === "c" || false}
                                onChange={handleChange}
                            />
                            <FormControlLabel
                                name='clinicaop'
                                value="i"
                                control={<Radio />}
                                label="Osteonecrose de mandíbula ou fratura atípica."
                                checked={lmeEdit.relatorio?.clinicaop === "i" || false}
                                onChange={handleChange}
                            />
                            <FormControlLabel
                                name='clinicaop'
                                value="d"
                                control={<Radio />}
                                label="Alto risco de câncer de mama."
                                checked={lmeEdit.relatorio?.clinicaop === "d" || false}
                                onChange={handleChange}
                            />
                        </Box>
                    </BoxStyle>
                    <BoxStyle>
                        <Box>
                            Romosozumabe
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignContent: 'flex-start',
                                gap: 0.5,
                            }}
                        >
                            <FormControlLabel
                                name='clinicaop'
                                value="j"
                                control={<Radio />}
                                label="Presença de uma fratura incidente após tempo mínimo de tratamento de 1 ano com agente preconizado no PCDT e perda significativa de densidade mineral óssea (redução de mais de 5% em qualquer sítio no intervalo avaliado), considerando boa adesão ao tratamento e ausência de causas secundárias de perda de massa óssea."
                                checked={lmeEdit.relatorio?.clinicaop === "j" || false}
                                onChange={handleChange}
                            />
                            <FormControlLabel
                                name='clinicaop'
                                value="k"
                                control={<Radio />}
                                label="Presença de duas ou mais fraturas incidentes por fragilidade em vigência de tratamento para osteoporose."
                                checked={lmeEdit.relatorio?.clinicaop === "k" || false}
                                onChange={handleChange}
                            />
                        </Box>
                    </BoxStyle>
                </Box>
            </Box>
        </>
    )
}

export default RelatorioSetOp