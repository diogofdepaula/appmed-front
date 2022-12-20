import { Box } from '@mui/material'
import React from 'react'

const Fence = (props) => {

    const Titulo = () => {

        if (!props.titulo) return <></>

        return (
            <>
                <Box
                    sx={{
                        margin: "0 0 -0.8rem 0",
                    }}
                >
                    <Box
                        component="span"
                        sx={{
                            position: "relative",
                            top: "-0.1rem",
                            margin: "0 0 0 1rem",
                            padding: "0 0.3rem 0 0.3rem",
                            backgroundColor: 'white',
                            fontSize: 12,
                        }}
                    >
                        {props.titulo}
                    </Box>
                </Box>
            </>
        )
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: props.stretch,
                }}
            >
                <Titulo />
                <Box
                    sx={{
                        padding: "0.7rem 0.5rem 0.5rem 0.5rem",
                        borderBlockColor: "black",
                        borderStyle: "solid",
                        borderWidth: "1px",
                        height: props.stretch,
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 1,
                            height: props.stretch,
                        }}
                    >
                        {props.children}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Fence