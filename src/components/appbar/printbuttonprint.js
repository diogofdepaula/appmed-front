import { IconButton, Tooltip } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import React, { useState } from 'react';
import PrintDialog from '../../pages/print/component/printdialog';

const ButtonPrint = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Tooltip title="Imprimir">
                <span>
                    <IconButton onClick={handleOpen} size="large">
                        <PrintIcon />
                    </IconButton>
                </span>

            </Tooltip>
            <PrintDialog open={open} handleClose={handleClose} />
        </div>
    );
}

export default ButtonPrint