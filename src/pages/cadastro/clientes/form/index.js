import { Box } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { ClienteCadastroContext } from '..';
import FormCliente from '../../../../components/formcliente';

const ClienteForm = () => {

    const { clienteEdit, setClienteEdit, clienteOnDuty } = useContext(ClienteCadastroContext)

    // const fetchData = useCallback(async () => {
    //     const res = await fetch(process.env.REACT_APP_API_URL + `/clientes/${clienteOnDuty.id}`)
    //     const json = await res.json()
    //     setClienteEdit(json)
    // }, [clienteOnDuty, setClienteEdit])

    // useEffect(() => {
    //    // if (clienteOnDuty) return fetchData()
    //     let clear = clienteOnDuty
    //     if (clear) {
    //         fetchData();
    //     }
    //     return () => clear = false
    // }, [clienteOnDuty, fetchData])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(process.env.REACT_APP_API_URL + `/clientes/${clienteOnDuty.id}`)
            const json = await res.json()
            setClienteEdit(json)
        }
        if(clienteOnDuty !== null){
            fetchData()
        }
    }, [clienteOnDuty, setClienteEdit])


    const handleChange = event => {
        setClienteEdit({ ...clienteEdit, [event.target.name]: event.target.value })
    }

    return (
        <>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    m: 1,
                    flexGrow: 1,
                    maxWidth: '42rem',
                    flexWrap: 'wrap',
                }}
            >
                <FormCliente
                    clienteEdit={clienteEdit}
                    handleChange={handleChange}
                    setClienteEdit={setClienteEdit}
                />
            </Box>
        </>
    )
}

export default ClienteForm