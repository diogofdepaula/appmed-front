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

    const { clienteContext, setClienteIncludes } = useContext(ClienteContext)
    const { prescricaoOnDuty, setPrescricaoOnDuty } = useContext(AtendimentoContext)
    const { setArticleAtendimentoMain } = useContext(AtendimentoNavigateContext)

    const fetchClienteIncludes = async () => {
        await setClienteIncludes(clienteContext.id)
        setArticleAtendimentoMain()
        setPrescricaoOnDuty(null)
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
                <Interromper reiniciar={fetchClienteIncludes} />
                <RemoverPrescricao reiniciar={fetchClienteIncludes} />
                <RemoverPrescricaoLME reiniciar={fetchClienteIncludes} />
            </Box>
        </>
    )
}

export default PrescricaoDelete

