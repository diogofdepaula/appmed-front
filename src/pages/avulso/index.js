import { Box, Button, TextField, FormControlLabel, Checkbox } from '@mui/material';
import React, { useContext, useState } from 'react';
import { ClienteContext, LoginContext, PrintContext } from '../../App';
import PrintDialog from '../print/component/printdialog';
import { Clb2007d, DF7d } from './prescricoes';

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


//  <Prescricao
//             prescricao={p}
//             mes={0}
//             tipo='consultorio'
//             previoususo={receita.prescricoes[i - 1]?.apresentaco.uso}
//         /> 

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

    const handleClick = (pres) => {
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
                        {presc.map((p, i) =>
                            <Button
                                key={i}
                                onClick={() => handleClick(p.prescricao)}
                            >
                                {p.title}
                            </Button>
                        )}
                    </Box>
                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        variant='outlined'
                        label="Comentários"
                        onChange={(e) => handleChangeComentarios(e)}
                    />
                </Box>
            </Box>
        </>
    )
}

export default Avulso

