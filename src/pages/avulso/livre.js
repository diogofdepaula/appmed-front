import { Box, Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import React, { useState } from 'react';

const prescricaolivreinicial = {
    continuo: false,
    imprimirorientacoes: false,
    usoposologiapadrao: true,
    orientacoes: "",
    apresentaco: {
        descricao: "",
        uso: "",
    },
    medicamento: {
        farmaco: "",
        nomescomerciais: [
            {
                nomefantasia: "",
            },
        ]
    },
    posologia: {
        posologia: "",
        quantidade: "",
        forma: "",
    }
}

const PrescricaoLivre = ({ handleClickAdicionar }) => {

    const [prescricao, setPrescricao] = useState(prescricaolivreinicial)

    const handleChangeApresentaco = event => {
        setPrescricao({
            ...prescricao,
            apresentaco: {
                ...prescricao.apresentaco,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleChangeMedicamento = event => {
        setPrescricao({
            ...prescricao,
            medicamento: {
                ...prescricao.medicamento,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleChangeNomesComerciais = event => {
        setPrescricao({
            ...prescricao,
            medicamento: {
                ...prescricao.medicamento,
                nomescomerciais: [{
                    ...prescricao.medicamento.nomescomerciais[0],
                    [event.target.name]: event.target.value
                }]
            }
        })
    }


    const handleChangePosologia = event => {
        setPrescricao({
            ...prescricao,
            posologia: {
                ...prescricao.posologia,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleChangeContinuo = (event) => {
        setPrescricao({
            ...prescricao,
            [event.target.name]: event.target.checked
        })
    }

    const handleAdicionar = () => {
        handleClickAdicionar(prescricao)
        setPrescricao(prescricaolivreinicial)
    }

    return (
        <>
            <Box
                sx={{
                    width: 1,
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
                        value={prescricao.apresentaco.uso}
                        onChange={handleChangeApresentaco}
                    />
                    <FormControlLabel
                        size="small"
                        control={
                            <Checkbox
                                color='primary'
                                name="continuo"
                                checked={prescricao.uso === true ? true : false}
                                onChange={handleChangeContinuo}
                            />}
                        label='Contínuo'
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
                        value={prescricao.medicamento.nomescomerciais[0].nomefantasia}
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
                        value={prescricao.medicamento.farmaco}
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
                            value={prescricao.apresentaco.descricao}
                            onChange={(e) => handleChangeApresentaco(e)}
                        />
                        <TextField
                            size="small"
                            label="Quantidade"
                            name="quantidade"
                            value={prescricao.posologia.quantidade}
                            onChange={handleChangePosologia}
                        />
                        <TextField
                            size="small"
                            label="Forma"
                            name="forma"
                            value={prescricao.posologia.forma}
                            onChange={handleChangePosologia}
                        />
                    </Box>
                </Box>
                <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Posologia"
                    name="posologia"
                    value={prescricao.posologia.posologia}
                    onChange={handleChangePosologia}
                />
            </Box>
        </>
    )
}

export default PrescricaoLivre