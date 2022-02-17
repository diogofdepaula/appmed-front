import CloseIcon from '@mui/icons-material/Close';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useContext, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { LoginContext } from '../../../App';
import { PrintContext } from '../../atendimento';
import PrintJob from '../printjob';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const PrintDialog = ({ open, handleClose }) => {

    const { local } = useContext(LoginContext)
    const { lmesSelecionadas } = useContext(PrintContext)

    const componentRef = useRef();

    const page = () => {

        let page = ''

        if (lmesSelecionadas.length > 0) {
            page = '@page { size: A4 }'
        } else {
            page = local === 'consultorio' ? '@page { size: A5 }' : '@page { size: A4 }'
        }
        return page
    }

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        //pageStyle: '@page { size: A5;}',
        pageStyle: page(),
        onAfterPrint: () => handleClose()
    });

    return (
        <div>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar position='relative'>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                            size="large">
                            <CloseIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            style={{
                                marginLeft: 2,
                                flex: 1,
                            }}
                        >
                            Lista de impressão
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handlePrint}>
                            Imprimir
                        </Button>
                    </Toolbar>
                </AppBar>
                <div ref={componentRef}>
                    <PrintJob />
                </div>
            </Dialog>
        </div>
    );
}

export default PrintDialog