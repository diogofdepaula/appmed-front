import DeleteIcon from '@mui/icons-material/Delete';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Box, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import ListProcedimentos from '../../../components/listprocedimentos';
import { MultiplesSimultaneos, Tips } from './prodimentostips';
import RequisicaoLivre from './requisicaolivre';

const requisicaoinicial = {
    indice: 0,
    justificativa: "",
    selecionados: [],
}

const Requisicoes = ({ handleAdicionarRequisicao, itemEdit, ind }) => {

    const [requisicao, setRequisicao] = useState(itemEdit || requisicaoinicial)

    useEffect(() => {
        if (itemEdit) {
            setRequisicao(itemEdit)
        }
    }, [itemEdit])

    const handleJustificativa = (event) => {
        setRequisicao({
            ...requisicao,
            indice: ind.current,
            justificativa: event.target.value
        })
    }

    const handleProcedimentoPush = (param, just) => {
        setRequisicao({
            ...requisicao,
            indice: ind.current,
            justificativa: requisicao.justificativa
                .concat(requisicao.justificativa === "" ? "" : "\n")
                .concat(just || ""),
            selecionados: requisicao.selecionados.concat(param)
        })
    }

    const handleAdicinarMultiplos = (req) => {
        handleAdicionarRequisicao(req)
        setRequisicao({
            indice: ind.current + req.lenght,
            justificativa: '',
            selecionados: [],
        })
    }

    const handleAdicionar = () => {
        handleAdicionarRequisicao(requisicao)
        let just = requisicao.justificativa
        setRequisicao({
            indice: ind.current + 1,
            justificativa: just,
            selecionados: [],
        })
    }

    const handleProcedimentoRemove = (param) => {
        setRequisicao({
            ...requisicao,
            indice: ind.current,
            selecionados: requisicao.selecionados.filter(w => w.mod.toString().toLowerCase() !== param.mod.toString().toLowerCase())
        })
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
                        width: 0.4,
                    }}
                >
                    <TextField
                        fullWidth
                        multiline
                        variant='outlined'
                        rows={8}
                        value={requisicao.justificativa}
                        label="Justificativa"
                        onChange={handleJustificativa}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 0.5,
                            border: 1,
                            borderRadius: 1,
                            borderColor: "#42a5f5"
                        }}
                    >
                        <Box
                            sx={{
                                flexShrink: 0
                            }}
                        >
                            <IconButton
                                onClick={() => handleAdicionar()}
                                size="large"
                            >
                                <ReadMoreIcon />
                            </IconButton>
                        </Box>
                        <Box
                            sx={{
                                width: '100%'
                            }}
                        >
                            <List
                                dense={true}
                            >
                                {requisicao.selecionados?.map((s, i) =>
                                    <ListItem
                                        key={i}
                                    >
                                        <ListItemText
                                            primary={s.mod}
                                        />
                                        <ListItemSecondaryAction>
                                            <IconButton
                                                size='small'
                                                onClick={() => handleProcedimentoRemove(s)}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                )}
                            </List>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        width: 0.6,
                    }}
                >
                    <RequisicaoLivre
                        handleProcedimentoPush={handleProcedimentoPush}
                    />
                    <ListProcedimentos
                        handleProcedimentoPush={handleProcedimentoPush}
                    />
                    <MultiplesSimultaneos
                        handleAdicinarMultiplos={handleAdicinarMultiplos}
                        ind={ind}
                    />
                    <Tips
                        handleProcedimentoPush={handleProcedimentoPush}
                    />
                </Box>

            </Box>
        </>
    )
}

export default Requisicoes