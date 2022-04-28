import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoContext } from '..';
import { ClienteContext } from '../../../App';
import LmeData from '../../../components/atendimento/lmedata';
import PrescricaoData from '../../../components/atendimento/prescricaodata';
import TableLmes from '../../../components/tablelmes';
import TablePrescricoes from '../../../components/tableprescricoes';

const AtendimentoMain = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { setPrescricaoOnDuty, setLmeOnDuty, prescricaoOnDuty, lmeOnDuty } = useContext(AtendimentoContext)

    return (
        <>
            <Box
                sx={{
                    m: 1,
                    display: 'flex',
                    flexGrow: 1,
                }}
            >
                <Box
                    sx={{
                        mr: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        minWidth: '20rem',
                        gap: 1,
                    }}
                >
                    <TableLmes
                        lmes={clienteContext.lmes}
                        setLmeOnDuty={setLmeOnDuty}
                    />
                    <TablePrescricoes
                        prescricoes={clienteContext.prescricoes}
                        setPrescricaoOnDuty={setPrescricaoOnDuty}
                        uso={true}
                    />
                    {clienteContext.prescricoes?.filter(x => !x.emuso).length > 0 &&
                        <Box mt={3}>
                            <TablePrescricoes
                                prescricoes={clienteContext.prescricoes}
                                setPrescricaoOnDuty={setPrescricaoOnDuty}
                                uso={false}
                            />
                        </Box>
                    }
                </Box>
                <PrescricaoData prescricao={prescricaoOnDuty} />
                <LmeData lme={lmeOnDuty} />
            </Box>
        </>
    )
}
export default AtendimentoMain