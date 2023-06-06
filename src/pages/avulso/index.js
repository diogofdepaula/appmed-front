import { Box, Button, Checkbox, FormControlLabel, Tab, Tabs, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ClienteContext, LoginContext, PrintContext } from '../../App';
import PrintDialog from '../print/component/printdialog';
import Ditame from './ditame';
// import PrescricaoBanco from './prescricao/prescricaobanco';
// import PrescricaoLivre from './prescricao/prescricaolivre';
// import { PrescricoesList, prescricoeslist } from './prescricao/prescricoeslist';
import Requisicoes from './requisicao';
import Vacinacao from './vacinacao';
import Prescricoes from './prescricao';

const TabPanel = ({ children, value, index, ...other }) => {

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box
                    sx={{
                        typography: 'body1',
                        p: 3
                    }}
                >
                    {children}
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

const receitainicial = {
    clienteContext: {
        nome: ''
    },
    prescricoes: [],
    requisicoes: [],
    vacinacao: [],
    data: '',
    comentarios: '',
}

const Avulso = () => {

    const [value, setValue] = React.useState(0);
    const { setClienteContext } = useContext(ClienteContext)
    const { local } = useContext(LoginContext)
    const { nomecomercial, setNomeComercial, convenio, setConvenio, setMeses, setAvulso, setPrescricoesSelecionadas, setRequisicoes, setVacinacao, setComentario } = useContext(PrintContext)
    const [open, setOpen] = useState(false)
    const [medicamentos, setMedicamentos] = useState([])

    // acho que tem passar de receita para documentos mas vai dar um trabalho miserável
    const [receita, setReceita] = useState(receitainicial)

    const fetchData = useCallback(async () => {
        const res = await fetch(process.env.REACT_APP_API_URL + '/medicamentos/short')
        const json = await res.json()
        setMedicamentos(json)
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    const handleChangeTab = (event, newValue) => {
        setValue(newValue)
    }

    const handleAdicionarPrescricao = (presc) => {
        setReceita({
            ...receita,
            prescricoes: receita.prescricoes.concat(presc)
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
        setRequisicoes(receita.requisicoes)
        setVacinacao(receita.vacinacao)
        setComentario(receita.comentarios)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleChangeNomeComercial = (event) => {
        setNomeComercial(event.target.checked)
    }

    const handleChangeConvenio = (event) => {
        setConvenio(event.target.checked)
    }

    const handleClickReset = () => {
        setReceita(receitainicial)
        //setPrescricaoLivre(prescricaolivreinicial)
    }

    // const handleDrag = (presc) => {
    //     setPrescricaoLivre(presc)
    // }

    // const handleDrop = (event) => {
    //     // tem que ter, pois ele que permite do Drops Drag
    //     event.preventDefault();
    // }

    const handleAdicionarRequisicao = (req) => {
        setReceita({
            ...receita,
            requisicoes: receita.requisicoes.concat(req)
        })
    }

    const handleAdicionarVacinacao = (vac) => {
        setReceita({
            ...receita,
            vacinacao: receita.vacinacao.concat(vac)
        })
    }

    if (open) return <PrintDialog open={open} handleClose={handleClose} />

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
                <Ditame receita={receita} />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        width: 1,
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
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color='primary'
                                    name="convenio"
                                    checked={convenio}
                                    onChange={handleChangeConvenio}
                                />}
                            label='Convênio'
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
                        label="Nome do paciente"
                        onChange={(e) => handleChange(e)}
                    />
                    <Box
                        sx={{
                            width: '100%'
                        }}
                    >
                        <Box
                            sx={{
                                borderBottom: 1,
                                borderColor: 'divider',
                            }}
                        >
                            <Tabs value={value} onChange={handleChangeTab} aria-label="basic tabs example" >
                                <Tab label="Prescrição" {...a11yProps(0)} />
                                <Tab label="Requisição" {...a11yProps(1)} />
                                <Tab label="Vacinação" {...a11yProps(2)} />
                                <Tab label="Atestado" {...a11yProps(4)} />
                                <Tab label="Outros" {...a11yProps(5)} />
                            </Tabs>
                        </Box>
                        <TabPanel
                            value={value}
                            index={0}
                        >
                            <Prescricoes
                                handleAdicionarPrescricao={handleAdicionarPrescricao}
                                handleChangeComentarios={handleChangeComentarios}
                                medicamentos={medicamentos}
                            />
                            {/* <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    width: 1,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        width: '20rem',
                                    }}
                                >
                                    {Object.keys(prescricoeslist).map((p, i) =>
                                        <Button
                                            id={i}
                                            size="small"
                                            draggable
                                            key={i}
                                            onClick={() => handleAdicionarPrescricao(PrescricoesList(p))}
                                            onDragOver={() => handleDrag(PrescricoesList(p))}
                                        >
                                            {p}
                                        </Button>
                                    )}
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 1,
                                        width: 1,
                                    }}

                                >
                                    <PrescricaoBanco
                                        handleAdicionarPrescricao={handleAdicionarPrescricao}
                                        prescricaoLivre={prescricaoLivre}
                                        setPrescricaoLivre={setPrescricaoLivre}
                                        medicamentos={medicamentos}
                                    />
                                    <Box
                                        onDragEnd={(e) => handleDrag(e)}
                                        onDrop={(e) => handleDrop(e)}
                                    >
                                        <PrescricaoLivre
                                            handleAdicionarPrescricao={handleAdicionarPrescricao}
                                            prescricaoLivre={prescricaoLivre}
                                            setPrescricaoLivre={setPrescricaoLivre}
                                        />
                                    </Box>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={2}
                                        variant='outlined'
                                        label="Comentários"
                                        onChange={(e) => handleChangeComentarios(e)}
                                    />
                                </Box>
                            </Box> */}
                        </TabPanel>
                        <TabPanel
                            value={value}
                            index={1}
                        >
                            <Requisicoes
                                handleAdicionarRequisicao={handleAdicionarRequisicao}
                            />
                        </TabPanel>
                        <TabPanel
                            value={value}
                            index={2}
                        >
                            <Vacinacao
                                handleAdicionarVacinacao={handleAdicionarVacinacao}
                            />
                        </TabPanel>
                        <TabPanel
                            value={value}
                            index={3}
                        >
                            Item Four
                        </TabPanel>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Avulso

