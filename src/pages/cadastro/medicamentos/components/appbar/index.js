import { Box, Divider, IconButton, Tooltip } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import HealingIcon from '@material-ui/icons/Healing';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import SaveIcon from '@material-ui/icons/Save';
import React, { useContext } from 'react';
import { MedicamentosContext } from '../..';
import InitialMedicamento from '../initialmedicamento';

const MedicamentosAppBar = () => {

    const { updatePage, medicamentoOnDuty, setMedicamentoOnDuty, medicamentoEdit, setMedicamentoEdit, page, setPage } = useContext(MedicamentosContext)

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
    }

    const handleUpdate = () => {
        // o medicamentoEdit já está completo dedivo o medicamentoData
        // setMedicamentoEdit(medicamentoOnDuty)
        setMedicamentoOnDuty(null)
        setPage('medicamentoupdate')
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
                        >
                            <ArrowUpwardIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Novo medicamento">
                    <IconButton
                        onClick={handleInsert}
                    >
                        <LocalPharmacyIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Editar">
                    <span>
                        <IconButton
                            disabled={!medicamentoOnDuty}
                            onClick={handleUpdate}
                        >
                            <EditIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Salvar">
                    <span>
                        <IconButton
                            disabled={page === 'medicamentoinsert' ? (medicamentoEdit.farmaco !== "" ? false : true) : false}
                            onClick={handleSubmit}
                        >
                            <SaveIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Excluir">
                    <span>
                        <IconButton
                            disabled={!medicamentoOnDuty}
                            onClick={handleDelete}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Parar">
                    <span>
                        <IconButton
                        //  disabled={!prescricaoOnDuty}
                        //onClick={handleParar}
                        >
                            <HighlightOffIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Outros">
                    <span>
                        <IconButton
                        // disabled={!prescricaoOnDuty}
                        //                        onClick={() => setPage('teste')}
                        >
                            <HealingIcon />
                        </IconButton>
                    </span>
                </Tooltip>
            </Box>
            <Divider />
        </div>
    )
}

export default MedicamentosAppBar