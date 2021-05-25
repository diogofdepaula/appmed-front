import { Box, FormControlLabel, Grid, Radio, RadioGroup, TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import { ClientesContext } from '..';

const ClienteForm = () => {

    const { clienteEdit, setClienteEdit } = useContext(ClientesContext)

    const handleChange = event => {
        setClienteEdit({ ...clienteEdit, [event.target.name]: event.target.value })
    }

    return (
        <div>
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
                        <TextField
                            name="peso"
                            variant="outlined"
                            label="Peso(Kg)"
                            value={clienteEdit.peso}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            name="altura"
                            variant="outlined"
                            label="Altura(cm)"
                            value={clienteEdit.altura}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            name="telefone"
                            variant="outlined"
                            label="Telefone"
                            value={clienteEdit.telefone}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            name="celular"
                            variant="outlined"
                            label="Celular"
                            value={clienteEdit.celular}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <Grid container item spacing={2}>
                    <Grid item xs>
                        <TextField
                            fullWidth
                            name="cns"
                            variant="outlined"
                            label="CNS"
                            value={clienteEdit.cns}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            fullWidth
                            name="cpf"
                            variant="outlined"
                            label="CPF"
                            value={clienteEdit.cpf}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            fullWidth
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
        </div>
    )
}

export default ClienteForm