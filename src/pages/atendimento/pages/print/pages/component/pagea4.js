import { Box } from '@mui/material'
import React from 'react'

const PageA4 = ({ children }) => {

    const ajust = {

        // ajustes para o tamanho do papel
        // a4 em 150ppi = 1240 x 1754 px

        width: 1075,// 1190, // (-50)
        height: 1568,  // 1680, // (-74)
        padding: 2,
        somaheight: 950, // 900
    }

    return (
        <>
            {/* <div style={{ width: ajust.width, height: ajust.height, backgroundColor: "greenyellow" }}> */}
            <div style={{ width: ajust.width, height: ajust.height }}>
                <Box height={1} p={ajust.padding}>
                    {children}
                </Box>
            </div>
        </>
    )
}

export default PageA4