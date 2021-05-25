import { Box, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import PersonIcon from '@material-ui/icons/Person';
import { differenceInYears, parseISO } from 'date-fns';
import React, { useContext } from 'react';
import { ClienteContext } from '../../../App';

const ClienteHeader = () => {

    const { clienteContext } = useContext(ClienteContext)
    const idade = differenceInYears(new Date(), parseISO(clienteContext.nascimento))

    return (
        <div>
            <Box my={2} display="flex" justifyContent="center" alignItems="center">
                <PersonIcon />
                <Typography variant="h5">
                    <Box fontWeight="fontWeightBold">{clienteContext.nome} </Box>
                </Typography>
                <Typography variant="h6">
                    <Box ml={1}> - {idade} anos - </Box>
                </Typography>
                <Typography variant="h6">
                    <Box ml={1}>ID {clienteContext.id}</Box>
                </Typography>
                <EditIcon />
            </Box>
        </div>
    )
}

export default ClienteHeader