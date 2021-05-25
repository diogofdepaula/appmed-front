import { Box, Button, Card, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../..';

const LMEDelete = () => {

    const { setPage, lmeOnDuty, setLmeOnDuty } = useContext(AtendimentoContext)

    const handleDeleteLME = () => event => {

        event.preventDefault();
        fetch(`http://localhost:4001/api.appmed/lmes/${lmeOnDuty.id}`, {
            method: 'delete',
        }).then(data => {
            if (data.ok) {
                setLmeOnDuty(null)
                setPage('prescricoesmain')
            }
        })
    }

    return (
        <div>
            {lmeOnDuty &&
                <div>
                    <Box m={2}>
                        <Card>
                            <Box m={1} display="flex" justifyContent="center" alignItems="flex-end">
                                <Typography variant={'h6'}>{lmeOnDuty.cid10 + " - " + lmeOnDuty.diagnostico} </Typography>
                            </Box>
                        </Card>
                    </Box>
                    <Box m={2}>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleDeleteLME()}
                        >Remover LME (apagará a LME e as prescrições do bando de dados)
                </Button>
                    </Box>
                </div>
            }
        </div>
    )
}

export default LMEDelete