import { Box } from '@mui/material';
import React from 'react';
import PageA5 from '../../pagea5';
import Identificacao from '../../receita/component/identificacao';

const RequisicaoA5 = ({ requisicao, tipo }) => {

    return (
        <>
            <PageA5>
                <Box
                    sx={{
                        width: 1,
                        height: 1,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Identificacao tipo={tipo} />
                    <Box
                        sx={{
                            mt: 2,
                            typography: 'h6',
                        }}
                    >
                        Solicita-se:
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            m: "2rem 1rem 2rem 1rem",
                            minHeight: '10rem',
                            typography: 'h6',
                            textAlign: 'left',
                        }}
                    >
                        {requisicao.selecionados.map((p, i) =>
                            <Box key={i}>
                                {p.mod}
                            </Box>
                        )}
                    </Box>
                    <Box
                        sx={{
                            mt: 2,
                            typography: 'h6',
                        }}
                    >
                        Justificativa:
                    </Box>
                    <Box
                        sx={{
                            m: "2rem 1rem 2rem 1rem",
                            typography: 'h6',
                            textAlign: 'left',
                        }}
                    >
                        {requisicao.justificativa.split("\n").map((i, key) => {
                            return <div key={key}>{i}</div>;
                        })}
                    </Box>
                </Box>
            </PageA5 >
        </>
    )
}

export default RequisicaoA5