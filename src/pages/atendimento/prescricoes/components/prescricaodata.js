import { Box, Typography } from '@mui/material';
import { format, parseISO } from 'date-fns';
import { differenceInMonths } from 'date-fns/esm';
import { ptBR } from 'date-fns/locale';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../..';

const PrescricaoData = () => {

    const { prescricaoOnDuty } = useContext(AtendimentoContext)

    if (!prescricaoOnDuty) return <div />

    const prescricao = prescricaoOnDuty;

    return (
        <>
            <Box>
                <Box mt={1} display="flex" justifyContent="center" alignItems="flex-end">
                    <Typography variant={'h6'}>{prescricao.medicamento.farmaco}</Typography>
                </Box>
                <Box ml={1}>
                    <Typography variant={'body1'}>{prescricao.apresentaco.descricao}</Typography>
                    <Box mt={1}>
                        {prescricao.usoposologiapadrao ?
                            <div>
                                <Typography variant={'body1'} align={'justify'}>{prescricao.posologia.posologia}</Typography>
                            </div>
                            :
                            <div>
                                <Typography variant={'body1'} align={'justify'}>{prescricao.posologianaopadrao}</Typography>
                            </div>}
                    </Box>
                    <Box mt={2}>
                        <Typography variant={'body1'} >
                            {prescricao.continuo ? "Contínuo" : "Não Contínuo"}
                        </Typography>
                        {prescricao.imprimirorientacoes
                            ?
                            <Box>
                                <Typography variant={'body1'}>Imprimirá orientações:</Typography>
                                <Box ml={2}>
                                    <Typography variant={'body1'} align={'justify'}>{prescricao.orientacoes}</Typography>
                                </Box>
                            </Box>
                            :
                            <Typography variant={'body1'}>"Não imprimirá orientações"</Typography>
                        }
                    </Box>
                    <Box mt={1}>
                        {prescricao.lmeId &&
                            <div>
                                <Typography variant={'body1'}>Doses na LME:</Typography>
                                <Box ml={2}>
                                    <Typography variant={'body1'}>1º mês: {prescricao.lmemes1}</Typography>
                                    <Typography variant={'body1'}>2º mês: {prescricao.lmemes2}</Typography>
                                    <Typography variant={'body1'}>3º mês: {prescricao.lmemes3}</Typography>
                                    <Typography variant={'body1'}>4º mês: {prescricao.lmemes4}</Typography>
                                    <Typography variant={'body1'}>5º mês: {prescricao.lmemes5}</Typography>
                                    <Typography variant={'body1'}>6º mês: {prescricao.lmemes6}</Typography>
                                </Box>
                            </div>
                        }
                    </Box>
                    <Box mt={1}>
                        <Typography variant={'body1'}>Início: {format(parseISO(prescricao.inicio), "dd '/' MM '/' yyyy", { locale: ptBR })}</Typography>
                        <Typography variant={'body1'}>Tempo de uso: {differenceInMonths(prescricao.termino ? parseISO(prescricao.termino) : new Date(), parseISO(prescricao.inicio))} meses</Typography>
                        {prescricao.termino &&
                            <Box display="block">
                                <Typography variant={'body1'}>Termino: {format(parseISO(prescricao.termino), "dd '/' MM '/' yyyy", { locale: ptBR })}</Typography>
                                <Typography variant={'body1'}>Motivo do termimo:</Typography>
                                <Box ml={2}>
                                    <Typography variant={'body1'} align={'justify'}>{prescricao.motivotermico}</Typography>
                                </Box>
                            </Box>
                        }
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default PrescricaoData