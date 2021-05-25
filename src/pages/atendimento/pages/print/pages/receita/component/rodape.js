import { Box, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ImpressaoContext } from '../../../../..'

const Rodape = () => {

    const { impressao } = useContext(ImpressaoContext)

    const Endereco = () => {

        let endereco = ''

        switch (impressao.local) {
            case 'cisco':
                endereco = "R. Profa. Leonidia, 1203 - Centro, Guarapuava - PR, 85010-230"
                break;
            case 'cisgap':
                endereco = "R. Pres. Getúlio Vargas, 1523 - Centro, Guarapuava - PR, 85010-280"
                break;
            case 'consultorio':
                endereco = "R. Pres. Getúlio Vargas, 1523 - Centro, Guarapuava - PR, 85010-280"
                break;
            default:
                break;
        }

        return endereco
    }

    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                borderTop={0}
                mt={0}
                border={3}
                borderColor={"black"}
            // borderRadius={10}
            >
                <Typography variant={'h6'} >
                    <Box><Endereco /></Box>
                </Typography>
            </Box>
        </>
    )
}

export default Rodape