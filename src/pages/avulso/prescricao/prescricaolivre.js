import { Box, Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import React from 'react';
import { prescricaolivreinicial } from '.';

const PrescricaoLivre = ({ handleAdicionarPrescricao, prescricaoLivre, setPrescricaoLivre }) => {

    const handleChangeApresentaco = event => {
        setPrescricaoLivre({
            ...prescricaoLivre,
            apresentaco: {
                ...prescricaoLivre.apresentaco,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleChangeMedicamento = event => {
        setPrescricaoLivre({
            ...prescricaoLivre,
            medicamento: {
                ...prescricaoLivre.medicamento,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleChangeNomesComerciais = event => {
        setPrescricaoLivre({
            ...prescricaoLivre,
            medicamento: {
                ...prescricaoLivre.medicamento,
                nomescomerciais: [{
                    ...prescricaoLivre.medicamento.nomescomerciais[0],
                    [event.target.name]: event.target.value
                }]
            }
        })
    }


    const handleChangePosologia = event => {
        setPrescricaoLivre({
            ...prescricaoLivre,
            posologia: {
                ...prescricaoLivre.posologia,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleChangeContinuo = (event) => {
        setPrescricaoLivre({
            ...prescricaoLivre,
            [event.target.name]: event.target.checked
        })
    }

    const handleChangeControlado = (event) => {
        setPrescricaoLivre({
            ...prescricaoLivre,
            medicamento: {
                ...prescricaoLivre.medicamento,
                [event.target.name]: event.target.checked
            }
        })
    }


    const handleAdicionar = () => {
        handleAdicionarPrescricao(prescricaoLivre)
        setPrescricaoLivre(prescricaolivreinicial)
    }

    return (
        <>
            <Box
                sx={{

                    display: "flex",
                    flexDirection: "column",
                    gap: 0.5,
                    border: 1,
                    p: 1,
                    borderRadius: 1,
                    borderColor: "#42a5f5"
                }}
            >
                <Box
                    sx={{
                        width: 1,
                        display: "flex",
                        flexDirection: "row",
                        gap: 0.5,
                    }}
                >
                    <TextField
                        size="small"
                        label="Uso"
                        name="uso"
                        value={prescricaoLivre.apresentaco.uso}
                        onChange={handleChangeApresentaco}
                    />
                    <FormControlLabel
                        size="small"
                        control={
                            <Checkbox
                                color='primary'
                                name="continuo"
                                checked={prescricaoLivre.continuo}
                                onChange={handleChangeContinuo}
                            />}
                        label='Contínuo'
                    />
                    <FormControlLabel
                        size="small"
                        control={
                            <Checkbox
                                color='primary'
                                name="controlado"
                                checked={prescricaoLivre.medicamento.controlado}
                                onChange={handleChangeControlado}
                            />}
                        label='Controlado'
                    />
                    <Button
                        variant="outlined"
                        onClick={() => handleAdicionar()}
                    >Adicionar</Button>
                </Box>
                <Box
                    sx={{
                        width: 1,
                    }}
                >
                    <TextField
                        fullWidth
                        size="small"
                        label="Nomes comerciais"
                        name="nomefantasia"
                        value={prescricaoLivre.medicamento.nomescomerciais[0].nomefantasia}
                        onChange={handleChangeNomesComerciais}
                    />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 0.5,
                    }}
                >
                    <TextField
                        fullWidth
                        size="small"
                        label="Fármaco"
                        name="farmaco"
                        value={prescricaoLivre.medicamento.farmaco}
                        onChange={handleChangeMedicamento}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 0.5,
                        }}
                    >
                        <TextField
                            fullWidth
                            size="small"
                            label="Apresentação"
                            name="descricao"
                            value={prescricaoLivre.apresentaco.descricao}
                            onChange={(e) => handleChangeApresentaco(e)}
                        />
                        <TextField
                            size="small"
                            label="Quantidade"
                            name="quantidade"
                            value={prescricaoLivre.posologia.quantidade}
                            onChange={handleChangePosologia}
                        />
                        <TextField
                            size="small"
                            label="Forma"
                            name="forma"
                            value={prescricaoLivre.posologia.forma}
                            onChange={handleChangePosologia}
                        />
                    </Box>
                </Box>
                <TextField
                    fullWidth
                    multiline
                    rows={2}
                    label="Posologia"
                    name="posologia"
                    value={prescricaoLivre.posologia.posologia}
                    onChange={handleChangePosologia}
                />
            </Box>
        </>
    )
}

export default PrescricaoLivre