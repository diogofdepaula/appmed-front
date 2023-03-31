import DeleteIcon from '@mui/icons-material/Delete';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Box, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, TextField } from "@mui/material";
import { useState, useRef } from "react";
import ListProcedimentos from '../../components/listprocedimentos';
import RequisicaoLivre from './requisicaolivre';

const requisicaoinicial = {
    indice: 0,
    justificativa: "",
    selecionados: [],
    convenio: "SUS",
}

const Requisicoes = ({ handleAdicionarRequisicao }) => {

    const [requisicao, setRequisicao] = useState(requisicaoinicial)
    const ind = useRef(1)

    const handleJustificativa = (event) => {
        setRequisicao({
            ...requisicao,
            indice: ind.current,
            justificativa: event.target.value
        })
    }

    const handleProcedimentoPush = (param) => {
        setRequisicao({
            ...requisicao,
            indice: ind.current,
            selecionados: requisicao.selecionados.concat(param)
        })
    }

    const handleAdicionar = () => {
        handleAdicionarRequisicao(requisicao)
        let just = requisicao.justificativa
        setRequisicao({
            indice: ind.current + 1,
            justificativa: just,
            selecionados: [],
            convenio: "SUS",
        })
        ind.current = ind.current + 1
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
                        rows={3}
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
                                {requisicao.selecionados.map((s, i) =>
                                    <ListItem
                                        key={i}
                                    >
                                        <ListItemText
                                            primary={s.mod}
                                        />
                                        <ListItemSecondaryAction>
                                            <IconButton
                                                size='small'
                                            //   onClick={() => handleProcedimentoRemove(s)}
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
                </Box>
            </Box>
        </>
    )
}

export default Requisicoes