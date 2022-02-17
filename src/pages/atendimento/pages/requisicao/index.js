import { Box, Divider, FormControl, Grid, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, ListSubheader, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { memo, useContext, useMemo, useRef, useState } from "react";
import { PrintContext } from "../..";
import FormatText from "./formattext"
import GroupsTips from "./groupstips";
import Operadoras from "./operadoras";
import Sigtap from "./sigtap";
import Tuss from "./tuss";
import UnitaryTips from "./unitarytips";

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

    return <>
        <ListItem>
            <ListItemText primary={param} />
            <ListItemSecondaryAction>
                <IconButton onClick={() => handle(param)} size="large">
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    </>;
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

    const { requisicoes, setRequisicoes } = useContext(PrintContext)

    const [search, setSearch] = useState("")
    const listaconvenios = Operadoras()

    const tuss = useRef(Tuss())
    const sigtap = useRef(Sigtap())

    const [justificativa, setJustificatica] = useState('')
    const [selecionados, setSelecionados] = useState([])
    const [convenio, setConvenio] = useState(["", "NENHUM", "NENHUM", true, "XXX"])
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
        setConvenio(listaconvenios.filter(p => p[2] === event.target.value)[0])
        setSearch("")
        setProcedimentos(event.target.value === 'SUS' ? sigtap.current : tuss.current)
    }

    const handleProcedimentoPush = (param) => {
        setSelecionados(prevState => [
            ...prevState,
            FormatText(convenio[2], param)
        ])
    }

    const handleProcedimentoRemove = (param) => {
        setSelecionados(prevState => prevState.filter(w => w.toString().toLowerCase() !== param.toString().toLowerCase()))
    }

    const handleAdd = () => {

        setRequisicoes([
            ...requisicoes, {
                indice: ind.current,
                justificativa: justificativa,
                selecionados: selecionados,
                convenio: convenio,
            }]
        )

        setSelecionados([])
        ind.current = ind.current + 1
    }

    const handleRemove = (param) => {
        setRequisicoes(requisicoes.filter(x => x.indice !== param))
    }

    const handleAddGroupsTips = (paramA, paramB) => {
        setRequisicoes([
            ...requisicoes, {
                indice: ind.current,
                justificativa: paramA,
                selecionados: paramB,
                convenio: convenio,
            }]
        )

        setSelecionados([])
        ind.current = ind.current + 1
    }

    const handleAddUnitaryTips = (param) => {
        setSelecionados(prevState => [
            ...prevState,
            FormatText(convenio[2], param)
        ])
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
                                        defaultValue="NENHUM"
                                        onChange={handleChangeConvenio}
                                        label="Convênio"
                                    >
                                        <MenuItem value="NENHUM"></MenuItem>
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
                    <Grid container item xs={4} direction="column" justifyContent="flex-start" alignItems="stretch">
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
                            <IconButton onClick={() => handleAdd()} size="large">
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
                            {requisicoes?.map((r, n) =>
                                <Box display="flex" key={n} >
                                    <IconButton onClick={() => handleRemove(r.indice)} size="large">
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
            <Divider />
            <Box
                style={{
                    margin: "0.5rem"
                }}
            >
                <UnitaryTips handleAddUnitaryTips={handleAddUnitaryTips} procedimentos={procedimentos} />
                <GroupsTips handleAddGroupsTips={handleAddGroupsTips} procedimentos={procedimentos} convenio={convenio} />
            </Box>
        </>
    )
}

export default Requisicao