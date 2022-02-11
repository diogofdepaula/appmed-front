import { Box, Typography } from '@mui/material';
import React from 'react';

const Linha14LME = () => {

    return (
        <>
            <Typography component={'span'} variant={'body2'} align={'left'} >
                <Box mt={1} fontSize={7} display="block">
                    <Box width={1}>
                        Referência: arquivo disponibilizado no http://www.cmde.parana.pr.gov.br/ . Adequa-se a Portaria 13/2020 quw altera o Título IV do Anexo XXVIII da Portaria de Consolidação nº 2/GM/MS, de 28 de setembro de 2017.
                    </Box>
                    <Box width={1}>
                        Modificado somente o layout do documento, sendo preservado todas as informações pertinentes ao caso e medicação solicitada. versão 10/2020. Para maiores esclarecimentos: diogofdepaula@gmail.com
                    </Box>
                </Box>
            </Typography>
        </>
    )
}

export default Linha14LME