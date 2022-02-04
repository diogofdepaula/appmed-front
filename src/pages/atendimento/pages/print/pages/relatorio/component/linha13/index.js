import { Box, Typography } from '@mui/material';
import React from 'react';

const Linha13Relatorio = () => {

    return (
        <>
            <Typography component={'span'} variant={'body2'} align={'left'} >
                <Box mt={1} fontSize={7} display="block">
                    <Box width={1}>
                        Referência: arquivo disponibilizado no http://www.cmde.parana.pr.gov.br/ . Modificado somente o layout do documento, sendo preservado todas as informações pertinentes ao caso, mas somente da medicação solicitada. versão 10/2020. Para maiores esclarecimentos: diogofdepaula@gmail.com
                    </Box>
                    <Box width={1}>
                    Referência original: PORTARIA nº 14 de 31/08/2020 - PCDT Artrite Reumatoide, PORTARIA Nº 25 de 22/10/2018 - PCDT Espondilite Ancilosante e PORTARIA Nº 09 de 21/05/2021 - PCDT Artrite Psoriásica, entre outras PORTARIAS.
                    </Box>
                </Box>
            </Typography>
        </>
    )
}


export default Linha13Relatorio