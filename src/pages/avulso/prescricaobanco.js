import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { Box, IconButton, TextField } from "@mui/material";
import React, { useCallback, useEffect, useState } from 'react';
import ListApresentacoes from '../../components/listapresentacao';
import ListMedicamentos from '../../components/listmedicamento';
import ListPosologia from '../../components/listposologia';
import { prescricaolivreinicial } from '.';

// const prescricaolivreinicial = {
//     continuo: false,
//     imprimirorientacoes: false,
//     usoposologiapadrao: true,
//     orientacoes: "",
//     apresentaco: {
//         descricao: "",
//         uso: "",
//     },
//     medicamento: {
//         farmaco: "",
//         nomescomerciais: [
//             {
//                 nomefantasia: "",
//             },
//         ]
//     },
//     posologia: {
//         posologia: "",
//         quantidade: "",
//         forma: "",
//     }
// }

const Medicamento = ({ medicamentosfiltrados, setStep, setMedicamento, prescricao, setPrescricao }) => {

    const fetchData = useCallback(async (id) => {
        await fetch(process.env.REACT_APP_API_URL + '/medicamentos/' + id)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            }).then(data => {
                setMedicamento(data)
                setPrescricao({
                    ...prescricao,
                    orientacoes: data.orientacoes,
                    medicamento: {
                        farmaco: data.farmaco,
                        nomescomerciais: data.nomescomerciais
                    },
                })
            }).then(() => {
                setStep(2)
            })
    }, [setMedicamento, setStep, prescricao, setPrescricao])


    const handleTableRow = param => async () => {
        fetchData(param.id)
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

const Posologia = ({ setStep, medicamento, prescricao, setPrescricaoLivre }) => {

    const handleTableRow = (param) => {
        setPrescricaoLivre({
            ...prescricao,
            posologia: {
                posologia: param.posologia,
                quantidade: param.quantidade,
                forma: param.forma,
            }
        })
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



const PrescricaoBanco = ({ handleAdicionarPrescricao,  setPrescricaoLivre }) => {

    const [prescricao, setPrescricao] = useState(prescricaolivreinicial)
    const [medicamentos, setMedicamentos] = useState([])
    const [medicamentosfiltrados, setmedicamentosfiltrados] = useState([])
    const [medicamento, setMedicamento] = useState()
    const [step, setStep] = useState(1)

    const fetchData = useCallback(async () => {
        const res = await fetch(process.env.REACT_APP_API_URL + '/medicamentos/short')
        const json = await res.json()
        setMedicamentos(json)
        setStep(1)
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    const filterMedicamento = event => {

        if (event.target.value.length >= 2) {
            let filtro = [...medicamentos].filter(w =>
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
        } else {
            setmedicamentosfiltrados([])
        }
    }

    // const handleTableRow = param => () => {
    //    //     handleAdicionarPrescricao({ ...prescricaoEdit, medicamentoId: param.id })
    //         setStep(121)
    // }

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
                    InputProps={{
                        startAdornment: (
                            <IconButton
                            //       onClick={() => enviarProcedimento()}
                            >
                                <PlaylistAddIcon />
                            </IconButton>
                        ),
                    }}
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