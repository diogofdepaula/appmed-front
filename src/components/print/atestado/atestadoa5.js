import { Box } from '@mui/material';
import React from 'react';
import Page from '../page';
import Data from '../receita/component/data';
import FitText from '../../../pages/print/component/fittext';
import { Titulo } from './textosatestado';

const AtestadoA5 = ({ texto, tipo, pagina }) => {

    return (
        <>
            <Page size="a5">
                <Box
                    sx={{
                        width: 1,
                        height: 1,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box
                        sx={{
                            mb: 1,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'block',
                                paddingTop: 3,
                                paddingBottom: 7,
                            }}
                        >
                            <Titulo />
                        </Box>

                    </Box>
                    <FitText
                        texto={texto}
                        inicial={8}
                        maxfont={22}
                        erro={50}
                        padding={1}
                        align='justify'
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex'
                    }}
                >
                    <Box
                        sx={{ flexGrow: 1 }}
                    >
                        <Data tipo={tipo} />
                    </Box>
                    <Box>
                        {pagina + 1}
                    </Box>
                </Box>
            </Page>
        </>
    )
}

export default AtestadoA5