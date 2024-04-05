import { Box } from '@mui/material'
import React, { useContext } from 'react'
import { LoginContext } from '../../../../App'

const Rodape = () => {

    const { local } = useContext(LoginContext)

    return (
        <>
            <Box
                sx={{
                    typography: 'h6',
                    display: 'flex',
                    border: "0.2rem solid",
                    borderTop: 0,
                    justifyContent: "center",
                }}
            >
                {local.dados.endereco}
            </Box>
        </>
    )
}

export default Rodape