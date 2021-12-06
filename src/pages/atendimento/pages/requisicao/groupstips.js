import { Box, Chip } from "@material-ui/core"
import FormatText from "./formattext"

const GroupsTips = ({ handleAddGroupsTips, procedimentos, convenio }) => {

    const exames = [
        [
            "HOPCT",
            "Exames de controle",
            [
                // lista do TUSS
                "40304361", "40302504", "40302512", "40301630", "40304370", "40308391", "40316521",
                // lista do SIGTAP
                "202020380", "202010643", "202010651", "202010317", "202020150", "202030083", "202060250"
            ],  
        ],
    ]

    const sendParam = (paramA, paramB) => {
        let list = procedimentos.filter(z => paramB.includes(z[0])).map(y => FormatText(convenio[2], y))
        handleAddGroupsTips(paramA, list)
    }

    return (
        <>
            {exames.map((e, i) =>
                <Box ml={1} key={i}>
                    <Chip
                        label={e[0]}
                        variant="outlined"
                        onClick={() => sendParam(e[1], e[2])}
                    />
                </Box>
            )}
        </>
    )
}

export default GroupsTips