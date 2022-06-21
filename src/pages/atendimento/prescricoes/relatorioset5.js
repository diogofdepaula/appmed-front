import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import { Box, Checkbox, Divider, FormControl, FormControlLabel, IconButton, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
import { useContext } from 'react';
import { AtendimentoContext } from '..';
import { DoençaCID } from '../../../utils/inquiries';
import { AijMedicamentos } from '../../../utils/tips/aijsubtipos';

const RelatorioSet5 = () => {

    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        setLmeEdit({ ...lmeEdit, relatorio: { ...lmeEdit.relatorio, [event.target.name]: event.target.value } })
    }

    const handleChecked = event => {
        setLmeEdit({ ...lmeEdit, relatorio: { ...lmeEdit.relatorio, [event.target.name]: event.target.checked } })
    }

    const handleClick = () => {

        setLmeEdit({
            ...lmeEdit, relatorio: {
                ...lmeEdit.relatorio,
                justificativa: 'Continuidade de tratamento (renovação).',
            }
        })
    }

    const Aine = () => {
        if (DoençaCID(lmeEdit.cid10) !== 'ea') return <></>
        return (
            <>
                <FormControlLabel
                    control={
                        <Checkbox
                            color='primary'
                            name="aine"
                            checked={lmeEdit.relatorio?.aine}
                            onChange={handleChecked}
                        />}
                    label='Paciente realizou tratamento com AINE por no mínimo 3 meses'
                />
            </>
        )
    }

    const Sqm = () => {
        if (DoençaCID(lmeEdit.cid10) !== 'ea') return <></>
        return (
            <>
                <FormControlLabel
                    control={
                        <Checkbox
                            color='primary'
                            name="sqm"
                            checked={lmeEdit.relatorio?.sqm}
                            onChange={handleChecked}
                        />}
                    label='Para Secuquinumabe: paciente apresentou falha ou hipersensibilidade 
                    com Anti-TNF em dose adequada por 6 meses.'
                />
            </>
        )
    }

    const Rxt = () => {
        if (DoençaCID(lmeEdit.cid10) !== 'ar') return <></>
        return (
            <>
                <FormControlLabel
                    control={
                        <Checkbox
                            color='primary'
                            name="rxt"
                            checked={lmeEdit.relatorio?.rxt}
                            onChange={handleChecked}
                        />}
                    label='Possui contraindicação absoluta, 
                    toxicidade ou falha terapêutica a todos os MMCD 
                    biológicos Anti-TNF e não Anti-TNF e MMCD alvo-específico'
                />
            </>
        )
    }

    const SqmCtz = () => {
        if (DoençaCID(lmeEdit.cid10) !== 'ap') return <></>
        return (
            <>
                <FormControlLabel
                    control={
                        <Checkbox
                            color='primary'
                            name="ttopreviobiologico"
                            checked={lmeEdit.relatorio?.ttopreviobiologico}
                            onChange={handleChecked}
                        />}
                    label='Paciente já realizou tratamento com MMCD biológico de 1ª linha 
                    por 12 semanas ou teve perda da resposta'
                />
            </>
        )
    }

    const Aij = () => {
        if (DoençaCID(lmeEdit.cid10) !== 'aij') return <></>

        const opções = [
            ['Primeira Opção', '1'],
            ['Segunda Opção', '2'],
            ['Terceira Opção', '3'],
            ['Quarta Opção', '4'],
        ]

        return (
            <>
                <FormControl
                    variant="outlined"
                    fullWidth
                >
                    <InputLabel id="aijsubtipo">Subtipos da AIJ</InputLabel>
                    <Select
                        labelId="aijsubtipo"
                        id="aijsubtipo"
                        label='Subtipos da AIJ'
                        name='aijsubtipo'
                        value={lmeEdit.relatorio?.aijsubtipo}
                        onChange={handleChange}
                    >
                        <MenuItem value=''></MenuItem>
                        {AijMedicamentos().map((c, i) =>
                            <MenuItem
                                key={i}
                                value={c[0][0]}
                            >{c[0][0]}
                            </MenuItem>
                        )}
                    </Select>
                </FormControl>
                <FormControl
                    variant="outlined"
                    fullWidth
                >
                    <InputLabel id="aijopcao">Opções</InputLabel>
                    <Select
                        labelId="aijopcao"
                        id="aijopcao"
                        label='Subtipos da AIJ'
                        name='aijopcao'
                        value={lmeEdit.relatorio?.aijopcao}
                        onChange={handleChange}
                    >
                        <MenuItem value=''></MenuItem>
                        {opções.map((x, y) =>
                            <MenuItem
                                key={y}
                                value={x[1]}
                            >{x[0]}
                            </MenuItem>
                        )}
                        <MenuItem value='Artrite indiferenciada'>Artrite indiferenciada</MenuItem>
                    </Select>
                </FormControl>
            </>
        )
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
                        display: 'inline-flex',
                        gap: 1,
                    }}
                >
                    <TextField
                        fullWidth
                        multiline
                        variant='outlined'
                        rows={8}
                        name="justificativa"
                        label="Justificativa para solicitação inicial ou mudança de tratamento"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={lmeEdit.relatorio?.justificativa}
                        onChange={handleChange}
                    />
                    <Divider orientation='vertical' flexItem />
                    <IconButton
                        onClick={handleClick}
                        size="large"
                    >
                        <AirlineStopsIcon />
                    </IconButton>
                </Box>
                <Box
                    sx={{
                        display: 'inline-flex',
                        gap: 1,
                    }}
                >
                    <TextField
                        value={lmeEdit.relatorio?.dose}
                        onChange={handleChange}
                        variant='outlined'
                        name="dose"
                        label="Dose prescrita para MMCD biológicos (Infliximabe e Tocilizumabe)"
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignContent: 'flex-start',
                        }}
                    >
                        <FormControlLabel
                            name='inducao'
                            value="a"
                            control={<Radio />}
                            label="Realizou dose de indução"
                            checked={lmeEdit.relatorio?.inducao === "a" || false}
                            onChange={handleChange}
                        />
                        <FormControlLabel
                            name='inducao'
                            value="b"
                            control={<Radio />}
                            label="Não realizou dose de indução"
                            checked={lmeEdit.relatorio?.inducao === "b" || false}
                            onChange={handleChange}
                        />
                        <FormControlLabel
                            name='inducao'
                            value="c"
                            control={<Radio />}
                            label="Não se aplica"
                            checked={lmeEdit.relatorio?.inducao === "c" || false}
                            onChange={handleChange}
                        />
                    </Box>
                </Box>
                <Aine />
                <Sqm />
                <Rxt />
                <SqmCtz />
                <Aij />
            </Box>
        </>
    )
}

export default RelatorioSet5