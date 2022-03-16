import { Box } from '@mui/material';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AtendimentoContext } from '../..';
import { ClienteContext } from '../../../../App';
import TablePrescricoes from '../../../../components/tableprescricoes';
import PrescricaoData from '../components/prescricaodata';

const PrescricaoMain = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { setPrescricaoOnDuty } = useContext(AtendimentoContext)

    const [prescricoes, setPrescricoes] = useState([])

    const fetchData = useCallback(async () => {
        const res = await fetch(process.env.REACT_APP_API_URL + `/prescricoes/all/${clienteContext.id}`)
        const json = await res.json();
        setPrescricoes(json);
    }, [clienteContext])

    useEffect(() => {
        fetchData();
    }, [fetchData])

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
                    }}
                >
                    <TablePrescricoes
                        prescricoes={prescricoes}
                        setPrescricaoOnDuty={setPrescricaoOnDuty}
                        uso={true}
                    />
                    {prescricoes.filter(x => !x.emuso).length > 0 &&
                        <Box mt={3}>
                            <TablePrescricoes
                                prescricoes={prescricoes}
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