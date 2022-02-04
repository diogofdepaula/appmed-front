import { Box, Divider, FormControlLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material';
import { format } from 'date-fns';
import React, { useContext } from 'react';
import ReactInputMask from 'react-input-mask';
import { ClientesContext } from '..';

const ClienteForm = () => {

    const { clienteEdit, setClienteEdit } = useContext(ClientesContext)

    const handleChange = event => {
        setClienteEdit({ ...clienteEdit, [event.target.name]: event.target.value })
    }

    const handleChangeNascimento = event => {

        if (event.target.value.length === 10) {
            let dia = event.target.value.slice(0, 2)
            let mes = event.target.value.slice(3, 5)
            let ano = event.target.value.slice(6, 10)
            let data = format(new Date(ano, mes - 1, dia), 'yyyy-MM-dd')
            setClienteEdit({ ...clienteEdit, nascimento: data })
        }
    }

    const handleNome = event => {

        const str = event.target.value
            .toLowerCase()
            .split(" ")
            .map(m => m.length > 2 ? m.charAt(0).toUpperCase() + m.slice(1) : m)
            .join(" ")
        setClienteEdit({ ...clienteEdit, [event.target.name]: str })
    }


    return (
        <div>
            <Box mb={2}>
                <Grid container spacing={2} >
                    <Grid container item spacing={2} >
                        <Grid item xs={9} >
                            <TextField
                                autoFocus
                                fullWidth
                                name="nome"
                                label="Nome completo"
                                variant="outlined"
                                value={clienteEdit.nome}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <RadioGroup aria-label="gender" name="gender" onChange={handleChange}>
                                <Box display="flex" >
                                    <FormControlLabel
                                        name='sexo'
                                        value="feminino"
                                        control={<Radio />}
                                        checked={clienteEdit.sexo === "feminino"}
                                        label="Feminino"
                                        variant="outlined"
                                    />
                                    <FormControlLabel
                                        name='sexo'
                                        value="masculino"
                                        control={<Radio />}
                                        checked={clienteEdit.sexo === "masculino"}
                                        label="Masculino"
                                        variant="outlined"
                                    />
                                </Box>
                            </RadioGroup>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={2}>
                        <Grid item xs>
                            <TextField
                                name="nascimento"
                                label="Data de Nascimento"
                                type="date"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={clienteEdit.nascimento}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs>
                            <ReactInputMask
                                mask="999"
                                value={clienteEdit.peso}
                                maskChar=" "
                                onChange={handleChange}
                            >
                                {() => <TextField
                                    name="peso"
                                    variant="outlined"
                                    label="Peso(Kg)"
                                />}
                            </ReactInputMask>
                        </Grid>
                        <Grid item xs>
                            <ReactInputMask
                                mask="999"
                                value={clienteEdit.altura}
                                maskChar=" "
                                onChange={handleChange}
                            >
                                {() => <TextField
                                    name="altura"
                                    variant="outlined"
                                    label="Altura(cm)"
                                />}
                            </ReactInputMask>
                        </Grid>
                        <Grid item xs>
                            <ReactInputMask
                                mask="(99)99999-9999"
                                value={clienteEdit.telefone}
                                maskChar="_"
                                onChange={handleChange}
                            >
                                {() => <TextField
                                    name="telefone"
                                    variant="outlined"
                                    label="Telefone"
                                />}
                            </ReactInputMask>
                        </Grid>
                        <Grid item xs>
                            <ReactInputMask
                                mask="(99)99999-9999"
                                value={clienteEdit.celular}
                                maskChar="_"
                                onChange={handleChange}
                            >
                                {() => <TextField
                                    name="celular"
                                    variant="outlined"
                                    label="Celular"
                                />}
                            </ReactInputMask>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={2}>
                        <Grid item xs>
                            <ReactInputMask
                                mask="999.9999.9999.9999"
                                value={clienteEdit.cns}
                                maskChar="_"
                                onChange={handleChange}
                            >
                                {() => <TextField
                                    fullWidth
                                    name="cns"
                                    variant="outlined"
                                    label="CNS"
                                />}
                            </ReactInputMask>
                        </Grid>
                        <Grid item xs>
                            <ReactInputMask
                                mask="999.999.999-99"
                                value={clienteEdit.cpf}
                                maskChar="_"
                                onChange={handleChange}
                            >
                                {() => <TextField
                                    fullWidth
                                    name="cpf"
                                    variant="outlined"
                                    label="CPF"
                                />}
                            </ReactInputMask>
                        </Grid>
                        <Grid item xs>
                            <TextField
                                fullWidth
                                type="email"
                                name="email"
                                variant="outlined"
                                label="Email"
                                value={clienteEdit.email}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item spacing={2}>
                        <Grid item xs sm>
                            <TextField
                                fullWidth
                                name="mae"
                                variant="outlined"
                                label="Nome da Mãe"
                                value={clienteEdit.mae}
                                In
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs>
                            <TextField
                                fullWidth
                                variant="outlined"
                                name="endereco"
                                label="Endereço"
                                value={clienteEdit.endereco}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Divider />
            <Box mt={2}>
                <Grid container spacing={2}>
                    <Grid item>
                        <TextField
                            variant="outlined"
                            label="Cole Nascimento"
                            onChange={(e) => handleChangeNascimento(e)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            name="nome"
                            label="Cole nome em caixa alta"
                            variant="outlined"
                            onChange={(e) => handleNome(e)}
                        />
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default ClienteForm