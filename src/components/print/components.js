import { Box } from '@mui/material';

export const BoxTitulo = ({ titulo, size }) => {
    return (
        <>
            <Box
                sx={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    borderBottom: 1,
                    fontSize: size, 
                }}
            >
                {titulo}
            </Box>
        </>
    )
}

export const BoxCheckBox = (props) => {
    return (
        <>
            <Box
                sx={{
                    ml: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                }}
            >
                {props.children}
            </Box>

        </>
    )
}

export const Caixa = (props) => {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: "green",
                    width: "100%",
                    mt: 2,
                    border: 1,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {props.children}
            </Box>
        </>
    )
}