import { Box } from '@material-ui/core';
import React from 'react';
import PrescricaoEditor from '../editor';

const PrescricaoInsert = () => {

    return (
        <div>
            <Box m={2}>
                <PrescricaoEditor />
            </Box>
        </div>
    )
}

export default PrescricaoInsert