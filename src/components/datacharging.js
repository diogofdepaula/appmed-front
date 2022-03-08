import { Box, LinearProgress } from "@mui/material"

const DataCharging = ({ charge }) => {

    if (charge) {
        return (
            <>
                <Box
                    sx={{
                        pt: 1,
                        width: '100%',
                    }}
                >
                    <LinearProgress />
                </Box>
            </>
        )
    } else {
        return <></>
    }
}

export default DataCharging