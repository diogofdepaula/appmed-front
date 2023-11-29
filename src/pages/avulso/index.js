import { Box, Button, Checkbox, FormControlLabel, MenuItem, Select, Tab, Tabs, TextField, } from '@mui/material';
import { parseISO } from 'date-fns';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useRef, useState, useCallback } from 'react';
import { ClienteContext, DataContext, LoginContext, NavigateContext, PrintContext } from '../../App';
import { Operadoras } from '../../utils/operadoras';
import { DataBase } from '../print/component/impressaoset/temposet';
import PrintDialog from '../print/component/printdialog';
import Ditame from './ditame';
import Prescricoes from './prescricao';
import Requisicoes from './requisicao';
import Vacinacao from './vacinacao';
import EmBranco from './embranco';

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
        nome: '',
        id: null
    },
    prescricoes: [],
    requisicoes: [],
    vacinacao: [],
    emBrancos: [],
    data: '',
    comentarios: '',
}

const Avulso = () => {

    const { page } = useContext(NavigateContext)
    const { setClienteContext, clienteContext } = useContext(ClienteContext)
    const { setFetchAllMedicamentos, dataMedUpdate } = useContext(DataContext)
    const { local } = useContext(LoginContext)
    const { nomecomercial, setNomeComercial, operadora, setOperadora, setMeses, setAvulso, setDatabase, setPrescricoesSelecionadas, setRequisicoes, setVacinacao, setComentario, setEmBranco } = useContext(PrintContext)
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(0);
    const [itemEdit, setItemEdit] = useState(null);
    const ind = useRef(1)

    // acho que tem passar de receita para documentos mas vai dar um trabalho miserável
    const [receita, setReceita] = useState(receitainicial)

    const clienteAvulsoXAtendimento = useCallback(() => {
        setClienteContext({
            nome: '',
        })

    }, [setClienteContext])

    useEffect(() => {
        if (!dataMedUpdate) {
            setFetchAllMedicamentos()
        }

        // if (page.type.name === "Avulso") {
        //     clienteAvulsoXAtendimento()
        // }
    }, [dataMedUpdate, setFetchAllMedicamentos, page.type.name, clienteAvulsoXAtendimento])

    const handleChangeTab = (event, newValue) => {
        setValue(newValue)
        setItemEdit(null)
    }

    const handleAdicionarPrescricao = (presc) => {
        setReceita({
            ...receita,
            prescricoes: receita.prescricoes.concat(presc)
        })
        ind.current = ind.current + 1
    }

    const handleAdicionarEmBranco = (param) => {
        setReceita({
            ...receita,
            emBrancos: receita.emBrancos.concat(param)
        })
        setItemEdit(null)
        ind.current = ind.current + 1
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
                 if (page.type.name === "Avulso") {
                    setClienteContext(receita.clienteContext)
         }
        setPrescricoesSelecionadas(receita.prescricoes)
        setRequisicoes(receita.requisicoes)
        setVacinacao(receita.vacinacao)
        setEmBranco(receita.emBrancos)
        setComentario(receita.comentarios)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleChangeNomeComercial = (event) => {
        setNomeComercial(event.target.checked)
    }

    const handleChangeOperadora = (event) => {
        setOperadora(event.target.value)
    }

    const handleClickReset = () => {
        setReceita(receitainicial)
        setOperadora(Operadoras[0])
    }

    const handleAdicionarRequisicao = (req) => {
        setReceita({
            ...receita,
            requisicoes: receita.requisicoes.concat(req)
        })
        setItemEdit(null)
        ind.current = ind.current + 1
    }

    const handleAdicionarVacinacao = (vac) => {
        setReceita({
            ...receita,
            vacinacao: receita.vacinacao.concat(vac)
        })
        ind.current = ind.current + 1
    }

    const handleDateChange = (event) => {
        setDatabase(parseISO(event.target.value))
    }

    const handleRequisicaoEdit = (requisicao) => {
        setItemEdit({
            ...requisicao,
            indice: ind.current,
        })
        setValue(1)
        setReceita({
            ...receita,
            requisicoes: receita.requisicoes.filter(r => r.indice !== requisicao.indice)
        })
    }

    const handleEmBrancoEdit = (embranco) => {
        setItemEdit({
            ...embranco,
            indice: ind.current,
        })
        setValue(4)
        setReceita({
            ...receita,
            emBrancos: receita.emBrancos.filter(r => r.indice !== embranco.indice)
        })
    }

    const handlePrescricaoDelete = (prescricao) => {
        setReceita({
            ...receita,
            prescricoes: receita.prescricoes.filter(p => p.indice !== prescricao.indice)
        })
    }

    if (open) return <PrintDialog open={open} handleClose={handleClose} />

    console.log(clienteContext);

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
                <Ditame
                    receita={receita}
                    handleRequisicaoEdit={handleRequisicaoEdit}
                    handleEmBrancoEdit={handleEmBrancoEdit}
                    handlePrescricaoDelete={handlePrescricaoDelete}
                />
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
                        <Select
                            label='Convênios'
                            name='operadora'
                            value={operadora}
                            onChange={handleChangeOperadora}
                        >
                            <MenuItem value='nenhum'></MenuItem>
                            {Operadoras.map((o, i) =>
                                <MenuItem
                                    key={i}
                                    value={o}
                                >{o.abreviatura}
                                </MenuItem>
                            )}
                        </Select>
                        <Button
                            variant="outlined"
                            onClick={() => handleClickReset()}
                        >
                            Reset
                        </Button>
                        <DataBase
                            handleDateChange={handleDateChange}
                        />
                    </Box>
                    {
                        page.type.name === "Avulso" &&
                        <TextField
                            fullWidth
                            label="Nome do paciente"
                            onChange={(e) => handleChange(e)}
                        />
                    }
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
                                <Tab label="Atestado" {...a11yProps(3)} />
                                <Tab label="Em Branco" {...a11yProps(4)} />
                            </Tabs>
                        </Box>
                        <TabPanel
                            value={value}
                            index={0}
                        >
                            <Prescricoes
                                ind={ind}
                                handleAdicionarPrescricao={handleAdicionarPrescricao}
                                handleChangeComentarios={handleChangeComentarios}
                            />
                        </TabPanel>
                        <TabPanel
                            value={value}
                            index={1}
                        >
                            <Requisicoes
                                ind={ind}
                                handleAdicionarRequisicao={handleAdicionarRequisicao}
                                itemEdit={itemEdit}
                            />
                        </TabPanel>
                        <TabPanel
                            value={value}
                            index={2}
                        >
                            <Vacinacao
                                ind={ind}
                                handleAdicionarVacinacao={handleAdicionarVacinacao}
                            />
                        </TabPanel>
                        <TabPanel
                            value={value}
                            index={4}
                        >
                            <EmBranco
                                ind={ind}
                                itemEdit={itemEdit}
                                handleAdicionarEmBranco={handleAdicionarEmBranco}
                            />
                        </TabPanel>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Avulso

