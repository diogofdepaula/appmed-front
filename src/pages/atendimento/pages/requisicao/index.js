import { Box, Divider, FormControl, Grid, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, ListSubheader, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from "@material-ui/core";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import { memo, useContext, useMemo, useRef, useState } from "react";
import { ImpressaoContext } from "../..";
import Operadoras from "./operadoras";
import Sigtap from "./sigtap";
import Tuss from "./tuss";

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

const AdicionadosItems = memo(({ param }) => {

    return (
        <>
            <ListItem>
                <ListItemText primary={param} />
            </ListItem>
        </>
    )
})


const Requisicao = () => {

    const { impressao, setImpressao } = useContext(ImpressaoContext)

    const [search, setSearch] = useState("")
    const listaconvenios = Operadoras()

    const tuss = useRef(Tuss())
    const sigtap = useRef(Sigtap())

    const [justificativa, setJustificatica] = useState('')
    const [selecionados, setSelecionados] = useState([])
    const [convenio, setConvenio] = useState("")
    const ind = useRef(1)
    const [procedimentos, setProcedimentos] = useState(tuss.current)

    const filterProcedimentos = useMemo(() => {
        if (!search) return []
        return procedimentos.filter(w =>
            w[1].toString().toLowerCase().includes(search.toLowerCase())
        )
    }, [search, procedimentos])

    const handleJustificativa = (event) => {
        setJustificatica(event.target.value)
    }

    const handleChangeConvenio = event => {
        setConvenio(event.target.value)
        setSearch("")
        setProcedimentos(event.target.value === 'sus' ? sigtap.current : tuss.current)
    }

    const handleProcedimentoPush = (param) => {
        setSelecionados(prevState => [...prevState, "(" + param[0] + ") - " + param[2]])
    }

    const handleProcedimentoRemove = (param) => {
        setSelecionados(prevState => prevState.filter(w => w.toString().toLowerCase() !== param.toString().toLowerCase()))
    }

    const handleAdd = () => {

        setImpressao({
            ...impressao,
            requisicao: [
                ...impressao.requisicao, {
                    indice: ind.current,
                    justificativa: justificativa,
                    selecionados: selecionados,
                    convenio: convenio,
                }
            ]
        })
        setSelecionados([])
        ind.current = ind.current + 1
    }

    const handleRemove = (param) => {
        setImpressao({
            ...impressao,
            requisicao: impressao.requisicao.filter(x => x.indice !== param)
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
                                rows={3}
                                label="Justificativa"
                                onChange={handleJustificativa}
                            />
                        </Grid>
                        <Grid item xs={3} container direction="column" alignItems="center">
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
                            <IconButton
                                onClick={() => handleAdd()}
                            >
                                <AddCircleOutlineIcon />
                                Adicionar requisição
                            </IconButton>
                            <List subheader={<ListSubheader>Procedimentos para serem incluidos</ListSubheader>} >
                                {selecionados.map((s, i) =>
                                    <ListItems key={i} param={s} handle={handleProcedimentoRemove} />
                                )}
                            </List>
                            <Divider />
                            <Divider />
                            {impressao.requisicao?.map((r, n) =>
                                <Box display="flex" key={n} >
                                    <IconButton
                                        onClick={() => handleRemove(r.indice)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                    <List dense subheader={<ListSubheader>Requisição {r.indice}</ListSubheader>} >
                                        {r.selecionados.map((s, x) =>
                                            <AdicionadosItems key={x} param={s} />
                                        )}
                                    </List>
                                    <Divider />
                                </Box>
                            )}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Requisicao