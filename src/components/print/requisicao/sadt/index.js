import { Box } from "@mui/material"
import Page from "../../page"
// import Linha1Sadt from "./component/linha1"
// import Linha2Sadt from "./component/linha2"
// import Linha3Sadt from "./component/linha3"
// import Linha4Sadt from "./component/linha4"
// import Linha5Sadt from "./component/linha5"
// import Linha6Sadt from "./component/linha6"
// import Linha7Sadt from "./component/linha7"

const Sadt = ({ requisicao }) => {

    return (
        <>
            <Page size="a4land">
                <Box
                    sx={{
                        display: 'flex',
                        borderBlockColor: "black",
                        borderStyle: "solid",
                        borderWidth: "5px",
                        p: 1,
                        height: "50%",
                        width: "50%",
                        bgcolor: 'red'
                    }}
                >

                    gdfsgsdfgsfdg
                </Box>
                {/* <Linha1Sadt requisicao={requisicao} />
                    <Linha2Sadt requisicao={requisicao} />
                    <Linha3Sadt />
                    <Linha4Sadt />
                    <Box>
                        <Linha5Sadt />
                    </Box>
                    <Linha6Sadt />
                    <Linha7Sadt /> */}
            </Page >
        </>

    )
}

export default Sadt