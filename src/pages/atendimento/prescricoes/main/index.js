import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../..';
import { ClienteContext } from '../../../../App';
import TableLmes from '../../../../components/tablelmes';
import TablePrescricoes from '../../../../components/tableprescricoes';
import PrescricaoData from '../components/prescricaodata';

const PrescricaoMain = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { setPrescricaoOnDuty, setLmeOnDuty } = useContext(AtendimentoContext)

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
                        '& > :not(style)': {  // '& .MuiTextField-root': {
                            mb: 1,
                        },
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
                <PrescricaoData />
            </Box>
        </>
    )
}
export default PrescricaoMain