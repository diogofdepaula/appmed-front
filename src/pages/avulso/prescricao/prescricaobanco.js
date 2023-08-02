import { Box, TextField } from "@mui/material";
import React, { useContext, useState } from 'react';
import ListApresentacoes from '../../../components/listapresentacao';
import ListMedicamentos from '../../../components/listmedicamento';
import ListPosologia from '../../../components/listposologia';
import { prescricaolivreinicial } from ".";
import { DataContext } from "../../../App";

const Medicamento = ({ medicamentosfiltrados, setStep, setMedicamento, prescricao, setPrescricao }) => {

    const handleTableRow = param => () => {
        setMedicamento(param)
        setPrescricao({
            ...prescricao,
            orientacoes: param.orientacoes,
            medicamento: {
                farmaco: param.farmaco,
                controlado: param.controlado,
                nomescomerciais: param.nomescomerciais
            },
        })
        setStep(2)
    }

    return (
        <>
            <ListMedicamentos
                medicamentosfiltrados={medicamentosfiltrados}
                handleTableRow={handleTableRow}
            />
        </>
    )

}

const Apresentacao = ({ setStep, medicamento, prescricao, setPrescricao }) => {

    const handleTableRow = param => () => {
        setPrescricao({
            ...prescricao,
            apresentaco: {
                descricao: param.descricao,
                uso: param.uso,
            }
        })
        setStep(3)
    }

    return (
        <>
            <ListApresentacoes
                medicamentoEdit={medicamento}
                handleTableRow={handleTableRow}
            />
        </>
    )
}

const Posologia = ({ setStep, medicamento, prescricao, setPrescricaoLivre, setmedicamentosfiltrados }) => {

    const handleTableRow = (param) => {
        setPrescricaoLivre({
            ...prescricao,
            posologia: {
                posologia: param.posologia,
                quantidade: param.quantidade,
                forma: param.forma,
            }
        })
        setmedicamentosfiltrados([])
        setStep(0)
    }

    return (
        <>
            <ListPosologia
                medicamentoEdit={medicamento}
                handleClickTable={handleTableRow}
            />
        </>
    )
}

const PrescricaoBanco = ({ setPrescricaoLivre }) => {

    const { allMedicamentos } = useContext(DataContext)
    const [prescricao, setPrescricao] = useState(prescricaolivreinicial)
    const [medicamentosfiltrados, setmedicamentosfiltrados] = useState([])
    const [medicamento, setMedicamento] = useState()
    const [step, setStep] = useState(1)

    const filterMedicamento = event => {

        if (event.target.value.length >= 2) {
            let filtro = [...allMedicamentos].filter(w =>
                w.farmaco.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 ||
                w.abreviatura.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
            )
            if (filtro.length === 0) {
                filtro.push({
                    id: 0,
                    farmaco: "nenhum medicamento encontrado"
                })
            }
            setmedicamentosfiltrados(filtro)
            setStep(1)
        } else {
            setmedicamentosfiltrados([])
        }
    }

    const Conteudo = () => {

        if (step === 0) return <></>
        if (step === 1) return <Medicamento
            medicamentosfiltrados={medicamentosfiltrados}
            setPrescricao={setPrescricao}
            prescricao={prescricao}
            setStep={setStep}
            setMedicamento={setMedicamento}
        />
        if (step === 2) return <Apresentacao
            setStep={setStep}
            medicamento={medicamento}
            setPrescricao={setPrescricao}
            prescricao={prescricao}
        />
        if (step === 3) return <Posologia
            setStep={setStep}
            medicamento={medicamento}
            setPrescricaoLivre={setPrescricaoLivre}
            prescricao={prescricao}
            setmedicamentosfiltrados={setmedicamentosfiltrados}
        />
    }

    return (
        <>
            <Box
                sx={{
                    // tem que deixar na Box parent, pois senão o filho ultrapassa o limite da borda devido o width 100% com position absolute
                    position: 'relative',
                }}

            >
                <TextField
                    fullWidth
                    label="Medicamento cadastrado do bando de dados"
                    variant="outlined"
                    onChange={filterMedicamento}
                />
                {medicamentosfiltrados.length > 0 &&
                    <Box
                        sx={{
                            bgcolor: '#FFFFFF',
                            border: 1,
                            borderRadius: 1,
                            borderColor: "#42a5f5",
                            position: 'absolute',
                            zIndex: 'tooltip',
                            width: '100%',
                        }}
                    >
                        <Conteudo />
                    </Box>
                }
            </Box>
        </>
    )
}

export default PrescricaoBanco