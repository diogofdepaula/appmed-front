import { Box } from '@mui/material'
import React from 'react'

const Field = ({ dados }) => {

    // {
    //     titulo: "xxxx",
    //     texto: "yyy", 
    //     largura: "12rem", 
    //     alinhamento: undefined,
    //      negrito: undefined,
    //     grow: "1",
    // },

    return (
        <>
            <Box
                style={{
                    margin: "0.5rem 0 0 0",
                    flexGrow: dados.grow,
                    width: dados.largura,
                }}
            >
                <Box
                    component="span"
                    style={{
                        position: "relative",
                        margin: "0 0 0 0.5rem",
                        backgroundColor: 'white',
                        flexWrap: 'nowrap',
                        fontSize: 11,
                        padding: "0 0.5rem 0 0.5rem",
                    }}
                >
                    {dados.titulo}
                </Box>
                <Box
                    style={{
                        margin: "-0.7rem 0.5rem 0 0",
                        padding: "0 0.5rem 0 0.5rem",
                        height: "100%",
                        borderBlockColor: "black",
                        borderStyle: "solid",
                        borderWidth: "thin",
                        fontSize: 16,
                        fontWeight: dados.negrito,
                        display: "flex",
                        justifyContent: dados.alinhamento,
                        alignItems: "end",
                    }}>
                    {dados.texto !== undefined ? dados.texto : <div>&nbsp;</div>}
                </Box>
            </Box>
        </>
    )
}

export default Field