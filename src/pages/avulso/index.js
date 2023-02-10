import { Box, Button, TextField, FormControlLabel, Checkbox } from '@mui/material';
import React, { useContext, useState } from 'react';
import { ClienteContext, LoginContext, PrintContext } from '../../App';
import PrintDialog from '../print/component/printdialog';
import PrescricaoLivre from './livre';
import { Ax6010d, Ax907d, Beta, Clb10010d, Clb2007d, Clb200sn, DF7d, GliCon, NslPtz, Pdn405d204d, TmdPct, Tmdsn, UciiHaMsm } from './prescricoes';

const PrescricaoBox = ({ prescricao }) => {

    return (
        <>
            <Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: 'space-between',
                    }}
                >
                    <Box
                        sx={{
                            fontSize: 12,
                            fontWeight: 'bold',
                        }}
                    >
                        {prescricao.medicamento.farmaco + ' (' + prescricao.apresentaco.descricao + ')'}
                    </Box>
                    <Box
                        sx={{
                            fontSize: 10,
                        }}
                    >
                        {prescricao.posologia.quantidade + ' ' + prescricao.posologia.forma}
                    </Box>
                </Box>
                <Box
                    sx={{
                        fontSize: 12,
                    }}
                >
                    {prescricao.posologia.posologia}
                </Box>
                <Box
                    sx={{
                        fontSize: 8,
                    }}
                >
                    {prescricao.imprimirorientacoes ? "com orientações" : ''}
                </Box>
            </Box>
        </>
    )
}

const Conteudo = ({ receita }) => {

    return (
        <>
            <Box
                sx={{
                    border: 1,
                    borderColor: 'black',
                    width: '30rem',
                    height: '40rem',
                }}
            >
                <Box
                    sx={{
                        flexGrow: 1,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 24,
                        m: 1
                    }}
                >
                    {receita.clienteContext.nome}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: "column",
                        gap: 1,
                    }}
                >
                    {receita.prescricoes.map((p, i) =>
                        <PrescricaoBox prescricao={p} key={i} />
                    )}
                </Box>
                <Box>
                    {receita.comentarios}
                </Box>
            </Box>
        </>
    )
}

const Avulso = () => {

    const { setClienteContext } = useContext(ClienteContext)
    const { local } = useContext(LoginContext)
    const { nomecomercial, setNomeComercial, setMeses, setAvulso, setPrescricoesSelecionadas, setComentario } = useContext(PrintContext)
    const [open, setOpen] = useState(false)

    const [receita, setReceita] = useState({
        clienteContext: {
            nome: ''
        },
        prescricoes: [],
        data: '',
        comentarios: '',
    })

    const handleClickAdicionar = (pres) => {
        setReceita({
            ...receita,
            prescricoes: receita.prescricoes.concat(pres)

        })
    }

    const handleChange = event => {
        setReceita({
            ...receita,
            clienteContext: {
                nome: event.target.value
            }
        })
    }
    
    const handleChangeComentarios = event => {
        setReceita({
            ...receita,
            comentarios: event.target.value
        })
    }

    const handleClickPrint = () => {
        setAvulso(true)
        setMeses(1)
        setClienteContext(receita.clienteContext)
        setPrescricoesSelecionadas(receita.prescricoes)
        setComentario(receita.comentarios)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleChangeNomeComercial = (event) => {
        setNomeComercial(event.target.checked)
    }

    const handleClickReset = () => {
        setReceita({
            clienteContext: {
                nome: ''
            },
            prescricoes: [],
            data: '',
            comentarios: '',
        })
    }

    if (open) return <PrintDialog open={open} handleClose={handleClose} />

    const presc = [
        {
            title: "CLB 200 7D",
            prescricao: [Clb2007d],
        },
        {
            title: "DF 7D",
            prescricao: [DF7d],
        },
        {
            title: "CLB 200 7D + DF 7D",
            prescricao: [Clb2007d, DF7d],
        },
        {
            title: "CLB 200 SN",
            prescricao: [Clb200sn],
        },
        {
            title: "CLB 100 10D",
            prescricao: [Clb10010d],
        },
        {
            title: "NslPtz",
            prescricao: [NslPtz],
        },
        {
            title: "Beta",
            prescricao: [Beta],
        },
        {
            title: "Ax 90 7D",
            prescricao: [Ax907d],
        },
        {
            title: "Ax 60 7D",
            prescricao: [Ax6010d],
        },
        {
            title: "Tmd SN",
            prescricao: [Tmdsn],
        },
        {
            title: "TmdPct SN",
            prescricao: [TmdPct],
        },
        {
            title: "GliCon",
            prescricao: [GliCon],
        },
        {
            title: "UCII-HA-MSM",
            prescricao: [UciiHaMsm],
        },
        {
            title: "PDN 40 5D 20 4D",
            prescricao: [Pdn405d204d],
        },

    ]

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    m: 2,
                    gap: 2,
                }}
            >
                <Conteudo receita={receita} />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                        gap: 2,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 1,
                        }}
                    >
                        <Button
                            variant="outlined"
                            onClick={() => handleClickPrint()}
                        >
                            Print
                        </Button>
                        <FormControlLabel
                            disabled={local === 'consultorio' ? false : true}
                            control={
                                <Checkbox
                                    color='primary'
                                    name="nomecomercial"
                                    checked={nomecomercial}
                                    onChange={handleChangeNomeComercial}
                                />}
                            label='Nome comercial'
                        />
                        <Button
                            variant="outlined"
                            onClick={() => handleClickReset()}
                        >
                            Reset
                        </Button>
                    </Box>
                    <TextField
                        fullWidth
                        variant='outlined'
                        label="Nome do paciente"
                        onChange={(e) => handleChange(e)}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                width: "20rem",
                            }}
                        >
                            {presc.map((p, i) =>
                                <Button
                                    key={i}
                                    onClick={() => handleClickAdicionar(p.prescricao)}
                                >
                                    {p.title}
                                </Button>
                            )}
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2
                            }}
                        >
                            <TextField
                                fullWidth
                                multiline
                                rows={4}
                                variant='outlined'
                                label="Comentários"
                                onChange={(e) => handleChangeComentarios(e)}
                            />
                            <PrescricaoLivre
                                handleClickAdicionar={handleClickAdicionar}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Avulso

