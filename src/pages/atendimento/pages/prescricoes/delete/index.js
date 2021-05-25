import { Box, Button, Card, Grid } from '@material-ui/core';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AtendimentoContext } from '../../..';

const PrescricaoDelete = () => {

    const { setPage, prescricaoOnDuty, setPrescricaoOnDuty } = useContext(AtendimentoContext)
    const [lme, setLme] = useState()
    const [change, setChange] = useState(0)

    const fetchData = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/lmes/one/${prescricaoOnDuty.lmeId}`)
        const json = await res.json();
        setLme(json[0]);
    }, [prescricaoOnDuty])

    useEffect(() => {
        if (prescricaoOnDuty && prescricaoOnDuty.lmeId) {
            fetchData();
        }
    }, [prescricaoOnDuty, fetchData])

    const handleDeletePrescricao = () => event => {

        event.preventDefault();
        fetch(`http://localhost:4001/api.appmed/prescricoes/${prescricaoOnDuty.id}`, {
            method: 'delete',
        }).then(data => {
            if (data.ok) {
                setPrescricaoOnDuty(null)
                setPage('prescricoesmain')
            }
        })
    }

    const handleDeletePrescricaoLME = () => event => {

        event.preventDefault();
        fetch(`http://localhost:4001/api.appmed/lmes/${prescricaoOnDuty.lmeId}`, {
            method: 'delete',
        }).then(data => {
            if (data.ok) {
                setPrescricaoOnDuty(null)
                setPage('prescricoesmain')
            }
        })
    }

    const changeEmUso = useCallback(() => {
        setPrescricaoOnDuty({
            ...prescricaoOnDuty,
            emuso: false,
            termino: new Date().toISOString().slice(0, 10)
        })
        setChange(2)
    }, [setPrescricaoOnDuty, prescricaoOnDuty])

    const updateEmUso = useCallback(async () => {

        fetch(`http://localhost:4001/api.appmed/prescricoes/${prescricaoOnDuty.id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(prescricaoOnDuty)
        }).then(data => {
            if (data.ok) {
                setChange(3)
            }
        })
    }, [prescricaoOnDuty])

    useEffect(() => {
        if (change === 1) {
            changeEmUso()
        } else if (change === 2) {
            updateEmUso()
        } else if (change === 3) {
            setPrescricaoOnDuty(null)
            setPage('prescricoesmain')
        }
    }, [change, changeEmUso, updateEmUso, setPrescricaoOnDuty, setPage])

    return (
        <div>
            {prescricaoOnDuty &&
                <div>
                    <Box m={2}>
                        <Card>
                            <Box m={1}>
                                <h5>{prescricaoOnDuty.medicamento.farmaco} ({prescricaoOnDuty.apresentaco.descricao})</h5>
                                {prescricaoOnDuty.lmeId ?
                                    <div>

                                        <h4>Prescrição vinculada a LME</h4>
                                        {lme && lme.prescricoes.length - 1 === 0 && <h5>Há outras prescrições na LME</h5>}

                                    </div>
                                    :
                                    <div>
                                        <p>Medicamento não vinculado a LME</p>
                                    </div>
                                }
                            </Box>
                        </Card>
                    </Box>
                    <Box m={2}>
                        <Grid container spacing={1} direction="column" justify="center" alignItems="flex-start">
                            <Grid item>
                                <Box>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => setChange(1)}
                                    >Interromper o uso da prescrição (enviado a lista de Fez uso. Será mantida no bando de dados)
                            </Button>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={handleDeletePrescricao()}
                                    >Remover a prescrição (apagará do bando de dados)
                            </Button>
                                </Box>
                            </Grid>
                            <Grid item>
                                {prescricaoOnDuty.lmeId &&
                                    <Box>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={handleDeletePrescricaoLME()}
                                        >Remover a prescrição e a LME (apagará ambos do bando de dados)
                                </Button>
                                    </Box>
                                }
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            }
        </div>
    )
}

export default PrescricaoDelete