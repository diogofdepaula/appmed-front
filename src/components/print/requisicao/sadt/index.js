import { Box } from "@mui/material"
import Page from "../../page"
import Linha1Sadt from "./component/linha1"
import Linha2Sadt from "./component/linha2"
import Linha3Sadt from "./component/linha3"
import Linha4Sadt from "./component/linha4"
import Linha5Sadt from "./component/linha5"
import Linha6Sadt from "./component/linha6"
import Linha7Sadt from "./component/linha7"
import Linha8Sadt from "./component/linha8"
import Linha9Sadt from "./component/linha9"
import Linha10Sadt from "./component/linha10"
import Linha11Sadt from "./component/linha11"

const Sadt = ({ requisicao }) => {

    return (
        <>
            <Page size="a4land">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        borderBlockColor: "black",
                        borderStyle: "solid",
                        borderWidth: "3px",
                        p: 1,
                        height: 1,
                        width: 1,
                        // se optar por desfazer a rotação,  então lá no 
                        // PrintDialog.js colocar '@page { size: A4 landscape }'
                        transform: "rotate(270deg) translate(-250px, -240px)",
                    }}
                >
                    <Linha1Sadt />
                    <Linha2Sadt />
                    <Linha3Sadt />
                    <Linha4Sadt />
                    <Linha5Sadt requisicao={requisicao} />
                    <Linha6Sadt />
                    <Linha7Sadt />
                    <Linha8Sadt />
                    <Linha9Sadt />
                    <Linha10Sadt />
                    <Linha11Sadt />
                </Box>
            </Page >
        </>

    )
}

export default Sadt