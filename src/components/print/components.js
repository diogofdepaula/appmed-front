import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { Box } from '@mui/material';

export const BoxTitulo = (props) => {
    return (
        <>
            <Box
                sx={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    borderTop: props.top,
                    borderBottom: 1,
                    fontSize: props.size,
                }}
            >
                {props.titulo}
            </Box>
        </>
    )
}

export const BoxCheckBox = (props) => {
    return (
        <>
            <Box
                sx={{
                   // ml: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                }}
            >
                {props.item ? <CheckBoxOutlinedIcon fontSize="small" /> : <CheckBoxOutlineBlankIcon fontSize="small" />}
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
                    mt: 2,
                    border: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    width: props.largura === undefined ? "100%" : props.largura,
                }}
            >
                {props.children}
            </Box>
        </>
    )
}

