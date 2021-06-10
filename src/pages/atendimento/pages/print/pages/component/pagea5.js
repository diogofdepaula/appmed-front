import { Box } from '@material-ui/core'
import React from 'react'

const PageA5 = ({ children }) => {

    const ajust = {

        // ajustes para o tamanho do papel
        // 14 x 20 cm em 150ppi = 827 x 1181 px

        width: 714, // 777,
        height: 1058, // 1107,
        pt: 20,
        pl: 21,
        pb: 9,
        pr: 1,
    }

    return (
        <>
            <div style={{ width: ajust.width, height: ajust.height}}>
                <Box height={1} width={1} pt={ajust.pt} pl={ajust.pl} pb={ajust.pb} pr={ajust.pr} >
                    {children}
                </Box>
            </div>
        </>
    )
}

export default PageA5