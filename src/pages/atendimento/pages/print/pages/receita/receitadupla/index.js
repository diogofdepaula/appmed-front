import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import PageA4 from '../../component/pagea4';
// import Cabecalho from '../component/cabecalho'
// import Data from '../component/data'
// import Identificacao from '../component/identificacao'
// import Prescricao from '../component/prescricao'
// import Rodape from '../component/rodape'
// import Via from '../component/via'


const useStyles = makeStyles((theme) => ({
    boxroot: {
        width: '100%',
        height: '100%',
        display: "block",
        backgroundColor: 'lightyellow',
    },
    boxright: {
        width: '50%',
        height: '50%',
        backgroundColor: 'lightred'
        //, transform: "rotate(270deg)" }}>
    },
}));



const ReceitaDupla = ({ prescricoes, via, mes, tipo }) => {

    const classes = useStyles();

    return (
        <>
            <PageA4>
                <Box className={classes.boxroot} >
                    <Box className={classes.boxright} >
                        Testendo  111111
                    </Box>
                    {/* <Box width="50%" height={1} style={{ backgroundColor: 'lightblue', transform: "rotate(270deg)" }}>
                        Testando 2222
                    </Box> */}
                </Box>
            </PageA4>
        </>
    )
}

export default ReceitaDupla

//  <div style={{ transform: "rotate(270deg)" }}>
// <Box width={1} height={1} display="block">
//     <Cabecalho tipo={tipo} />
//     <Box
//         height='calc(100% - 118px)' // se mudar o Cabecalho tem que ajustar aqui depois
//         p={5} border={3} borderColor={"black"} >
//         <Box display="block" height={1}>
//             <Box justifyContent="center">
//                 <Box display="block">
//                     <Via via={via} tipo={tipo} />
//                     <Identificacao tipo={tipo} />
//                     {prescricoes?.map((p, i) => <div key={i}><Prescricao prescricao={p} mes={mes} tipo={tipo} /></div>)}
//                 </Box>
//             </Box>
//         </Box>
//         <Data mes={mes} tipo={tipo} />
//     </Box>
//     <Rodape />
// </Box>
// </div> 