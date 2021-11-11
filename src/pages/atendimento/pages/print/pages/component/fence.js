import { Box } from '@material-ui/core'
import React from 'react'

const Fence = (props) => {

    return (
        <>
            {props.titulo &&
                <Box
                    component="span"
                    style={{
                        position: "relative",
                        top: "0.7rem",
                        margin: "-0.5rem 0 0 1rem",
                        backgroundColor: 'white',
                        flexWrap: 'nowrap',
                        fontSize: 12,
                        padding: "0 0.5rem 0 0.5rem",
                    }}
                >
                    {props.titulo}
                </Box>
            }
            <Box
                style={{
                    backgroundColor: "red",
                    margin: "0 0 0 0",
                    padding: "0 0 1rem 0.5rem",
                    width: "100%",
                    borderBlockColor: "black",
                    borderStyle: "solid",
                    borderWidth: "thin",
                    display: "flex",
                    flexWrap: "wrap"
                }}
            >
                {props.children}
            </Box>
        </>
    )
}

export default Fence