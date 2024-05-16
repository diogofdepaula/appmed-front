import { Box } from '@mui/material';
import React from 'react';

const Linha12Relatorio = () => {

    return (
        <>
            <Box
                sx={{
                    flexGrown: 1,
                    border: 1,
                    px: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    fontSize: 7,
                }}
            >
                <>
                    Referência: arquivo disponibilizado no http://www.cmde.parana.pr.gov.br/ em 04/2022.
                    Modificado SOMENTE o layout do documento, sendo preservado TODAS as informações 
                    pertinentes. Para maiores esclarecimentos: diogofdepaula@gmail.com .
                </>
                <>
                    . Referência original:
                    PORTARIA CONJUNTA nº 16 de 03/09/2021 - v3 - PCDT de Artrite Reumatoide e da Artrite Idiopática Juvenil (AIJ),
                    PORTARIA CONJUNTA nº 09 de 21/05/2021 - PCDT de Artrite PsorÍaca,
                    PORTARIA CONJUNTA nº 25 de 20/04/2021 - PCDT de Espondilite Ancilosante.
                </>
            </Box>
            {/* Referência: arquivo disponibilizado no http://www.cmde.parana.pr.gov.br/ . Modificado somente o layout do documento, sendo preservado todas as informações pertinentes ao caso, mas somente da medicação solicitada. versão 10/2020. Para maiores esclarecimentos: diogofdepaula@gmail.com
                    </Box>
                    <Box width={1}>
                    Referência original: PORTARIA nº 14 de 31/08/2020 - PCDT Artrite Reumatoide, PORTARIA Nº 25 de 22/10/2018 - PCDT Espondilite Ancilosante e PORTARIA Nº 09 de 21/05/2021 - PCDT Artrite Psoriásica, entre outras PORTARIAS. */}
        </>
    )
}

export default Linha12Relatorio