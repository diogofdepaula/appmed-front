import { Box } from '@mui/material';
import React from 'react';
import Page from '../../page';
import Identificacao from '../../receita/component/identificacao';

const VacinacaoA5 = ({ vacinacao, tipo }) => {

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
                    <Identificacao tipo={tipo} />
                    <Box
                        sx={{
                            mt: 2,
                            typography: 'h6',
                        }}
                    >
                        Recomenda-se vacinação, caso não tenham sido feitas, para:
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            m: "1.5rem 0.5rem 0.5rem 1rem",
                            minHeight: '10rem',
                            typography: 'h6',
                            fontSize: 20,
                            textAlign: 'left',
                        }}
                    >
                        {vacinacao.selecionadas.map((p, i) =>
                            <Box
                                key={i}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <Box>
                                    {p.original}
                                </Box>
                                <Box
                                    sx={{
                                        fontSize: 10,
                                        ml: 4,
                                        textAlign: 'justify',
                                    }}
                                >
                                    {p.comentario}
                                </Box>
                                <Box
                                    sx={{
                                        fontSize: 9,
                                        ml: 4,
                                        textAlign: 'justify',
                                    }}
                                >
                                    {p.crie ? "Disponível  na saúde pública e privada." : "Não está disponível na saúde publica, somente na particular."}
                                </Box>
                            </Box>
                        )}
                    </Box>
                    <Box
                        sx={{
                            mt: 1,
                            typography: 'h6',
                        }}
                    >
                        Indicação:
                    </Box>
                    <Box
                        sx={{
                            m: "1rem 1rem 0.5rem 1rem",
                            typography: 'h6',
                            textAlign: 'left',
                        }}
                    >
                        {vacinacao.indicacao}
                    </Box>
                    <Box
                        sx={{
                            m: "0rem 1rem 0rem 1rem",
                            typography: 'h6',
                            fontSize: 10,
                            textAlign: 'justify',
                        }}
                    >
                        A vacinação não é essencial para o início ou manutenção do tratamento. 
                        Avaliar antes de realizar a vacinação se o paciente já realizou as vacinas
                        anteriormente, pois a carterira de vacinação não está disponível no momento.
                        Não refazer as que já foram feitas. 
                        As vacinas vivas atenuadas estão contraindicadas em paciente com
                        alteração da resposta imunológica: BCG, rotavírus, pólio oral (VOP),
                        febre amarela, SCR, varicela, SCR-V e dengue.
                        Caso haja imperativa necessidade de realizá-las, deve-se programar a
                        suspensão dos medicamentos com antecedência.
                    </Box>
                </Box>
            </Page >
        </>
    )
}

export default VacinacaoA5