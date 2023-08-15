import { Box } from '@mui/material'
import React from 'react'

const Field = ({ dados, children }) => {

    // {
    //     titulo: "xxxx",
    //     texto: "yyy", 
    //     largura: "12rem", 
    //      altura: "100%"
    //     alinhamento: undefined,
    //      negrito: undefined,
    //     grow: "1",
    // },

    return (
        <>
            <Box
                sx={{
                    flexGrow: dados.grow,
                    width: dados.largura,
                    height: dados.altura,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box
                    sx={{
                        margin: "0 0 -1rem 0",
                    }}
                >
                    <Box
                        component="span"
                        sx={{
                            position: "relative",
                            top: "-0.3rem",
                            margin: "0 0 0 1rem",
                            padding: "0 0.3rem 0 0.3rem",
                            backgroundColor: 'white',
                            fontSize: 12,
                        }}
                    >
                        {dados.titulo}
                    </Box>
                </Box>
                <Box
                    sx={{
                        height: "100%",
                        padding: "0.5rem 0.5rem 0.2rem 0.5rem",
                        borderBlockColor: "black",
                        borderStyle: "solid",
                        borderWidth: "thin",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            height: "100%",/// tem que ficar atento se isso não vai interferir nos outros
                            fontWeight: dados.negrito,
                            justifyContent: dados.alinhamento,
                            alignItems: "end",
                        }}
                    >
                        {children}
                        {dados.texto !== undefined ? dados.texto : <div>&nbsp;</div>}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Field