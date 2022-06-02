import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { LMEPrintContext } from '../..';
import { CriteriosLme } from '../../../../../utils/criteriosdoencas';
import Fence from '../../../fence';

const Linha4Relatorio = () => {

    const lme = useContext(LMEPrintContext)

    const Caixa = (props) => {
        return (
            <>
                <Box
                    sx={{
                        backgroundColor: "green",
                        width: "100%",
                        height: "100%",
                        mt: 2,
                        border: 1,
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    {props.children}
                </Box>
            </>
        )
    }

    const ArAcr = () => {
        const list = CriteriosLme(lme)[0]
        return (
            <>
                <Box
                    sx={{
                        typography: 'subtitle2',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        borderBottom: 1,
                    }}
                >
                    Critérios ACR
                </Box>
                <Box
                    sx={{
                        my: 1
                    }}
                >
                    {list.map((w, i) =>
                        <Box
                            key={i}
                            sx={{
                                ml: 2,
                                display: 'flex'
                            }}
                        >
                            {w[2] ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankIcon />}
                            <Box
                                sx={{
                                    typography: 'body1',
                                    textAlign: 'left',
                                    ml: 1,
                                }}
                            >
                                {w[1]}
                            </Box>
                        </Box>
                    )}
                </Box>
            </>
        )
    }

    const ArAcrEular = () => {

        const criterios = CriteriosLme(lme)[1]

        return (
            <>
                <Box
                    sx={{
                        typography: 'subtitle2',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        borderBottom: 1,
                    }}
                >
                    Critérios ACR-EULAR
                </Box>
                <Box
                        // talvez esse bloco seja dispensável

                        sx={{
                        my: 1
                    }}
                >
                    <Box
                        sx={{
                            ml: 2,
                            display: 'flex'
                        }}
                    >
                       Acometimento articular 
                        {/* {criterios[0][0][1] ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankIcon />}   */}
                        <Box
                            sx={{
                                typography: 'body1',
                                textAlign: 'left',
                                ml: 1,
                            }}
                        >
                            {criterios[0][0]}
                        </Box>
                    </Box>
                </Box>
            </>
        )
    }

    const ProvaAtivInflamatoria = () => {
        return (
            <>
                <Box
                    sx={{
                        typography: 'subtitle2',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        borderBottom: 1,
                    }}
                >
                    Provas de Atividade Inflamatória
                </Box>
                <Box
                    sx={{
                        my: 1
                    }}
                >
                    VHS e PCR
                </Box>
            </>
        )
    }


    return (
        <>
            <Fence titulo="2 - Critérios clínicos e laboratoriais">
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        mr: 1,
                        display: 'flex',
                        flexDirection: 'row',
                        alignContent: 'stretch',
                        gap: 1,
                    }}
                >
                    <Caixa>
                        <ArAcr />
                    </Caixa>
                    <Caixa>
                        <ArAcrEular />
                    </Caixa>
                    <Caixa>
                        <ProvaAtivInflamatoria />
                    </Caixa>
                </Box>
            </Fence>
        </>
    )
}

export default Linha4Relatorio