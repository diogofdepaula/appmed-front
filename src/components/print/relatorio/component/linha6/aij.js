import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { LMEPrintContext } from '../..';
import { AijMedicamentos } from '../../../../../utils/tips/aijsubtipos';
import { BoxCheckBox } from '../../../components';
import Fence from '../../../fence';

const MedicamentosAIJ = () => {

    const lme = useContext(LMEPrintContext)

    const titulos = [
        'Subtipos',
        '1ª opção',
        '2ª opção',
        '3ª opção',
        '4ª opção',
    ]

    console.log(lme);

    return (
        <>
            <Fence titulo="3 - Medicamento solicitado">
                <Box
                    sx={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        fontSize: 12,
                        border: 1,

                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        {titulos.map(t =>
                            <Box
                                key={t}
                                sx={{
                                    width: '100%',
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    border: 1,
                                    fontSize: 14,
                                }}
                            >
                                {t}
                            </Box>
                        )}
                    </Box>
                    {AijMedicamentos().map((m, i) =>
                        <React.Fragment key={i}>
                            <Box
                                sx={{
                                    height: '100%',
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        border: 1,
                                        px: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    {m[0][0]}
                                </Box>
                                {m[1].map((n, x) =>
                                    <React.Fragment key={x + 100}>
                                        <Box
                                            sx={{
                                                width: '100%',
                                                border: 1,
                                                px: 1,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            {n.map((o, z) =>
                                                <React.Fragment
                                                    key={z + 1000}
                                                >
                                                    {o === '' ? <></> :
                                                        <BoxCheckBox
                                                            item={
                                                                lme.relatorio.aijopcao === String(x + 1) &&
                                                                lme.relatorio.aijsubtipo === String(m[0][0]) &&
                                                                lme.prescricoes.find(p => p.medicamento.farmaco === String(o))
                                                            }
                                                        >
                                                            {o}
                                                        </BoxCheckBox>
                                                    }
                                                </React.Fragment>
                                            )}
                                        </Box>
                                    </React.Fragment>
                                )}
                            </Box>
                        </React.Fragment>
                    )
                    }
                    {/* <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                            <Box
                                sx={{
                                    border: 1,
                                }}
                            >
                                Artrite indiferenciada
                            </Box>
                            <Box
                                sx={{
                                    width: '100%',
                                    border: 1,
                                }}
                            >
                                {lme.prescricoes.map(p => p.medicamento.farmaco + " ")}
                            </Box>
                    </Box> */}

                </Box>
            </Fence>
        </>
    )
}

export default MedicamentosAIJ