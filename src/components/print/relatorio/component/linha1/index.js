import { Box, CardMedia } from '@mui/material'
import React, { useContext } from 'react'
import { LMEPrintContext } from '../../../../../pages/print/printjob'
import LogoCEMEPAR from '../../../../../utils/imagens/cemeparlogo.webp'
import LogoSESA from '../../../../../utils/imagens/sesalogo.webp'
import { DoençaCID } from '../../../../../utils/inquiries'

const Linha1Relatorio = () => {

    const lme = useContext(LMEPrintContext)

    const SetName = () => {
        const Name = {
            'ar': 'Artrite reumatoide',
            'ea': 'Espondilite Anquilosante',
            'ap': 'Artrite psoriásica',
            'aij': 'Artrite Idiopática Juvenil',
            default: <div />
        }
        return Name[DoençaCID(lme.cid10)] || Name.default
    }

    return (
        <>
            <Box
                sx={{
                    mt: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                }}
            >
                <Box
                    sx={{
                        height: '72px',  // se mudar aqui tem que mudar o width das outras figuras também.
                        width: "100%",
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <CardMedia
                        component="img"
                        image={LogoCEMEPAR}
                        sx={{
                            width: "107px",
                            height: "100%"
                        }}  // fazer regra de 3 com 72px de height
                    />
                </Box>
                <Box
                    sx={{
                        height: '72px',  // se mudar aqui tem que mudar o width das outras figuras também.
                        width: "100%",
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        sx={{
                            typography: 'subtitle2',
                            fontSize: 18,
                            fontWeight: 'bold',
                        }}
                    >
                        RELATÓRIO MÉDICO ESPECÍFICO PARA
                    </Box>
                    <Box
                        sx={{
                            typography: 'subtitle2',
                            fontSize: 18,
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                        }}
                    >
                        <SetName />
                    </Box>
                </Box>
                <Box
                    sx={{
                        height: '72px',  // se mudar aqui tem que mudar o width das outras figuras também.
                        width: "100%",
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <CardMedia
                        component="img"
                        image={LogoSESA}
                        sx={{
                            width: "141px",
                            height: "100%"
                        }}  // width (em px) = heightdaimagemnatela/heightoriginal x widthoriginal
                    />
                </Box>
            </Box>
        </>
    )
}

export default Linha1Relatorio