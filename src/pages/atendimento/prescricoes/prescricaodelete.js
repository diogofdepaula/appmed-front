import { Box, Button, Paper } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoContext, AtendimentoNavigateContext } from '..';
import { ClienteContext } from '../../../App';

const TextoExplicativo = ({ texto }) => {
    return (
        <>
            <Box
                sx={{
                    typography: 'body1',
                    justifyContent: 'flex-end',
                    alignSelf: 'center',
                }}
            >
                {texto}

            </Box>
        </>
    )
}

const BoxExterno = (props) => {

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2,
                }}
            >
                {props.children}
            </Box>
        </>
    )
}

const Interromper = ({ reiniciar }) => {

    const { prescricaoOnDuty } = useContext(AtendimentoContext)

    if (!prescricaoOnDuty.emuso) return <></>

    const PrescricaoInterrompida = {
        ...prescricaoOnDuty,
        emuso: false,
        termino: new Date().toISOString().slice(0, 10),
        lmeId: null,
    }

    const handleClick = async () => {

        await fetch(process.env.REACT_APP_API_URL + `/prescricoes/${prescricaoOnDuty.id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(PrescricaoInterrompida)
        })
        await reiniciar()
    }

    return (
        <>
            <BoxExterno>
                <Button
                    variant="contained"
                    onClick={() => handleClick()}
                >
                    Interromper
                </Button>
                <TextoExplicativo
                    texto={
                        "Será enviada para lista de 'fez uso'. Será mantida no banco de dados."
                    }
                />
            </BoxExterno>
        </>
    )
}

const ZerarLME = ({ reiniciar }) => {

    const { prescricaoOnDuty } = useContext(AtendimentoContext)

    if (!prescricaoOnDuty.emuso) return <></>

    const PrescricaoInterrompida = {
        ...prescricaoOnDuty,
        usoposologiapadrao: false,
        posologianaopadrao: 'Medicação interrompida. Deve-se parar o uso e fornecimento.',
        quantidadenaopadrao: '',
        formanaopadrao: '',
        imprimirorientacoes: false,
        orientacoes: '',
        lmemes1: '0',
        lmemes2: '0',
        lmemes3: '0',
        lmemes4: '0',
        lmemes5: '0',
        lmemes6: '0',
        emuso: true,
        termino: new Date().toISOString().slice(0, 10),
    }

    const handleClick = async () => {
        await fetch(process.env.REACT_APP_API_URL + `/prescricoes/${prescricaoOnDuty.id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(PrescricaoInterrompida)
        })
        await reiniciar()
    }

    return (
        <>
            <BoxExterno>
                <Button
                    variant="contained"
                    color="warning"
                    onClick={() => handleClick()}
                >
                    Zerar na LME e interromper a medicação.
                </Button>
                <TextoExplicativo
                    texto={
                        "Será zerada na LME, mas mantida ainda vinculada."
                    }
                />
            </BoxExterno>
        </>
    )
}

const RemoverPrescricao = ({ reiniciar }) => {

    const { prescricaoOnDuty } = useContext(AtendimentoContext)

    const handleClick = async () => {
        await fetch(process.env.REACT_APP_API_URL + `/prescricoes/${prescricaoOnDuty.id}`, {
            method: 'delete',
        })
        await reiniciar()
    }

    return (
        <>
            <BoxExterno>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleClick()}
                >
                    Remover a prescrição
                </Button>
                <TextoExplicativo
                    texto={
                        "Apagará o registro da prescricao do bando de dados."
                    }
                />
            </BoxExterno>
        </>
    )
}

const RemoverPrescricaoLME = ({ reiniciar }) => {

    const { prescricaoOnDuty } = useContext(AtendimentoContext)

    if (!prescricaoOnDuty.lmeId) return <></>

    const handleClick = async () => {
        await fetch(process.env.REACT_APP_API_URL + `/lmes/${prescricaoOnDuty.lmeId}`, {
            method: 'delete',
        })

        await reiniciar()
    }

    return (
        <>
            <BoxExterno>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleClick()}
                >
                    Remover a prescrição e a LMEs.
                </Button>
                <TextoExplicativo
                    texto={
                        "Apagará o registro da prescricao e a LME do bando de dados."
                    }
                />
            </BoxExterno>
        </>
    )
}

const PrescricaoDelete = () => {

    const { clienteContext, setResetCliente } = useContext(ClienteContext)
    const { prescricaoOnDuty, setResetAtendimento } = useContext(AtendimentoContext)
    const { setResetAtendimentoNavegate } = useContext(AtendimentoNavigateContext)

    const resetAll = () => {
        setResetCliente()
        setResetAtendimento()
        setResetAtendimentoNavegate()
    }

    return (
        <>
            <Box
                sx={{
                    m: 1,
                }}
            >
                <Paper
                    elevation={2}
                >
                    <Box
                        sx={{
                            typography: 'h6',
                            fontWeight: 'bold',
                            p: 2,
                        }}
                    >
                        {prescricaoOnDuty.medicamento.farmaco} ({prescricaoOnDuty.apresentaco.descricao})
                    </Box>

                    <Box
                        sx={{
                            typography: 'body1',
                            display: 'flex',
                            flexDirection: 'column',
                            p: 2,
                        }}
                    >
                        {prescricaoOnDuty.lmeId &&
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 1,
                                }}
                            >
                                <Box>
                                    Prescrição vinculada a LME
                                </Box>
                                <Box>
                                    Outros medicamento na mesma LME:
                                    {clienteContext.prescricoes.filter(f => f.lmeId === prescricaoOnDuty.lmeId).map(p =>
                                        <Box
                                            key={p.id}
                                            sx={{
                                                ml: 2,
                                            }}
                                        >
                                            {p.medicamento.farmaco}
                                        </Box>
                                    )}
                                </Box>
                            </Box>
                        }
                    </Box>
                </Paper>
            </Box>
            <Box
                sx={{
                    m: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                }}
            >
                <ZerarLME reiniciar={resetAll} />
                <Interromper reiniciar={resetAll} />
                <RemoverPrescricao reiniciar={resetAll} />
                <RemoverPrescricaoLME reiniciar={resetAll} />
            </Box>
        </>
    )
}

export default PrescricaoDelete

