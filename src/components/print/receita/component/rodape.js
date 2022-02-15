import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { LoginContext } from '../../../../App'

const Rodape = () => {

    const { local } = useContext(LoginContext)

    const Endereco = () => {

        let endereco = ''

        switch (local) {
            case 'cisco':
                endereco = "R. Profa. Leonidia, 1203 - Centro, Guarapuava - PR, 85010-230"
                break;
            case 'cisgap':
                endereco = "R. Pres. Getúlio Vargas, 1523 - Centro, Guarapuava - PR, 85010-280"
                break;
            case 'consultorio':
                endereco = "R. Pres. Getúlio Vargas, 1070 - Centro, Guarapuava - PR, 85010-280"
                break;
            default:
                break;
        }

        return endereco
    }

    return (
        <>
            <Box
                sx={{
                    display:"flex",
                    border: "0.2rem solid",
                    borderTopWidth: 0,
                    justifyContent: "center",
                }}
            >
                <Typography variant={'h6'} >
                    <Box><Endereco /></Box>
                </Typography>
            </Box>
        </>
    )
}

export default Rodape