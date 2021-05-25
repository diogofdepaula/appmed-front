import { Box } from '@material-ui/core'
import React from 'react'
import MedicamentoForm from '../components/medicamentoform'

const MedicamentoInsert = () => {

    return (
        <div>
            <Box m={2}>
                <MedicamentoForm />
            </Box>
        </div>
    )
}

export default MedicamentoInsert