import { Box, Button, Checkbox, FormControlLabel, Tab, Tabs, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { ClienteContext, LoginContext, PrintContext } from '../../App';
import PrintDialog from '../print/component/printdialog';
import PrescricaoBanco from './prescricao/prescricaobanco';
import PrescricaoLivre from './prescricao/prescricaolivre';
import { AINHTopico, Ax6010d, Ax907d, Beta, Clb10010d, Clb10014d, Clb2007d, Clb200sn, Curcuma, DF7d, GliCon, NslPtz, Pdn405d204d, TmdPct, Tmdsn, UciiHaMsm } from './prescricao/prescricoes';
import Requisicoes from './requisicao/requisicoes';
import Vacinacao from './vacinacao';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

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
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

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

const RequisicaoBox = ({ requisicao }) => {

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: "column",
                    gap: 1,
                    p: 1,
                    m: 1,
                    border: 0.5,
                    borderRadius: 1,
                    borderColor: "#42a5f5"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: 'space-between',
                    }}
                >
                    <Box
                        sx={{
                            fontSize: 10,
                        }}
                    >
                        {requisicao.justificativa}
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            fontSize: 12,
                            fontWeight: 'bold',
                        }}
                    >
                        {requisicao.selecionados.map((s, i) =>
                            <Box key={i}>
                                {s.mod}
                            </Box>
                        )}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

const VacinacaoBox = ({ vacinacao }) => {

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: "column",
                    gap: 1,
                    p: 1,
                    m: 1,
                    border: 0.5,
                    borderRadius: 1,
                    borderColor: "#42a5f5"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: 'space-between',
                    }}
                >
                    <Box
                        sx={{
                            fontSize: 10,
                        }}
                    >
                        {vacinacao.indicacao}
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            fontSize: 12,
                            fontWeight: 'bold',
                        }}
                    >
                        {vacinacao.selecionadas.map((s, i) =>
                            <Box key={i}>
                                {s.mod}
                            </Box>
                        )}
                    </Box>
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
                    width: '20rem',
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
                        p: 1,
                        m: 1,
                        border: 0.5,
                        borderRadius: 1,
                        borderColor: "#42a5f5"
                    }}
                >
                    {receita.prescricoes.map((p, i) =>
                        <PrescricaoBox prescricao={p} key={i} />
                    )}
                </Box>
                <Box>
                    {receita.comentarios}
                </Box>
                <Box>
                    {receita.requisicoes.map((r, i) =>
                        <RequisicaoBox requisicao={r} key={i} />
                    )}
                </Box>
                <Box>
                    {receita.vacinacao.map((r, i) =>
                        <VacinacaoBox vacinacao={r} key={i} />
                    )}
                </Box>

            </Box>
        </>
    )
}

export const prescricaolivreinicial = {
    continuo: false,
    imprimirorientacoes: false,
    usoposologiapadrao: true,
    orientacoes: "",
    apresentaco: {
        descricao: "",
        uso: "",
    },
    medicamento: {
        farmaco: "",
        controlado: false,
        nomescomerciais: [
            {
                nomefantasia: "",
            },
        ]
    },
    posologia: {
        posologia: "",
        quantidade: "",
        forma: "",
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
        title: "CLB2007D + DF7D",
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
        title: "CLB 100 14D",
        prescricao: [Clb10014d],
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
        title: "Ax 60 14D",
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
    {
        title: "Curcuma ",
        prescricao: [Curcuma],
    },
    {
        title: "AINH Tópico",
        prescricao: [AINHTopico],
    },
]

const Avulso = () => {

    const [value, setValue] = React.useState(0);
    const { setClienteContext } = useContext(ClienteContext)
    const { local } = useContext(LoginContext)
    const { nomecomercial, setNomeComercial, convenio, setConvenio, setMeses, setAvulso, setPrescricoesSelecionadas, setRequisicoes, setVacinacao, setComentario } = useContext(PrintContext)
    const [open, setOpen] = useState(false)
    const [prescricaoLivre, setPrescricaoLivre] = useState(prescricaolivreinicial)

    // acho que tem passar de receita para documentos mas vai dar um trabalho miserável
    const [receita, setReceita] = useState(receitainicial)

    const handleChangeTab = (event, newValue) => {
        setValue(newValue)
    }

    const handleAdicionarPrescricao = (pres) => {
        setReceita({
            ...receita,
            prescricoes: receita.prescricoes.concat(pres)

        })
        setPrescricaoLivre(prescricaolivreinicial)
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
        setPrescricaoLivre(prescricaolivreinicial)
    }

    const handleDrag = (param) => {
        setPrescricaoLivre(param[0])
    }

    const handleDrop = (event) => {
        // tem que ter, pois ele que permite do Drops Drag
        event.preventDefault();
    }

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
                <Conteudo receita={receita} />
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
                            <Box
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
                                    {presc.map((p, i) =>
                                        <Button
                                            id={i}
                                            size="small"
                                            draggable
                                            key={i}
                                            onClick={() => handleAdicionarPrescricao(p.prescricao)}
                                            onDragOver={() => handleDrag(p.prescricao)}
                                        >
                                            {p.title}
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
                            </Box>
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

