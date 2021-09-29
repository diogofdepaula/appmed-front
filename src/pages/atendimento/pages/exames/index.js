import { Box, Grid, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, ListSubheader, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { memo, useMemo, useState } from "react";
import Procedimentos from "./procedimentos";

const Cell = memo(({ param, handle }) => {
    return (
        <>
            <TableRow>
                <TableCell
                    onClick={() => handle(prev => prev.concat("(" + param[0] + ") - " + param[2]))}
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
                        onClick={() => handle(prev => prev.filter(w => w.toString().toLowerCase() !== param.toString().toLowerCase()))}
                    >
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </>
    )
})

const Exames = () => {

    const [search, setSearch] = useState("")
    const procedimentos = Procedimentos()
    const [selected, setSelected] = useState([])

    const filterProcedimentos = useMemo(() => {
        if (!search) return []
        return procedimentos.filter(w =>
            w[1].toString().toLowerCase().includes(search.toLowerCase())
        )
    }, [search, procedimentos])

    return (
        <div>
            <Box m={1}>
                <Grid container spacing={1}>
                    <Grid container item xs={4} direction="column" justify="flex-start" alignItems="stretch">
                        <Grid item>
                            <Box m={2}>
                                <TextField
                                    fullWidth
                                    label="Nome do procedimento"
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
                                            {filterProcedimentos.map((procedimento, i) =>
                                                <Cell key={i} param={procedimento} handle={setSelected} />
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
                                {selected.map((s, i) =>
                                    <ListItems key={i} param={s} handle={setSelected} />
                                )}
                            </List>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Exames