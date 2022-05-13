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

const Interromper = () => {

    const { prescricaoOnDuty, setPrescricaoOnDuty } = useContext(AtendimentoContext)
    const { setArticleAtendimentoMain } = useContext(AtendimentoNavigateContext)

    const PrescricaoInterrompida = {
        ...prescricaoOnDuty,
        emuso: false,
        termino: new Date().toISOString().slice(0, 10),
        lmeId: null,
    }

    const handleClick = () => {

        fetch(process.env.REACT_APP_API_URL + `/prescricoes/${prescricaoOnDuty.id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(PrescricaoInterrompida)
        }).then(data => {
            if (data.ok) {
                setPrescricaoOnDuty(null)
                setArticleAtendimentoMain()
            }
        })
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2,
                }}
            >
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
            </Box>
        </>
    )
}

const Remover = () => {

    const { prescricaoOnDuty, setPrescricaoOnDuty } = useContext(AtendimentoContext)
    const { setArticleAtendimentoMain } = useContext(AtendimentoNavigateContext)

    const handleClick = () => event => {

        event.preventDefault();
        fetch(process.env.REACT_APP_API_URL + `/prescricoes/${prescricaoOnDuty.id}`, {
            method: 'delete',
        }).then(data => {
            if (data.ok) {
                setPrescricaoOnDuty(null)
                setArticleAtendimentoMain()
            }
        })
    }


    return (
        <>
            <Button
                variant="contained"
                color="secondary"
                onClick={handleClick()}
            >
                Remover a prescrição
            </Button>
            <TextoExplicativo
                texto={
                    "Apagará o registro da prescricao do bando de dados."
                }
            />
        </>
    )
}

const RemoverLME = () => {

    const { prescricaoOnDuty, setPrescricaoOnDuty } = useContext(AtendimentoContext)
    const { setArticleAtendimentoMain } = useContext(AtendimentoNavigateContext)

    if (prescricaoOnDuty.lmeId) return <></>

    const handleClick = () => event => {

        event.preventDefault();
        fetch(process.env.REACT_APP_API_URL + `/lmes/${prescricaoOnDuty.lmeId}`, {
            method: 'delete',
        }).then(data => {
            if (data.ok) {
                setPrescricaoOnDuty(null)
                setArticleAtendimentoMain()
            }
        })
    }

    return (
        <>
            <Button
                variant="contained"
                color="secondary"
                onClick={handleClick()}
            >
                Remover a prescrição e a LMEs.
            </Button>
            <TextoExplicativo
                texto={
                    "Apagará o registro da prescricao e a LME do bando de dados."
                }
            />
        </>
    )
}

const PrescricaoDelete = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { prescricaoOnDuty } = useContext(AtendimentoContext)

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
                <Interromper />
                <Remover />
                <RemoverLME />
            </Box>
        </>
    )
}

export default PrescricaoDelete