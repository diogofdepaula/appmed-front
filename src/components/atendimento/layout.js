import { Box } from "@mui/system"

export const AtendimentoOutside = (props) => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    flexGrow: 1,
                }}
            >
                {props.children}
            </Box>
        </>
    )
}

//   ||||||||||||||||||||||||||||||||||||||||||
//   ||                                      ||
//   ||     Left         |        Right      ||

    // <AtendimentoOutside>
    //     <AtendimentoLeft>

    //     </AtendimentoLeft>
    //     <Divider orientation='vertical' flexItem />
    //     <AtendimentoRight>

    //     </AtendimentoRight>
    // </AtendimentoOutside>

export const AtendimentoLeft = (props) => {
    return (
        <>
            <Box
                sx={{
                    mr: 1,
                    flexGrow: 1,
                }}
            >
                {props.children}
            </Box>
        </>
    )
}

export const AtendimentoRight = (props) => {
    return (
        <>
            <Box
                sx={{
                    ml: 1,
                    width: '45rem',
                    minWidth: '45rem',
                    // maxWidth: '25rem',
                }}
            >
                {props.children}
            </Box>
        </>
    )
}

