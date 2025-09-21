import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import LinkIcon from '@mui/icons-material/Link';
import { Box, Divider, FormControlLabel, IconButton, Radio, TextField } from '@mui/material';
import { useContext } from 'react';
import { AtendimentoContext } from '..';

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

    const handleClickLink = () => {
        window.open('https://fraxplus.org/calculation-tool/', '_blank');
    }

    return (
        <>
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
                            display: 'inline-flex',
                            gap: 1,
                        }}
                    >
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
                        <Divider orientation='vertical' flexItem />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1,
                            }}
                        >
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
                            label="Paciente sem diagnóstico de osteoporose (T-escore > -2,5 DP) e baixo risco de fratura no FRAX e sem fraturas prévias"
                            checked={lmeEdit.relatorio?.riscofx === "a" || false}
                            onChange={handleChange}
                        />
                    </BoxStyle>
                    <BoxStyle>
                        <FormControlLabel
                            name='riscofx'
                            value="b"
                            control={<Radio />}
                            label="Osteopenia e sem fraturas osteoporóticas prévias"
                            checked={lmeEdit.relatorio?.riscofx === "b" || false}
                            onChange={handleChange}
                        />
                    </BoxStyle>
                    <BoxStyle>
                        <FormControlLabel
                            name='riscofx'
                            value="c"
                            control={<Radio />}
                            label="T-escore ≤ -2,5 DP."
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
                            label="Muito alto risco de fratura no FRAX (FxM > 20% e/ou FxQ > 3%)"
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

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignContent: 'flex-start',
                    }}
                >
                    <FormControlLabel
                        name='clinicaop'
                        value="a"
                        control={<Radio />}
                        label="Doença renal crônica estágio 4 ou 5."
                        checked={lmeEdit.relatorio?.clinicaop === "a" || false}
                        onChange={handleChange}
                    />
                    <FormControlLabel
                        name='clinicaop'
                        value="b"
                        control={<Radio />}
                        label="Dificuldade de deglutição dos bisfosfonatos orais (RSD e ALD)"
                        checked={lmeEdit.relatorio?.clinicaop === "b" || false}
                        onChange={handleChange}
                    />
                    <FormControlLabel
                        name='clinicaop'
                        value="c"
                        control={<Radio />}
                        label="Intolerância ou contraindicação aos bisfosfonatos (RSD, ALD, PMD e AZ)"
                        checked={lmeEdit.relatorio?.clinicaop === "c" || false}
                        onChange={handleChange}
                    />
                    <FormControlLabel
                        name='clinicaop'
                        value="d"
                        control={<Radio />}
                        label="Alto risco de câncer de mama"
                        checked={lmeEdit.relatorio?.clinicaop === "d" || false}
                        onChange={handleChange}
                    />
                    <FormControlLabel
                        name='clinicaop'
                        value="e"
                        control={<Radio />}
                        label="Osteonecrose de mandíbula"
                        checked={lmeEdit.relatorio?.clinicaop === "e" || false}
                        onChange={handleChange}
                    />
                </Box>
            </Box>
        </>
    )
}

export default RelatorioSetOp