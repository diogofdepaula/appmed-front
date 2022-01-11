import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import React, { useContext, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { ImpressaoContext } from '../../..';
import PrintJob from '../pages';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const PrintDialog = ({ open, handleClose }) => {

    const { impressao } = useContext(ImpressaoContext)

    const componentRef = useRef();

    const page = () => {

        let page = ''

        if (impressao.lmesSelecionadas.length > 0) {
            page = '@page { size: A4 }'
        } else {
            page = impressao.local === 'consultorio' ? '@page { size: A5 }' : '@page { size: A4 }'
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
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
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