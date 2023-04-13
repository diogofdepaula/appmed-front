import { Box } from '@mui/material';
import React from 'react';
import PageA5 from '../../pagea5';
import Identificacao from '../../receita/component/identificacao';

const VacinacaoA5 = ({ vacinacao, tipo }) => {


    // const Convenio = () => {

    //     let conv = <div />

    //     if (requisicao.convenio[0] !== "") {
    //         conv =
    //             <>
    //                 <Box
    //                     style={{
    //                         margin: "0 0 1rem 1rem",
    //                         fontSize: 14,
    //                         fontWeight: 'bold',
    //                         textAlign: 'left',
    //                         letterSpacing: 1,
    //                     }}
    //                 >
    //                     <Box>
    //                         Convênio:
    //                     </Box>
    //                     <Box
    //                         style={{
    //                             margin: "0 0 0 1rem",
    //                         }}
    //                     >
    //                         {requisicao.convenio[0]} - {requisicao.convenio[1]}
    //                     </Box>
    //                 </Box>
    //             </>
    //     }

    //     return conv
    // }

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
                        Indica-se vacinação para:
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            m: "1.5rem 0.5rem 2rem 1rem",
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
                                        fontSize: 9,
                                        ml: 3,
                                        textAlign: 'justify',
                                    }}
                                >
                                    {p.comentario}
                                </Box>
                                <Box
                                    sx={{
                                        fontSize: 9,
                                        ml: 3,
                                        textAlign: 'justify',
                                    }}
                                >
                                    {p.crie ? "Disponível na saúde pública." : "Não está disponível na saúde publica, somente na particular."}
                                </Box>
                            </Box>
                        )}
                    </Box>
                    <Box
                        sx={{
                            mt: 2,
                            typography: 'h6',
                        }}
                    >
                        Indicação:
                    </Box>
                    <Box
                        sx={{
                            m: "1rem 1rem 1rem 1rem",
                            typography: 'h6',
                            textAlign: 'left',
                        }}
                    >
                        {vacinacao.indicacao}
                    </Box>
                    <Box
                        sx={{
                            m: "1rem 1rem 2rem 1rem",
                            typography: 'h6',
                            fontSize: 10,
                            textAlign: 'justify',
                        }}
                    >
                        Revisar calendário vacinal (carterinha de vacinação) e completar
                        vacinação faltante conforme necessidade.
                        As vacinas vivas atenuadas estão contraindicadas em paciente com
                        alteração da resposta imunológica: BCG, rotavírus, pólio oral (VOP),
                        febre amarela, SCR, varicela, SCR-V e dengue.
                        Caso há a imperativa necessidade de realizar, deve-se programar a
                        suspensão dos medicamentos com antecedência.
                    </Box>
                </Box>
            </PageA5 >
        </>
    )
}

export default VacinacaoA5