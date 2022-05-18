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


const RemoverLME = ({ reiniciar }) => {

    const { lmeOnDuty } = useContext(AtendimentoContext)

    if (!lmeOnDuty) return <></>

    const handleClick = async () => {
        await fetch(process.env.REACT_APP_API_URL + `/lmes/${lmeOnDuty.id}`, {
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
                    Remover a LME.
                </Button>
                <TextoExplicativo
                    texto={
                        "Apagará o registro da LME e as prescrições do bando de dados."
                    }
                />
            </BoxExterno>
        </>
    )
}

const LmeDelete = () => {

    const { clienteContext, setClienteContext } = useContext(ClienteContext)
    const { lmeOnDuty, setLmeOnDuty, setPrescricaoOnDuty } = useContext(AtendimentoContext)
    const { setArticleAtendimentoMain } = useContext(AtendimentoNavigateContext)

    const fetchClienteIncludes = async () => {
        await fetch(process.env.REACT_APP_API_URL + '/clientes/' + clienteContext.id)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            }).then(data => {
                setClienteContext(data)
            })
        setArticleAtendimentoMain()
        setPrescricaoOnDuty(null)
        setLmeOnDuty(null)
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
                            typography: 'body1',
                            display: 'flex',
                            flexDirection: 'column',
                            p: 2,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1,
                            }}
                        >
                            <Box>
                                Medicamentos vinculados a LME:
                                {clienteContext.prescricoes.filter(f => f.lmeId === lmeOnDuty.id).map(p =>
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
                <RemoverLME reiniciar={fetchClienteIncludes} />
            </Box>
        </>
    )
}

export default LmeDelete

