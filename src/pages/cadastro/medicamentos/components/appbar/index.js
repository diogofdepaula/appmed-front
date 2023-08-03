import { Box, Divider, IconButton, Tooltip } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import HealingIcon from '@mui/icons-material/Healing';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import SaveIcon from '@mui/icons-material/Save';
import React, { useContext } from 'react';
import { MedicamentosContext } from '../..';
import InitialMedicamento from '../initialmedicamento';
import DataContext from '../../../../../providers/data'

const MedicamentosAppBar = () => {

    const { updatePage, medicamentoOnDuty, setMedicamentoOnDuty, medicamentoEdit, setMedicamentoEdit, page, setPage } = useContext(MedicamentosContext)
    const { setDataMedUpdate } = useContext(DataContext)

    const handleBack = () => {
        setMedicamentoEdit(null)
        setMedicamentoOnDuty(null)
        setPage('medicamentomain')
        updatePage()

    }

    const handleInsert = () => {
        const newmedicamento = InitialMedicamento()
        setMedicamentoOnDuty(null)
        setMedicamentoEdit(newmedicamento)
        setPage('medicamentoinsert')
        setDataMedUpdate(false)
    }

    const handleUpdate = () => {
        // o medicamentoEdit já está completo dedivo o medicamentoData
        // setMedicamentoEdit(medicamentoOnDuty)
        setMedicamentoOnDuty(null)
        setPage('medicamentoupdate')
        setDataMedUpdate(false)
    }

    const handleSubmit = event => {

        // submit do insert e update , da prescricoes e lme juntos

        let medpost = [process.env.REACT_APP_API_URL + `/medicamentos`, 'post', medicamentoEdit]
        let medput = [process.env.REACT_APP_API_URL + `/medicamentos/${medicamentoEdit.id}`, 'put', medicamentoEdit]

        let submitvar

        switch (page) {
            case 'medicamentoinsert':
                submitvar = medpost
                break;
            case 'medicamentoupdate':
                submitvar = medput
                break;
            default:
                break;
        }

        event.preventDefault();
        fetch(submitvar[0], {
            method: submitvar[1],
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(submitvar[2])
        }).then(data => {
            if (data.ok) {
                setPage('medicamentosmain')
                setMedicamentoEdit(null)
                setMedicamentoOnDuty(null)
                updatePage()
            }
        })
    }

    const handleDelete = () => {

        fetch(process.env.REACT_APP_API_URL + `/medicamentos/${medicamentoOnDuty.id}`, {
            method: 'delete'
        }).then(data => {
            if (data.ok) {
                handleBack()
            }
        })
    }

    return (
        <div>
            <Box>
                <Tooltip title="Voltar">
                    <span>
                        <IconButton
                            // disabled={!medicamentoOnDuty}
                            onClick={handleBack}
                            size="large">
                            <ArrowUpwardIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Novo medicamento">
                    <IconButton onClick={handleInsert} size="large">
                        <LocalPharmacyIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Editar">
                    <span>
                        <IconButton disabled={!medicamentoOnDuty} onClick={handleUpdate} size="large">
                            <EditIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Salvar">
                    <span>
                        <IconButton
                            disabled={page === 'medicamentoinsert' ? (medicamentoEdit.farmaco !== "" ? false : true) : false}
                            onClick={handleSubmit}
                            size="large">
                            <SaveIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Excluir">
                    <span>
                        <IconButton disabled={!medicamentoOnDuty} onClick={handleDelete} size="large">
                            <DeleteIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Parar">
                    <span>
                        <//  disabled={!prescricaoOnDuty}
                        //onClick={handleParar}
                        IconButton size="large">
                            <HighlightOffIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Outros">
                    <span>
                        <// disabled={!prescricaoOnDuty}
                        //                        onClick={() => setPage('teste')}
                        IconButton size="large">
                            <HealingIcon />
                        </IconButton>
                    </span>
                </Tooltip>
            </Box>
            <Divider />
        </div>
    );
}

export default MedicamentosAppBar