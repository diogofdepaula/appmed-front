import { Box, FormControl, Grid, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, ListSubheader, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { memo, useContext, useMemo, useRef, useState } from "react";
import Tuss from "./tuss";
import Operadoras from "./operadoras";
import Sigtap from "./sigtap";
import { ImpressaoContext } from "../..";

const CellProcedimento = memo(({ param, handle }) => {

    return (
        <>
            <TableRow>
                <TableCell
                    onClick={() => handle(param)}
                >
                    {param[1]}
                </TableCell>
            </TableRow>
        </>
    )
})

const ListItems = memo(({ param, handle }) => {

    return (
        <>
            <ListItem>
                <ListItemText primary={param} />
                <ListItemSecondaryAction>
                    <IconButton
                        onClick={() => handle(param)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </>
    )
})

const TempoSet = () => {

    // const handleDateChange = (event) => {
    //     setImpressao({ ...impressao, [event.target.name]: parseISO(event.target.value) })
    // }

    return (
        <>
            <TextField
                mt={1}
                type='date'
                name='database'
                label="Data base"
                InputLabelProps={{
                    shrink: true,
                }}
            //onBlur={handleDateChange} //Não deixei onchange se não ele fica travando
            />
        </>
    )
}

const Exames = () => {

    const { impressao, setImpressao } = useContext(ImpressaoContext)

    const [search, setSearch] = useState("")
    const listaconvenios = Operadoras()

    const tuss = useRef(Tuss())
    const sigtap = useRef(Sigtap())

    const [procedimentos, setProcedimentos] = useState(sigtap.current)

    const filterProcedimentos = useMemo(() => {
        if (!search) return []
        return procedimentos.filter(w =>
            w[1].toString().toLowerCase().includes(search.toLowerCase())
        )
    }, [search, procedimentos])



    const handleJustificativa = (event) => {
        setImpressao({ ...impressao, exames: { ...impressao.exames, justificativa: event.target.value } })
    }

    const handleChangeConvenio = event => {
        setImpressao({
            ...impressao, exames: {
                ...impressao.exames,
                convenio: event.target.value,
                selected: []
            }
        })
        setSearch("")
        setProcedimentos(event.target.value === 'sus' ? sigtap.current : tuss.current)
    }

    const handleProcedimentoPush = (param) => {
        setImpressao({
            ...impressao,
            exames: {
                ...impressao.exames,
                selected: [
                    ...impressao.exames.selected,
                    "(" + param[0] + ") - " + param[2]
                ]
            }
        })
    }

    const handleProcedimentoRemove = (param) => {
        setImpressao({
            ...impressao,
            exames: {
                ...impressao.exames,
                selected: [
                    ...impressao.exames.selected.filter(w => w.toString().toLowerCase() !== param.toString().toLowerCase())
                ]
            }
        })
    }


    return (
        <>
            <Box m={1}>
                <Box mx={2}>
                    <Grid container>
                        <Grid item xs={9}>
                            <TextField
                                fullWidth
                                multiline
                                variant='outlined'
                                rows={6}
                                label="Justificativa"
                                onChange={handleJustificativa}
                            />
                        </Grid>
                        <Grid item xs={3} container direction="column" alignItems="center">
                            <Grid item>
                                <TempoSet />
                            </Grid>
                            <Grid item>
                                <FormControl fullWidth variant="outlined" >
                                    <Select
                                        autoWidth
                                        defaultValue=""
                                        onChange={handleChangeConvenio}
                                        label="Convênio"
                                    >
                                        <MenuItem value="sus">SUS</MenuItem>
                                        {listaconvenios.map((c, i) =>
                                            <MenuItem key={i} value={c[2]}>{c[2]}</MenuItem>
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Grid container spacing={1}>
                    <Grid container item xs={4} direction="column" justify="flex-start" alignItems="stretch">
                        <Grid item>
                            <Box m={2}>
                                <TextField
                                    fullWidth
                                    label="Filtrar procedimentos"
                                    variant="outlined"
                                    onChange={e => setSearch(e.target.value)}
                                />
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box ml={1} mt={1}>
                                <TableContainer component={Paper} >
                                    <Table>
                                        <TableBody>
                                            {filterProcedimentos?.map((procedimento, i) =>
                                                <CellProcedimento key={i} param={procedimento} handle={handleProcedimentoPush} />
                                            )}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item xs>
                        <Box mx={1}>
                            <List dense subheader={<ListSubheader>Procedimentos Selecionados</ListSubheader>} >
                                {impressao.exames.selected.map((s, i) =>
                                    <ListItems key={i} param={s} handle={handleProcedimentoRemove} />
                                )}
                            </List>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Exames