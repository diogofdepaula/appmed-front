import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HealingIcon from '@mui/icons-material/Healing';
import InputIcon from '@mui/icons-material/Input';
import ListAltIcon from '@mui/icons-material/ListAlt';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import { Divider, Grid, IconButton, Tooltip } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../..';
import SecondAppBar from './secondappbar';

const FirstAppBar = () => {

    const { setPage, updatePage, setPrescricaoOnDuty, setLmeOnDuty } = useContext(AtendimentoContext)

    return (
        <div>
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                <Grid item xs>
                    <Tooltip title="Voltar">
                        <IconButton size="large">
                            <ArrowBackIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Prescrições">
                        <IconButton
                            onClick={() => {
                                setPrescricaoOnDuty(null)
                                setPage('prescricoesmain')
                                updatePage()
                            }}
                            size="large">
                            <ListAltIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="LMEs">
                        <IconButton
                            onClick={() => {
                                setLmeOnDuty(null)
                                setPage('lmesmain')
                                updatePage()
                            }}
                            size="large">
                            <AccountBalanceIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Requsições">
                        <IconButton
                            onClick={() => {
                                setPage('requisicao')
                                updatePage()
                            }}
                            size="large">
                            <InputIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Atestados">
                        <IconButton size="large">
                            <RemoveRedEyeIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Termos de consentimento">
                        <IconButton size="large">
                            <SpellcheckIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Outros">
                        <IconButton size="large">
                            <HealingIcon />
                        </IconButton>
                    </Tooltip>
                </Grid>
                <Grid item>
                    <SecondAppBar />
                </Grid>
            </Grid>
            <Divider />
        </div>
    );
}

export default FirstAppBar