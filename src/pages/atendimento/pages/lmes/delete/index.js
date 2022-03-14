import { Box, Button, Card, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoContext, AtendimentoNavigateContext } from '../../..';

const LMEDelete = () => {

    const { lmeOnDuty, setLmeOnDuty } = useContext(AtendimentoContext)
    const { setArticlePrescricaoMain } = useContext(AtendimentoNavigateContext)

    const handleDeleteLME = () => event => {

        event.preventDefault();
        fetch(process.env.REACT_APP_API_URL + `/lmes/${lmeOnDuty.id}`, {
            method: 'delete',
        }).then(data => {
            if (data.ok) {
                setLmeOnDuty(null)
                setArticlePrescricaoMain()
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