import { Box, TextField } from '@mui/material';
import React, { useContext } from "react";
import { AtendimentoContext } from '..';

const AtestadoSet = () => {

    // const { clienteContext, setClienteContext } = useContext(ClienteContext)
    const { atestadoEdit, setAtestadoEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        setAtestadoEdit({ ...atestadoEdit, [event.target.name]: event.target.value })
    }

    // const handleSubmit = async () => {
    //     await fetch(process.env.REACT_APP_API_URL + `/clientes/${clienteContext.id}`, {
    //         method: 'put',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(clienteContext)
    //     }).then(data => {
    //         if (data.ok) {
    //             fetch(process.env.REACT_APP_API_URL + '/clientes/' + clienteContext.id)
    //                 .then(res => {
    //                     if (res.ok) {
    //                         return res.json()
    //                     }
    //                 }).then(data => {
    //                     setClienteContext(data)
    //                 })
    //         }
    //     }).finally(() => {
    //         setPageAtendimento()
    //         handleClose()
    //     })
    // }


    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    gap: 1,
                }}
            >
                <Box
                    sx={{
                        display: 'inline-flex',
                        gap: 1,
                    }}
                >
                    <TextField
                        // fullWidth
                        name="cid10"
                        label="CID10"
                    // value={atestadoEdit.cid10}
                    //   onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        name="diagnostico"
                        label="Diagnóstico"
                    // value={atestadoEdit.diagnostico}
                    //   onChange={handleChange}
                    />
                </Box>
                <TextField
                    // fullWidth
                    name="tratamento"
                    label="Tratamento"
                  //  value={atestadoEdit.tratamento}
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    name="prognostico"
                    label="Prognóstico"
                 //  value={atestadoEdit.prognostico}
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    name="comentario"
                    label="Comentário"
                 //   value={atestadoEdit.comentario}
                    onChange={handleChange}
                />
                <TextField
                    name="data"
                    label="Data"
                    type="date"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                 //   value={atestadoEdit.data}
                    onChange={handleChange}
                />
                {/* <Box
                    sx={{
                        mt: 1,
                    }}
                >
                    {"Última impressão:  "}
                    {atestadoEdit.ultimaimpressao
                        ?
                        DataDDMMYYY(atestadoEdit.ultimaimpressao) + " (" + DateDifferenceToday(atestadoEdit?.ultimaimpressao) + " meses )"
                        :
                        'Indefinido'
                    }
                </Box> */}
            </Box>
        </>
    )
}

export default AtestadoSet