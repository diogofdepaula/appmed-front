import { Box } from '@mui/material'
import React from 'react'

const a4 = {

    // ajustes para o tamanho do papel
    // a4 em 150ppi = 1240 x 1754 px

    width: 1075,// 1190, // (-50)
    height: 1567,  // 1680, // (-74)
    style: {
        height: 1,
        p: 2,
    }
}

const a5 = {

    // ajustes para o tamanho do papel
    // 14 x 20 cm em 150ppi = 827 x 1181 px

    width: 714, // 777,
    height: 1058, // 1107,
    style: {
        height: 1,
        width: 1,
        pt: 20,
        pl: 21,
        pb: 9,
        pr: 1,
    }
}

const a4land = {

    // ajustes para o tamanho do papel
    // a4 em 150ppi = 1240 x 1754 px

    width: 1567,// 1190, // (-50)
    height: 1075,  // 1680, // (-74)
    style: {
        height: 1,
        p: 2,
    }
}

const sizes = {
    a4: a4,
    a5: a5,
    a4land: a4land,
    default: ''
}

const Page = ({ size, children }) => {

    const type = sizes[size] || sizes.default

    return (
        <>
            <Box
                sx={{
                    width: type.width,
                    height: type.height
                }}
            >
                <Box
                    sx={
                        type.style
                    }
                >
                    {children}
                </Box>
            </Box>
        </>
    )
}

export default Page