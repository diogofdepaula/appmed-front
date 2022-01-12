import { Box, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { ClienteContext } from '../../../../../../../App';
import PageSize from '../../../component/pagesize';

const Identificacao = ({ tipo }) => {

    const { clienteContext } = useContext(ClienteContext)

    const BoxExterno = (prop) => {

        if (PageSize(tipo)) {
            return (
                <Box style={{
                    // A5
                    display: 'block',
                    paddingTop: 3,
                    paddingBottom: 7,
                }}
                >
                    {prop.children}
                </Box>
            )
        } else {
            return (
                <Box style={{
                    // A4
                    display: 'block',
                    paddingTop: 20,
                    paddingBottom: 1,
                }}>
                    {prop.children}
                </Box>
            )
        }
    }

    const TypoNome = (prop) => {

        if (PageSize(tipo) && clienteContext.nome.length <= 27) {
            return (
                <Typography
                    style={{
                        fontSize: 38,
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}
                >
                    {prop.children}
                </Typography>
            )
        } else if (PageSize(tipo) && clienteContext.nome.length > 27) {
            return (
                <Typography
                    style={{
                        fontSize: 32,
                        letterSpacing: '0px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}
                >
                    {prop.children}
                </Typography>
            )
        } else if (!PageSize(tipo) && clienteContext.nome.length <= 27) {
            return (
                <Typography
                    style={{
                        fontSize: 48,
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}
                >
                    {prop.children}
                </Typography>
            )
        } else if (!PageSize(tipo) && clienteContext.nome.length > 27) {
            return (
                <Typography
                    style={{
                        fontSize: 44,
                        fontWeight: 'bold',
                        letterSpacing: '0px',
                        textAlign: 'center',
                    }}
                >
                    {prop.children}
                </Typography>
            )
        }
    }

    const TypoCPF = (prop) => {

        if (PageSize(tipo)) {
            return (
                <Typography
                    style={{
                        display: 'none'
                    }}
                >
                    {prop.children}
                </Typography>
            )
        } else {
            return (
                <Typography
                    style={{
                        fontVariant: 'subtitle2',
                        textAlign: 'center'
                    }}
                >
                    {prop.children}
                </Typography>
            )
        }
    }

    return (
        <>
            <BoxExterno>
                <TypoNome>
                    {clienteContext.nome}
                </TypoNome>
                <TypoCPF>
                    {clienteContext.cpf && "CPF: " + clienteContext.cpf}
                </TypoCPF>
            </BoxExterno>
        </>
    )
}

export default Identificacao