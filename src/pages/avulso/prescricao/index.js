import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { PrescricoesList, prescricoeslist } from './prescricoeslist';
import PrescricaoBanco from './prescricaobanco';
import PrescricaoLivre from './prescricaolivre';

export const prescricaolivreinicial = {
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
        controlado: false,
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

const Prescricoes = ({ handleAdicionarPrescricao, handleChangeComentarios }) => {

    const [prescricaoLivre, setPrescricaoLivre] = useState(prescricaolivreinicial)

    const handleDrag = (presc) => {
        setPrescricaoLivre(presc)
    }

    const handleDrop = (event) => {
        // tem que ter, pois ele que permite do Drops Drag
        event.preventDefault();
    }

    const AddPresc = (param) => {
        handleAdicionarPrescricao(param)
        setPrescricaoLivre(prescricaolivreinicial)
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: 1,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        width: '20rem',
                    }}
                >
                    {Object.keys(prescricoeslist).map((p, i) =>
                        <Button
                            id={i}
                            size="small"
                            draggable
                            key={i}
                            onClick={() => AddPresc(PrescricoesList(p))}
                            onDragOver={() => handleDrag(PrescricoesList(p))}
                        >
                            {p}
                        </Button>
                    )}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        width: 1,
                    }}

                >
                    <PrescricaoBanco
                        handleAdicionarPrescricao={handleAdicionarPrescricao}
                        prescricaoLivre={prescricaoLivre}
                        setPrescricaoLivre={setPrescricaoLivre}
                    />
                    <Box
                        onDragEnd={(e) => handleDrag(e)}
                        onDrop={(e) => handleDrop(e)}
                    >
                        <PrescricaoLivre
                            handleAdicionarPrescricao={handleAdicionarPrescricao}
                            prescricaoLivre={prescricaoLivre}
                            setPrescricaoLivre={setPrescricaoLivre}
                        />
                    </Box>
                    <TextField
                        fullWidth
                        multiline
                        rows={2}
                        variant='outlined'
                        label="Comentários"
                        onChange={(e) => handleChangeComentarios(e)}
                    />
                </Box>
            </Box>
        </>
    )
}

export default Prescricoes