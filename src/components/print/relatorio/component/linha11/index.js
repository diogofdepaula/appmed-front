import { format } from 'date-fns';
import { ptBR } from "date-fns/locale";
import React, { useContext } from 'react';
import { PrintContext } from '../../../../../App';
import Fence from '../../../fence';
import Field from '../../../field';
import { Box } from '@mui/material';

const Linha11Relatorio = () => {

    const { database } = useContext(PrintContext)
    const date = format(database, "dd '/' MM '/' yyyy", { locale: ptBR })

    return (
        <>
            <Fence titulo={'Dados do solicitante'}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: 1,
                        gap: 1,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: 1,
                        }}
                    >
                        <Box>
                            <Field
                                dados={{
                                    titulo: 'Médico solicitante',
                                    texto: 'Dr. Diogo F. de Paula',
                                    // largura: '20rem',
                                    grow: '1',
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: 1,
                                gap: 1,
                            }}
                        >
                            <Field
                                dados={{
                                    titulo: 'CRM',
                                    texto: '23.838',
                                    grow: '1',
                                    alinhamento: 'center',
                                }}
                            />
                            <Field
                                dados={{
                                    titulo: 'UF',
                                    texto: 'PR',
                                    largura: '3.5rem',
                                    alinhamento: 'center',
                                    grow: '1',
                                }}
                            />
                            <Field
                                dados={{
                                    titulo: 'Data',
                                    texto: date ? date : '',
                                    grow: '1',
                                    alinhamento: 'center',
                                }}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Field
                            dados={{
                                titulo: 'Assinatura e carimbo',
                                texto: '',
                                largura: '20rem',
                                altura: 1,
                                alinhamento: 'center',
                                grow: '1',
                            }}
                        />
                    </Box>
                </Box>
            </Fence>
        </>
    )
}

export default Linha11Relatorio