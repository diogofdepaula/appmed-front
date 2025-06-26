import { Box, Button, Checkbox, FormControlLabel, MenuItem, Select, Tab, Tabs, TextField, } from '@mui/material';
import { parseISO } from 'date-fns';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useRef, useState, useCallback } from 'react';
import { ClienteContext, DataContext, LoginContext, PrintContext } from '../../App';
import { Operadoras } from '../../utils/operadoras';
import { ExecPrint } from '../print/component/execprint';
import { DataBase } from '../print/component/impressaoset/temposet';
import Ditame from './ditame';
import EmBranco from './embranco';
import Prescricoes from './prescricao';
import Requisicoes from './requisicao';
import Vacinacao from './vacinacao';

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

const Avulso = ({ setter }) => {

    const { clienteContext, setClienteContext } = useContext(ClienteContext)
    const { setFetchAllMedicamentos, dataMedUpdate } = useContext(DataContext)
    const { local } = useContext(LoginContext)
    const { nomecomercial, setNomeComercial, operadora, setOperadora, setMeses, setAvulso, setDatabase, setPrescricoesSelecionadas, setRequisicoes, setVacinacao, setComentario, setEmBranco, printReset } = useContext(PrintContext)
    const [value, setValue] = useState(0);
    const [itemEdit, setItemEdit] = useState(null);
    const ind = useRef(1)
    const [init, setInit] = useState(true)

    const firstData = useCallback(() => {
        setMeses(1)
        if (setter === "avulso") {
            setClienteContext({
                nome: '',
                id: null
            })
        }
    }, [setMeses, setter, setClienteContext])

    useEffect(() => {
        if (!dataMedUpdate) {
            setFetchAllMedicamentos()
        }
        if (init) {
            firstData()
            setInit(false)
        }
    }, [dataMedUpdate, setFetchAllMedicamentos, init, firstData])

    const handleChangeTab = (event, newValue) => {
        setValue(newValue)
        setItemEdit(null)
    }

    const handleAdicionarPrescricao = (presc) => {
        setPrescricoesSelecionadas(prevState => prevState.concat(presc))
        ind.current = ind.current + 1
    }

    const handlePrescricaoDelete = (prescricao) => {
        setPrescricoesSelecionadas(prevState => prevState.filter(p => p.indice !== prescricao.indice))
    }

    const handleAdicionarEmBranco = (param) => {
        setEmBranco(prevState => prevState.concat(param))
        setItemEdit(null)
        ind.current = ind.current + 1
    }

    const handleChange = event => {
        setClienteContext({
            ...clienteContext,
            nome: event.target.value,
            id: null

        })
    }

    const handleChangeComentarios = event => {
        setComentario(event.target.value)
    }

    const handleChangeNomeComercial = (event) => {
        setNomeComercial(event.target.checked)
    }

    const handleChangeOperadora = (event) => {
        setOperadora(event.target.value)
    }

    const handleClickReset = () => {
        printReset()
        // não tirar esse setAvulso daqui porque dá erro
        // lá no Factory devido lista vazia no Reorder
        ///       let grupoprescricoessort = avulso ? grupoprescricoes : Reorder(grupoprescricoes)
        setAvulso(true)
        setMeses(1)
        if (setter === "avulso") {
            setClienteContext({
                nome: '',
                id: null
            })
        }
        setOperadora(Operadoras[0])
    }

    const handleAdicionarRequisicao = (req) => {
        setRequisicoes(prevState => prevState.concat(req))
        setItemEdit(null)
        ind.current = ind.current + 1
    }

    const handleAdicionarVacinacao = (vac) => {
        setVacinacao(prevState => prevState.concat(vac))
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
        setRequisicoes(prevState => prevState.filter(r => r.indice !== requisicao.indice))
    }

    const handleEmBrancoEdit = (embranco) => {
        setItemEdit({
            ...embranco,
            indice: ind.current,
        })
        setValue(4)
        setEmBranco(prevState => prevState.filter(r => r.indice !== embranco.indice))
    }

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
                        {setter === "avulso" &&
                            <ExecPrint />
                        }
                        <FormControlLabel
                            disabled={local.cod === 'consultorio' ? false : true}
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
                        setter === "avulso" &&
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

