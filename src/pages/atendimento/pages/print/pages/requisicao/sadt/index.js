import { Box } from "@material-ui/core"
import PageA4 from "../../component/pagea4"
import Linha1Sadt from "./component/linha1"
import Linha2Sadt from "./component/linha2"
import Linha3Sadt from "./component/linha3"
import Linha4Sadt from "./component/linha4"
import Linha5Sadt from "./component/linha5"
import Linha6Sadt from "./component/linha6"
import Linha7Sadt from "./component/linha7"

const Sadt = ({ requisicao }) => {

    return (
        <>
            <PageA4>
                <Box
                    style={{
                        padding: "0.5rem",
                        width: "100%",
                        height: "100%",
                        borderBlockColor: "black",
                        borderStyle: "solid",
                        borderWidth: "thick",
                        display: "block",
                        flexWrap: "wrap"
                    }}
                >
                    <Linha1Sadt requisicao={requisicao} />
                    <Linha2Sadt requisicao={requisicao} />
                    <Linha3Sadt />
                    <Linha4Sadt />
                    <Box>
                        <Linha5Sadt />
                    </Box>
                    <Linha6Sadt />
                    <Linha7Sadt />
                </Box>
            </PageA4>
        </>
    )
}

export default Sadt