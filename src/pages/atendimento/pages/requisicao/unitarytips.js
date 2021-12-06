import { Box, Chip } from "@material-ui/core"
import Tuss from "./tuss"

const UnitaryTips = ({ handleAddUnitaryTips, procedimentos }) => {

    const sendParam = (param) => {
        let proc = procedimentos.filter(z => param.includes(z[0]))[0]
        handleAddUnitaryTips(proc)
    }

console.log("teste");

    return (
        <>
            <Box 
            display="flex"
            flexWrap="wrap"
            >
                {Tuss().filter(t => t[3] === true).map((e, i) =>
                    <Box m={1} key={i}>
                        <Chip
                            label={e[4]}
                            variant="outlined"
                            onClick={() => sendParam(e)}
                        />
                    </Box>
                )}
            </Box>
        </>
    )
}

export default UnitaryTips