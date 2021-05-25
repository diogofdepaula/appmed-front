import { IconButton, Tooltip } from '@material-ui/core';
import PrintIcon from '@material-ui/icons/Print';
import React, { useState } from 'react';
import PrintDialog from '../printdialog';

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
                    <IconButton
                        onClick={handleOpen}
                    >
                        <PrintIcon />
                    </IconButton>
                </span>

            </Tooltip>
            <PrintDialog open={open} handleClose={handleClose} />
        </div>
    )
}

export default ButtonPrint