import { Box, Button, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { AtendimentoContext, AtendimentoNavigateContext } from '..';
import { AtendimentoLeft, AtendimentoOutside, AtendimentoRight } from '../../../components/atendimento/layout';
import Cid10 from '../../../utils/cid10';

const LMECIDSet = () => {

    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)
    const [cid10] = useState(Cid10())
    const [cidsfiltrados, setcidsfiltrados] = useState([])
    const { setStep } = useContext(AtendimentoNavigateContext)

    const filterCID10 = event => {

        if (event.target.value.length >= 3) {
            let filtro = [...cid10].filter(w =>
                w.cid10.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 ||
                w.descricao.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
            )
            if (filtro.length === 0) {
                filtro.push({
                    id: 0,
                    farmaco: "nenhum cid encontrado"
                })
                // tem algum erro aqui quando coloca filtra algo que não encontoru não está pondo essa linha "nenhum cid encontrado"
            }
            setcidsfiltrados(filtro)
        } else {
            setcidsfiltrados([])
        }
    }

    const handleClick = param => () => {
        setLmeEdit({
            ...lmeEdit,
            cid10: param.cid10,
            diagnostico: param.descricao

        })
        setStep(321)
    }

    return (
        <>
            <AtendimentoOutside>
                <AtendimentoLeft>
                    <Box
                        sx={{
                            mb: 1,
                        }}
                    >
                        <TextField
                            fullWidth
                            autoFocus
                            variant='outlined'
                            label='Filtrar CIDs (pelo menos 3 digitos)'
                            onChange={filterCID10}
                        />
                        <TableContainer component={Paper}>
                            <Table>
                                <TableBody>
                                    {cidsfiltrados.map(cid =>
                                        <TableRow
                                            key={cid.cid10}
                                            onClick={handleClick(cid)}
                                        >
                                            <TableCell component="th" scope="row">
                                                {cid.cid10} - {cid.descricao}
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Box>
                </AtendimentoLeft>
                <Divider orientation='vertical' flexItem />
                <AtendimentoRight>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignContent: 'flex-start',
                            flexGrow: 1,
                            gap: 0.5,
                        }}

                    >
                        {cid10.filter(m => m.favorito).map(x =>
                            <Button
                                variant="outlined"
                                size="small"
                                key={x.cid10}
                                onClick={handleClick(x)}
                            >
                                {x.cid10}
                            </Button>
                        )}
                    </Box>
                </AtendimentoRight>
            </AtendimentoOutside>
        </>
    );
}

export default LMECIDSet