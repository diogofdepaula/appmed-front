import { Divider, Grid, IconButton, Tooltip } from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import HealingIcon from '@material-ui/icons/Healing';
import InputIcon from '@material-ui/icons/Input';
import ListAltIcon from '@material-ui/icons/ListAlt';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../..';
import SecondAppBar from './secondappbar';

const FirstAppBar = () => {

    const { setPage, updatePage, setPrescricaoOnDuty, setLmeOnDuty } = useContext(AtendimentoContext)

    return (
        <div>
            <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item xs>
                    <Tooltip title="Voltar">
                        <IconButton>
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
                        >
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
                        >
                            <AccountBalanceIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Requsições">
                        <IconButton
                            onClick={() => {
                                setPage('requisicao')
                                updatePage()
                            }}
                        >
                            <InputIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Atestados">
                        <IconButton>
                            <RemoveRedEyeIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Termos de consentimento">
                        <IconButton>
                            <SpellcheckIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Outros">
                        <IconButton
                            onClick={() => setPage('teste')}
                        >
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
    )
}

export default FirstAppBar